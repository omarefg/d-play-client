import React from 'react'
import { Menu, MenuItem } from '@material-ui/core'

export const SelectableMenu = props => {
    const { items, anchorEl, onClose, onItemClick, id } = props
    return (
        <Menu
            id={id}
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={onClose}
        >
            {items && items.map((item, index) => {
                return (
                    <MenuItem
                        key={item.name}
                        onClick={() => onItemClick(index + 1)}
                    >
                        {item.name}
                    </MenuItem>
                )
            })}
        </Menu>
    )
}
