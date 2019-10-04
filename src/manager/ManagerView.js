// @flow

import React from 'react';
import type { Element } from 'react';
import { connect } from 'react-redux';
import type { DispatchWrapper } from 'oo-redux-utils';
import type { AppState } from '../AppState';
import FetchManagerAction from './actions/FetchManagerAction';
import type { ManagerState } from './ManagerState';

type MappedState = ManagerState;

const mapAppStateToComponentProps = (appState: AppState): MappedState => appState.managerState;

type Props = MappedState & DispatchWrapper;

class ManagerView extends React.Component<Props, {}> {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({ type: new FetchManagerAction() });
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

export default connect(mapAppStateToComponentProps)(ManagerView);
