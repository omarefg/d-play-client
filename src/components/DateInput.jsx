import React from 'react'
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers'

import '../styles/components/DateInput.scss'

export const DateInput = props => {
    const {
        disableFuture,
        clearable,
        id,
        label,
        value,
        onChange,
        className,
        required,
    } = props

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                disableFuture={disableFuture}
                clearable={clearable}
                id={id}
                label={label}
                value={value}
                onChange={onChange}
                format='dd/MM/yyyy'
                className={className || 'date-input__input'}
                DialogProps={{
                    className: 'date-input__modal',
                }}
                required={required}
                animateYearScrolling
            />
        </MuiPickersUtilsProvider>
    )
}
