const apiConfig = {
  baseUrl: 'https://api.themoviedb.org/3/',
  apiKey: '8ad54c4f49fea29c207a683eeeffcab3',
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
  popular:'movie/popular?api_key=',
  tv:'tv/popular?api_key=',
  upcoming: 'movie/upcoming?api_key=',
  genre: 'genre/movie/list?api_key=',
  detail: (id) => `movie/${id}?api_key=`,
  tvdetail: (id) => `tv/${id}?api_key=`,
  cast: (id) => `movie/${id}/credits?api_key=`,
  tvcast: (id) => `tv/${id}/credits?api_key=`,
  images: (id) => `movie/${id}/images?api_key=`,
  tvimages: (id) => `tv/${id}/images?api_key=`,
  videos: (id) => `movie/${id}/videos?api_key=`
}

export default apiConfig;
