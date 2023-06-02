import axios from 'axios';

export async function fetchMovies() {
  const response = await axios.get('https://reactnative.dev/movies.json');
  return response.data;
}
