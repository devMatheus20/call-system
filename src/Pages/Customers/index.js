import React, { useRef } from "react";

import firebase from "../../Services/firebaseConnection";

import { toast } from 'react-toastify'
import { AiOutlineUser } from 'react-icons/ai'

import Header from "../../Components/Header";
import Content from "../../Components/Content";
import Title from "../../Components/Title";
import Form from '../../Components/PrivateForm'
import Label from '../../Components/PrivateLabel'
import Button from '../../Components/PrivateButton'

export default function Customers() {

    const nameRef = useRef()
    const cnpjRef = useRef()
    const andressRef = useRef()

    async function handleAdd(e) {
        const name = nameRef.current.value
        const cnpj = cnpjRef.current.value
        const andress = andressRef.current.value

        e.preventDefault()

        if (name !== '' && cnpj !== '' && andress !== '') {
            await firebase.firestore().collection('customers').add({
                NomeDaEmpresa: name,
                CNPJ: cnpj,
                Endereço: andress
            })

                .then(() => {
                    toast.success("Empresa cadastrada com sucesso!")
                })

                .catch(error => {
                    toast.error("Ops, algo deu errado!")
                    console.log(error)
                })
        } else {
            toast.info("Preencha todos os campos!")
        }
    }


    return (
        <div className="flex">
            <Header />

            <Content>
                <Title>
                    <AiOutlineUser size={27} />
                    Clientes
                </Title>


                <Form onSubmit={handleAdd}>

                    <Label>Nome fantasia</Label>
                    <input
                        placeholder="Nome da sua empresa"
                        type="text"
                        ref={nameRef}
                    />

                    <Label>CNPJ</Label>
                    <input
                        placeholder="Seu CNPJ"
                        type="text"
                        ref={cnpjRef}
                    />

                    <Label>Endereço</Label>
                    <input
                        className="textCaptalize"
                        placeholder="Seu endereço"
                        type="text"
                        ref={andressRef}
                    />


                    <Button>
                        Cadastrar
                    </Button>
                </Form>

            </Content>
        </div>
    )
}

