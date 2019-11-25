import React from 'react'
import { Menu, MenuItem } from '@material-ui/core'

import styles from '../styles/components/SelectableMenu'

export const SelectableMenu = props => {
    const {
        items,
        anchorEl,
        onClose,
        onItemClick,
        id,
        showPrincipal,
        principalTitle,
        onPrincipalClick,
    } = props

    const classes = styles()

    return (
        <Menu
            id={id}
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={onClose}
            classes={{ paper: classes.paper }}
        >
            {showPrincipal && (
                <MenuItem
                    onClick={onPrincipalClick}
                    className={classes.item}
                >
                    {principalTitle}
                </MenuItem>
            )}
            {items && items.map((item, index) => {
                return (
                    <MenuItem
                        key={item.name}
                        onClick={() => onItemClick(index + 1)}
                        className={classes.item}
                    >
                        {item.name}
                    </MenuItem>
                )
            })}
        </Menu>
    )
}
