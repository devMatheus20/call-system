import React from 'react'
import * as S from './styles.js'

import { FaSpinner } from 'react-icons/fa'


export default function Loading() {
    return (
        <S.Icon>
            <FaSpinner size={20} />
        </S.Icon>
    )
}
