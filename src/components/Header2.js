import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Navbar, Container, Offcanvas, Nav, Accordion } from "react-bootstrap";
import LanguageIcon from "@mui/icons-material/Language";
import CloseIcon from "@mui/icons-material/Close";
import PersonIcon from "@mui/icons-material/Person";
import "./Header2.css";
import MenuIcon from "@mui/icons-material/Menu";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
const Header2 = () => {
  const { user } = useContext(GlobalContext);
  console.log(user);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="second-nav shadow-lg">
      <Navbar expand="lg">
        <Container fluid>
          <Nav>
            <NavLink to="" className="nav-link d-flex" onClick={handleShow}>
              <MenuIcon />
              All
            </NavLink>
            <Offcanvas show={show} onHide={handleClose}>
              <Offcanvas.Header>
                <Offcanvas.Title>
                  <PersonIcon />
                  <span>Hello,{user ? `${user.email}` : "Sign in"}</span>
                  <CloseIcon onClick={handleClose} className="close-btn" />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <ul>
                  <li className="my-li">
                    <Link to="/" className="parent">
                      Trending
                    </Link>
                  </li>
                  <li>
                    <Link to="/">Best Sellers</Link>
                  </li>
                  <li>
                    <Link to="/">New Releases</Link>
                  </li>
                  <li>
                    <Link to="/">Movers&Shakers</Link>
                  </li>
                  <hr />
                  <li className="my-li">
                    <Link to="/" className="parent">
                      Digital Content And Devices
                    </Link>
                  </li>
                  <li>
                    <Link to="/">Amazon Kindle E-readers</Link>
                  </li>
                  <hr />
                  <li className="my-li">
                    <Link to="/" className="parent">
                      Programs & Features
                    </Link>
                  </li>
                  <li>
                    <Link to="/">Today's Deals</Link>
                  </li>
                  <li>
                    <Link to="/">Amazon Outlet</Link>
                  </li>

                  <hr />
                  <li className="my-li">
                    <Link to="/" className="parent">
                      Help & Settings
                    </Link>
                  </li>
                  <li>
                    <Link to="/">Your Account</Link>
                  </li>
                  <li>
                    <Link to="/">
                      <LanguageIcon />
                      <span>English</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <img
                        src="img/egyptian-flag-large-623x415.jpg"
                        alt="flag"
                        className="flag"
                      />
                      <span>Egypt</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">Help</Link>
                  </li>
                  <li>
                    <Link to="/">Sign in</Link>
                  </li>
                </ul>
              </Offcanvas.Body>
            </Offcanvas>
            <NavLink to="" className="nav-link">
              Today's Deals
            </NavLink>
            <NavLink to="" className="nav-link">
              Mobile Phones
            </NavLink>
            <NavLink to="" className="nav-link">
              Help
            </NavLink>
            <NavLink to="" className="nav-link">
              Electronics
            </NavLink>
            <NavLink to="" className="nav-link">
              Appliances
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header2;
