import React from "react";
import Header from "../layout/Header";
import Megamenu from "../components/Dialog/Megamenu";
import Search from "../components/Dialog/Search";
import Heading from "../components/Common/Heading";
import Button from "../components/Common/Button";
import Input from "../components/Common/Input";
import Footer from "../layout/Footer";
import Ratings from "../components/MovieDetails/Ratings";
import Text from "../components/Common/Text";
import MovieList from "../components/MovieList/MovieList";
import Select from "../components/Common/Select";

const Styleguide = () => {
  return (
    <>
      <Header />
      <Search />
      <Megamenu />

      <main>
        <div className="m0auto">
          {/* 텍스트 */}
          <Heading tag="h1" className="large" text="large" />
          <Heading tag="h2" className="regular" text="regular" />
          <Heading tag="h3" className="small" text="small" />
          <Heading tag="h3" className="small light" text="small light" />
          <Heading tag="h3" className="sub-title" maintitle="big text" subtitle="small text" />
          <Text type="type1" text="type1 텍스트" />
          <Text type="type2" text="type2 텍스트" />

          {/* 버튼 */}
          <Button className="btn regular pink" text="SEARCH" />

          {/* 폼 */}
          <Input type="text" placeholder="테스트" className="input" />
          <br />
          <Select />

          {/* 영화리스트 : list, fav, card, gallery */}
          <MovieList type="list" />

          {/* 디테일페이지 */}
          <Ratings />

          <div className="info-block">
            <h3 className="heading regular">Cast</h3>
            <hr className="line-type1 mt20" aria-hidden="true" />
            <h4 className="heading small mt10">Director</h4>
            <p className="txt-type2">Anthony Russo, Joe Russo</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Styleguide;
