import React from 'react'
import photo from '../assets/Containers/Register/profile-picture.png'
import { Header, Button, Footer, UserDataForm } from '../components'

import styles from '../styles/pages/UserData.module.scss'

export const UserData = () => {
    return (
        <div className={styles['user--data-container']}>
            <Header/>
            <div className={styles['user--data-container-profile']}>
                <img className={styles['img-profile']} src={photo} alt='monalisa'/>
                <h1 className={styles.nameuser}>Mirka Sopovitch</h1>
                <Button className='btn--user-data'>Modificar mi Perfil</Button>
                <Button className='btn--user-data'>Mi Suscripción</Button>
                <Button className='btn--user-data'>Cerrar Sesión</Button>
                <UserDataForm/>
            </div>
            <Footer/>
        </div>
    )
}
