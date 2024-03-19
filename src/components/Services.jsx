import React from "react";
import styled from "styled-components";

export default function Services() {
  return (
    <ServicesStyled>
      <div id="services" className="services">
        <h1>My Services</h1>
        <div className="services-list">
          <div>
            <i className="fa-solid fa-code"></i>
            <h2>Web development</h2>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores saepe soluta sed non, vel nobis magnam architecto.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores saepe soluta sed non, vel nobis magnam architecto.
            </p>
            <a
              href="https://github.com/YanisMorzak?tab=repositories"
              target="_blank"
            >
              Learn More
            </a>
          </div>
          <div>
            <i className="fa-solid fa-crop-simple"></i>
            <h2>Web Design</h2>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores saepe soluta sed non, vel nobis magnam architecto.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores saepe soluta sed non, vel nobis magnam architecto.
            </p>
            <a
              href="https://github.com/YanisMorzak?tab=repositories"
              target="_blank"
            >
              Learn More
            </a>
          </div>
          <div>
            <i className="fa-solid fa-chart-column"></i>
            <h2>Acquisition</h2>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores saepe soluta sed non, vel nobis magnam architecto.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores saepe soluta sed non, vel nobis magnam architecto.
            </p>
            <a
              href="https://github.com/YanisMorzak?tab=repositories"
              target="_blank"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </ServicesStyled>
  );
}

const ServicesStyled = styled.div`
  padding: 0 10%;
  .services-list {
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
      color: white;
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
