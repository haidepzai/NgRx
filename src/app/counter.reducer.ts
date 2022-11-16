import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './counter.actions';

//State ist eine number
export const initialState: number = 0;

const _counterReducer: ActionReducer<number, Action> = createReducer(
  initialState,
  //Funktionen, die dem State mitteilen, was zu tun ist
  //on (Action, Funktion)
  on(increment, state => state + 1),
  on(decrement, state => state - 1),
  on(reset, state => 0)
);

//
export function counterReducer(state: number, action: Action): number {
  return _counterReducer(state, action);
}

/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/
