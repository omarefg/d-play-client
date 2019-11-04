import React, { useState } from 'react'
import ItemsCarousel from 'react-items-carousel'
import PropTypes from 'prop-types'
import { useWindowDimensions } from '../hooks'
import { Card } from './Card'
import { CarouselChevron } from './CarouselChevron'
import { AddIcon } from '../icons'

import styles from '../styles/components/CardsSection.module.scss'

export const CardsSection = props => {
    const [state, setState] = useState({ index: 0, checked: false })
    const { width } = useWindowDimensions()
    const numberOfCards = Math.ceil(width / 200) - 1

    const { title, cards, onClick, isForPlaylists, addPlaylist } = props
    const { index, checked } = state

    const onMouseEnter = () => setState(state => ({ ...state, checked: true }))
    const onMouseLeave = () => setState(state => ({ ...state, checked: false }))
    const requestToChangeActive = index => setState(state => ({ ...state, index }))

    return (
        <div
            className={styles['cards-section__container']}
        >
            <h3>{title}</h3>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <ItemsCarousel
                    gutter={12}
                    chevronWidth={60}
                    numberOfCards={numberOfCards}
                    slidesToScroll={1}
                    activeItemIndex={index}
                    requestToChangeActive={requestToChangeActive}
                    rightChevron={<CarouselChevron checked={checked} chevron='>'/>}
                    leftChevron={<CarouselChevron checked={checked} chevron='<'/>}
                    classes={{
                        itemsWrapper: styles['cards-section__itemsWrapper'],
                        itemsInnerWrapper: styles['cards-section__itemsInnerWrapper'],
                        itemWrapper: styles['cards-section__itemWrapper'],
                    }}
                >
                    {isForPlaylists && (
                        <div className={styles['cards-section__add-playlist-container']}>
                            <AddIcon
                                className='icon__container--add-playlist-control'
                                onClick={addPlaylist}
                            />
                            <p>Nueva lista</p>
                        </div>
                    )}
                    {cards.map(card => {
                        const title = card.name || card.title
                        const artist = card.artists ? card.artists[0].name : title
                        const album = card.artists ? card.name : ''
                        const image = card.images ? card.images[0].url : card.image

                        return (
                            <Card
                                key={card.id}
                                src={image}
                                title={title}
                                artist={artist}
                                album={album}
                                onClick={() => onClick(card)}
                            />
                        )
                    })}
                </ItemsCarousel>
            </div>
        </div>
    )
}

CardsSection.propTypes = {
    cards: PropTypes.array,
}

CardsSection.defaultProps = {
    cards: [],
}
