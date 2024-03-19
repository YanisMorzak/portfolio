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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              eligendi ut illum optio neque dolor veritatis consequatur quam
              provident quod doloremque ab magni dignissimos nulla rerum, magnam
              aspernatur sunt harum. Et totam corrupti, porro illum
              reprehenderit aliquam iusto sapiente molestias repellat sint eos?
              Tenetur sit facere eum omnis, blanditiis laborum quasi hic
              quisquam libero dolorem dolorum. Iure sequi quis repellendus?
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
                    <br /> React JS / Redux / JS / Tailwind / Styled Components
                    / Jest
                  </li>
                  <li>
                    <span>UI/UX</span>
                    <br /> Figma
                  </li>
                  <li>
                    <span>Acquisition</span>
                    <br /> Search Engine Optimisation
                  </li>
                </ul>
              )}
              {activeTab === "experience" && (
                <ul>
                  <li>
                    <span> Projet React - App Tasty Burger</span>
                    <br /> Stack technique : React / Styled Components / API
                    Context / Git / Vercel
                  </li>
                  <li>
                    <span>Projet React - App Crypto Market</span>
                    <br /> Stack technique : React / Redux / SCSS
                  </li>
                  <li>
                    <span>Alternance Webmaster, Orange</span>
                    <br /> Stack technique : CMS Moringa, Javascript, HTML, CSS
                  </li>
                </ul>
              )}
              {activeTab === "education" && (
                <ul>
                  <li>
                    <span>
                      {" "}
                      Master Informatique at Paris School of Business{" "}
                    </span>
                    <br />
                    Matières : Javascript / PHP / Scrum / SEO Search Engine
                    Optimization / Wordpress / Stratégie de contenu web / Google
                    Analytics + Certification Google Analytics / SQL
                  </li>
                  <li>
                    <span>Bac S</span>
                    <br /> React JS
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
    height: 80vh;
    padding: 20px;

    .row {
      height: 80%;
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      .col-1 {
        border: 1px solid purple;
        flex-basis: 35%;

        img {
          width: 100%;
          border-radius: 15px;
        }
      }
      .col-2 {
        border: 1px solid pink;
        flex-basis: 60%;
        .sub-title {
          margin-bottom: 15px;
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
              background: #3d4143;
              position: absolute;
              bottom: -6px;
              left: 0;
              transition: 0.5s;
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
        }
      }
    }
  }
`;
