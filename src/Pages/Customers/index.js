import React from "react";
import './styles.css'

import { AiOutlineUser } from 'react-icons/ai'

import Title from "../../Components/Title";
import Header from "../../Components/Header";

function Customers() {
    return (
        <div className="container">
            <Header />

            <div className="customers">
                <Title>
                    <AiOutlineUser size={27} />
                    Clientes
                </Title>

                <div className="info-customers">
                    <form className="form-customers">
                        <label>
                            Nome Fantasia
                            <input placeholder="Nome da sua empresa" />
                        </label>

                        <label>
                            CNPJ
                            <input placeholder="Seu CNPJ" />
                        </label>

                        <label>
                            Endereço
                            <input placeholder="Seu endereço" />
                        </label>

                        <button>
                            Cadastrar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Customers;