// import axios from "axios";

// const KEY = "c49e6b6a286d541aa373ee568a673610";
// axios.defaults.baseURL = "https://api.themoviedb.org/3/";

// const FetchMovie = {
//   fetchPopMovie() {
//     return axios
//       .get(`trending/all/day?api_key=${KEY}`)
//       .then((r) => r.data.results);
//   },

//   fetchMovieByQuery(query) {
//     return axios
//       .get(
//         `search/movie?query=${query}&api_key=${KEY}&language=en-US&page=1&include_adult=false`
//       )
//       .then((r) => r.data.results);
//   },

//   fetchMovieById(id) {
//     return axios
//       .get(`movie/${id}?api_key=${KEY}&language=en-US`)
//       .then((r) => r.data);
//   },

//   fetchMovieCastById(id) {
//     return axios
//       .get(`movie/${id}/credits?api_key=${KEY}&language=en-US`)
//       .then((r) => r.data.cast);
//   },

//   fetchMovieReviewById(id) {
//     return axios
//       .get(`movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`)
//       .then((r) => r.data.results);
//   },
// };

// export default FetchMovie;
