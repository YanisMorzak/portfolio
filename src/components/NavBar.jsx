import React, { useState } from "react";
import styled from "styled-components";

export default function NavBar() {
  // Définir l'état initial du menu à fermé
  const [menuOpen, setMenuOpen] = useState(false);

  // Fonction pour ouvrir le menu
  const handleOpenMenu = () => {
    setMenuOpen(true);
  };

  // Fonction pour fermer le menu
  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  return (
    <NavBarStyled>
      <img src="/image/logo-Portfolio-1.png" alt="logo" className="logo" />
      {/* Utilisation de l'opérateur ternaire pour afficher la classe "open" si le menu est ouvert */}
      <ul className={`list ${menuOpen ? "open" : ""}`}>
        <li>Home</li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        {/* Ajout de l'icône de fermeture du menu avec un événement onClick pour appeler la fonction de fermeture du menu */}
        <i className="fa-solid fa-xmark" onClick={handleCloseMenu}></i>
      </ul>
      {/* Ajout de l'icône d'ouverture du menu avec un événement onClick pour appeler la fonction d'ouverture du menu */}
      <i className="fa-solid fa-bars" onClick={handleOpenMenu}></i>
    </NavBarStyled>
  );
}

const NavBarStyled = styled.div`
  height: 10vh;
  padding: 10px 5% 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid blue;
  .logo {
    height: 90%;
  }
  .list {
    border: 1px solid orange;
    position: relative;
    list-style: none;
    z-index: 60;
    @media screen and (max-width: 650px) {
      background: #3d4143;
      color: white;
      position: fixed;
      top: 0;
      right: -200px;
      width: 200px;
      height: 100vh;
      padding-top: 50px;
      /* Utilisation de la transition pour l'ouverture et la fermeture du menu */
      transition: right 0.5s;
    }

    /* Ajout de la classe "open" pour ouvrir le menu */
    &.open {
      right: 0;
    }

    li {
      display: inline-block;
      margin: 10px 20px;
      position: relative;

      &::after {
        content: "";
        height: 1px;
        width: 0;
        background: #3d4143;
        position: absolute;
        bottom: -6px;
        left: 0;
        transition: 0.5s;
      }
      &:hover::after {
        width: 100%;
      }
      a {
        color: #3d4143;
        @media screen and (max-width: 650px) {
          color: white;
        }
      }
      @media screen and (max-width: 650px) {
        display: block;
        margin: 25px;
      }
    }
    .fa-xmark {
      @media screen and (max-width: 650px) {
        position: absolute;
        top: 25px;
        left: 25px;
        cursor: pointer;
      }
    }
  }
  .fa-solid {
    display: none;
    @media screen and (max-width: 650px) {
      display: block;
      font-size: 25px;
    }
  }
`;
