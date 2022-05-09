import React from "react"; //para utilizar JSX
import ReactDom from "react-dom"; //
import App from "./App.jsx";

//jsx lenguaje alternativo parecido a html para crear de manera sencilla los componentes

//ReactDom.render(<div>Hola Mundo</div>, document.getElementById("root"));

ReactDom.render(<App />, document.getElementById("root"));
