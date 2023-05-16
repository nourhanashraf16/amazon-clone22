import React from "react";
import {
  Navbar,
  Container,
  InputGroup,
  Form,
  NavDropdown,
  Nav,
} from "react-bootstrap";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import LocationOnSharpIcon from "@mui/icons-material/LocationOnSharp";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";
import { auth } from "../firebase";
const Header = () => {
  const state = useContext(GlobalContext);
  console.log(state);
  const basket = state.basket;
  const user = state.user;
  const handleSignOut = () => {
    auth.signOut();
  };

  return (
    <div className="first-nav">
      <Navbar collapseOnSelect expand="lg">
        <Container fluid>
          <Link to="/" className="navbar-brand">
            <img src="img/Amazon-Logo-1024x426-1.png" alt="logo" />
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="">
              <NavLink to="" className="nav-link my-div">
                <LocationOnSharpIcon className="text-white" />
                <div className="parent">
                  <div className="first-line text-muted">Deliver to</div>
                  <div className="second-line">Egypt</div>
                </div>
              </NavLink>
            </Nav>
            <Nav className="ms-auto me-auto center-nav">
              <form>
                <InputGroup className="">
                  <InputGroup.Text className="all">
                    <NavDropdown title="All" id="basic-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">
                        All Departments
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">
                        Automotive
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">
                        Computers
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.4">
                        Girls'Fashion
                      </NavDropdown.Item>
                    </NavDropdown>
                  </InputGroup.Text>
                  <Form.Control
                    aria-label="Amount (to the nearest dollar)"
                    placeholder="Search Amazon"
                  />
                  <InputGroup.Text className="search">
                    <SearchIcon />
                  </InputGroup.Text>
                </InputGroup>
              </form>
            </Nav>
            <Nav className="right-nav">
              <NavLink to="/" className="d-flex align-items-end ">
                <img
                  src="img/egyptian-flag-large-623x415.jpg"
                  alt="flag"
                  className="flag-egypt"
                />
                <select>
                  <option value="English">English</option>
                  <option value="Arabic">Arabic</option>
                </select>
              </NavLink>
              <NavLink to={!user && "/signin"}>
                <div className="parent" onClick={handleSignOut}>
                  <div className="first-line">
                    Hello,{user ? `${user.email}` : "Guest"}
                  </div>
                  <div className="second-line">
                    {user ? "Sign Out" : "Sign In"}
                  </div>
                </div>
              </NavLink>
              <NavLink to="/" className="second-line">
                orders
              </NavLink>
              <NavLink to={user ? "/cart" : "/signin"} className="second-line ">
                <div className="my-cart">
                  <ShoppingCartIcon className="cart" />
                  <span>{basket.length}</span>
                </div>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
