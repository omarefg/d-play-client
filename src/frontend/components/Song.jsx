import React from 'react'
import photo from '../assets/Containers/Register/play.svg'

import styles from '../styles/components/Song.module.scss'

export const Song = props => {
    return (
        <div>
            <div className={styles['artist--top-song-title']}>
                <h1>Canciones mas escuchadas de ARTISTA</h1>
                <div className={styles['artist--top-song-title-buttons-container']}>
                    <button type='button'>
                        <img src={photo} alt='add'/>
                    </button>
                    <button type='button'>
                        <img src={photo} alt='adds'/>
                    </button>
                </div>
            </div>

            <div className={styles['artist--top-song-details']}>

                <div className={styles['artist--top-song-details-button']}>
                    <button type='button'>
                        <img src={photo} alt='play'/>
                    </button>
                    <button type='button'>
                        <img src={photo} alt='add'/>
                    </button>
                </div>
                <div className={styles['artist--top-song-details-info']}>
                    <p>Razor</p>
                    <a href='/'>
                        Foo Figthers
                    </a>
                    <a href='/'>
                        Skin and Bones
                    </a>
                </div>
            </div>
        </div>
    )
}
