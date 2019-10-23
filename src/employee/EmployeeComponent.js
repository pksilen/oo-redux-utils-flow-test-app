// @flow

import React from 'react';
import type { Element } from 'react';
import { connect } from 'react-redux';
import OOReduxUtils, { AbstractComponent } from "oo-redux-utils";
import type { DispatchWrapper } from 'oo-redux-utils';
import type { EmployeeState } from './EmployeeState';
import type { AppState } from '../AppState';
import FetchEmployeeAction from './actions/FetchEmployeeAction';

type MappedState = $Exact<{ ...EmployeeState, managerName: string }>;

const mapAppStateToComponentProps = (appState: AppState): MappedState =>
  OOReduxUtils.mergeOwnAndForeignState(appState.employeeState, { managerName: appState.managerState.name });

type OwnProps = {};
type Props = $Exact<{ ...MappedState, ...DispatchWrapper }>;

class EmployeeComponent extends AbstractComponent<Props, {}> {
  componentDidMount() {
    this.dispatchAction(new FetchEmployeeAction());
  }

  render(): Element<any> {
    const { name, age, managerName } = this.props;

    return (
      <div>
        <div>Employee name: {name} </div>
        <div>Employee age: {age} </div>
        <div>Manager name: {managerName} </div>
      </div>
    );
  }
}

export default connect<Props, OwnProps, _, _, _, _>(mapAppStateToComponentProps)(EmployeeComponent);
