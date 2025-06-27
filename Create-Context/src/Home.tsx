import { useTheme } from "./context";

export default function Home() {
  const { theme } = useTheme();

  return (
    <main className="w-[65ch] text-start mx-auto py-8 flex flex-col gap-4">
      <h2 className="text-4xl text-balance font-bold">
        Aprendiendo a usar el hook nativo de React useContext
      </h2>
      <p>
        <strong>useContext</strong> es un hook que se utiliza en el framework de
        <strong> JavaScript</strong> <strong>React</strong> esto para obtener
        como su nombre lo dice un contexto. Aunque dicho en otras palabras sirve
        para obtener o leer el valor que puede ser compartido a lo largo de la
        aplicación y en muchos casos permite invocar funciones que ayudan a
        modificarlo. Ya sea cambiar el tema de la página, para mostrar cuantos
        artículos hay en un carrito de compras, entre otras funciones.
      </p>
      <div className={`disclaimer-${theme}`}>
        <h4
          className={`font-bold ${
            theme === "light" ? "text-red-700" : "text-red-300"
          }`}
        >
          Disclaimer
        </h4>
        <p>
          No soy el más experto usando React y sus hooks pero estoy aprendiendo
          e intentando mejorar los principios de este framework para tener un
          mejor conocimiento de sus capacidades y sus limites. Disculpen si la
          información no es de ayuda o es incorrecta.
        </p>
      </div>

      <h3 className="text-2xl font-bold">Información sobre useContext</h3>
      <p>
        La descripción que le da React en la documentación oficial es: "El
        Contexto permite a un componente recibir información desde un componente
        padre distante sin pasarsela como props." Y para sorpresa de nadie lo
        considera un hook de contexto.
      </p>
      <p>
        useContext por sí solo no devuelve un valor útil, ya que necesita
        recibir como argumento un contexto previamente creado mediante
        createContext.
      </p>
      <h3 className="text-2xl font-bold">Ejemplos de useContext</h3>
      <pre>
        <small>Forma incorrecta de usar useContext()</small>
        <code>{`
// Si en un archivo declaramos la variable
const [contador, setContador] = useState(0);

// Luego en otro documento lo queramos llamar:
const contador = useContext(contador);
`}</code>
      </pre>
      <p>
        Esto es incorrecto ya que contador en useContext no está haciendo
        referencia a nada. Primero deberemos crear un contexto y un proveedor.
      </p>

      <pre>
        <small>Una forma correcta de usar useContext()</small>
        <code>
          {`
// Primero crearemos un contexto de la siguiente manera 
const ContadorContext = createContext(0);

const ContadorProvider = ({ children }) => {
  const [contador, setContador] = useState(0);

  // Funciones para aumentar o disminuir el contador también irían aquí.

  return (
    <ContadorContext.Provider value={{ contador /* más las funciones */ }}>
      {children}
    </ContadorContext.Provider>
  );
};

const useContador = () => {
  const context = useContext(ContadorContext);
  return context;
};

// Aunque con TypeScript puede variar.
`}
        </code>
      </pre>
      <p>
        Una vez configurado de manera correcta el contexto en nuestra aplicación
        ya podremos utilizar o leer tanto la variable contador y demás funciones
        creadas en el proveedor del contexto. O eso diría pero primero se tiene
        que envolver la aplicación en el proveedor del contexto.
      </p>
      <pre>
        <code>{`<ContadorProvider>
  <App />
</ContadorProvider>`}</code>
      </pre>
      <p>
        Y de esta manera ahora si podremos hacer uso de las funciones y leer el
        valor creado en nuestro contexto.
      </p>
      <pre>
        <code>{`import useContador from "./useContador.jsx"
const {contador} = useContador() // Aqui también se pueden declarar las funciones para utilizarlas después`}</code>
      </pre>
      <h3 className="text-2xl font-bold">Conclusión</h3>
      <p>
        El hook nativo de React useContext es buena idea implementarlo en una
        aplicación cuando queremos compartir o que persista un valor a través de
        nuestra página web. Pudiendo cambiar el tema de la página de claro a
        oscuro, obtener la información del usuario si ha iniciado sesión o no,
        entre otros casos de uso. Aunque también se puede hacer uso de librerías
        como Zustand o Redux para solucionar el mismo problema.
      </p>
      <footer>
        <h3 className="text-xl font-bold">Referencias</h3>
        <ul>
          <li>
            <a
              href="https://es.react.dev/reference/react/hooks"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hooks integrados en React - React Docs Oficial
            </a>
          </li>
          <li>
            <a
              href="https://es.react.dev/learn/reusing-logic-with-custom-hooks#"
              target="_blank"
              rel="noopener noreferrer"
            >
              Reutilizar la lógica con Hooks personalizados - React Docs Oficial
            </a>
          </li>
        </ul>

        <h3 className="text-xl font-bold">Otros articulos de interes</h3>
        <ul>
          <li>
            <a
              href="https://imaginaformacion.com/tutoriales/hook-usecontext-de-react"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cómo usar el Hook useContext de React - Imagina Formación
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=B9tDYAZZxcE"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tienda y Carrito con React + Estado Global con useContext + Manejo
              de estado con useReducer - Midulive (YouTube)
            </a>
          </li>
        </ul>
      </footer>
    </main>
  );
}

{
  /* <h3 className="text-2xl font-bold">¿Que es un hook?</h3>
      <p>
        Existen dos tipos de hooks en <strong>React</strong> los cuales son:
        nativos y personalizados. Los <strong>hooks nativos</strong> hacen
        referencia a aquellos que ya están integrados desde React y normalmente
        son importados desde React como useState o useEffect. Por otra parte los{" "}
        <strong>hooks personalizados</strong> son aquellos que creamos nosotros
        desde cero como useTheme, useShoppingCart (estos son nombres que podemos
        asignar dependiendo del caso de la aplicación) los cuales no puedes
        importar directamente desde React y tienes que crear su lógica desde
        cero.
      </p>
      <p>
        Para crear un custom hook se puede hacer uso de los hooks nativos de
        React (y en la mayoría de los casos se acaban utilizando). Aunque por
        otra parte ya existen muchos custom hooks en la comunidad de React por
        lo que puede que no tengas que realizar todo desde cero.
      </p>
      <p>
        En conclusión los hooks se pueden ver como funciones reciclables dentro
        de nuestra aplicación y de esta manera evitar la duplicidad de código.
        Otra manera de verlos es como los componentes personalizados de react
        pero unicamente conteniendo lógica.
      </p> */
}
