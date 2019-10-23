// @flow

import { combineReducers, createStore } from 'redux';
import type { Action, Store } from 'redux';
import type { AppState } from './AppState';
import employeeStateReducer from './employee/employeeStateReducer';
import managerStateReducer from './manager/managerStateReducer';

const appStateReducer: (AppState | void, Action<AbstractAction<any>>) => AppState = combineReducers({
  employeeState: employeeStateReducer,
  managerState: managerStateReducer
});

export default (createStore(appStateReducer): Store<AppState, Action<AbstractAction<any>>>);
