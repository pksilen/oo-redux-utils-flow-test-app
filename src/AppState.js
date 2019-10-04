// @flow

import type { EmployeeState } from './employee/EmployeeState';
import type { ManagerState } from './manager/ManagerState';

export type AppState = {
  employeeState: EmployeeState,
  managerState: ManagerState
};
