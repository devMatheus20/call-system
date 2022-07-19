import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import './styles.css'


function SingIn() {

    const email = useRef()
    const password = useRef()



    return (
        <section className='s-singIn'>
            <article className='singIn'>
                <h1>Entrar</h1>

                <input placeholder='Email' type="email" ref={email} />
                <input placeholder='Senha' type="password" ref={password}/>

                <button type='submit'>Acessar</button>

                <p>Ainda não possui uma conta? <Link to="/register"><span>Criar uma conta</span></Link></p>
            </article>
        </section>
    )
}


export default SingIn