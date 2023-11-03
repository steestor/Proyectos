# React + TypeScript + Vite

Empezaremos creando el proyecto con el comando:
npm create vite@latest

El proyecto está creado con React y swc (alternativa a babel más rápida porque está creada con Rust)

## Enunciado:

Crea una aplicación para buscar películas

API a usar:

- https://www.omdbapi.com/
- API_KEY: 4287ad07

Requerimientos:

- Necesita mostrar un input para buscar la película y un botón para buscar.
- Lista las peliculas encontradas y muestra el título, año y poster.
- Haz que las películas se muestren en un grid responsive.

Primera iteración:

- Evitar que se haga la misma búsqueda dos veces seguidas.
- Haz que la búsqueda se haga automaticamente al escribir.
- Evita que se haga la búsqueda continuamnete al escribir.

## Partes recomedadas a seguir

1 - quitamos todos los estilos del app.css
2 - utilizamos bootstrap para que se vea mejor y water:
npm install react-bootstrap bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

entras a la web: https://cdn.jsdelivr.net/npm/water.css@2/out/water.css
y copias el fichero de estilos en el app
