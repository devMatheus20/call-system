import React, { createContext, useState, useEffect } from 'react'
import firebase from '../Services/firebaseConnection'


export const AuthContext = createContext({})    

function AuthProvider({ children }) {

    const [user, setUser] = useState(null)
    const [loadingAuth, setLoadingAuth] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        function loadStorage() {
            const storageUser = localStorage.getItem('SistemaUser')

            if (storageUser) {
                setUser(JSON.parse(storageUser))
                setLoading(false)
            }

            setLoading(false)
        }

        loadStorage()
    }, [])

    async function singIn(email, password) {
        setLoadingAuth(true)
        await firebase.auth().signInWithEmailAndPassword(email, password)

        .then(async ( {user} ) => {
            setLoadingAuth(false)

            const userProfile = await firebase.firestore().collection('users').doc(user.uid).get()

            let data = {
                uid: userProfile.uid,
                nome: userProfile.data().nome,
                email:  userProfile.data().email,
                avatarUrl: null
            }

            setUser(data)
            storageUser(data)
            setLoadingAuth(false)
        })

        .catch(error => {
            console.log(error)
            setLoadingAuth(false)
        })
    }

    async function singUp(email, password, name) {
        setLoadingAuth(true)
        await firebase.auth().createUserWithEmailAndPassword(email, password)

            .then(async ({ user }) => {
                await firebase.firestore().collection('users').doc(user.uid).set({
                    nome: name,
                    avatarUrl: null
                })

                .then(() => {
                    let data = {
                        uid: user.uid,
                        nome: name,
                        email: user.email,
                        avatarUrl: null
                    }

                    setUser(data)
                    storageUser(data)
                    setLoadingAuth(false)
                })
            })

            .catch(error => {
                console.log(error)
                setLoadingAuth(false)
            })
    }

    function storageUser(data) {
        localStorage.setItem('SistemaUser' ,JSON.stringify(data))
    }

    return (
        <AuthContext.Provider value={{ singed: !!user, user, loading, loadingAuth, singUp, singIn }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider

