import React, { createContext, useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import firebase from '../Services/firebaseConnection'


export const AuthContext = createContext({})

export default function AuthProvider({ children }) {

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

            .then(async ({ user }) => {

                const userProfile = await firebase.firestore().collection('users').doc(user.uid).get()

                let data = {
                    uid: userProfile.id,
                    nome: userProfile.data().nome,
                    email: userProfile.data().email,
                    avatarUrl: userProfile.data().avatarUrl
                }

                setUser(data)
                storageUser(data)
                setLoadingAuth(false)
                toast.success("Bem-vindo de volta!")
            })

            .catch(error => {

                if(error.code === 'auth/wrong-password') toast.error("Senha incorreta!")

                else if(error.code === 'auth/user-not-found') toast.error("Usuário não encontrado!")

                else toast.error("Ops, algo deu errado!")
                
                setLoadingAuth(false)
            })
    }

    async function singUp(email, password, name) {
        setLoadingAuth(true)
        await firebase.auth().createUserWithEmailAndPassword(email, password)

            .then(async ({ user }) => {
                await firebase.firestore().collection('users').doc(user.uid).set({
                    email: email,
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
                        toast.success("Bem-vindo a plataforma!")
                    })
            })

            .catch(error => {

                if(error.code === 'auth/weak-password') toast.error("A senha deve ter pelo menos 6 caracteres!")

                else toast.error("Ops algo deu errado!")
                
                console.log(error)
                setLoadingAuth(false)
            })
    }

    function storageUser(data) {
        localStorage.setItem('SistemaUser', JSON.stringify(data))
    }

    function logout() {
        localStorage.removeItem('SistemaUser')
        firebase.auth().signOut()
        setUser(null)
    }

    return (
        <AuthContext.Provider
            value={{ singed: !!user, user, setUser, storageUser, loading, loadingAuth, singUp, singIn, logout }}
        >
            {children}
        </AuthContext.Provider>
    )
}



