const API_KEY = '1b5adf76a72a13bad99b8fc0c68cb085';

const requests = {
	fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
	fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
	fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
	fetchAnimationMovies: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
	fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
	fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
	fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
	fetchDramaMovies: `/discover/movie?api_key=${API_KEY}&with_genres=18`,
	fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`
};

export default requests;
