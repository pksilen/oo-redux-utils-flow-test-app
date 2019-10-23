// @flow

import OOReduxUtils from 'oo-redux-utils';
import AbstractEmployeeAction from './actions/AbstractEmployeeAction';
import type { EmployeeState } from './EmployeeState';

const initialEmployeeState: EmployeeState = {
  name: '',
  age: 0
};

export default OOReduxUtils.createStateReducer(initialEmployeeState, AbstractEmployeeAction);
