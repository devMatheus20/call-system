import React, { useRef, useContext } from 'react'
import { Link } from 'react-router-dom'

import { AuthContext } from '../../Context/auth'

import Loading from '../../Components/Loading'
import SignForm from '../../Components/SignForm'
import SignTitle from '../../Components/SignTitle'
import SignButton from '../../Components/SignButton'



export default function SingIn() {

    const emailRef = useRef()
    const passwordRef = useRef()

    const { singIn, loadingAuth } = useContext(AuthContext)

    function clickLogin(event) {
        event.preventDefault()

        const email = emailRef.current.value
        const password = passwordRef.current.value

        if (email !== '' && password !== '') singIn(email, password)
    }

    return (
        <section className='s-singn'>

            <SignForm onSubmit={clickLogin}>

                <SignTitle>Entrar</SignTitle>

                <input
                    placeholder='Email'
                    type="email"
                    ref={emailRef}
                    autoComplete={"useremail"}
                />

                <input
                    placeholder='Senha'
                    type="password"
                    ref={passwordRef}
                    autoComplete={"current-password"}
                />

                <SignButton type='submit'>
                    {loadingAuth ?
                        <Loading/>
                        :
                        'Acessar'
                    }
                </SignButton>

                <p>
                    Ainda não possui uma conta?

                    <Link to="/register">
                        <span>Criar uma conta</span>
                    </Link>
                </p>

            </SignForm>
            
        </section>
    )
}

