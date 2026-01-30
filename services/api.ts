export const TMDB_CONFIG = {
    BASE_URL: 'https://api.themoviedb.org/3',
    API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
    Headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`,
    }
};

export const fetchMovies = async ({query}: {query: string}) => {

    const endPoint = query 
    ? `/search/movie?query=${encodeURIComponent(query)}`
    : `/discover/movie?sort_by=popularity.desc`;

    try {
        const response = await fetch(`${TMDB_CONFIG.BASE_URL}${endPoint}`, {
            method: 'GET',
            headers: TMDB_CONFIG.Headers,
        });
        if (!response.ok) {
            throw new Error(`Error fetching movies: ${response.statusText}`);
        }
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
// const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzA0ZTc0MWMxODBjMWQwM2YxOWNkM2FmYTdkMmYxNCIsIm5iZiI6MTc2OTc0NjU1Ny41NjQsInN1YiI6IjY5N2MzMDdkMWFkNzAyODhmMmEwOThlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9LaHopr1ROMLnaIWi8tBB5HvAJ8OKWzlT0bFz6xd7Qo'
//   }
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error(err));