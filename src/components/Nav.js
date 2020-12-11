import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        // 100px down
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={'nav ${show && "nav_black"}'}>
      <img
        className="logo"
        src="https://img.cinemablend.com/filter:scale/quill/9/a/9/6/6/b/9a966bc199e31e17df14a7c9bdbc45f557f8fd6a.jpg?mw=600"
        alt="Netflix-Logo"
      />
      <img
        className="avatar"
        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png"
        alt="Netflix-Logo"
      />
      //{" "}
    </div>
  );
}

export default Nav;
