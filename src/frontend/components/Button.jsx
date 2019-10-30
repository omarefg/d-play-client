/* eslint-disable react/button-has-type */
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'

import styles from '../styles/components/Button.module.scss'

export const Button = props => {
    const {
        children,
        type,
        onClick,
        className,
        disabled,
    } = props

    const cx = classNames.bind(styles)

    const btn = cx({
        'btn--principal': true,
        [className]: className,
    })

    return (
        <button
            type={type}
            onClick={onClick}
            className={btn}
            disabled={disabled}
        >
            {children}
        </button>
    )
}

Button.propTypes = {
    type: PropTypes.string,
}

Button.defaultProps = {
    type: 'button',
}
