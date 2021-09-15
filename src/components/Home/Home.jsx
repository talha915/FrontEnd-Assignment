import React, { useState } from 'react';
// Components
import Header from '../Header/Header';
import MovieList from '../Home/MovieList/MovieList';
// Styles
import '../../styles/home.css';

function Home() {

    const [inputData, setInputData] = useState('');

    const getData=(e)=> {
        setInputData(e);
    }

    return (
        <div>
            <Header sendHome={getData} />
            <MovieList searchData={inputData} />
        </div>
    )
}
export default Home;