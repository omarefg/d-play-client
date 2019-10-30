import React from 'react'

import styles from '../styles/components/PlayerArtistInfo.module.scss'

export const PlayerArtistInfo = props => {
    const { artist, name, album, img } = props
    if (artist || name || album || img) {
        return (
            <div className={styles['player-artist-info__container']}>
                <div className={styles['artist-info']}>
                    {name && <p>{name}</p>}
                    {artist && <p>{artist}</p>}
                    {album && <p>{album}</p>}
                </div>
                {img && (
                    <div>
                        <img src={img} alt='artist'/>
                    </div>
                )}
            </div>
        )
    }
    return null
}
