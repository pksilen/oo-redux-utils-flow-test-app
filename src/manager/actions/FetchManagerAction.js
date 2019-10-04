// @flow

import AbstractManagerAction from './AbstractManagerAction';
import type { ManagerState } from '../ManagerState';

export default class FetchManagerAction extends AbstractManagerAction {
  performActionAndReturnNewState(currentState: ManagerState): ManagerState {
    return {
      name: 'Mark Stewart',
      numberOfSubordinates: 15
    };
  }
}
