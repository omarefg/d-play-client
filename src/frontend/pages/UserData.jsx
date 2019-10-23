import React from 'react'
import photo from '../assets/Containers/Register/monalisa.jpg'
import { Button, Header, Search, CardsSection, ListItem, Player } from '../components'

import styles from '../styles/pages/UserData.module.scss'

const UserData = () => {
    return (
        <div className={styles['main__container']}>
            <Header/>
            <img className={styles['img-profile']} src={photo} alt='monalisa'/>
            <h1 className={styles.nameuser}>Monalisa</h1>
            <Button className='btn--user-data'>Mi Perfi</Button>
            <Button className='btn--user-data'>Mi Suscripción</Button>
            <Button className='btn--user-data'>Mi Perfil</Button>
            <Button className='btn--user-data'>Cerrar Sesión</Button>
            <Button className='btn--user-data'>Mi Perfil</Button>
        </div>
    )
}

export default UserData
