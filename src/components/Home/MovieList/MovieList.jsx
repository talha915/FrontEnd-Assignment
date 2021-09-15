import React, { useEffect, useState } from 'react';
// Components
import Popup from '../../Popup/Popup';
// Constants
import { recent_movies } from '../../../constants/constants';
import { REACT_APP_MOVIE_DB_API_KEY, REACT_APP_API_DOMAIN, REACT_APP_API_BASE_IMAGE_URL, REACT_APP_API_DOMAIN_SEARCH } from '../../../constants/api_const';
// Styles
import '../../../styles/movie-list.css';

import axios from 'axios';

function MovieList(props) {

    useEffect(() => {
        { props.searchData ? searchMovies(props.searchData) : fetchMovies() }
    }, [props.searchData]);


    const [movieList, setMovieList] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [selectedData, setSelectedData] = useState('');

    const togglePopup = (data) => {
        setIsOpen(!isOpen);
        setSelectedData(data);
    }

    const fetchMovies = () => {
        axios.get(REACT_APP_API_DOMAIN + 'api_key=' + REACT_APP_MOVIE_DB_API_KEY)
            .then(response => setMovieList(response.data));
    }

    const searchMovies = (params) => {
        axios.get(REACT_APP_API_DOMAIN_SEARCH + 'api_key=' + REACT_APP_MOVIE_DB_API_KEY + '&query=' + params)
            .then(response => setMovieList(response.data));
    }

    const getCardsList = () => {
        if (movieList.hasOwnProperty('results')) {
            if (movieList.results instanceof Array) {
                let movies = movieList.results.map((data, index) => {
                    if (data.poster_path != '' && data.original_title != '') {
                        return (
                            <div className="cards" key={index} onClick={()=>togglePopup(data)}>
                                <div className="img-style">
                                    <span>{data.vote_average}</span>
                                    <img src={REACT_APP_API_BASE_IMAGE_URL + data.poster_path} />
                                </div>
                                <p>{data.original_title}</p>
                            </div>
                        )
                    }
                });
                return movies;
            }
        }
    }

    return (
        <div className="container-movie-list">
            <p className="heading">
                {recent_movies}
            </p>
            {getCardsList()}
            {isOpen && <Popup
                content={selectedData}
                handleClose={togglePopup}
            />}
        </div>
    )
}
export default MovieList;