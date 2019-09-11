import React from 'react'
import { Bye, Hello } from '../components'
import '../styles/App.scss'

export function Main() {
    return (
        <div className='App'>
            <Hello title='Hola'/>
            <Bye title='Chao'/>
        </div>
    )
}
