import React from "react";
import styled from "styled-components";

export default function Header() {
  return (
    <HeaderStyled>
      <div className="left">LEFT</div>
      <div className="right">
        <img src="/image/profil.png" alt="" className="img-profile" />
      </div>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.div`
  height: 100vh;
  padding: 10px;
  border: 1px solid red;
  display: grid;
  grid-template-columns: 50% 1fr;

  .right {
    border: 1px solid green;
    display: flex;
    justify-content: right;
    align-items: end;
    .img-profile {
      width: 80%;
    }
  }
`;
