import React, { useState, useRef, useContext } from 'react'
import './styles.css'

import { toast } from 'react-toastify'
import firebase from '../../Services/firebaseConnection'
import { AuthContext } from '../../Context/auth'

import { BsGear } from 'react-icons/bs'
import { MdOutlineUpload } from 'react-icons/md'

import Title from '../../Components/Title'
import Header from '../../Components/Header'


function Profile() {

    const { user, setUser, storageUser } = useContext(AuthContext)

    const [avatarUrl, setAvatarUrl] = useState(user && user.avatarUrl)
    const [name, setName] = useState(user && user.nome)
    const [email, setEmail] = useState(user && user.email)

    const [inputImage, setInputImage] = useState(null)



    function handleFile(e) {
        if (e.target.files[0]) {
            const image = e.target.files[0]

            if (image.type === 'image/jpeg' || image.type === 'image/png') {
                setInputImage(image)
                setAvatarUrl(URL.createObjectURL(e.target.files[0]))
            } else {
                alert("Envie uma imagem do tipo JPEG ou PNG")
                setInputImage(null)

                return null
            }
        }
    }

    async function handleUpload() {
        const uploadTask = firebase.storage()
            .ref(`images/${user.uid}/${inputImage.name}`)
            .put(inputImage)

            .then(async () => {
                await firebase.storage()
                    .ref(`images/${user.uid}`)
                    .child(inputImage.name).getDownloadURL()

                    .then(async (url) => {
                        await firebase.firestore().collection('users').doc(user.uid).update({
                            avatarUrl: url,
                            nome: name
                        })

                            .then(() => {
                                let data = {
                                    ...user,
                                    avatarUrl: url,
                                    nome: name,
                                }

                                setUser(data)
                                storageUser(data)
                            })
                    })
            })

            .catch(error => console.log(error))
    }


    async function handleSave(e) {
        e.preventDefault()

        if (inputImage === null && name !== '') {
            await firebase.firestore().collection('users').doc(user.uid).update({
                nome: name,
            })

                .then(() => {
                    let data = {
                        ...user,
                        nome: name
                    }

                    setUser(data)
                    storageUser(data)
                })
        }

        if (name !== '' && inputImage !== null) handleUpload()
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
                    <label className='img-profile'>
                        <input type="file" accept='image/*' onChange={handleFile} />
                        {avatarUrl === null ?
                            <img src={require("../../Assets/user.png")} alt="Imagem do Perfil" />
                            :
                            <img src={avatarUrl} alt="Imagem do Perfil" />
                        }
                        <MdOutlineUpload size={33} color="#ccc" />
                    </label>

                    <form onSubmit={handleSave}>
                        <label>
                            Nome
                            <input defaultValue={name} onChange={(e) => setName(e.target.value)} />
                        </label>

                        <label>
                            Email
                            <input className='disabled' defaultValue={email} disabled />
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
