import { useState } from "react";
import Sort from "./components/Main/Sort";
import MovieList from "./components/MovieList/MovieList";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import "./scss/style.scss";
import DetailSearch from "./components/Main/Detailsearch";
import Heading from "./components/Common/Heading";

function App() {
  const [isSort, setIsSort] = useState("");
  const handleSortData = (sortValue) => {
    setIsSort(sortValue);
  };
  return (
    <>
      <Header />
      <main className="m0auto">
        <DetailSearch />
        <div className="align both vm">
          <Heading
            tag="h2"
            text="Recommended Movies"
            className="heading regular"
          />
          <Sort onSortOption={handleSortData} />
        </div>
        {isSort ? <MovieList type={isSort} /> : <MovieList type="gallery" />}
      </main>
      <Footer />
    </>
  );
}

export default App;

// test
