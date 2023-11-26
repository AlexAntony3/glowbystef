import styles from "../styles/NavBar.module.css";
import React from "react";
import axios from "axios";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import gbslogo from "../assets/gbslogo.png";
import { NavLink } from "react-router-dom";
import { useCurrentUser, useSetCurrentUser } from "../contexts/CurrentUserContext";
import Avatar from "./Avatar";

const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const handleSignOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null);
    } catch (error) {
      console.log(error)
    }
  };

  const loggedInIcons = (
    <>
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/liked"
      >
        <i className="fa-solid fa-heart"></i>Liked
      </NavLink>
      <NavDropdown
        title={
          <>
            <i className="fa-solid fa-user"></i>Profile
          </>
        }
        className={styles.DropdownLink}
      >
        <NavLink
          className={styles.NavLink}
          to={`/profiles/${currentUser?.profile_id}`}
        >
          <Avatar src={currentUser?.profile_image} text="Account" height={40} />
        </NavLink>
        <NavDropdown.Divider />
        <NavLink className={styles.NavLink} to="/" onClick={handleSignOut}>
          <i className="fa-solid fa-right-from-bracket"></i>Sign out
        </NavLink>
      </NavDropdown>
    </>
  );
  const loggedOutIcons = (
    <>
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/signin"
      >
        <i className="fa-solid fa-right-to-bracket"></i>Sign in
      </NavLink>
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/signup"
      >
        <i className="fa-solid fa-user-plus"></i>Sign up
      </NavLink>
    </>
  );

  return (
    <Navbar className={styles.NavBar} expand="md" fixed="top">
      <Container>
        <NavLink to="/">
          <Navbar.Brand>
            <img src={gbslogo} alt="logo" height="100" />
          </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-left">
            <NavLink
              exact
              className={styles.NavLink}
              activeClassName={styles.Active}
              to="/"
            >
              <i className="fa-solid fa-house"></i>Home
            </NavLink>
            <NavLink
              className={styles.NavLink}
              activeClassName={styles.Active}
              to="/services"
            >
              <i className="fa-solid fa-store"></i>Services
            </NavLink>
            <NavLink
              className={styles.NavLink}
              activeClassName={styles.Active}
              to="/gallery"
            >
              <i className="fa-solid fa-images"></i>Gallery
            </NavLink>
            {currentUser ? loggedInIcons : loggedOutIcons}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
