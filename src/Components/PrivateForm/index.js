import React from 'react'
import './styles.css'

export default function Form({ children, ...props }) {
    return (
        <form {...props}>
            {children}
        </form>
    )
}

