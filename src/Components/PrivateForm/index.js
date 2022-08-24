import React from 'react'
import * as S from './styles.js'

export default function Form({ children, ...props }) {
    return (
        <S.Form {...props}>
            {children}
        </S.Form>
    )
}

