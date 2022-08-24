import React, { useContext } from 'react'
import * as S from './styles.js'

import { AuthContext } from '../../Context/auth'



export default function Logout() {
    
    const { logout } = useContext(AuthContext)

    return(
        <S.ContainerButton>
            <button onClick={logout}>Sair</button>
        </S.ContainerButton>
    )
}
