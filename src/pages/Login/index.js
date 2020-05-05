import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

export default function Login() {

    return (
        <div className="home-container">
            <header>

                <Link className="button" to="/">Home</Link>
                <Link className="button" to="/login">Entrar</Link>
                <Link className="button" to="/about">Sobre nós</Link>
            </header>

            <h1>Tela de login/Cadastro.</h1>

        </div>
    );
}