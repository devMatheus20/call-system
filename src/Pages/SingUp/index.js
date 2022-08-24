import React, { useRef, useContext } from 'react'
import { Link } from 'react-router-dom'

import { AuthContext } from '../../Context/auth'



import Loading from '../../Components/Loading'
import SignForm from '../../Components/SignForm'
import SignTitle from '../../Components/SignTitle'
import SignButton from '../../Components/SignButton'


export default function SingUp() {

    localStorage.removeItem('SistemaUser')

    const { singUp, loadingAuth } = useContext(AuthContext)

    const emailRef = useRef()
    const passwordRef = useRef()
    const nameRef = useRef()

    function clickRegister(e) {
        e.preventDefault()

        const email = emailRef.current.value
        const password = passwordRef.current.value
        const name = nameRef.current.value

        if (email !== '' && password !== '' && name !== '') singUp(email, password, name)
    }

    return (
        <section className='mainContainer'>

            <SignForm onSubmit={clickRegister}>

                <SignTitle>Registro</SignTitle>

                <input
                    placeholder='Seu Nome'
                    type="name"
                    ref={nameRef}
                />

                <input
                    placeholder='Email'
                    type="email"
                    ref={emailRef}
                    autoComplete={"current-password"}
                />

                <input
                    placeholder='Senha'
                    type="password"
                    ref={passwordRef}
                />

                <SignButton type='submit'>
                    {loadingAuth ?
                        <Loading />
                        :
                        'Criar conta'
                    }
                </SignButton>

                <p>
                    Você já possui uma conta?
                    <Link to="/">
                        <span>Entrar</span>
                    </Link>
                </p>
                
            </SignForm>
        </section>
    )
}


