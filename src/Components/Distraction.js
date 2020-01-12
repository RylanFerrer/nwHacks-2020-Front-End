import React from 'react'

export default function Distraction(props) {
    const {name, time} = props

    return (
        <div className = "Distraction">
            <div id = "name">{name}</div>
    <div id = "time">{calcTime(time)}</div>
        </div>
    )
}

function calcTime(seconds) {
    let hour = Math.floor(seconds/(60*60));
    let minutes = Math.floor((seconds/60)%60);
    return `${hour}h ${minutes}m`;
}
