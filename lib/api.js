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

export const getOriginals = async () => {
  const originals = await axios
    .get(
      `${baseUrl}discover/tv?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_networks=213&include_null_first_air_dates=false`
    )
    .then((res) => res.data.results)
    .catch((e) => e.message);
  return originals;
};

export const getMovieByGenre = async (genre) => {
  const movieByGenre = await axios
    .get(`${baseUrl}discover/movie?api_key=${apiKey}&with_genres=${genre}`)
    .then((res) => res.data.results)
    .catch((e) => e.message);
  return movieByGenre;
};

export const getTvByGenre = async (genre) => {
  const tvByGenre = await axios
    .get(`${baseUrl}discover/tv?api_key=${apiKey}&with_genres=${genre}`)
    .then((res) => res.data.results)
    .catch((e) => e.message);
  return tvByGenre;
};

export const getLatestMovies = async () => {
  const latestMovies = await axios
    .get(
      `${baseUrl}discover/movie?api_key=${apiKey}&language=en-US&sort_by=primary_release_date.desc&include_adult=false&include_video=false&page=1&vote_average.gte=6`
    )
    .then((res) => res.data.results)
    .catch((e) => e.message);
  return latestMovies;
};

export const getLatestTv = async () => {
  const latestTv = await axios
    .get(
      `${baseUrl}discover/tv?api_key=${apiKey}&language=en-US&sort_by=first_air_date.desc&page=1&timezone=America%2FNew_York&vote_average.gte=6&include_null_first_air_dates=false`
    )
    .then((res) => res.data.results)
    .catch((e) => e.message);
  return latestTv;
};

export const getComedies = async () => {
  const comedyMovies = await getMovieByGenre(35);
  const comedyTv = await getTvByGenre(35);
  return [...comedyMovies.slice(0, 10), ...comedyTv.slice(0, 10)];
};

export const getDocumentaries = async () => {
  const documentaryMovies = await getMovieByGenre(99);
  const documentaryTv = await getTvByGenre(99);
  return [...documentaryMovies.slice(0, 10), ...documentaryTv.slice(0, 10)];
};

export const getMoviesAndTvByQuery = async (query) => {
  const movies = await axios
    .get(
      `${baseUrl}search/movie?api_key=${apiKey}&language=en-US&page=1&query=${query}`
    )
    .then((res) => res.data.results)
    .catch((e) => e.message);

  const tv = await axios
    .get(
      `${baseUrl}search/tv?api_key=${apiKey}&language=en-US&page=1&query=${query}`
    )
    .then((res) => res.data.results)
    .catch((e) => e.message);
  const resultsByQuery = [...movies, ...tv];
  return resultsByQuery;
};

export const getVideo = async (id, type) => {
  if (!type) {
    try {
      const video = await axios
        .get(`${baseUrl}movie/${id}/videos?api_key=${apiKey}&language=en-US`)
        .then((res) => res.data.results);
      const url = `https://www.youtube.com/watch?v=${video[0].key}`;
      return url;
    } catch {
      try {
        const video = await axios
          .get(`${baseUrl}tv/${id}/videos?api_key=${apiKey}&language=en-US`)
          .then((res) => res.data.results);
        const url = `https://www.youtube.com/watch?v=${video[0].key}`;
        return url;
      } catch {
        // in preparation for the case when there are no video
        return "noVideo";
      }
    }
  }

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

export const getPopularMoviesWithKids = async () => {
  const data = await axios
    .get(
      `${baseUrl}discover/movie?api_key=${apiKey}&certification_country=US&certification.lte=G&sort_by=popularity.desc`
    )
    .then((res) => res.data.results)
    .catch((e) => e.message);
  return data;
};

export const getPopularTVWithKids = async () => {
  const data = await axios
    .get(
      `${baseUrl}discover/tv?api_key=${apiKey}&certification_country=US&certification.lte=G&sort_by=popularity.desc`
    )
    .then((res) => res.data.results)
    .catch((e) => e.message);
  return data;
};
