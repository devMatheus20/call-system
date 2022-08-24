import React from 'react'
import * as S from './styles.js'



export default function Content({ children }) {
    return(
        <S.Content className='content'>
            {children}
        </S.Content>
    )
}