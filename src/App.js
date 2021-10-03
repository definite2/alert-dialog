import React, { useEffect } from "react";
import Login from "./components/Login";
import { ErrorPortal } from "./components/ErrorPortal";
import { useDispatch } from "react-redux";
import { removeErrors } from "./store/error/actions";
function App() {
  const dispatch = useDispatch();
  //clear errors on page mounted
  useEffect(() => {
    dispatch(removeErrors());
  }, [dispatch]);
  return (
    <>
      <Login />
      <ErrorPortal />
    </>
  );
}

export default App;
