import { createContext, useState } from "react";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import PageRouter from "./routes/PageRouter";
import "./scss/style.scss";
import { MovieContext } from "./context/MovieContext";

function App() {
  const [movies, setMovies] = useState([]);

  return (
    <MovieContext.Provider value={{ movies, setMovies }}>
      <Header />
      <main>
        <PageRouter />
      </main>
      <Footer />
    </MovieContext.Provider>
  );
}

export default App;
