import React, { useState, useContext } from 'react'
import * as S from './styles.js'

import firebase from '../../Services/firebaseConnection'
import { toast } from 'react-toastify'
import { AuthContext } from '../../Context/auth'

import { BsGear } from 'react-icons/bs'
import { FiUpload } from "react-icons/fi";

import Title from '../../Components/Title'
import Header from '../../Components/Header'
import Content from '../../Components/Content'
import Form from '../../Components/PrivateForm'
import Label from '../../Components/PrivateLabel'
import Button from '../../Components/PrivateButton'
import Logout from '../../Components/Logout/'
import Loading from '../../Components/Loading'

export default function Profile() {
    // eslint-disable-next-line
    const { user, setUser, storageUser, logout } = useContext(AuthContext)

    const [avatarUrl, setAvatarUrl] = useState(user && user.avatarUrl)
    const [name, setName] = useState(user && user.nome)
    // eslint-disable-next-line
    const [email, setEmail] = useState(user && user.email)

    const [inputImage, setInputImage] = useState(null)

    const [loading, setLoading] = useState(false)



    function handleFile(e) {
        if (e.target.files[0]) {
            const image = e.target.files[0]

            if (image.type === 'image/jpeg' || image.type === 'image/png') {
                setInputImage(image)
                setAvatarUrl(URL.createObjectURL(e.target.files[0]))
            } else {
                toast.info("Envie uma imagem do tipo JPEG ou PNG")
                setInputImage(null)

                return null
            }
        }
    }

    async function handleUpload() {

        setLoading(true)

        // eslint-disable-next-line
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
                                setLoading(false)
                                toast.success("Dados atualizados com sucesso!")
                            })
                    })
            })

            .catch(error => {
                setLoading(false)
                toast.error("Ops, algo deu errado!")
                console.log(error)
            })
    }


    async function handleSave(e) {
        e.preventDefault()
        setLoading(true)

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
                    setLoading(false)
                    toast.success("Dados atualizados com sucesso!")
                })

                .catch(error => {
                    toast.error("Ops, algo deu errado!")
                    setLoading(false)
                    console.log(error)
                })
        }

        if (name !== '' && inputImage !== null) handleUpload()
    }

    return (
        <div className='flex'>
            <Header />

            <Content>
                <Title>
                    <BsGear color="#000" size={27} />
                    Meu perfil
                </Title>

                <Form onSubmit={handleSave}>

                    <S.ImageProfile>

                        <input type="file" accept='image/*' onChange={handleFile} />

                        {avatarUrl === null ?
                            <img src={require("../../Assets/user.png")} alt="Imagem do Perfil" />
                            :
                            <img src={avatarUrl} alt="Imagem do Perfil" />
                        }

                        <FiUpload size={23} color="#ccc" />

                    </S.ImageProfile>

                    <Label>Nome</Label>
                    <input
                        onChange={(e) => setName(e.target.value)}
                        defaultValue={name}
                        type="text"
                        maxLength={80}
                    />


                    <Label>Email</Label>
                    <input
                        className='disabled'
                        defaultValue={email}
                        type="text"
                        maxLength={80}
                        disabled
                    />

                    <Button type='submit'>
                        {loading ?
                            <Loading />
                            :
                            'Salvar'
                        }
                    </Button>

                </Form>

                <Logout />

            </Content>
        </div>
    )
}

