import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

export default function Home() {

    return (
        <div className="home-container">
            <header>

                <Link className="button" to="/">Home</Link>
                <Link className="button" to="/login">Entrar</Link>
                <Link className="button" to="/about">Sobre nós</Link>
            </header>

            <h1>Uma nova forma de se conectar com os alunos.</h1>

            <Link className="button-register" type="submit" to="/register">Cadastrar</Link>

        </div>
    );
}