import React from "react";
import styled from "styled-components";

export default function Portfolio() {
  return (
    <PortfolioStyled>
      <div id="portfolio">
        <h1 className="title-work">My Work</h1>
        <div className="work-list">
          <div className="work">
            <img src="/image/tasty-burger-work.png" />
            <div className="layer">
              <h3>Tasty App</h3>
              <p>
                A culinary application offering a wide range of functions, with
                an admin mode that lets you add, modify or delete any product.
              </p>
              <a href="">
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
          <div className="work">
            <img src="/image/amz-clo-work.png" />
            <div className="layer">
              <h3>Clone Amazon App</h3>
              <p>Amazon clone reconstructing visitors' path to purchase.</p>
              <a
                href="https://amazon-clone-yanismorzak-yanis-projects-cb43cffb.vercel.app?_vercel_share=i2XE7n1xJfA94Kqd556sTx76icUe39kz"
                target="_blank"
              >
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
          <div className="work">
            <img src="/image/crp-img-work.png" />
            <div className="layer">
              <h3>Crypto Market App</h3>
              <p>
                Responsive application showing an overview of the
                crypto-currency market through various metrics.
              </p>
              <a
                href="https://main--crypto-app-market.netlify.app/"
                target="_blank"
              >
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
    color: #ecebe7;
    font-size: 50px;
    margin-bottom: 20px;
    font-family: "Rastefani";
    font-weight: 500;
  }
  .work-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 40px;
    margin: 50px 0 10px;

    .work {
      position: relative;
      overflow: hidden;
      &:hover .layer {
        height: 100%;
      }

      img {
        width: 100%;
        border-radius: 10px;
        display: block;
      }
      .layer {
        width: 100%;
        height: 0;
        background: linear-gradient(rgba(0, 0, 0, 0.6), #242729);
        color: white;
        border-radius: 10px;
        position: absolute;
        left: 0;
        bottom: 0;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0 30px;
        text-align: center;
        font-size: 15px;
        transition: height 0.5s;

        h3 {
          font-size: 21px;
          font-weight: 500;
          margin: 20px 0;
        }
        p {
          font-size: 16px;
        }
        a {
          margin-top: 20px;
          padding: 10px;
          border-radius: 50%;
          text-decoration: none;
          font-size: 18px;
          color: #3d4143;
          background: white;
          width: 60px;
          height: 60px;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: 0.4s;

          &:hover {
            color: white;
            background: #121213;
          }
        }
      }
    }
  }
`;
