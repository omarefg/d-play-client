import React from 'react'
import { Dialog, DialogContent, DialogContentText, DialogTitle, DialogActions } from '@material-ui/core'
import { Button } from './Button'

import styles from '../styles/components/Modal'

export const Modal = props => {
    const { open, onClose, title, description, showSubmit, formID } = props
    const classes = styles()

    return (
        <Dialog
            open={open}
            onClose={onClose}
            aria-labelledby='alert-dialog-title'
            aria-describedby='alert-dialog-description'
        >
            <DialogTitle
                className={classes.title}
                id='alert-dialog-title'
            >
                {title}
            </DialogTitle>
            <DialogContent
                className={classes.content}
            >
                <DialogContentText
                    className={classes.text}
                    id='alert-dialog-description'
                >
                    {description}
                </DialogContentText>
            </DialogContent>
            <DialogActions
                className={classes.actions}
            >
                {showSubmit && (
                    <Button
                        className='btn--modal'
                        type='submit'
                        form={formID}
                    >
                    Aceptar
                    </Button>
                )}
                <Button
                    onClick={onClose}
                    className='btn--modal'
                >
                    Cerrar
                </Button>
            </DialogActions>
        </Dialog>
    )
}
