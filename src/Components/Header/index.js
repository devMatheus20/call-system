import React, { useContext } from "react";
import './styles.css'
import { Link } from "react-router-dom";
import { AuthContext } from '../../Context/auth'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BsGear } from 'react-icons/bs'
import Avatar from '../../Assets/user.png'


function Header() {

    const { user } = useContext(AuthContext)

    return (
        <header>
            <div className="imgUser">
                <img src={user.avatarUrl === null ? Avatar : user.avatarUrl} alt="Imagem do Perfil" />
            </div>

            <div className="links">
                <Link href="/dashboard">
                    <AiOutlineHome color="#fff" size={25}  />
                    <span>Chamados</span>
                </Link>

                <Link href="/customers">
                    <AiOutlineUser color="#fff" size={25}  />
                    <span>Clientes</span>
                </Link>

                <Link href="/profile">
                    <BsGear color="#fff" size={25} />
                    <span>Configurações</span>
                </Link>
            </div>
        </header>
    )
}

export default Header