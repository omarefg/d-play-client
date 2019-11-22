import React from 'react'
import classNames from 'classnames/bind'

import styles from '../styles/components/Accordion.module.scss'

export const Accordion = props => {
    const {
        title,
        children,
        detailsClassName,
        summaryClassName,
        contentClassName,
    } = props

    const cx = classNames.bind(styles)

    const details = cx({
        'accordion__details': true,
        [detailsClassName]: detailsClassName,
    })

    const summary = cx({
        'accordion__summary': true,
        [summaryClassName]: summaryClassName,
    })

    const content = cx({
        'accordion__content': true,
        [contentClassName]: contentClassName,
    })

    return (
        <details
            className={details}
        >
            <summary
                className={summary}
            >
                {title}
            </summary>
            <div
                className={content}
            >
                {children}
            </div>
        </details>
    )
}
