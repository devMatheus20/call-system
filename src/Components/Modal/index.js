import React from 'react'
import * as S from './styles.js'

import { IoMdClose } from 'react-icons/io'



export default function Modal({ content, close }) {
    return (
        <S.ContainerModal>

            <S.Modal>
                <h2>Detalhes do chamado</h2>

                <S.ListModal>

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
                        <span
                            style={{ backgroundColor: content.stats === "Em aberto" ? "#5cb85b" : "#999" }}
                            className="badge"
                        >
                            {content.stats}
                        </span>
                    </li>

                    <li>
                        <p>Cadastrado em:</p>
                        <span>{content.create}</span>
                    </li>

                </S.ListModal>

                <button
                    onClick={close}>
                    <IoMdClose size={25} />
                    Voltar
                </button>
            </S.Modal>

        </S.ContainerModal>
    )

}
