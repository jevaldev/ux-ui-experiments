import { Link } from "wouter";
import { useTheme } from "./context/useTheme";

function Page2() {
  const { theme } = useTheme();
  return (
    <main
      className={`flex flex-col items-center justify-center flex-1 w-full mx-auto`}
    >
      <h2>Página 2</h2>
      <p>Contenido de la segunda página</p>
      <Link href="/">Volver</Link>

      <p>Tema actual: {theme}</p>
    </main>
  );
}

export default Page2;
