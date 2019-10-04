// @flow

import { combineReducers, createStore } from 'redux';
import { OOReduxUtils } from 'oo-redux-utils';
import AbstractManagerAction from './manager/actions/AbstractManagerAction';
import AbstractEmployeeAction from './employee/actions/AbstractEmployeeAction';
import initialEmployeeState from './employee/EmployeeState';
import initialManagerState from './manager/ManagerState';

const appStateReducer = combineReducers({
  employeeState: OOReduxUtils.createStateReducer(initialEmployeeState, AbstractEmployeeAction),
  managerState: OOReduxUtils.createStateReducer(initialManagerState, AbstractManagerAction)
});

export default createStore(appStateReducer);
