import React, { useState } from "react";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import "./Signin.css";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();
  const state = useContext(GlobalContext);
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const logIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="sign-in">
      <Link to="/" className="logo">
        <img src="img/logo1.jpg" alt="logo" className="logo-img" />
      </Link>
      <Form>
        <h2>Sign in</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email </Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => {
              return setEmail(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
        </Form.Group>
        <Button type="submit" className="btn-signin" onClick={logIn}>
          sign in
        </Button>
        <p>
          By Continuing, you agree to Amazon's Fake Clone Conditions of Use and
          Privacy Notice
        </p>
        <Button type="submit" className="btn-createaccount" onClick={register}>
          Create your Amazon account
        </Button>
      </Form>
    </div>
  );
};

export default Signin;
