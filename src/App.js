// @flow

import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import EmployeeView from './employee/EmployeeView';
import ManagerView from './manager/ManagerView';

function App() {
  return (
    <Provider store={store}>
      <div>Employee</div>
      <EmployeeView />
      <br />
      <div>Manager</div>
      <ManagerView />
    </Provider>
  );
}

export default App;
