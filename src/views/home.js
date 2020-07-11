import React from 'react';
import './view.css';
import { tenor } from '../assets';

function Home() {
    return (
        <div className="hal-home">
            <p> Selamat Datang di Quote App, 
                disini kamu bisa bikin quote </p>
            <i> Dibuat Oleh Mardhiyyah R </i>
            <img src={tenor} alt="BabyAngryBird" />
        </div>
    );
}

export default Home;