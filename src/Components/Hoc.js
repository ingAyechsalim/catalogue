import React from "react";

//our component
/**
 *
 * this Spinner is used to style the time of waiting to data
 * we can passe message us props
 *
 */
const Hoc = props => {
  return (
    <div
      style={{
        paddingTop: "25%",
        paddingLeft: "40%"
      }}
    >
      <img src="/images/loader.gif" alt="spinner" />
      <h1 style={{ marginRight: "20px" }}>{props.message}</h1>
    </div>
  );
};

export default Hoc;
