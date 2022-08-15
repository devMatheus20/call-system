import React, { useEffect, useState } from 'react'
import './styles.css'
import firebase from '../../Services/firebaseConnection'

import { AiOutlinePlusCircle } from 'react-icons/ai'

import Title from '../../Components/Title'
import Header from '../../Components/Header'

function NewCall() {


    return (
        <div className='container'>
            <Header />

            <div className='news-calleds'>
                <Title>
                    <AiOutlinePlusCircle size={27} />
                    Novo chamado
                </Title>

                <div className='create-newCall'>
                    <form>
                        <label>
                            Cliente
                            <select>
                                <option>Teste 1</option>
                                <option>Teste 2</option>
                            </select>
                        </label>

                        <label>
                            Assunto
                            <select>
                                <option>Teste 1</option>
                                <option>Teste 2</option>
                            </select>
                        </label>

                        <label className='margin'>
                            Status
                            <div className='stats-called'>
                                <label>
                                    <input type="radio" name='radio' value="Em aberto" checked={true}/>
                                    Em aberto
                                </label>

                                <label>
                                    <input type="radio" name='radio' value="Progresso"/>
                                    Progresso
                                </label>

                                <label>
                                    <input type="radio" name='radio' value="Atendido"/>
                                    Atendido
                                </label>
                            </div>
                        </label>

                        <label>
                            Complemento
                            <textarea placeholder='Descreva seu problema (opcional).'></textarea>
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