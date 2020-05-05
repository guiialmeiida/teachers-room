import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

export default function Register() {

    return (
        <div className="home-container">
            <header>

                <Link className="button" to="/">Home</Link>
                <Link className="button" to="/login">Entrar</Link>
                <Link className="button" to="/about">Sobre nós</Link>
            </header>

            <section>
                
                <h1>Cadastrar novo caso</h1>
                <p>Descreve o caso detalhadamente para encontrar um herói para resolver isso.</p>

            </section>

            <form>
                <input
                    placeholder="Título do caso"
                />
                <textarea
                    placeholder="Descrição"
                />
                <input
                    placeholder="Valor em reais"
                />

            </form>

        </div>
    );
}