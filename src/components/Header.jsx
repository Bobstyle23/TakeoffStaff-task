import React from "react";
import { Navbar } from "react-bootstrap";

const Header = () => {
  const day = new Date();
  const currentYear = day.getFullYear();
  const currentMonth = day.getMonth() + 1;
  const currentDate = day.getDate();
  return (
    <Navbar
      bg="primary"
      variant="dark"
      style={{
        marginBottom: "1rem",
        marginTop: "-1.25rem",
        padding: "0.5rem",
      }}
    >
      <Navbar.Brand href="#home">Contacts</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          Signed in at:{" "}
          <a
            style={{ textDecoration: "none" }}
            href="#login"
          >{`${currentYear}.${currentMonth}.${currentDate}`}</a>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
