import React, {useState, useEffect} from 'react'
import clock from "./images/clock.svg"
import ComponentHeader from "./ComponentHeader"

export default function SessionTimer(props) {
    const [isActive, setActive] = useState(false);
    const [seconds, setSeconds] = useState(0);

    function toggle() {
        setActive(!isActive);
        props.toggleSession()
    }

    function reset() {
        props.toggleSession()
        setSeconds(0);
        setActive(false);
        props.changePage()
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
            <ComponentHeader name = "Session duration" />
            <div className="thing">
                <img alt = "clock" src = {clock} width = "90" height = "90" />
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
        </div>
    )
}
