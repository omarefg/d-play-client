import React from 'react'

export const Header = props => {
    const { children } = props

    return (
        <header>
            {children}
        </header>
    )
}
