import React from 'react'
import styles from '../styles/components/Footer.module.scss'

export const Footer = props => {

    return (
        <footer className={styles['footer']}>
            <a href='/'>Terminos y condiciones de uso</a>
            <a href='/'>Declaración de privacidad</a>
            <a href='/'>Cookies</a>
            <a href='/'>Ayuda</a>
        </footer>
    )
}
