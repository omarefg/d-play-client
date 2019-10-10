import React from 'react'

import styles from '../styles/components/PlayerArtistInfo.module.scss'

export const PlayerArtistInfo = () => {
    return (
        <div className={styles['player-artist-info__container']}>
            <div className={styles['artist-info']}>
                <p>One to One</p>
                <p>Foo Fighters</p>
                <p>skin and bones</p>
            </div>
            <div>
                <img src='https://material-ui.com/static/images/cards/contemplative-reptile.jpg' alt='artist'/>
            </div>
        </div>
    )
}
