import React from "react";
import styled from "styled-components";

export default function Contact() {
  return (
    <ContactStyled>
      <div id="contact">
        <div className="row">
          <div className="contact-left">
            <h1 className="title-contact">Contact Me</h1>
            <p>
              <i className="fa-solid fa-paper-plane"></i> morzak78@gmail.com
            </p>
            <p>
              <i className="fa-solid fa-phone-flip"></i> 07.77.76.34.09
            </p>
            <div className="social-icons">
              <a href="https://github.com/YanisMorzak" target="_blank">
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/yanis-morzak/"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
            <a
              href="/image/CV_YANIS_MORZAK.pdf"
              download
              className="btn-contact"
            >
              Download CV
            </a>
          </div>
          <div className="contact-right">
            <form className="form">
              <input type="text" name="Name" placeholder="Your Name" required />
              <input
                type="text"
                name="Email"
                placeholder="Your email"
                required
              />
              <textarea
                name="Message"
                rows="6"
                placeholder="Your Message"
              ></textarea>
              <button type="submit" className="btn-form">
                Submit
              </button>
            </form>
          </div>
        </div>
        {/* <div className="copyright">Copyright</div> */}
      </div>
    </ContactStyled>
  );
}
const ContactStyled = styled.div`
  padding: 0 10%;
  .title-contact {
    font-size: 42px;
    margin-bottom: 30px;
  }
  .row {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .contact-left {
      flex-basis: 35%;
      @media screen and (max-width: 900px) {
        flex-basis: 100%;
      }

      p {
        margin-top: 20px;
        i {
          color: #3d4143;
          margin-right: 15px;
          font-size: 20px;
        }
      }
      .social-icons {
        margin-top: 30px;
        a {
          text-decoration: none;
          font-size: 25px;
          margin-right: 15px;
          color: #696e70;
          display: inline-block;
          transition: transform 0.5s;
          &:hover {
            transform: translateY(-5px);
            color: #3d4143;
          }
        }
      }
      .btn-contact {
        display: inline-block;
        margin: 50px auto;
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
    .contact-right {
      flex-basis: 60%;
      @media screen and (max-width: 900px) {
        flex-basis: 100%;
      }

      .btn-form {
        display: inline-block;
        cursor: pointer;
        margin: 20px auto;
        width: fit-content;
        background: #3d4143;
        border: 1px solid #3d4143;
        color: white;
        font-size: 15px;
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
      .form {
        width: 100%;

        input,
        textarea {
          width: 100%;
          border: 0;
          outline: none;
          padding: 15px;
          margin: 10px 0;
          border-radius: 6px;
        }
      }
    }
  }
  /* .copyright {
    width: 100%;
    background: #e4e4e4;
    padding: 15px 0;
    text-align: center;
    font-weight: 300;
    margin-top: 20px;
    border-radius: 6px;
  } */
`;
