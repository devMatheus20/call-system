import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './styles.css'
import firebase from '../../Services/firebaseConnection'

import { BiMessageDots, BiSearch, BiEditAlt } from 'react-icons/bi'
import { HiPlusSm } from 'react-icons/hi'

import Title from '../../Components/Title'
import Header from '../../Components/Header'

function Dashboard() {

    const [calleds, setCalleds] = useState([])

    const history = useHistory()

    useEffect(() => {
        async function fetchCalleds() {
            firebase.firestore().collection('calls').orderBy('criadoEm', 'asc')
                .onSnapshot((snapshot) => {
                    let calls = []

                    snapshot.forEach((doc) => {
                        calls.push({
                            id: doc.id,
                            created: doc.data().criadoEm,
                            client: doc.data().cliente,
                            subject: doc.data().assunto,
                            stats: doc.data().status,
                            complement: doc.data().complemento
                        })
                    })

                    setCalleds(calls)
                })
        }

        fetchCalleds()
    }, [])

    return (
        <div className='container'>
            <Header />

            <div className='calleds'>
                <Title>
                    <BiMessageDots color="#000" size={27} />
                    Chamados
                </Title>

                {calleds.length === 0 ?
                    <div className='info-calleds'>
                        <span>Nenhum chamado registrado...</span>
                        <Link to="/newcall" className='new'>
                            <HiPlusSm size={25} color="#fff" />
                            Novo chamado
                        </Link>
                    </div>

                    :


                    <Link to="/newcall" className='new'>
                        <HiPlusSm size={25} color="#fff" />
                        Novo chamado
                    </Link>
                }

                {calleds.length > 0 &&
                    <table>
                        <thead>
                            <tr>
                                <th scope='col'>Cliente</th>
                                <th scope='col'>Assunto</th>
                                <th scope='col'>Status</th>
                                <th scope='col'>Cadastrado em</th>
                                <th scope='col'>#</th>
                            </tr>
                        </thead>
                        <tbody>
                            {calleds.map((call) => 
                                <tr key={call.id}>
                                    <td data-label="Cliente">{call.client}</td>
                                    <td data-label="Assunto">{call.subject}</td>
                                    <td data-label="Status">
                                        <span className='stats'>{call.stats}</span>
                                    </td>
                                    <td data-label="Cadastrado em">{call.created}</td>
                                    <td data-label="#" className='actions'>
                                        <button className='search'>
                                            <BiSearch color='#fff' size={20} />
                                        </button>
                                        <button className='edit' onClick={() => history.push(`/newcall/${call.id}`)}>
                                            <BiEditAlt color='#fff' size={20} />
                                        </button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                }
            </div>
        </div>
    )
}

export default Dashboard