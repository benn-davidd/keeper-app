import React from "react";

const dynamicYear = new Date().getFullYear();

function Footer() {
  return (
    <footer>
      <p>Copyright &copy; {dynamicYear}</p>
    </footer>
  );
}

export default Footer;
