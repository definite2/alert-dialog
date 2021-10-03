import React, { useEffect } from "react";
import Login from "./components/Login";
import { ErrorPortal } from "./components/ErrorPortal";
import { useDispatch } from "react-redux";
import { removeError } from "./store/error/actions";
function App() {
  const dispatch = useDispatch();
  //clear errors on page mounted
  useEffect(() => {
    dispatch(removeError());
  }, [dispatch]);
  return (
    <>
      <Login />
      <ErrorPortal />
    </>
  );
}

export default App;
