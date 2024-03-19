import React from "react";
import styled from "styled-components";

export default function Copyright() {
  return <CopyrightStyled>Copyright © Yanis. Made in 2024</CopyrightStyled>;
}
const CopyrightStyled = styled.div`
  width: 100%;
  background: #e4e4e4;
  padding: 15px 0;
  text-align: center;
  font-weight: 300;
  margin-top: 20px;
`;