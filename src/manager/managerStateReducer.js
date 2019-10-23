// @flow

import OOReduxUtils from 'oo-redux-utils';
import type { ManagerState } from './ManagerState';
import AbstractManagerAction from './actions/AbstractManagerAction';

const initialManagerState: ManagerState = {
  name: '',
  numberOfSubordinates: 0
};

export default OOReduxUtils.createStateReducer(initialManagerState, AbstractManagerAction);
