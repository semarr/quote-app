import React from 'react';
import './view.css';
import { quote1, quote2, quote3, quote4, quote5, quote6 } from '../assets';

function Designs() {
    return (
        <div className="hal-design">
            <img src={quote1} alt="Quote"/>
            <img src={quote2} alt="Quote"/>
            <img src={quote3} alt="Quote"/>
            <img src={quote4} alt="Quote"/>
            <img src={quote5} alt="Quote"/>
            <img src={quote6} alt="Quote"/>
        </div>
    );
}

export default Designs;