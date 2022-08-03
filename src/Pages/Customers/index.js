import React, { useRef } from "react";
import firebase from "../../Services/firebaseConnection";
import './styles.css'

import { toast } from 'react-toastify'
import { AiOutlineUser } from 'react-icons/ai'

import Title from "../../Components/Title";
import Header from "../../Components/Header";

function Customers() {

    const nameRef = useRef()
    const cnpjRef = useRef()
    const andressRef = useRef()

    async function handleAdd(e) {
        const name = nameRef.current.value
        const cnpj = cnpjRef.current.value
        const andress = andressRef.current.value

        e.preventDefault()

        if(name !== '' && cnpj !== '' && andress !== '') {
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
        <div className="container">
            <Header />

            <div className="customers">
                <Title>
                    <AiOutlineUser size={27} />
                    Clientes
                </Title>

                <div className="info-customers">
                    <form onSubmit={handleAdd} className="form-customers">
                        <label>
                            Nome Fantasia
                            <input placeholder="Nome da sua empresa" ref={nameRef}/>
                        </label>

                        <label>
                            CNPJ
                            <input placeholder="Seu CNPJ" ref={cnpjRef}/>
                        </label>

                        <label>
                            Endereço
                            <input className="textCaptalize" placeholder="Seu endereço" ref={andressRef}/>
                        </label>

                        <button>
                            Cadastrar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Customers;