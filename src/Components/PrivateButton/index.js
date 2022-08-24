import React from 'react'
import * as S from './styles.js'


export default function PrivateButton({ children, ...props }) {
    return (
        <S.Button
            className="formButton"
            {...props}
        >
            {children}
        </S.Button>
    )
}