import React, { useContext, useState } from 'react'
import './styles.css'

import { BiMessageDots } from 'react-icons/bi'
import { HiPlusSm } from 'react-icons/hi'

import Title from '../../Components/Title'
import Header from '../../Components/Header'

function Dashboard() {

    const [calleds, setCalleds] = useState([])

    return (
        <div className='container'>
            <Header />

            <div className='calleds'>
                <Title>
                    <BiMessageDots color="#000" size={27} />
                    Atendimentos
                </Title>

                {calleds.length === 0 &&
                    <div className='info-calleds'>
                        <span>Nenhum chamado registrado...</span>
                        <button>
                            <HiPlusSm size={25} color="#fff" />
                            Novo chamado
                        </button>
                    </div>
                }
            </div>

        </div>
    )
}

export default Dashboard