import React from "react";

//our component

const Hoc = props => {
  return (
    <div style={{ paddingTop: "25%", paddingLeft: "40%" }}>
      loading ...{props.message}
      <img src="./images/loader.gif" alt="spinner" />
    </div>
  );
};

export default Hoc;
