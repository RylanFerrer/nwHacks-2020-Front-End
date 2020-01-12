import React from 'react'
import header from './images/header-girl.png'

export default function Productivity() {

    return (
        <div className="Productivity">
            <div className="welcome">
                <div className="welcome-text">Welcome back, Leanna</div>
                <div className="welcome-change">You were <span>10% less efficient</span> in your last session than your overall average.</div>
                <div className="welcome-data">
                    <div>Efficiency last session: 74.7%</div>
                    <div>Average Efficiency: 83%</div>
                </div>
            </div>
            <img src={header} />
        </div>
    )
}
