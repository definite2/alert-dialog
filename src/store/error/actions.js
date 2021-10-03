//src/store/error/actions.js
import { errorSlice } from "./slice";
export const errorActions = errorSlice.actions;
export const showError = (message, title) => (dispatch) => {
  return dispatch(errorActions.showError({ message, title }));
};
export const removeError = () => (dispatch) => {
  dispatch(errorActions.clearError());
};
