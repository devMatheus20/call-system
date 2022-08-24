import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import firebase from '../../Services/firebaseConnection'

import { toast } from 'react-toastify'

import { AiOutlinePlusCircle } from 'react-icons/ai'
import { FiEdit } from 'react-icons/fi'

import Title from '../../Components/Title'
import Header from '../../Components/Header'
import Content from '../../Components/Content'
import Form from '../../Components/PrivateForm'
import Label from '../../Components/PrivateLabel'
import Button from '../../Components/PrivateButton'
import Stats from '../../Components/FormStatsCall'


export default function NewCall() {

    const { callId } = useParams()

    const [nameCustomers, setNameCustomers] = useState([])

    const [textOption, setTextOption] = useState('Carregando...')

    const [subject, setSubject] = useState('Suporte')
    const [stats, setStats] = useState('Aberto')
    const [complement, setComplement] = useState('')


    useEffect(() => {
        async function fetchCustomers() {
            setTextOption('Nome fantasia')

            await firebase.firestore().collection('customers').get()

                .then((snapshot) => {
                    console.log(snapshot)
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
            complemento: complement ? complement : ''
        })

            .then(() => toast.success("Chamado registrado com sucesso!"))

            .catch(error => {
                toast.error("Ops algo deu errado!")
                console.log(error)
            })
    }

    async function handleUpdate(e) {
        e.preventDefault()

        await firebase.firestore().collection('calls').doc(callId)
            .update({
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
        <div className='flex'>

            <Header />

            <Content>

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

                <Form onSubmit={callId ? handleUpdate : handleRegister}>

                    <Label>Cliente</Label>
                    <select onChange={(e) => setTextOption(e.target.value)} disabled={callId}>
                        <option value={textOption}>{textOption}</option>

                        {nameCustomers.map((name, index) =>
                            <option key={index} value={name}>{name}</option>
                        )}
                    </select>


                    <Label>Assunto</Label>
                    <select onChange={(e) => setSubject(e.target.value)} value={subject}>
                        <option value='Suporte'>
                            Suporte
                        </option>

                        <option value='Visita Técnica'>
                            Visita Técnica
                        </option>

                        <option value='Financeiro'>
                            Financeiro
                        </option>
                    </select>


                    <Label>Status</Label>
                    <Stats>
                        <label>
                            <input
                                onChange={(e) => setStats(e.target.value)}
                                type="radio"
                                name='radio'
                                value="Aberto"
                                checked={stats === 'Aberto'}
                            />
                            Aberto
                        </label>

                        <label>
                            <input
                                onChange={(e) => setStats(e.target.value)}
                                type="radio"
                                name='radio'
                                value="Progresso"
                                checked={stats === 'Progresso'}
                            />
                            Progresso
                        </label>

                        <label>
                            <input
                                onChange={(e) => setStats(e.target.value)}
                                type="radio"
                                name='radio'
                                value="Atendido"
                                checked={stats === 'Atendido'}
                            />
                            Atendido
                        </label>
                    </Stats>


                    <Label>Complemento</Label>
                    <textarea
                        onChange={(e) => setComplement(e.target.value)}
                        value={complement}
                        placeholder='Descreva seu problema (opcional).'
                        maxLength={170}
                    >
                    </textarea>


                    <Button type='submit'>
                        {callId === undefined ? 'Registrar' : 'Atualizar'}
                    </Button>
                </Form>

            </Content>
        </div>
    )
}

