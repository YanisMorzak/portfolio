import React from "react";
import styled from "styled-components";

export default function Services() {
  return (
    <ServicesStyled>
      <div id="services" className="services">
        <h1>My Services</h1>
        <div className="services-list">
          <div>
            <h2>Web development</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores saepe soluta sed non, vel nobis magnam architecto.
              Perferendis laudantium itaque quasi labore deserunt temporibus,
              est, voluptate aperiam ab rerum voluptatem.
            </p>
            <a href="https://github.com/YanisMorzak?tab=repositories">
              Learn More <i class="fa-solid fa-code"></i>
            </a>
          </div>
          <div>
            <h2>Web Design</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores saepe soluta sed non, vel nobis magnam architecto.
              Perferendis laudantium itaque quasi labore deserunt temporibus,
              est, voluptate aperiam ab rerum voluptatem.
            </p>
            <a href="https://github.com/YanisMorzak?tab=repositories">
              Learn More <i class="fa-solid fa-code"></i>
            </a>
          </div>
          <div>
            <h2>Acquisition</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores saepe soluta sed non, vel nobis magnam architecto.
              Perferendis laudantium itaque quasi labore deserunt temporibus,
              est, voluptate aperiam ab rerum voluptatem.
            </p>
            <a href="https://github.com/YanisMorzak?tab=repositories">
              Learn More <i class="fa-solid fa-code"></i>
            </a>
          </div>
        </div>
      </div>
    </ServicesStyled>
  );
}

const ServicesStyled = styled.div`
  padding: 30px;
  .services-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 40px;
    margin-top: 50px;
  }
`;
