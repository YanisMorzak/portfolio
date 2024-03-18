import React from "react";
import styled from "styled-components";

export default function NavBar() {
  return (
    <NavBarStyled>
      <img src="/image/logo-Portfolio-1.png" alt="logo" className="logo" />
      <ul className="list">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
    </NavBarStyled>
  );
}

const NavBarStyled = styled.div`
  height: 100px;
  padding: 10px;
  display: flex;
  border: 1px solid blue;
  .logo {
    height: 90%;
  }
  .list {
    flex: 1;
    border: 1px solid orange;
    list-style: none;
    display: flex;
    justify-content: space-around;
  }
`;
