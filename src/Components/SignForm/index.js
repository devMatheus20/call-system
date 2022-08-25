import React from 'react'
import * as S from './styles.js'


export default function SignForm({ children, ...props }) {
    return (
        <S.Form {...props}>
            {children}
        </S.Form>
    )
}