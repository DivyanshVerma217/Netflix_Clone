const API_KEY = "ab4de9626f2e345c2064b6e751794ee9";


const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`, 
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
};

export default requests;