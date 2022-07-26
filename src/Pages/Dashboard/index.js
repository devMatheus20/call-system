import React, { useContext } from 'react'
import './styles.css'
import firebase from '../../Services/firebaseConnection'
import Header from '../../Components/Header'

function Dashboard() {

    async function logout() {
        await firebase.auth().signOut()

        localStorage.removeItem("SistemaUser")
    }

    return (
        <div className='dashboard'>
            <Header />

            <div>
                <h1>Dashboard teste</h1>

                <button onClick={logout}>Sair</button>
            </div>

        </div>
    )
}

export default Dashboard