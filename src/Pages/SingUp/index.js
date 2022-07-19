import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

function SingUp() {
    return(
        <section className='s-singUp'>
        <article className='singUp'>
            <h1>Registro</h1>

            <input placeholder='Seu Nome' type="text"/>
            <input placeholder='Email' type="email"/>
            <input placeholder='Senha'type="password"/>

            <button type='submit'>Registrar</button>

            <p>Você já possui uma conta? <Link to="/"><span>Entrar</span></Link></p>
        </article>
    </section>
    )
}


export default SingUp