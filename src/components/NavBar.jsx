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
  padding: 10px 5% 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid blue;
  .logo {
    height: 90%;
  }
  .list {
    border: 1px solid orange;
    list-style: none;

    li {
      display: inline-block;
      margin: 10px 20px;
      position: relative;

      &::after {
        content: "";
        height: 1px;
        width: 0;
        background: #3d4143;
        position: absolute;
        bottom: -6px;
        left: 0;
        transition: 0.5s;
      }
      &:hover::after {
        width: 100%;
      }
    }
  }
`;
