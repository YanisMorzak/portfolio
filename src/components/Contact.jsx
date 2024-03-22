import React, { useState } from "react";
import styled from "styled-components";

export default function Contact() {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbxv8QXhmwTzbvUNWyhBF74hvPYkUWm91KQ0Ib85ENOQSgd5xR6YYuVG76VCJHFpB3GL/exec";

    fetch(scriptURL, { method: "POST", body: new FormData(e.target) })
      .then((response) => {
        console.log("Success!", response);
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
        }, 2000); // Attendre 2 secondes avant de réinitialiser submitted à false
        setFormData({
          Name: "",
          Email: "",
          Message: "",
        });
      })
      .catch((error) => console.error("Error!", error.message));
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
            <form
              className="form"
              name="submit-to-google-sheet"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                name="Name"
                placeholder="Your Name"
                value={formData.Name}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="Email"
                placeholder="Your email"
                value={formData.Email}
                onChange={handleChange}
                required
              />
              <textarea
                name="Message"
                rows="6"
                placeholder="Your Message"
                value={formData.Message}
                onChange={handleChange}
              ></textarea>
              <button type="submit" className="btn-form">
                Submit
              </button>
              {submitted && (
                <div className="submitted-message">Message sent!</div>
              )}
            </form>
          </div>
        </div>
      </div>
    </ContactStyled>
  );
}

const ContactStyled = styled.div`
  padding: 0 10%;
  color: #ecebe7;

  .title-contact {
    font-size: 50px;
    font-family: "Rastefani";
    font-weight: 500;
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
        font-family: "Rastefani";
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
        font-family: "Rastefani";
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
        .submitted-message {
          background: #3d4143;
          padding: 10px;
          border-radius: 10px;
          color: white;
          width: 40%;
          text-align: center;
        }
      }
    }
  }
`;
