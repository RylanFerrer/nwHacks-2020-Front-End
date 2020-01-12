import React from 'react'
import Productivity from './Productivity'
import DistAnalysis from './DistAnalysis'
import NoiseAnalysis from './NoiseAnalysis'
import LightAnalysis from './LightAnalysis'

export default function Detailed() {
    return (
        <div>
            <Productivity />
            <div className="middle-con"><StudyGraph /><DistAnalysis /></div>
            <div className="bot-con"><NoiseAnalysis /><LightAnalysis /></div>
        </div>
    )
}
