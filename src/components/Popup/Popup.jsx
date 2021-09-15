import React, { useEffect, useState } from "react";

// Styles
import '../../styles/popup.css';
// Constant
import { REACT_APP_API_BASE_IMAGE_URL } from '../../constants/api_const';

function Popup(props) {
    const [cardContent, setCardContent] = useState('');

    useEffect(()=>{
        getCardContent();
    }, []);

    const getCardContent=()=> {
        setCardContent(props.content);
    }

    console.log("Card Content: ", cardContent);

    return (
        <div className="popup-box">
            <div className="box">
                <span className="close-icon" onClick={props.handleClose}>x</span>
                <div className="cards" >
                    <div className="img-styles">
                        <span>{cardContent.vote_average}</span>
                        <img src={REACT_APP_API_BASE_IMAGE_URL + cardContent.poster_path} />
                    </div>
                </div>
                <p className="heading">{cardContent.original_title}</p>
                <p className="detail-content">{cardContent.overview}</p>
                <b>Release Date: {cardContent.release_date}</b>
            </div>
        </div>
    );
};

export default Popup;
