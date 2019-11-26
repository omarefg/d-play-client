import React from 'react'
import ReactSelect from 'react-select'
import { useWindowDimensions } from '../hooks'

import * as SelectStyles from '../styles/components/Select'

export const Select = props => {
    const { options, styles, onChange, value } = props
    const { width } = useWindowDimensions()

    return (
        <ReactSelect
            options={options}
            styles={SelectStyles[styles] || SelectStyles['defaultStyles']}
            placeholder='Selecciona tu país'
            isClearable
            onChange={onChange}
            value={value}
            isSearchable={width > 800}
        />
    )
}
