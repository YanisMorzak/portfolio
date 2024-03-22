import React, { useState } from "react";
import styled from "styled-components";

export default function About() {
  const [activeTab, setActiveTab] = useState("skills");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <AboutStyled>
      <div id="about" className="about">
        <div className="row">
          <div className="col-1">
            <img src="/image/logo-Portfolio-1.png" alt="" />
          </div>
          <div className="col-2">
            <h1 className="sub-title">About Me</h1>
            <p>
              Passionné par la création d'expériences web interactives et
              conviviales, je suis spécialisé dans le développement front-end,
              sur React.js, une bibliothèque JavaScript moderne et puissante me
              permettant de construire des interfaces utilisateur dynamiques et
              réactives. <br />
              <br />
              Je suis constamment en train d'apprendre et de m'améliorer,
              explorant de nouvelles technologies et cherchant à rester à jour
              avec les tendances émergentes du développement web. Mon objectif
              est de contribuer de manière significative à des projets innovants
              et stimulants, tout en continuant à élargir mes compétences et à
              relever de nouveaux défis.
            </p>
            <div className="tab-titles">
              <div
                className={`tab-links ${activeTab === "skills" && "active"}`}
                onClick={() => handleTabClick("skills")}
              >
                Skills
              </div>
              <div
                className={`tab-links ${
                  activeTab === "experience" && "active"
                }`}
                onClick={() => handleTabClick("experience")}
              >
                Experience
              </div>
              <div
                className={`tab-links ${activeTab === "education" && "active"}`}
                onClick={() => handleTabClick("education")}
              >
                Education
              </div>
            </div>
            <div className="tab-contents">
              {activeTab === "skills" && (
                <ul>
                  <li>
                    <span>Web development</span>
                    <br />{" "}
                    <em>
                      React JS / Redux / JS / Tailwind / Styled Components /
                      Jest
                    </em>
                  </li>
                  <li>
                    <span>UI/UX</span>
                    <br /> <em>Figma</em>
                  </li>
                  <li>
                    <span>Acquisition</span>
                    <br /> <em>Search Engine Optimization</em>
                  </li>
                </ul>
              )}
              {activeTab === "experience" && (
                <ul>
                  <li>
                    <span> 2023 - Today / App Tasty Burger</span>
                    <br />{" "}
                    <em>
                      Stack technique : React / Styled Components / API Context
                      / Git / Vercel
                    </em>
                  </li>
                  <li>
                    <span>2024 / App Clone Amazon</span>
                    <br />{" "}
                    <em>
                      Stack technique : React / Redux / Styled-Components / Git
                      / Vercel
                    </em>
                  </li>
                  <li>
                    <span>2023 / App Crypto Market</span>
                    <br />{" "}
                    <em>Stack technique : React / Redux / SCSS / Netlify</em>
                  </li>
                  <li>
                    <span>2021 - 2023 / Alternance Webmaster, Orange</span>
                    <br />{" "}
                    <em>
                      Stack technique : CMS Moringa, Javascript, HTML, CSS
                    </em>
                  </li>
                </ul>
              )}
              {activeTab === "education" && (
                <ul>
                  <li>
                    <span>
                      {" "}
                      2023 - Master Degree in IT at Paris School of Business{" "}
                    </span>
                    <br />
                    <em>
                      Matières : Javascript / PHP / Scrum / SEO Search Engine
                      Optimization / Wordpress / Google Analytics +
                      Certification Google Analytics / SQL
                    </em>
                  </li>
                  <li>
                    <span>2018 - Science Baccalaureate</span>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </AboutStyled>
  );
}

const AboutStyled = styled.div`
  .about {
    padding: 30px 10%;
    color: #ecebe7;

    .row {
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      @media screen and (max-width: 750px) {
        display: block;
      }

      .col-1 {
        flex-basis: 35%;
        height: 100%;
        @media screen and (max-width: 750px) {
          visibility: hidden;
          height: 0;
        }

        img {
          width: 100%;
          border-radius: 15px;
        }
      }
      .col-2 {
        flex-basis: 60%;

        @media screen and (max-width: 750px) {
          width: 100%;
        }
        .sub-title {
          font-size: 50px;
          margin-bottom: 15px;
          font-family: "Rastefani";
          font-weight: 500;
        }
        .tab-titles {
          display: flex;
          margin: 20px 0 40px;

          .tab-links {
            margin-right: 50px;
            font-size: 18px;
            font-weight: 500;
            cursor: pointer;
            position: relative;

            &::after {
              content: "";
              height: 2px;
              width: 0;
              background: #9a803a;
              position: absolute;
              bottom: -6px;
              left: 0;
              transition: 0.5s;
            }
            @media screen and (max-width: 750px) {
              margin-right: 20px;
            }
          }
          .tab-links.active::after {
            width: 50%;
          }
        }
        .tab-contents ul li {
          list-style: none;
          margin: 10px 0;
        }
        .tab-contents ul li span {
          font-weight: 500;
          color: #9a803a;
        }
      }
    }
  }
`;
