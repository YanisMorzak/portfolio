import React from "react";
import styled from "styled-components";

export default function Contact() {
  return (
    <ContactStyled>
      <div id="contact">
        <div className="row">
          <div className="contact-left">
            <h1 className="title-contact">Contact Me</h1>
            <p>morzak78@gmail.com</p>
            <p>07.77.76.34.09</p>
            <div className="social-icons">
              <a href="https://github.com/YanisMorzak" target="_blank">
                <i class="fa-brands fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/yanis-morzak/"
                target="_blank"
              >
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </div>
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
