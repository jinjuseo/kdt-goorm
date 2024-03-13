import React, { useEffect, useState } from "react";
import "./nav.scss";
import { useLocation, useNavigate } from "react-router-dom";
const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [show, setShow] = useState(false);
  const [searchValue, setSearchValue] = useState("");

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
  const onChange = (e) => {
    setSearchValue(e.target.value);
    navigate(`/search/?q=${e.target.value}`);
  };
  return (
    <nav className={`nav ${show && "nav__black"} `}>
      <img
        alt="Netflix logo"
        src="https://i.namu.wiki/i/qCayAwTivLfiJO_dv8dsetLNWZ6hQVwruBRzB8TSYGV1yznHi6ueenDexeCKSymSMCrpuRRqeFFItbMpKaLxOw.svg"
        className="nav__logo"
        onClick={() => {
          if (location.pathname === "/") {
            window.location.reload();
          } else {
            navigate("/");
          }
        }}
      />
      <input
        className="nav__input"
        value={searchValue}
        onChange={onChange}
        type="text"
        placeholder="영화를 검색해주세요."
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
