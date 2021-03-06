import React from 'react'
import PropTypes from 'prop-types'
import { Loader } from './Loader'

export const ButtonLoader = props => {
    const { message } = props
    return (
        <span>
            <span
                role='img'
                aria-label='magic'
            />
            {message}
            <Loader
                type='Audio'
                size={30}
                color='white'
            />
        </span>
    )
}

ButtonLoader.propTypes = {
    message: PropTypes.string,
}

ButtonLoader.defaultProps = {
    message: 'Estamos haciendo magia✨',
}
