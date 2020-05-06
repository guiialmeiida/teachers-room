import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import fundoImg from '../../assets/home.jpg';

export default function Home() {

    return (
        <div className="home-container">
            <header>
                <Link className="button" to="/">Home</Link>
                <Link className="button" to="/login">Entrar</Link>
                <Link className="button" to="/about">Sobre nós</Link>
            </header>

            <div className="background" style={{ backgroundImage:`url(${fundoImg})` }}>

        </div>
    </div>
    );
}