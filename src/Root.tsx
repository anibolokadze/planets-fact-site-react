import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <header>
        <nav>
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
        </nav>
      </header>
      <Outlet />
    </>
  );
}
