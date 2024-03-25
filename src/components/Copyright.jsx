import React from "react";
import styled from "styled-components";

export default function Copyright() {
  return <CopyrightStyled>Copyright © Yanis. Made in 2024</CopyrightStyled>;
}
const CopyrightStyled = styled.div`
  width: 100%;
  background: #3d4143;
  padding: 15px 0;
  text-align: center;
  font-weight: 300;
  margin-top: 20px;
  @media screen and (max-width: 700px) {
    font-size: 14px;
  }
`;
