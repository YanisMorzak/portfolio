import React from "react";
import styled from "styled-components";

export default function Portfolio() {
  return (
    <PortfolioStyled>
      <div id="portfolio">
        <h1 className="title-work">My Work</h1>
        <div className="work-list">
          <div className="work">
            <img src="/image/work-1.png" />
            <div className="layer">
              <h3>Tasty App</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Excepturi et veritatis sapiente facere.
              </p>
              <a href="">
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
          <div className="work">
            <img src="/image/work-2.png" />
            <div className="layer">
              <h3>Clone Amazon App</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Excepturi et veritatis sapiente facere.
              </p>
              <a href="">
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
          <div className="work">
            <img src="/image/work-3.png" />
            <div className="layer">
              <h3>Crypto Market App</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Excepturi et veritatis sapiente facere.
              </p>
              <a href="">
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </PortfolioStyled>
  );
}

const PortfolioStyled = styled.div`
  padding: 50px 10%;
  .title-work {
    margin-bottom: 20px;
  }
  .work-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 40px;
    margin: 50px 0 10px;

    .work {
      position: relative;
      overflow: hidden;
      img {
        width: 100%;
        border-radius: 10px;
        display: block;
      }
    }
  }
`;
