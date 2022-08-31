import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import * as S from './styles.js'
import firebase from '../../Services/firebaseConnection'

import { BiMessageDots, BiSearch, BiEditAlt } from 'react-icons/bi'
import { HiPlusSm } from 'react-icons/hi'

import Header from '../../Components/Header'
import Content from '../../Components/Content'
import Title from '../../Components/Title'
import Modal from '../../Components/Modal'


export default function Dashboard() {

    const history = useHistory()

    const [calleds, setCalleds] = useState([])
    const [callDetails, setCallDetails] = useState(null)

    const [boolean, setBoolean] = useState(false)
    const [loadingCalleds, setLoadingCalleds] = useState(true)
    const [loadingMore, setLoadingMore] = useState(false)
    const [isEmpty, setIsEmpty] = useState(false)
    const [lastDocs, setLastDocs] = useState()

    const listRef = firebase.firestore().collection('calls').orderBy('criadoEm', 'desc')


    useEffect(() => {

        async function loadCalleds() {

            listRef.limit(5).get()

                .then((snapshot) => {
                    updateState(snapshot)
                })

                .catch(error => {
                    setLoadingMore(false)
                    console.log(error)
                })

            setLoadingCalleds(false)
        }

        loadCalleds()
    }, [])


    function updateState(snapshot) {
        
        const isCollectionEmpty = snapshot.size === 0

        if (!isCollectionEmpty) {
            let calls = []

            snapshot.forEach((doc) => {
                calls.push({
                    id: doc.id,
                    created: doc.data().criadoEm,
                    client: doc.data().cliente,
                    clietId: doc.data().clienteId,
                    subject: doc.data().assunto,
                    stats: doc.data().status,
                    complement: doc.data().complemento,
                    userId: doc.data().userId
                })
            })

            const lastDoc = snapshot.docs[snapshot.docs.length - 1]


            setCalleds(calleds => [...calleds, ...calls])
            setLastDocs(lastDoc)

        } else {
            setIsEmpty(true)
        }

        setLoadingMore(false)
    }


    async function handleMore() {
        setLoadingMore(true)

        await listRef.startAfter(lastDocs).limit(5).get()

        .then((snapshot) => {
            updateState(snapshot)
        })

        .catch(error => {
            console.log(error)
        })

        setLoadingMore(false)
    }


    function togglePostModal(call) {

        setBoolean(!boolean)

        setCallDetails({
            client: call.client,
            subject: call.subject,
            stats: call.stats,
            create: call.created,
            complement: call.complement
        })

    }


    if (loadingCalleds) {
        return (
            <div className='flex'>
                <Header />

                <Content>
                    <Title>
                        <BiMessageDots color="#000" size={27} />
                        Chamados
                    </Title>

                    <S.InfoCalled>
                        <span>Buscando chamados...</span>
                    </S.InfoCalled>
                </Content>
            </div>
        )
    }

    return (
        <div className='flex'>
            <Header />

            <Content>
                <Title>
                    <BiMessageDots color="#000" size={27} />
                    Chamados
                </Title>

                {calleds.length === 0 ?
                    <S.InfoCalled>
                        <span>Nenhum chamado registrado!</span>
                        <Link to="/newcall" className='new-call'>
                            <HiPlusSm size={25} color="#fff" />
                            Novo chamado
                        </Link>
                    </S.InfoCalled>
                    :

                    <Link to="/newcall" className='new-call'>
                        <HiPlusSm size={25} color="#fff" />
                        Novo chamado
                    </Link>
                }

                {calleds.length > 0 &&
                    <>
                        <S.Table>
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
                                            <span
                                                style={{ backgroundColor: call.stats === "Em aberto" ? "#5cb85b" : "#999" }}
                                                className="badge"
                                            >
                                                {call.stats}
                                            </span>
                                        </td>
                                        <td data-label="Cadastrado em">{call.created}</td>
                                        <td data-label="#" className='actions'>
                                            <button className='search'>
                                                <BiSearch
                                                    color='#fff'
                                                    size={20}
                                                    onClick={() => togglePostModal(call)} />
                                            </button>
                                            <button className='edit' onClick={() => history.push(`/newcall/${call.id}`)}>
                                                <BiEditAlt color='#fff' size={20} />
                                            </button>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </S.Table>

                        {loadingMore && <h4 style={{ textAlign: 'center', marginTop: '20px' }}>Buscando dados...</h4>}
                        {!loadingMore && !isEmpty && <S.ButtonMore onClick={handleMore}>Buscar mais</S.ButtonMore>}
                    </>
                }


                {boolean && <Modal content={callDetails} close={togglePostModal} />}

            </Content>
        </div>
    )
}
