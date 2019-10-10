import React from 'react'
import { PlayIcon, RepeatIcon, RandomIcon, PreviousIcon, LikeIcon } from '../icons'

export const PlayerMenu = () => {
    return (
        <div>
            <LikeIcon/>
            <RandomIcon/>
            <PreviousIcon/>
            <PlayIcon/>
            <PreviousIcon/>
            <RepeatIcon/>
        </div>
    )
}
