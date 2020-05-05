import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

export default function About() {

    return (
        <div className="home-container">
            <header>

                <Link className="button" to="/">Home</Link>
                <Link className="button" to="/login">Entrar</Link>
                <Link className="button" to="/about">Sobre nós</Link>
            </header>

            <section>
                
                <h1>Sobre nós</h1>

            </section>

        </div>
    );
}