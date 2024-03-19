import React from "react";
import styled from "styled-components";

export default function Contact() {
  return (
    <ContactStyled>
      <div id="contact">
        <div className="row">
          <div className="contact-left">
            <h1 className="title-contact">Contact Me</h1>
          </div>
          <div className="contact-right"></div>
        </div>
      </div>
    </ContactStyled>
  );
}
const ContactStyled = styled.div`
  padding: 0 10%;
  .title-contact {
    font-size: 42px;
    margin-bottom: 20px;
  }
`;
