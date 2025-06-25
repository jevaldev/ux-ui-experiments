import "./App.css";
import { useTheme } from "./context/useTheme";
import { Link, Route, Switch } from "wouter";
import Page2 from "./Page2.tsx";

function App() {
  const { theme, toggleTheme } = useTheme();

  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  }

  if (theme === "light") {
    document.documentElement.classList.remove("dark");
  }

  return (
    <>
      <header className="flex w-[1280px] justify-between items-center gap-4 grow-1">
        <h1 className="text-3xl ">Jevaldev</h1>
        <div className="flex items-center gap-4">
          <button onClick={toggleTheme} className={`button-${theme}`}>
            Cambiar tema {theme === "light" ? "obscuro" : "claro"}
          </button>
          <nav>
            <ul className="flex gap-4">
              <li>
                <Link
                  className={(active) => (active ? `active-${theme}` : "")}
                  href="/"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  className={(active) => (active ? `active-${theme}` : "")}
                  href="/Page2"
                >
                  Página 2
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <Switch>
        <Route path="/">
          <h2 className="flex-grow flex justify-center items-center">
            Hola mundo
          </h2>
        </Route>

        <Route path="/Page2">
          <Page2 />
        </Route>
      </Switch>
    </>
  );
}

export default App;
