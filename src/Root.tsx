import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import burgerMenu from "./assets/icon-hamburger.svg";
export default function Root() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="burger-menu">
        <div className="burger-icon" onClick={toggleMenu}>
          {/* {isOpen ? <img src={burgerMenu} /> : <img src={burgerMenu} />} */}
          {isOpen ? "X" : "X"}
        </div>
        {isOpen && (
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
        )}
      </nav>
      <Outlet />
    </>
  );
}
