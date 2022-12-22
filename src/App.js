import './App.css';
import { useEffect, useRef, useState } from 'react';

const App = () => {
    const search = (a) => {
        console.log({ a });
    };
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
