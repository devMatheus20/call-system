import React from 'react'
import './styles.css'


export default function SignForm({ children, ...props }) {
    return (
        <form {...props} className="signForm">
            {children}
        </form>
    )
}