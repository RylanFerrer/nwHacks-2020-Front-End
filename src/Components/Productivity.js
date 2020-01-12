import React from 'react'
import header from './Images/header-girl.png'

export default function Productivity() {

    return (
        <div className="Productivity">
            <div className="welcome">
                <div className="welcome-text">Welcome back, Leanna</div>
                <div className="welcome-change">You were 10% less efficient in your last session than your overall average.</div>
                <div className="welcome-data">
                    <div>Efficiency last session: 74.7%</div>
                    <div>Average Efficiency: 83%</div>
                </div>
            </div>
            <img src={header} />
        </div>
    )
}
