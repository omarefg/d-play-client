import React, { useState } from 'react'
import ItemsCarousel from 'react-items-carousel'
import { useWindowDimensions } from '../hooks'
import { Card } from './Card'
import { CarouselChevron } from './CarouselChevron'

import styles from '../styles/components/CardsSection.module.scss'

export const CardsSection = props => {
    const [state, setState] = useState({ index: null, checked: false })
    const { width } = useWindowDimensions()
    const numberOfCards = Math.ceil(width / 200) - 1

    const { title } = props
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
                    <Card
                        artist='Reptile'
                        title='Under the sun'
                        src='https://material-ui.com/static/images/cards/contemplative-reptile.jpg'
                        album='Cold blood'
                    />
                    <Card
                        artist='Reptile'
                        title='Under the sun'
                        src='https://material-ui.com/static/images/cards/contemplative-reptile.jpg'
                        album='Cold blood'
                    />
                    <Card
                        artist='Reptile'
                        title='Under the sun'
                        src='https://material-ui.com/static/images/cards/contemplative-reptile.jpg'
                        album='Cold blood'
                    />
                    <Card
                        artist='Reptile'
                        title='Under the sun'
                        src='https://material-ui.com/static/images/cards/contemplative-reptile.jpg'
                        album='Cold blood'
                    />
                    <Card
                        artist='Reptile'
                        title='Under the sun'
                        src='https://material-ui.com/static/images/cards/contemplative-reptile.jpg'
                        album='Cold blood'
                    />
                    <Card
                        artist='Reptile'
                        title='Under the sun'
                        src='https://material-ui.com/static/images/cards/contemplative-reptile.jpg'
                        album='Cold blood'
                    />
                    <Card
                        artist='Reptile'
                        title='Under the sun'
                        src='https://material-ui.com/static/images/cards/contemplative-reptile.jpg'
                        album='Cold blood'
                    />
                    <Card
                        artist='Reptile'
                        title='Under the sun'
                        src='https://material-ui.com/static/images/cards/contemplative-reptile.jpg'
                        album='Cold blood'
                    />
                    <Card
                        artist='Reptile'
                        title='Under the sun'
                        src='https://material-ui.com/static/images/cards/contemplative-reptile.jpg'
                        album='Cold blood'
                    />
                    <Card
                        artist='Reptile'
                        title='Under the sun'
                        src='https://material-ui.com/static/images/cards/contemplative-reptile.jpg'
                        album='Cold blood'
                    />
                    <Card
                        artist='Reptile'
                        title='Under the sun'
                        src='https://material-ui.com/static/images/cards/contemplative-reptile.jpg'
                        album='Cold blood'
                    />
                    <Card
                        artist='Reptile'
                        title='Under the sun'
                        src='https://material-ui.com/static/images/cards/contemplative-reptile.jpg'
                        album='Cold blood'
                    />
                </ItemsCarousel>
            </div>
        </div>
    )
}
