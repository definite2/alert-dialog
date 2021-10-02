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
        errorActions.showError({ title: "Error", message: message })
      );
      return Promise.reject(err);
    }
  );
}
