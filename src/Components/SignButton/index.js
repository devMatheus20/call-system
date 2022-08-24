import React from 'react'
import * as S from './styles.js'


export default function SignButton({ children }) {
    return(
        <S.Button>
            {children}
        </S.Button>
    )
}