import axios from 'axios';

const getMovieList = async () => {
    const movie = await axios.get('');
    return;
};

export default getMovieList;

export const searchMovie = async (a) => {
    const search = await axios.get(a);
    return;
};
