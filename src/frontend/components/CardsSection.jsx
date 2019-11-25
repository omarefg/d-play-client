import React, { useState } from 'react'
import ItemsCarousel from 'react-items-carousel'
import PropTypes from 'prop-types'
import { useWindowDimensions } from '../hooks'
import { Card } from './Card'
import { CarouselChevron } from './CarouselChevron'
import { RightChevron, LeftChevron } from '../icons'

import styles from '../styles/components/CardsSection.module.scss'

export const CardsSection = props => {
    const [state, setState] = useState({ index: 0, checked: false })
    const { width } = useWindowDimensions()
    const numberOfCards = Math.ceil(width / 140) - 1

    let chevronWidth = 60

    if (width <= 600) chevronWidth = 0

    const {
        title,
        cards,
        onClick,
        withMenu,
        onDelete,
    } = props
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
                    showSlither
                    gutter={3}
                    chevronWidth={chevronWidth}
                    numberOfCards={numberOfCards}
                    slidesToScroll={1}
                    activeItemIndex={index}
                    requestToChangeActive={requestToChangeActive}
                    rightChevron={<CarouselChevron checked={checked} chevron={<RightChevron/>}/>}
                    leftChevron={<CarouselChevron checked={checked} chevron={<LeftChevron/>}/>}
                    classes={{
                        itemsWrapper: styles['cards-section__itemsWrapper'],
                        itemsInnerWrapper: styles['cards-section__itemsInnerWrapper'],
                        itemWrapper: styles['cards-section__itemWrapper'],
                    }}
                    enablePlaceholder
                    placeholderItem={<Card isLoading/>}
                    numberOfPlaceholderItems={50}
                >
                    {cards.map((card, index) => {
                        const title = card.name
                        const artist = card.artists ? card.artists[0].name : title
                        const album = card.artists ? card.name : ''
                        const image = card.images ? card.images[0].url : card.image
                        const key = card.id || card.name

                        return (
                            <Card
                                key={key}
                                src={image}
                                title={title}
                                artist={artist}
                                album={album}
                                onClick={() => onClick(card)}
                                onDelete={() => onDelete(card)}
                                withMenu={withMenu}
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
