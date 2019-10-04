// @flow

export type ManagerState = $Exact<{
  +name: string,
  +numberOfSubordinates: number
}>;

const initialManagerState: ManagerState = {
  name: '',
  numberOfSubordinates: 0
};

export default initialManagerState;
