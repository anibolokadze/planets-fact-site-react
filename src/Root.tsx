import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import burgerMenu from "./assets/icon-hamburger.svg";

export default function Root() {
  return (
    <div style={{ background: "blue" }}>
      <nav className="burger-menu">
        {/* <div className="burger-icon" onClick={toggleBurgerMenu}>
          {isBurgerMenuOpen ? (
            <img src={burgerMenu} />
          ) : (
            <img src={burgerMenu} />
          )}
        </div> */}
        {/* {isBurgerMenuOpen && ( */}
        <Navbar>
          <li>
            <Link to="/">Mercury</Link>
          </li>
          <li>
            <Link to="/Venus">Venus</Link>
          </li>
          <li>
            <Link to="/Earth">Earth</Link>
          </li>
          <li>
            <Link to="/Mars">Mars</Link>
          </li>
          <li>
            <Link to="/Jupiter">Jupiter</Link>
          </li>
          <li>
            <Link to="/Saturn">Saturn</Link>
          </li>
          <li>
            <Link to="/Uranus">Uranus</Link>
          </li>
          <li>
            <Link to="/Neptune">Neptune</Link>
          </li>
        </Navbar>
        {/* )} */}
      </nav>
      <Outlet />
    </div>
  );
}

const Navbar = styled.ul`
  display: flex;
  flex-direction: column;
  @media (min-width: 500px) {
    display: flex;
    flex-direction: row;
  }
`;
