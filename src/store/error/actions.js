import { errorSlice } from "./slice";
export const errorActions = errorSlice.actions;
export const returnErrors = (message, title) => (dispatch) => {
  return dispatch(errorActions.showError({ message, title }));
};
export const removeErrors = () => (dispatch) => {
  dispatch(errorActions.clearError());
};
