import axios from "axios";

axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

const apiKey = process.env.API_KEY;
const baseUrl = `https://api.themoviedb.org/3/`;

export const getTrendingMovies = async () => {
  const trending = await axios
    .get(`${baseUrl}trending/all/day?api_key=${apiKey}&language=en-US&page=1`)
    .then((res) => res.data.results)
    .catch((e) => e.message);

  return trending;
};

export const getTopRatedMovies = async () => {
  const topRatedMovies = await axios
    .get(`${baseUrl}movie/top_rated?api_key=${apiKey}&language=en-US&page=1`)
    .then((res) => res.data.results)
    .catch((e) => e.message);

  return topRatedMovies;
};

export const getTopRatedTv = async () => {
  const topRatedTv = await axios
    .get(`${baseUrl}tv/top_rated?api_key=${apiKey}&language=en-US&page=1`)
    .then((res) => res.data.results)
    .catch((e) => e.message);
  return topRatedTv;
};

// export const getTopRated = async () => {
//   const topMovies = await axios
//     .get(`${baseUrl}movie/top_rated?api_key=${apiKey}`)
//     .then((res) => res.data.results)
//     .catch((e) => e.message);

//   const topTv = await axios
//     .get(`${baseUrl}tv/top_rated?api_key=${apiKey}`)
//     .then((res) => res.data.results)
//     .catch((e) => e.message);

//   const topRated = [...topMovies, ...topTv];
//   return topRated;
// };

export const getPopularMovies = async () => {
  const popularMovies = await axios
    .get(`${baseUrl}movie/popular?api_key=${apiKey}&language=en-US&page=1`)
    .then((res) => res.data.results)
    .catch((e) => e.message);
  return popularMovies;
};

export const getPopularTv = async () => {
  const popularTv = await axios
    .get(`${baseUrl}tv/popular?api_key=${apiKey}&language=en-US&page=1`)
    .then((res) => res.data.results)
    .catch((e) => e.message);
  return popularTv;
};

// export const getNewReleases = async () => {
//   const newReleases = await axios
//     .get(`${baseUrl}movie/now_playing?api_key=${apiKey}&language=en-US&page=1`)
//     .then((res) => res.data.results)
//     .catch((e) => e.message);
//   return newReleases.slice(0, 10);
// };

export const getOriginals = async () => {
  const originals = await axios
    .get(
      `${baseUrl}discover/tv?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_networks=213&include_null_first_air_dates=false`
    )
    .then((res) => res.data.results)
    .catch((e) => e.message);
  return originals;
};

export const getVideo = async (id, type) => {
  const video = await axios
    .get(`${baseUrl}${type}/${id}/videos?api_key=${apiKey}&language=en-US`)
    .then((res) => res.data.results)
    .catch((e) => e.message);
  const url = `https://www.youtube.com/watch?v=${video[0].key}`;
  return url;
};

export const getAllVideos = async (id, type) => {
  const video = await axios
    .get(
      `${baseUrl}${type}/${
        id ? id : "movie"
      }/videos?api_key=${apiKey}&language=en-US`
    )
    .then((res) => res.data.results)
    .catch((e) => e.message);
  return video;
};
