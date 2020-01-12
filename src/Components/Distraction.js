import React from 'react'
import './Distraction.css'

export default function Distraction(props) {
    const {name, prcnt} = props

    return (
        <div className = "Distraction">
            <div id = "name">{name}</div>
            <div id = "prcnt">{prcnt}%</div>
        </div>
    )
}
