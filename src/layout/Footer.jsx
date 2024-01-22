import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="m0auto">
          <div>
            UrCinePick
            <br />
          </div>
          <div>CopryRight &copy; ${new Date().getFullYear()}</div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
