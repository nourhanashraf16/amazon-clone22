import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col lg={3} md={6} sm={12}>
            <ul>
              <li className="heading">Get to Know Us</li>
              <li>
                <Link to=""> Careers </Link>
              </li>
              <li>
                <Link to="">Blog</Link>
              </li>
              <li>
                <Link to="">About Amazon </Link>
              </li>
              <li>
                <Link to=""> Careers </Link>
              </li>
              <li>
                <Link to=""> Investor Relations </Link>
              </li>
              <li>
                <Link to=""> Amazon Devices</Link>
              </li>
              <li>
                <Link to="">Amazon Science</Link>
              </li>
            </ul>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <ul>
              <li className="heading">Make Money with Us</li>
              <li>
                <Link to="">Sell products on Amazon</Link>
              </li>
              <li>
                <Link to="">Sell on Amazon Business</Link>
              </li>
              <li>
                <Link to="">Sell apps on Amazon</Link>
              </li>
              <li>
                <Link to="">Become an Affiliate </Link>
              </li>
              <li>
                <Link to=""> Advertise Your Products </Link>
              </li>
              <li>
                <Link to=""> Self-Publish with Us Host</Link>
              </li>
              <li>
                <Link to=""> an Amazon Hub</Link>
              </li>
              <li>
                <Link to=""> ›See More Make Money with Us</Link>
              </li>
            </ul>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <ul>
              <li className="heading">Amazon Payment Products</li>
              <li>
                <Link to="">Amazon Business Card</Link>
              </li>
              <li>
                <Link to="">Shop with Points</Link>
              </li>
              <li>
                <Link to="">Reload Your Balance</Link>
              </li>
              <li>
                <Link to="">Amazon Currency Converter </Link>
              </li>
            </ul>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <ul>
              <li className="heading">Let Us Help You</li>
              <li>
                <Link to="">Amazon and COVID-19</Link>
              </li>
              <li>
                <Link to="">Your Account</Link>
              </li>
              <li>
                <Link to="">Your Orders</Link>
              </li>
              <li>
                <Link to="">Shipping Rates & Policies </Link>
              </li>
              <li>
                <Link to="">Returns & Replacements</Link>
              </li>
              <li>
                <Link to="">Manage Your Content and Devices</Link>
              </li>
              <li>
                <Link to="">Amazon Assistant</Link>
              </li>
              <li>
                <Link to="">Help</Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
