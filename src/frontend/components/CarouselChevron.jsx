import React from 'react'
import classNames from 'classnames/bind'
import { Fade } from '@material-ui/core'
import CarouselChevronStyles from '../styles/components/CarouselChevron'

export const CarouselChevron = props => {
    const { checked, chevron } = props
    const classes = CarouselChevronStyles()
    const cx = classNames.bind(classes)
    const chevStyles = cx({
        'chevron__container': true,
    })

    return (
        <Fade
            in={checked}
            timeout={500}
        >
            <div className={chevStyles}>
                {chevron}
            </div>
        </Fade>
    )
}
