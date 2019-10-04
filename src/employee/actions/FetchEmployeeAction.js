// @flow

import AbstractEmployeeAction from './AbstractEmployeeAction';
import type { EmployeeState } from '../EmployeeState';

export default class FetchEmployeeAction extends AbstractEmployeeAction {
  performActionAndReturnNewState(currentState: EmployeeState): EmployeeState {
    return {
      name: 'John Doe',
      age: 45
    };
  }
}
