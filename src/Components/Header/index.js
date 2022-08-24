import React, { useContext } from "react";
import { Link } from "react-router-dom";
import * as S from './styles.js'

import { AuthContext } from '../../Context/auth'

import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BsGear } from 'react-icons/bs'

import avatar from '../../Assets/user.png'


export default function Header() {

    const { user } = useContext(AuthContext)

    return (
        <S.SideBar>

            <S.ImageUser className="imgUser">
                <img
                    src={user.avatarUrl === null ? avatar : user.avatarUrl}
                    alt="Imagem do Perfil"
                />
            </S.ImageUser>

            <S.Links className="links">

                <Link to="/dashboard">
                    <AiOutlineHome color="#fff" size={25} />
                    <span>Chamados</span>
                </Link>

                <Link to="/customers">
                    <AiOutlineUser color="#fff" size={25} />
                    <span>Clientes</span>
                </Link>

                <Link to="/profile">
                    <BsGear color="#fff" size={25} />
                    <span>Perfil</span>
                </Link>

            </S.Links>

        </S.SideBar>
    )
}

