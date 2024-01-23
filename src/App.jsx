import { SearchContext } from "./context/SearchContext";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import PageRouter from "./routes/PageRouter";
import "./scss/style.scss";
import { recommendedMovies, searchMovie } from "./utils/fetch";

function App() {
  return (
    <>
      <SearchContext.Provider value={{}}>
        <Header />
        <main>
          <PageRouter />
        </main>
        <Footer />
      </SearchContext.Provider>
    </>
  );
}

export default App;
