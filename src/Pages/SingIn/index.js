import React, { useRef, useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../Context/auth'
import './styles.css'

import { FaSpinner } from 'react-icons/fa'


function SingIn() {

    const emailRef = useRef()
    const passwordRef = useRef()

    const {singIn, loadingAuth} = useContext(AuthContext)

    function clickLogin(event) {
        event.preventDefault()
        
        const email = emailRef.current.value
        const password = passwordRef.current.value

        if(email !== '' && password !== '') singIn(email, password)
    }

    // if(loadingAuth === true) {
    //     return(
    //         <div>Carregando...</div>
    //     )
    // }

    return (
        <section className='s-singIn'>
            <form onSubmit={clickLogin} className='singIn'>
                <h1>Entrar</h1>

                <input placeholder='Email' type="email" ref={emailRef} autoComplete={"useremail"}/>
                <input placeholder='Senha' type="password" ref={passwordRef}autoComplete={"current-password"} />

                <button type='submit'>
                    {loadingAuth ?
                        <FaSpinner size={20}/>
                        :
                        'Acessar'
                    }
                </button>

                <p>Ainda não possui uma conta? <Link to="/register"><span>Criar uma conta</span></Link></p>
            </form>
        </section>
    )
}


export default SingIn