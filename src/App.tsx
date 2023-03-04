import { useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Link,
  Route,
  RouterProvider,
} from "react-router-dom";

import Earth from "./pages/Earth";
import Jupiter from "./pages/Jupiter";
import Mars from "./pages/Mars";
import Mercury from "./pages/Mercury";
import Neptune from "./pages/Neptune";
import Saturn from "./pages/Saturn";
import Uranus from "./pages/Uranus";
import Venus from "./pages/Venus";
import Root from "./Root";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Mercury />} />
      <Route path="Venus" element={<Venus />} />
      <Route path="Earth" element={<Earth />} />
      <Route path="Mars" element={<Mars />} />
      <Route path="Jupiter" element={<Jupiter />} />
      <Route path="Saturn" element={<Saturn />} />
      <Route path="Uranus" element={<Uranus />} />
      <Route path="Neptune" element={<Neptune />} />
    </Route>
  )
);

function App() {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const toggleBurgerMenu = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  };

  return (
    <>
      <div className="burger-icon" onClick={toggleBurgerMenu}>
        {isBurgerMenuOpen ? "X" : <Root />}
      </div>
      {isBurgerMenuOpen && (
        <>
          <RouterProvider router={router} />
        </>
      )}
    </>
  );
}

export default App;
