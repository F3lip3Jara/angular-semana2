import { Injectable } from '@angular/core';
import { Action, select } from '@ngrx/store';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { DestinoViaje } from './destino-viaje.model';
import { createAction, props } from '@ngrx/store';
import { createReducer, on } from '@ngrx/store';

import { DestinosApiClient } from './destinos-api-client.model';
import { state } from '@angular/animations';


//Estado

export interface DestinosViajesState {
    items: DestinoViaje[];
    loading: boolean;
    favorito: DestinoViaje | null;
}


export const initializeDestinosViajesState: DestinosViajesState = {
    items: [],
    loading: false,
    favorito: null,
}

//Acciones

export const NUEVO_DESTINO = createAction(
    '[Destinos Viajes] Nuevo',
    props<{ destino: DestinoViaje }>());
export const ELEGIDO_FAVORITO = createAction(
    '[Destinos Viajes] Favorito', 
    props<{ destino: DestinoViaje}>());
export const VOTE_UP = createAction(
    '[Destinos Viajes] Vote Up',
    props<{ destino: DestinoViaje}>());
export const VOTE_DOWN = createAction(
    '[Destinos Viajes] Vote Down',
    props<{ destino: DestinoViaje }>());
export const VOTE_RESET = createAction(
    '[Destinos Viajes] Vote Reset',
    props<{ destino: DestinoViaje}>());


/*
export enum DestinosViajesActionTypes {
    NUEVO_DESTINO = '[Destinos Viajes] Nuevo',
    ELEGIDO_FAVORITO = '[Destinos Viajes] Favorito',
    VOTE_UP =  '[Destinos Viajes] Vote Up',
    VOTE_DOWN = '[Destinos Viajes] Vote Down',
}


export class NuevoDestinoAction implements Action {
    type = DestinosViajesActionTypes.NUEVO_DESTINO;
    constructor(public destino: DestinoViaje) { }
}

export class ElegidoFavoritoAction implements Action {
    type = DestinosViajesActionTypes.ELEGIDO_FAVORITO;
    constructor(public destino: DestinoViaje) { }
}

export class VoteUpAction implements Action {
    type = DestinosViajesActionTypes.VOTE_UP;
    constructor(public destino: DestinoViaje) { }
}

export class VoteDownAction implements Action {
    type = DestinosViajesActionTypes.VOTE_DOWN;
    constructor(public destino: DestinoViaje) { }
}

export type DestinosViajesActions = NuevoDestinoAction | ElegidoFavoritoAction
| VoteUpAction | VoteDownAction;


*/
//Reducers

const reducerDestinosViajes = createReducer(
    initializeDestinosViajesState,
    on(NUEVO_DESTINO, (state , {destino}) => (
        { 
            ...state, 
            items: [...state.items, destino]
            })
            ),
    on(ELEGIDO_FAVORITO, (state, {destino}) => (
        { 
            ...state,
            favorito: destino,
        })     
        ),
    on(VOTE_UP, (state, {destino}) => (
        { ...state,
         })),
    on(VOTE_DOWN, (state) => (
        { ...state })),
    on(VOTE_RESET, (state, { destino}) => (
        { ...state }))
);

export function reducer(state: DestinosViajesState | undefined, action: Action) {
    return reducerDestinosViajes(state, action);
}

/*

export function reducer(
    state: DestinosViajesState,
    action: DestinosViajesActions
): DestinosViajesState {
    switch (action.type) {
     
        case DestinosViajesActionTypes.NUEVO_DESTINO: {
            return {
                ...state,
                items: [...state.items, (action as NuevoDestinoAction).destino]
            };
        }
        
        case DestinosViajesActionTypes.ELEGIDO_FAVORITO: {
            state.items.forEach(x => x.setSelected(false));
            const fav: DestinoViaje = (action as ElegidoFavoritoAction).destino;
            fav.setSelected(true);
            return {
                ...state,
                favorito : [fav],
            };
        }
        case DestinosViajesActionTypes.VOTE_UP: {
            const d: DestinoViaje = (action as VoteUpAction).destino;
            d.voteUp();

            return {
                ...state
            };
        }
        case DestinosViajesActionTypes.VOTE_DOWN: {
            const d: DestinoViaje = (action as VoteDownAction).destino;
            d.voteDown();

            return {
                ...state
            };
        }
    }
    return state;
}
*/


//Effects

@Injectable()

export class DestinosViajesEffects {
    @Effect()
    nuevoAgregado$ = createEffect(() => this.actions$.pipe(
    ofType(NUEVO_DESTINO),
    map((state) =>  ELEGIDO_FAVORITO({...state}))
    )
    );
    
    constructor(private actions$: Actions) { }
}                       