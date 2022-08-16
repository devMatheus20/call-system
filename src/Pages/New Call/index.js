import React, { useEffect, useState } from 'react'
import './styles.css'
import firebase from '../../Services/firebaseConnection'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

import { AiOutlinePlusCircle } from 'react-icons/ai'

import Title from '../../Components/Title'
import Header from '../../Components/Header'

function NewCall() {

    const [nameCustomers, setNameCustomers] = useState([])

    const [name, setName] = useState('Nome fantasia')
    const [subject, setSubject] = useState('Suporte')
    const [stats, setStats] = useState('Em aberto')
    const [complement, setComplement] = useState('')


    useEffect(() => {
        async function fetchCustomers() {
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

        fetchCustomers()
    }, [])

    async function handleRegister(e) {
        e.preventDefault()

        if (name === 'Nome fantasia') {
            toast.info("Escolha um cliente válido!")
        }

        await firebase.firestore().collection('calls').doc().set({
            criadoEm: new Date().toLocaleDateString('UTC'),
            cliente: name,
            assunto: subject,
            status: stats,
            complemento: complement ? complement : 'Complemento vazio'
        })

            .then(() => toast.success("Chamado criado com sucesso!"))

            .catch(error => console.log(error))
    }


    return (
        console.log(name, stats, complement, subject),
        <div className='container'>
            <Header />

            <div className='news-calleds'>
                <Title>
                    <AiOutlinePlusCircle size={27} />
                    Novo chamado
                </Title>

                <div className='create-newCall'>
                    <form onSubmit={handleRegister}>
                        <label>
                            Cliente
                            <select onChange={(e) => setName(e.target.value)}>
                                <option value={name}>{name}</option>
                                {nameCustomers.map(name =>
                                    <option key={name} value={name}>{name}</option>
                                )}
                            </select>
                        </label>

                        <label>
                            Assunto
                            <select onChange={(e) => setSubject(e.target.value)}>
                                <option value='Suporte'>Suporte</option>
                                <option value='Visita Técnica'>Visita Técnica</option>
                                <option value='Financeiro'>Financeiro</option>
                            </select>
                        </label>

                        <label className='margin'>
                            Status
                            <div className='stats-called'>
                                <label>
                                    <input onClick={(e) => setStats(e.target.value)} type="radio" name='radio' value="Em aberto" defaultChecked={true} />
                                    Em aberto
                                </label>

                                <label>
                                    <input onClick={(e) => setStats(e.target.value)} type="radio" name='radio' value="Progresso" />
                                    Progresso
                                </label>

                                <label>
                                    <input onClick={(e) => setStats(e.target.value)} type="radio" name='radio' value="Atendido" />
                                    Atendido
                                </label>
                            </div>
                        </label>

                        <label>
                            Complemento
                            <textarea onChange={(e) => setComplement(e.target.value)} placeholder='Descreva seu problema (opcional).'></textarea>
                        </label>

                        <button type='submit'>
                            Registrar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default NewCall