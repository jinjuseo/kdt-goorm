import React, { useEffect, useState } from "react";
import "./nav.scss";
const Nav = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);
  return (
    <nav className={`nav ${show && "nav__black"} `}>
      <img
        alt="Netflix logo"
        src="https://i.namu.wiki/i/qCayAwTivLfiJO_dv8dsetLNWZ6hQVwruBRzB8TSYGV1yznHi6ueenDexeCKSymSMCrpuRRqeFFItbMpKaLxOw.svg"
        className="nav__logo"
        onClick={() => window.location.reload()}
      />
      <img
        alt="User logged"
        className="nav__avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
      />
    </nav>
  );
};

export default Nav;
