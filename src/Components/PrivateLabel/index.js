import React from 'react'
import './styles.css'


export default function Label({children, ...props}){
    return (
        <label {...props}>
            {children}
        </label>
    )
}