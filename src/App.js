import React from "react";
import "./App.css";
import movies from "./assets/movies.json";
import Movies from "./containers/Movies";
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    return (
      <div className="view">
        <h1>Movies</h1>
        <Movies movies={movies}/>
        <Footer />
      </div>
    );
}

export default App;
