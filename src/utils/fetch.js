import axios from "axios";
import { API } from "../data/api";
import { recommendMovieIds } from "../data/recommendMovieIds";

// index추천영화
export const recommendedMovies = async (setMovies) => {
  try {
    const apiResponses = await Promise.all(
      recommendMovieIds.map((id) => axios.get(`${API}&i=${id}`))
    );
    const movieDataList = apiResponses.map((response) => response.data);
    setMovies(movieDataList);
  } catch (error) {
    console.log("recommendedMovies Error : ", error);
  }
};

// 영화검색
export const searchMovies = async ({ title, year, type }, setMovies) => {
  try {
    const responses = await axios.get(
      `${API}&s=${title}&y=${year}&type=${type}`
    );
    setMovies(responses.data.Search);
  } catch (error) {
    console.log("searchMovie Error : ", error);
  }
};
