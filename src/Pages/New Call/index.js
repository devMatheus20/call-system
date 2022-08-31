import React, { useEffect, useState, useContext } from 'react'
import { useParams, useHistory } from 'react-router-dom'

import firebase from '../../Services/firebaseConnection'
import { AuthContext } from '../../Context/auth'

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
import Loading from '../../Components/Loading'

export default function NewCall() {

    const history = useHistory()

    const { callId } = useParams()
    const { user } = useContext(AuthContext)

    const [customers, setCustomers] = useState([])
    const [customerSelected, setCustomerSelected] = useState(0)

    const [subject, setSubject] = useState('Suporte')
    const [stats, setStats] = useState('Aberto')
    const [complement, setComplement] = useState('')

    const [loadingRegister, setLoadingRegister] = useState(false)
    const [loadingCustomers, setLoadingCustomers] = useState(true)


    useEffect(() => {
        if (callId) loadInfoCall()
        else loadCustomers()
        // eslint-disable-next-line
    }, [])

    async function loadCustomers() {

        setLoadingCustomers(true)

        await firebase.firestore().collection('customers').get()

            .then((snapshot) => {
                let customers = []

                snapshot.forEach(doc => {
                    customers.push({
                        id: doc.id,
                        name: doc.data().NomeDaEmpresa,
                    })
                })

                if (customers.length === 0) {
                    toast.info('Nenhuma empresa encontrada!\nCadastre sua empresa na página de "Clientes".')
                    setCustomers(['Nome fantasia'])
                    return
                }

                setCustomers(customers)
                setLoadingCustomers(false)
            })

            .catch(error => {
                setLoadingCustomers(false)
                setCustomers(['Error'])
                console.log(error)
            })
    }

    async function loadInfoCall() {

        setLoadingCustomers(true)

        await firebase.firestore().collection('calls').doc(callId).get()

            .then(doc => {
                setCustomers([{ id: doc.id, name: doc.data().cliente }])
                setSubject(doc.data().assunto)
                setStats(doc.data().status)
                setComplement(doc.data().complemento)
                setLoadingCustomers(false)
            })

            .catch(error => {
                setLoadingCustomers(false)
                console.log(error)
            })
    }

    async function handleRegister(e) {
        e.preventDefault()

        setLoadingRegister(true)

        await firebase.firestore().collection('calls').add({
            criadoEm: new Date().toLocaleDateString('UTC'),
            cliente: customers[customerSelected].name,
            clienteId: customers[customerSelected].id,
            assunto: subject,
            status: stats,
            complemento: complement ? complement : '',
            userId: user.uid
        })

            .then(() => {
                setLoadingRegister(false)
                history.push('/dashboard')
                toast.success("Chamado registrado com sucesso!")
            })

            .catch(error => {
                setLoadingRegister(false)
                toast.error("Ops algo deu errado!")
                console.log(error)
            })
    }

    async function handleUpdate(e) {
        e.preventDefault()

        setLoadingRegister(true)

        await firebase.firestore().collection('calls').doc(callId)
            .update({
                assunto: subject,
                status: stats,
                complemento: complement
            })

            .then(() => {
                setLoadingRegister(false)
                history.push('/dashboard')
                toast.success("Dados atualizados com sucesso!")
            })

            .catch(error => {
                setLoadingRegister(false)
                toast.error("Ops algo deu errado!")
                console.log(error)
            })
    }

    function handleChangeCustomer(e) {
        const index = e.target.value

        setCustomerSelected(index)
    }


    return (
        console.log(customers),
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
                    {loadingCustomers ?
                        <input
                            className='disabled'
                            type="text"
                            value='Carregando...'
                            disabled
                        />
                        :
                        <select
                            onChange={handleChangeCustomer}
                            value={customerSelected}
                            disabled={callId}
                        >
                            {customers.map((item, index) =>
                                <option key={index} value={index}>{item.name}</option>
                            )}
                        </select>
                    }


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


                    {loadingRegister ?
                        <Button type='button'>
                            <Loading />
                        </Button>
                        :
                        <Button type='submit'>
                            {callId === undefined ? 'Registrar' : 'Atualizar'}
                        </Button>
                    }
                </Form>

            </Content>
        </div>
    )
}

