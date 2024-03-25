import React from "react";
import styled from "styled-components";

export default function Services() {
  return (
    <ServicesStyled>
      <div id="services" className="services">
        <h1 className="title-services">My Services</h1>
        <div className="services-list">
          <div>
            <i className="fa-solid fa-code"></i>
            <h2>Web development</h2>

            <p>
              My experience in creating dynamic and responsive user interfaces
              enables me to transform creative concepts into functional and
              aesthetic digital products, delivering an exceptional user
              experience.
            </p>
            <a
              href="https://github.com/YanisMorzak?tab=repositories"
              target="_blank"
            >
              View My GitHub
            </a>
          </div>
          <div>
            <i className="fa-solid fa-crop-simple"></i>
            <h2>UX/UI</h2>

            <p>
              As a developer, I value precision and alignment with mock-ups,
              ensuring faithful implementation of the design. I'm also able to
              create mock-ups that meet customer expectations.
            </p>
            <a
              href="https://github.com/YanisMorzak?tab=repositories"
              target="_blank"
            >
              View My GitHub
            </a>
          </div>
          <div>
            <i className="fa-solid fa-chart-column"></i>
            <h2>Acquisition</h2>

            <p>
              Thanks to my solid understanding of Search Engine Optimization
              (SEO) principles, I'm able to effectively optimize the content and
              structure to improve their visibility in search results.
            </p>
            <a
              href="https://github.com/YanisMorzak?tab=repositories"
              target="_blank"
            >
              View My GitHub
            </a>
          </div>
        </div>
      </div>
    </ServicesStyled>
  );
}

const ServicesStyled = styled.div`
  padding: 0 10%;
  margin-top: 15px;
  color: #ecebe7;

  .title-services {
    font-size: 50px;
    font-family: "Rastefani";
    font-weight: 500;
  }
  .services-list {
    color: #ecebe7;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 350px));
    grid-gap: 40px;
    margin: 50px 0 10px;
    justify-content: center;
    align-items: center;

    @media screen and (min-width: 1600px) {
      grid-gap: 60px;
    }

    div {
      background: #3d4143;
      border: 1px solid #3d4143;
      padding: 30px;
      border-radius: 10px;
      font-weight: 300;
      transition: background 0.5s, transform 0.5s;
      &:hover {
        background: #f5f5f7;
        color: #3d4143;
        border: 1px solid #3d4143;
        transform: translateY(-10px);

        a {
          color: #3d4143;
        }
      }

      i {
        font-size: 30px;
        margin-bottom: 20px;
      }
      h2 {
        margin-bottom: 15px;
        font-weight: 500;
      }
      p {
        margin-bottom: 20px;
      }
      a {
        color: white;
        font-weight: 400;
        &:hover {
          color: #3d4143;
          text-decoration: underline;
        }
      }
    }
  }
`;
