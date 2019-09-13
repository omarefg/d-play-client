import React from 'react'
import ReactSelect from 'react-select'

export const Select = props => {
    const { options } = props

    return (
        <ReactSelect
            options={options}
        />
    )
}
