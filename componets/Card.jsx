import React from 'react';
import './styles/Card.css';

function Card({ title, text, icon }) {
    return (
        <div className="cards">
            {icon}
            <h4>{title}</h4>
            <p>{text}</p>
        </div>
    )
}

export default Card;