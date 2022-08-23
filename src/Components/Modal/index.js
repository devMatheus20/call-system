import React from 'react'
import './styles.css'

import { IoMdClose } from 'react-icons/io'



export default function Modal({ content, close }) {

    return (
        <div className='modal'>
            <div>
                <h2>Detalhes do chamado</h2>

                <ul>
                    <li>
                        <p>Cliente:</p>
                        <span>{content.client}</span>
                    </li>
                    <li>
                        <p>Assunto:</p>
                        <span>{content.subject}</span>
                    </li>
                    <li>
                        <p>Status:</p>
                        <span className='stats'>
                            {content.stats}
                        </span>
                    </li>
                    <li>
                        <p>Cadastrado em:</p>
                        <span>{content.create}</span>
                    </li>
                </ul>

                <button
                    onClick={close}>
                    <IoMdClose size={25} />
                    Voltar
                </button>
            </div>
        </div>
    )

}
