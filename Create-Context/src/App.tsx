import "./App.css";
import { useTheme } from "./context";
import { Route, Switch } from "wouter";
import Ejemplos from "./Ejemplos.tsx";
import { Button } from "./components/atoms/Button.tsx";
import { NavLink } from "./components/atoms/NavLink.tsx";
import Home from "./Home.tsx";

function App() {
  const { theme, toggleTheme } = useTheme();

  const NavLinks = [
    {
      text: "Home",
      href: "/",
    },
    {
      text: "Ejemplos",
      href: "/Ejemplos",
    },
  ];

  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  }

  if (theme === "light") {
    document.documentElement.classList.remove("dark");
  }

  return (
    <>
      <header className="flex w-[1280px] mx-auto justify-between items-center gap-4 grow-1">
        <h1 className="text-3xl font-bold">Jevaldev</h1>
        <div className="flex items-center gap-4">
          <Button
            text={`Cambiar tema a ${theme === "light" ? "obscuro" : "claro"}`}
            onClickFun={toggleTheme}
            theme={theme}
          />
          <nav>
            <ul className="flex gap-4">
              {NavLinks.map((link) => (
                <NavLink href={link.href} text={link.text} theme={theme} />
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <Switch>
        <Route path="/">
          <Home />
        </Route>

        <Route path="/Ejemplos">
          <Ejemplos />
        </Route>
      </Switch>
    </>
  );
}

export default App;
