import { Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Search from "../pages/search";
import Movies from "../pages/Movies";
import Favorite from "../pages/Favorite";
import About from "../pages/About";

const PageRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/about" element={<About />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </>
  );
};
export default PageRouter;
