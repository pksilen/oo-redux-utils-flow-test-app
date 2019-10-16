// @flow

import React from 'react';
import type { Element } from 'react';
import { connect } from 'react-redux';
import { AbstractComponent } from 'oo-redux-utils';
import type { DispatchWrapper } from 'oo-redux-utils';
import type { AppState } from '../AppState';
import FetchManagerAction from './actions/FetchManagerAction';
import type { ManagerState } from './ManagerState';

const mapAppStateToComponentProps = (appState: AppState): ManagerState => appState.managerState;

type OwnProps = {};
type Props = $Exact<{ ...ManagerState, ...DispatchWrapper }>;

class ManagerComponent extends AbstractComponent<Props, {}> {
  componentDidMount() {
    this.dispatch(new FetchManagerAction());
  }

  render(): Element<any> {
    const { name, numberOfSubordinates } = this.props;

    return (
      <div>
        <div>Manager name: {name} </div>
        <div>Number of subordinates: {numberOfSubordinates} </div>
      </div>
    );
  }
}

export default connect<Props, OwnProps, _, _, _, _>(mapAppStateToComponentProps)(ManagerComponent);
