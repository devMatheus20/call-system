import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

import { BiMessageDots } from 'react-icons/bi'
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
                    Atendimentos
                </Title>

                {calleds.length === 0 ?
                    <div className='info-calleds'>
                        <span>Nenhum chamado registrado...</span>
                        <Link to="/new" className='new'>
                            <HiPlusSm size={25} color="#fff" />
                            Novo chamado
                        </Link>
                    </div>

                    :


                    <Link to="/new" className='new'>
                        <HiPlusSm size={25} color="#fff" />
                        Novo chamado
                    </Link>


                }
            </div>

        </div>
    )
}

export default Dashboard