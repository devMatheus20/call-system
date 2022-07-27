import React, { useContext } from 'react'
import './styles.css'
import firebase from '../../Services/firebaseConnection'

import { BiMessageDots } from 'react-icons/bi'

import Title from '../../Components/Title'
import Header from '../../Components/Header'

function Dashboard() {

    async function logout() {
        await firebase.auth().signOut()

        localStorage.removeItem("SistemaUser")
    }

    return (
        <div className='container'>
            <Header />

            <div className='calleds'>
                <Title>
                    <BiMessageDots color="#000" size={30}  />
                    Chamados
                </Title>

                <h1>Dashboard teste</h1>

                <button onClick={logout}>Sair</button>
            </div>

        </div>
    )
}

export default Dashboard