import React from "react";
import styled from "styled-components";

export default function Header() {
  return (
    <HeaderStyled>
      <div className="left">
        <p>Développeur Front-End React JS</p>
        <h1 className="title">
          Hi, I'm <span className="name">Yanis</span>
        </h1>
      </div>
      <div className="right"></div>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.div`
  height: 90vh;
  border: 1px solid red;
  padding-left: 10%;
  display: grid;
  grid-template-columns: 45% 1fr;

  .left {
    font-size: 28px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: baseline;
    .title {
      font-size: 60px;
    }
  }

  .right {
    border: 1px solid green;
    width: 100%;
    background-image: url("/image/profil.png");
    background-size: cover;
    background-position: center;
  }
`;
