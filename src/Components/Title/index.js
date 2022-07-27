import React from 'react'
import './styles.css'


function Title({ children }) {
    return (
        <h2 className='title'>{children}</h2>
    )
}

export default Title;