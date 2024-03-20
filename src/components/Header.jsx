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
  @media screen and (max-width: 550px) {
    grid-template-columns: 1fr;
    padding-top: 20%;
    text-align: center;
  }

  .left {
    font-size: 28px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: baseline;
    @media screen and (max-width: 1000px) {
      font-size: 24px;
    }
    @media screen and (max-width: 850px) {
      font-size: 20px;
    }
    @media screen and (max-width: 730px) {
      font-size: 18px;
    }
    @media screen and (max-width: 630px) {
      font-size: 15px;
    }
    @media screen and (max-width: 550px) {
      font-size: 21px;
    }
    @media screen and (max-width: 350px) {
      font-size: 18px;
    }
    .title {
      font-size: 60px;
      @media screen and (max-width: 1000px) {
        font-size: 46px;
      }
      @media screen and (max-width: 730px) {
        font-size: 42px;
      }
      @media screen and (max-width: 630px) {
        font-size: 38px;
      }
    }
  }

  .right {
    height: 100%;
    background-image: url("/image/profil.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    @media screen and (max-width: 550px) {
      visibility: hidden;
    }
  }
`;
