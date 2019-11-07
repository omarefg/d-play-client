import React from 'react'
import photo from '../assets/Containers/Register/manu.png'
import styles from '../styles/components/CardArtist.module.scss'

export const CardArtist = props => {
    return (
        <div className={styles['container']}>
            <div className={styles['img-artist']}>
                <img src={photo} alt='artista'/>
            </div>
            <div className={styles['biography']}>
                <h1>Manu Chao</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia dolorem reiciendis dicta obcaecati sit! Ex temporibus error neque non esse quas, labore quibusdam dolorum ipsam sequi, eaque soluta, officia perspiciatis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia dolorem reiciendis dicta obcaecati sit! Ex temporibus error neque non esse quas, labore quibusdam dolorum ipsam sequi, eaque soluta, officia perspiciatis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia dolorem reiciendis dicta obcaecati sit! Ex temporibus error neque non esse quas, labore quibusdam dolorum ipsam sequi, eaque soluta, officia perspiciatis.</p>
                <div className={styles['show']}>
                    <p>Mostrar más</p>
                    <p>Mostrar menos</p>
                </div>
            </div>
        </div>
    )
}
