import React, { useState } from 'react'
import ItemsCarousel from 'react-items-carousel'
import { useMediaQuery } from '@material-ui/core'
import { Card } from './Card'
import { CarouselChevron } from './CarouselChevron'

export const CardsSection = props => {
    const [state, setState] = useState({ index: null, checked: false })
    const matches = useMediaQuery('(max-width:600px)')

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
                    numberOfCards={matches ? 1 : 4}
                    slidesToScroll={1}
                    activeItemIndex={index}
                    requestToChangeActive={requestToChangeActive}
                    rightChevron={<CarouselChevron checked={checked} chevron='>'/>}
                    leftChevron={<CarouselChevron checked={checked} chevron='<'/>}
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
