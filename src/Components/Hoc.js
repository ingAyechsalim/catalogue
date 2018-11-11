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
    <div style={{ paddingTop: "25%", paddingLeft: "40%" }}>
      loading ...{props.message}
      <img src="./images/loader.gif" alt="spinner" />
    </div>
  );
};

export default Hoc;
