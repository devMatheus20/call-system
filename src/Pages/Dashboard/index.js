import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

import { BiMessageDots, BiSearch, BiEditAlt } from 'react-icons/bi'
import { HiPlusSm } from 'react-icons/hi'

import Title from '../../Components/Title'
import Header from '../../Components/Header'

function Dashboard() {

    const [calleds, setCalleds] = useState([1])

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
                        <tr>
                            <td data-label="Cliente">Sujeito</td>
                            <td data-label="Assunto">Suporte</td>
                            <td data-label="Status">
                                <span className='stats'>Em aberto</span>
                            </td>
                            <td data-label="Cadastrado em">02/05/2022</td>
                            <td data-label="#" className='actions'>
                                <button className='search'>
                                    <BiSearch color='#fff' size={20} />
                                </button>
                                <button className='edit'>
                                    <BiEditAlt color='#fff' size={20} />
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Dashboard