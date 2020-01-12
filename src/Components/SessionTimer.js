import React, {useState, useEffect} from 'react'
import clockIcon from "./images/clockIcon.svg"

export default function SessionTimer() {
    const [isActive, setActive] = useState(false);
    const [seconds, setSeconds] = useState(0);

    function toggle() {
        setActive(!isActive);
    }

    function reset() {
        setSeconds(0);
        setActive(false);
    }

    function formatTime(seconds) {
        let hours = Math.floor(seconds/(60*60));
        let minutes = Math.floor((seconds/60)%60);
        return `${hours}h ${minutes}m ${seconds%60}s`
    }

    function tick() {
        setSeconds(seconds => seconds + 1);
    }
    
    useEffect( () => {
        let interval = null;
        if(isActive) {
            interval = setInterval(tick,1000);
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive,seconds]);

    return (
        <div className = "SessionTimer">
            <img src = "clockIcon" width = "90" height = "90" />
            {
                // FIX THIS 
            }
            <div className = "time">{formatTime(seconds)}</div>
            <div id = "buttonGroup">
                <button className = {`button-${isActive ? "active" : "inactive"}`} onClick={toggle}>
                    {isActive ? "Pause" : "Start"}</button>
                <button className = "reset" onClick={reset}>Stop</button>
            </div>
        </div>
    )
}
