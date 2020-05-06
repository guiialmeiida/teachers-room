import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

import aboutImg from '../../assets/about.jpg';

export default function About() {

    return (
        <div className="home-container">
            <div className="home-container-about" style={{ backgroundImage:`url(${aboutImg})` }}>
            <header>

                <Link className="button" to="/">Home</Link>
                <Link className="button" to="/login">Entrar</Link>
                <Link className="button" to="/about">Sobre nós</Link>
            </header>

            <section>
                
                <h1>Sobre nós</h1>

            </section>

            </div>

        </div>
    );
}