import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  //const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <div className="row">
          <div className="col">
            <h1>Buscador de peliculas</h1>
          </div>
        </div>
      </header>

      <main>
        <div className="row">
          <div className="col-12">
            <label> Escribe el nombre de la pelicula: </label>
          </div>
          <div className="col-12">
            <input placeholder="Sonrisas y lágrimas"></input>
          </div>
          <div className="col-auto">
            <button type="submit">Buscar</button>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
