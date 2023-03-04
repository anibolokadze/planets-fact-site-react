import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import burgerMenu from "./assets/icon-hamburger.svg";

export default function Root() {
  // const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  // const toggleBurgerMenu = () => {
  //   setIsBurgerMenuOpen(!isBurgerMenuOpen);
  // };

  return (
    <div style={{ background: "red" }}>
      <nav className="burger-menu">
        {/* <div className="burger-icon" onClick={toggleBurgerMenu}>
          {isBurgerMenuOpen ? (
            <img src={burgerMenu} />
          ) : (
            <img src={burgerMenu} />
          )}
        </div> */}
        {/* {isBurgerMenuOpen && ( */}
        <ul>
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
        </ul>
        {/* )} */}
      </nav>
      {/* <Outlet /> */}
    </div>
  );
}
