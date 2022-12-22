import './App.css';
import { getMovieList, searchMovie } from './api';
import { useEffect, useState } from 'react';

const App = () => {
    const [popularMovies, setPopularMovies] = useState([]);
    const search = (a) => {
        console.log({ a });
    };
    useEffect(() => {
        getMovieList().then((result) => {
            setPopularMovies(result);
        });
    }, []);
    // useEffect(() => {
    //     getMovieList();
    // }, []);

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
                    <div className="Movie-wrapper">
                        <div className="Movie-tittle">Contoh</div>
                        <img className="Movie-img" src="#" />
                        <div className="Movie-date">11-12-2022</div>
                        <div className="Movie-rate">9.5/10</div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default App;
