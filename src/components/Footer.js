import React from "react";

const d = new Date();
let year = d.getFullYear();

const Footer = () => {
  return (
    <>
      <div
        className="footerNav"
        style={{
          width: "80vw",
          textAlign: "center",
          marginTop: "10vh",
          color: "white",
        }}
      >
        <ul>
          <li style={{ fontWeight: "600" }}>DM on viber for more Info</li>
          <li className="footerNumber" style={{ fontWeight: "300", letterSpacing: "4px" }}>
            +960 7569695 | +960 7665552
          </li>
          <li style={{ fontWeight: "200", marginTop: '5vh', fontSize: '0.8rem' }}>
            Copyright&#169;{year} Society for Kaashidhoo Youth
          </li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
