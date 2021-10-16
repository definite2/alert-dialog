/**
 * @param {object} store
 * @param {object} axios function
 * setupAxios: connects newtwork level data with our redux store
 */
import { errorActions } from "../store/error/actions";
export default function setupAxios(axios, store) {
  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (err) => {
      // const status=err.status;
      const message = err.response.data.message || err.statusText;
      store.dispatch(
        errorActions.showError({ title: "Invalid Username!", message: message })
      );
      return Promise.reject(err);
    }
  );
}
