import React, { useState } from 'react'
import ItemsCarousel from 'react-items-carousel'
import { useWindowDimensions } from '../hooks'
import { Card } from './Card'
import { CarouselChevron } from './CarouselChevron'

import styles from '../styles/components/CardsSection.module.scss'

export const CardsSection = props => {
    const [state, setState] = useState({ index: null, checked: false })
    const { width } = useWindowDimensions()
    const numberOfCards = Math.floor(width / 200)

    const { title } = props
    const { index, checked } = state

    const onMouseEnter = () => setState(state => ({ ...state, checked: true }))
    const onMouseLeave = () => setState(state => ({ ...state, checked: false }))
    const requestToChangeActive = index => setState(state => ({ ...state, index }))

    return (
        <div>
            <h5>{title}</h5>
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
                        itemsInnerWrapper: styles['cards-section__itemsInnerWrapper'],
                        itemWrapper: styles['cars-section__itemWrapper'],
                    }}
                >
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </ItemsCarousel>
            </div>
        </div>
    )
}
