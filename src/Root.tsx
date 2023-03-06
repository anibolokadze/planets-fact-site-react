import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import burgerMenu from "./assets/icon-hamburger.svg";

export default function Root() {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const toggleBurgerMenu = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  };

  return (
    <div>
      <nav className="burger-menu">
        <Header className="burger-icon" onClick={toggleBurgerMenu}>
          <h1>THE PLANETS</h1>
          {isBurgerMenuOpen ? (
            <img src={burgerMenu} />
          ) : (
            <img src={burgerMenu} />
          )}
        </Header>

        {isBurgerMenuOpen && (
          <>
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
          </>
        )}
      </nav>
      <Outlet />
    </div>
  );
}

const Navbar = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 500px) {
    display: flex;
    flex-direction: row;
  }
`;

const Header = styled.div`
  background-color: red;
  display: flex;
  justify-content: space-between;
`;
