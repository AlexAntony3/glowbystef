import styles from "../styles/NavBar.module.css";
import React from "react";
import axios from "axios";
import { Container, Navbar, Nav } from "react-bootstrap";
import gbslogo from "../assets/gbslogo.png";
import { NavLink } from "react-router-dom";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../contexts/CurrentUserContext";
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";

const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const { expanded, setExpanded, ref } = useClickOutsideToggle();

  const handleSignOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null);
    } catch (error) {
      console.log(error);
    }
  };

  const loggedInIcons = (
    <>
      <>
        {/* <NavLink
          className={styles.NavLink}
          activeClassName={styles.Active}
          to={`/profiles/${currentUser?.profile_id}`}
        >
          <Avatar src={currentUser?.profile_image} text={`welcome back ${currentUser?.profile_owner}`} height={35} />
        </NavLink> */}
        <NavLink className={styles.NavLink} to="/" onClick={handleSignOut}>
          SIGN OUT
        </NavLink>
      </>
      {/* <NavDropdown title={<>PROFILE</>} className={styles.DropdownLink}>
        <NavLink
          className={styles.NavLink}
          to={`/profiles/${currentUser?.profile_id}`}
        >
          <Avatar src={currentUser?.profile_image} text="Account" height={40} />
        </NavLink>
        <NavDropdown.Divider />
        <NavLink className={styles.NavLink} to="/" onClick={handleSignOut}>
          Sign out
        </NavLink>
      </NavDropdown> */}
    </>
  );

  const loggedOutIcons = (
    <>
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/signin"
      >
        SIGN IN
      </NavLink>
    </>
  );

  return (
    <Navbar
      expanded={expanded}
      className={styles.NavBar}
      expand="md"
      fixed="top"
    >
      <Container>
        <NavLink to="/">
          <Navbar.Brand>
            <img src={gbslogo} alt="logo" height="100" />
          </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle
          ref={ref}
          onClick={() => setExpanded(!expanded)}
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-left">
            <NavLink
              exact
              className={styles.NavLink}
              activeClassName={styles.Active}
              to="/"
            >
              HOME
            </NavLink>
            <NavLink
              className={styles.NavLink}
              activeClassName={styles.Active}
              to="/services"
            >
              SERVICES
            </NavLink>
            <NavLink
              className={styles.NavLink}
              activeClassName={styles.Active}
              to="/gallery"
            >
              GALLERY
            </NavLink>
            {currentUser ? loggedInIcons : loggedOutIcons}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
