// @flow

import { combineReducers, createStore } from 'redux';
import type { Action, Store } from 'redux';
import OOReduxUtils, { AbstractAction } from 'oo-redux-utils';
import AbstractManagerAction from './manager/actions/AbstractManagerAction';
import AbstractEmployeeAction from './employee/actions/AbstractEmployeeAction';
import initialEmployeeState from './employee/EmployeeState';
import initialManagerState from './manager/ManagerState';
import type { AppState } from './AppState';

const appStateReducer: (AppState | void, Action<AbstractAction<any>>) => AppState = combineReducers({
  employeeState: OOReduxUtils.createStateReducer(initialEmployeeState, AbstractEmployeeAction),
  managerState: OOReduxUtils.createStateReducer(initialManagerState, AbstractManagerAction)
});

export default (createStore(appStateReducer): Store<AppState, Action<AbstractAction<any>>>);
