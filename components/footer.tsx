import React from "react";

function Footer() {
  return (
    <footer className="py-6 bgmuted ">
      <div className="containe-r text-center">
        <p>
          &copy; {new Date().getFullYear()} Darawan Omar. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
