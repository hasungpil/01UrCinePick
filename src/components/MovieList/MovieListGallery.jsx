import React from "react";

const MovieListGallery = () => {
  return (
    <li>
      <a href="">
        <div className="movie-list__info">
          <div className="movie-list__poster">
            <img
              src="https://demo.gloriathemes.com/noxe/demo/wp-content/uploads/2020/02/title-image-12-1255x790.jpg"
              alt=""
            />
          </div>
          <div className="movie-list__title">제목</div>
          <div className="movie-list__year">2024</div>
        </div>
      </a>
    </li>
  );
};

export default MovieListGallery;
