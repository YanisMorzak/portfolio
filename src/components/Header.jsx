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
        <a href="/image/CV_YANIS_MORZAK.pdf" download className="btn-contact">
          Download CV
        </a>
      </div>
      <div className="right"></div>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.div`
  height: 90vh;
  padding-left: 10%;
  display: grid;
  grid-template-columns: 45% 1fr;
  grid-column-gap: 20px;
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
    .btn-contact {
      display: inline-block;
      font-size: 19px;
      margin-top: 30px;
      width: fit-content;
      background: #3d4143;
      border: 1px solid #3d4143;
      color: white;
      padding: 14px 50px;
      border-radius: 6px;
      text-decoration: none;
      transition: 0.5s;
      &:hover {
        background: #f5f5f7;
        color: #3d4143;
        border: 1px solid #3d4143;
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
