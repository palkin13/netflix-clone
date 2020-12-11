const API_KEY = "e610603c6cabe6d5ac8639490a8f6509";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchedActionMovies: `discover/tv?api_key=${API_KEY}&with_genres=28`,
  fetchedComedyMovies: `discover/tv?api_key=${API_KEY}&with_genres=35`,
  fetchedHorrorMovies: `discover/tv?api_key=${API_KEY}&with_genres=27`,
  fetchedRomanceMovies: `discover/tv?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `discover/tv?api_key=${API_KEY}&with_genres=99`
};

export default requests;
