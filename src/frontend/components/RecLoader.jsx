import React from 'react'
import classNames from 'classnames/bind'

import styles from '../styles/components/RecLoader.module.scss'

export const RecLoader = props => {
    const { isLoading } = props
    const cx = classNames.bind(styles)

    const child = cx({
        'rec-loader__children': true,
        'rec-loader__childre-animated': isLoading,
    })

    return (
        <div className={styles['rec-loader__container']}>
            <span className={child}/>
            <span className={child}/>
            <span className={child}/>
            <span className={child}/>
            <span className={child}/>
        </div>
    )
}
