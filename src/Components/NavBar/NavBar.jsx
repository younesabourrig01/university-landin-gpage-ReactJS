import "./NavBar.css";
import logo from "../../assets/logo.png";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import menuIcon from "../../assets/menu-icon.png";

export const NavBar = () => {
  const [sticky, setSticky] = useState(false);
  const [toogleNavBar, setToogleNavBar] = useState(false);

  const handelClick = () => {
    toogleNavBar ? setToogleNavBar(false) : setToogleNavBar(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 300 ? setSticky(true) : setSticky(false);
    });
  }, []);
  return (
    <nav className={`container ${sticky ? "darkNav" : ""}`}>
      <img src={logo} className="logo" alt=""></img>
      <ul className={toogleNavBar ? "" : "hideMenu"}>
        <li>
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="program" smooth={true} offset={-260} duration={500}>
            Program
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-150} duration={500}>
            About us
          </Link>
        </li>
        <li>
          <Link to="campus" smooth={true} offset={-260} duration={500}>
            Campus
          </Link>
        </li>
        <li>
          <Link to="testimonials" smooth={true} offset={-260} duration={500}>
            Testimonials
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            offset={-260}
            duration={500}
            className="btn"
          >
            Contact us
          </Link>
        </li>
      </ul>
      <img src={menuIcon} onClick={() => handelClick()} className="menuIcon" />
    </nav>
  );
};
