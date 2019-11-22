import React from 'react'
import { SnackbarContent, IconButton, Snackbar } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import ErrorIcon from '@material-ui/icons/Error'
import InfoIcon from '@material-ui/icons/Info'
import WarningIcon from '@material-ui/icons/Warning'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import styles from '../styles/components/SnackbarNotification'

const variantIcon = {
    success: CheckCircleIcon,
    warning: WarningIcon,
    error: ErrorIcon,
    info: InfoIcon,
}

export const SnackbarNotification = props => {
    const classes = styles()
    const {
        message,
        onClose,
        variant,
        open,
        autoHideDuration,
        anchorOrigin,
    } = props
    const Icon = variant ? variantIcon[variant] : () => <span/>

    return (
        <Snackbar
            anchorOrigin={anchorOrigin}
            open={open}
            autoHideDuration={autoHideDuration}
            onClose={onClose}
        >
            <SnackbarContent
                className={classes[variant]}
                aria-describedby='snackbar'
                message={(
                    <span
                        id='snackbar'
                        className={classes.message}
                    >
                        <Icon
                            className={classNames(classes.icon, classes.iconVariant)}
                        />
                        {message}
                    </span>
                )}
                action={[
                    <IconButton
                        key='close'
                        aria-label='close'
                        color='inherit'
                        onClick={onClose}
                    >
                        <CloseIcon className={classes.icon}/>
                    </IconButton>,
                ]}
            />
        </Snackbar>
    )
}

SnackbarNotification.propTypes = {
    message: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
    variant: PropTypes.string.isRequired,
    open: PropTypes.bool.isRequired,
    autoHideDuration: PropTypes.number,
    anchorOrigin: PropTypes.shape({}),
}

SnackbarNotification.defaultProps = {
    autoHideDuration: 6000,
    anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'left',
    },
}
