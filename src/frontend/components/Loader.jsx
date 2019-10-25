import React from 'react'
import ReactLoader from 'react-loader-spinner'
import PropTypes from 'prop-types'

export const Loader = props => {
    const { type, size, color } = props

    return (
        <ReactLoader
            type={type}
            color={color}
            height={size}
            width={size}
        />
    )
}

Loader.propTypes = {
    type: PropTypes.string,
    color: PropTypes.string,
    size: PropTypes.number,
}

Loader.defaultProps = {
    type: 'Oval',
    color: '#000',
    size: null,
}
