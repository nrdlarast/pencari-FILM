import './App.css';
import { getMovieList, searchMovie } from './api';
import { useEffect, useState } from 'react';

const App = () => {
    const [popularMovies, setPopularMovies] = useState([]);
    const search = async (a) => {
        if (a.length > 3) {
            const query = await searchMovie(a);
            setPopularMovies(query.results);
        }
    };
    useEffect(() => {
        getMovieList().then((result) => {
            setPopularMovies(result);
        });
    }, []);
    // useEffect(() => {
    //     getMovieList();
    // }, []);

    const PopularMovieList = () => {
        return popularMovies.map((movie, i) => {
            return (
                <div className="Movie-wrapper" key={i}>
                    <div className="Movie-tittle">{movie.title}</div>
                    <img
                        className="Movie-img"
                        src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}
                    />
                    <div className="Movie-date">{movie.release_date}</div>
                    <div className="Movie-rate">{movie.vote_average}</div>
                </div>
            );
        });
    };

    console.log({ popularMovies: popularMovies });

    return (
        <div className="App">
            <header className="App-header">
                <h1>EL MOVIE</h1>
                <input
                    type="text"
                    placeholder="Cari Movie.."
                    className="Movie-search"
                    onChange={({ target }) => search(target.value)}
                />
                <div className="Movie-container">
                    <PopularMovieList />
                </div>
            </header>
        </div>
    );
};

export default App;
