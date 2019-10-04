// @flow

export type EmployeeState = $Exact<{
  +name: string,
  +age: number
}>;

const initialEmployeeState: EmployeeState = {
  name: '',
  age: 0
};

export default initialEmployeeState;
