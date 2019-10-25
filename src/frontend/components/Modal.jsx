import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

export const Modal = props => {
    const { open, onClose, title, description } = props

    return (
        <Dialog
            open={open}
            onClose={onClose}
            aria-labelledby='alert-dialog-title'
            aria-describedby='alert-dialog-description'
        >
            <DialogTitle id='alert-dialog-title'>
                {title}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id='alert-dialog-description'>
                    {description}
                </DialogContentText>
            </DialogContent>
        </Dialog>
    )
}
