import React from 'react'
import ReactSelect from 'react-select'

import * as SelectStyles from '../styles/components/Select'

export const Select = props => {
    const { options, styles, onChange, value } = props

    return (
        <ReactSelect
            options={options}
            styles={SelectStyles[styles] || SelectStyles['defaultStyles']}
            placeholder='Selecciona tu país'
            isClearable
            onChange={onChange}
            value={value}
        />
    )
}
