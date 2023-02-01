import React from "react";

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <footer>
      <p>All Rights Reserved &copy; {date} </p>
    </footer>
  );
};

export default Footer;
