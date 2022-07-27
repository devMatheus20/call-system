import React, { useRef, useContext } from 'react'
import './styles.css'

import { toast } from 'react-toastify'
import firebase from '../../Services/firebaseConnection'
import { AuthContext } from '../../Context/auth'

import { BsGear } from 'react-icons/bs'
import { MdOutlineUpload } from 'react-icons/md'

import Title from '../../Components/Title'
import Header from '../../Components/Header'


function Profile() {

    const { user, setUser } = useContext(AuthContext)

    const name = useRef()

    async function saveData(e) {
        e.preventDefault()

        await firebase.firestore().collection('users').doc(user.uid).update({
            avatarUrl: null,
            nome: name.current.value,
        })

        .then(() => {
            toast.success("Dados atualizados com sucesso!")
        })

        .error(() => {
            toast.error("Ops algo deu errado!")
        })

    }


    return (
        <div className='container'>
            <Header />

            <div className='profile'>
                <Title>
                    <BsGear color="#000" size={27} />
                    Meu perfil
                </Title>

                <div className='info-profile'>
                    <div className='img-profile' alt="Imagem do Perfil">
                        <img src={require("../../Assets/user.png")} alt="teste" />
                        <MdOutlineUpload size={33} color="#ccc" />
                    </div>

                    <form onSubmit={saveData}>
                        <label>
                            Nome
                            <input defaultValue={user.nome} ref={name} />
                        </label>

                        <label>
                            Email
                            <input className='disabled' defaultValue={user.email} disabled />
                        </label>

                        <button type='submit'>
                            Salvar
                        </button>
                    </form>
                </div>

                <div className='logout'>
                    <button>
                        Sair
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Profile;
