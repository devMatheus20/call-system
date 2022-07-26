import React from 'react'
import firebase from '../../Services/firebaseConnection'


function Dashboard() {

    async function logout(){
        await firebase.auth().signOut()

        localStorage.removeItem("SistemaUser")
    }

    return(
        <div>
            <h1>Dashboard teste</h1>

            <button onClick={logout}>Sair</button>
    
        </div>
    )  
}

export default Dashboard