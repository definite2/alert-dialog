//src/components/ErrorPortal.js
import React from "react";
import { Header, Segment, TransitionablePortal } from "semantic-ui-react"; //any UI library or you can create your own popup component
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { removeErrors } from "../store/error/actions";
export const ErrorPortal = () => {
  const dispatch = useDispatch();
  const { openDialog, title, message } = useSelector((state) => state.error);
  const handleClose = () => {
    dispatch(removeErrors());
  };

  return (
    <TransitionablePortal
      open={openDialog}
      transition={{ animation: "browse right", duration: 900 }}
      onClose={handleClose}
      openOnTriggerClick
    >
      <Segment
        color="red"
        style={{
          left: "40%",
          position: "fixed",
          top: "10%",
          zIndex: 1000,
          width: "400px",
          height: "120px",
        }}
      >
        <Header>{title}</Header>
        <p>{message}</p>
      </Segment>
    </TransitionablePortal>
  );
};
ErrorPortal.propTypes = {
  openDialog: PropTypes.bool,
  title: PropTypes.string,
  message: PropTypes.string,
};
