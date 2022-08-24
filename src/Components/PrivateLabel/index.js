import React from 'react'
import * as S from './styles.js'


export default function Label({children, ...props}){
    return (
        <S.Label {...props}>
            {children}
        </S.Label>
    )
}