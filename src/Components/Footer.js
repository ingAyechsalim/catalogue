import React from "react";

const FooterContainer = {
  position: "fixed",
  left: "0",
  bottom: "0",
  width: "100%",
  color: "white",
  backgroundColor: "rgba(0,0,0,.5)",
  textAlign: "center",
  zIndex: "99",
  fontSize: "15px"
};

/**Description
 * responsive footer with fixed position. We use it to reduce code in all components
 * Footer will be used in the Container component
 * Logo it can be designed using photoshop,powerpoint,or some free website
 *
 */

const Footer = () => {
  return (
    <div style={FooterContainer}>
      <h1>Catalogue-App ©</h1>
    </div>
  );
};
export default Footer;
