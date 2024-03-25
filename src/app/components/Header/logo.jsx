import React from 'react';
import Spotifyblack from '../../assets/images/spotifyblack.png';
import Spotifywhite from '../../assets/images/spotifywhite.svg';
import style from './style.module.css';

export function Logo(props) {
    const myImage = props.usewhite ? Spotifywhite : Spotifyblack;
    return (
        <a href="#/dashboard" className={style.Logo}>
            <img src={myImage} alt="Spotify Logo" />
        </a>
    );
}

export function NavigationLogoText() {
    return <h1>Spotify</h1>;
}
