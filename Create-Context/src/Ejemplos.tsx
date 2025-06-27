import { Link } from "wouter";
import { useTheme, useCounter } from "./context";
import { Button } from "./components/atoms/Button";

function Ejemplos() {
  const { theme } = useTheme();
  const { counter, incrementCounter, decreaseCounter } = useCounter();

  return (
    <main
      className={`flex flex-col items-center justify-center flex-1 w-full mx-auto`}
    >
      <h2>Página 2</h2>
      <p>Contenido de la segunda página</p>
      <Link href="/">Volver</Link>

      <p>Tema actual: {theme}</p>

      <p>Valor del contador: {counter}</p>

      <div>
        <Button
          text="Aumentar contador"
          onClickFun={incrementCounter}
          theme={theme}
        />
        <Button
          text="Reducir contador"
          onClickFun={decreaseCounter}
          theme={theme}
        />
      </div>
    </main>
  );
}

export default Ejemplos;
