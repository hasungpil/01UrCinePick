import axios from "axios";
import { API } from "../data/api";
import { recommendMovieIds } from "../data/recommendMovieIds";

// index추천영화
export const recommendedMovies = async (setValue) => {
  try {
    const apiResponses = await Promise.all(
      recommendMovieIds.map((id) => {
        return axios.get(`${API}&i=${id}`);
      })
    );
    const movieDataList = apiResponses.map((response) => response.data);
    setValue(movieDataList);
  } catch (error) {
    console.log("recommendedMovies Error : ", error);
  }
};

// 영화검색
export const serachMovies = async (movieTitle, isYear, isType) => {
  try {
    const responses = await axios.get(
      `${API}${"&s=" + movieTitle}${"&y=" + isYear}${"&type=" + isType}`
    );
    console.log(responses);
  } catch (error) {
    console.log("searchMovie Error : ", error);
  }
};
