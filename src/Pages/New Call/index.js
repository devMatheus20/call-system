import React, { useEffect, useState } from 'react'
import './styles.css'
import firebase from '../../Services/firebaseConnection'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

import { AiOutlinePlusCircle } from 'react-icons/ai'
import { FiEdit } from 'react-icons/fi'

import Title from '../../Components/Title'
import Header from '../../Components/Header'

function NewCall() {

    const { callId } = useParams()

    const [nameCustomers, setNameCustomers] = useState([])

    const [textOption, setTextOption] = useState('Carregando...')

    const [subject, setSubject] = useState('Suporte')
    const [stats, setStats] = useState('Em aberto')
    const [complement, setComplement] = useState('')


    useEffect(() => {
        async function fetchCustomers() {
            setTextOption('Nome fantasia')

            await firebase.firestore().collection('customers').get()

                .then((snapshot) => {
                    let customers = []

                    snapshot.forEach(doc => {
                        customers.push(doc.data().NomeDaEmpresa)
                    })

                    setNameCustomers(customers)
                })

                .catch(error => console.log(error))
        }

        async function fetchInfoCall() {
            await firebase.firestore().collection('calls').doc(callId).get()

                .then(doc => {
                    setTextOption(doc.data().cliente)
                    setSubject(doc.data().assunto)
                    setStats(doc.data().status)
                    setComplement(doc.data().complemento)
                })

                .catch(error => console.log(error))
        }

        if (callId) fetchInfoCall()
        else fetchCustomers()

    }, [])


    async function handleRegister(e) {
        e.preventDefault()

        await firebase.firestore().collection('calls').doc().set({
            criadoEm: new Date().toLocaleDateString('UTC'),
            cliente: textOption,
            assunto: subject,
            status: stats,
            complemento: complement ? complement : 'Complemento vazio'
        })

            .then(() => toast.success("Chamado criado com sucesso!"))

            .catch(error => {
                toast.error("Ops algo deu errado!")
                console.log(error)
            })
    }

    async function handleUpdate(e) {
        e.preventDefault()

        await firebase.firestore().collection('calls').doc(callId).update({
            assunto: subject,
            status: stats,
            complemento: complement
        })

        .then(() => toast.success("Dados atualizados com sucesso!"))

        .catch(error => {
            toast.error("Ops algo deu errado!")
            console.log(error)
        })
    }


    return (
        <div className='container'>
            <Header />

            <div className='news-calleds'>

                {callId === undefined ?
                    <Title>
                        <AiOutlinePlusCircle size={27} />
                        Novo chamado
                    </Title>
                    :
                    <Title>
                        <FiEdit size={27} />
                        Editar chamado
                    </Title>
                }

                <div className='create-newCall'>
                    <form onSubmit={callId ? handleUpdate : handleRegister}>
                        <label>
                            Cliente
                            <select onChange={(e) => setTextOption(e.target.value)} disabled={callId}>
                                <option value={textOption}>{textOption}</option>

                                {nameCustomers.map(name =>
                                    <option key={name} value={name}>{name}</option>
                                )}
                            </select>
                        </label>

                        <label>
                            Assunto
                            <select onChange={(e) => setSubject(e.target.value)}>
                                <option value='Suporte' selected={subject === 'Suporte'}>
                                    Suporte
                                </option>

                                <option value='Visita Técnica' selected={subject === 'Visita Técnica'}>
                                    Visita Técnica
                                </option>

                                <option value='Financeiro' selected={subject === 'Financeiro'}>
                                    Financeiro
                                </option>
                            </select>
                        </label>

                        <label className='margin'>
                            Status
                            <div className='stats-called'>
                                <label>
                                    <input
                                        onClick={(e) => setStats(e.target.value)}
                                        type="radio"
                                        name='radio'
                                        value="Em aberto"
                                        checked={stats === 'Em aberto'} />
                                    Em aberto
                                </label>

                                <label>
                                    <input
                                        onClick={(e) => setStats(e.target.value)}
                                        type="radio"
                                        name='radio'
                                        value="Progresso"
                                        checked={stats === 'Progresso'} />
                                    Progresso
                                </label>

                                <label>
                                    <input
                                        onClick={(e) => setStats(e.target.value)}
                                        type="radio"
                                        name='radio'
                                        value="Atendido"
                                        checked={stats === 'Atendido'} />
                                    Atendido
                                </label>
                            </div>
                        </label>

                        <label>
                            Complemento
                            <textarea
                                onChange={(e) => setComplement(e.target.value)}
                                value={complement}
                                placeholder='Descreva seu problema (opcional).'>
                            </textarea>
                        </label>

                        <button type='submit'>
                            {callId === undefined ? 'Registrar' : 'Atualizar'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default NewCall