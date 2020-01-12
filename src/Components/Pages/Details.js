import React from 'react'
import Productivity from '../Productivity';
import DistAnalysis from '../DistAnalysis';
import NoiseAnalysis from '../NoiseAnalysis';
import StudyGraph from '../StudyGraph';
export default function Details() {
    return (
        <div>
            <Productivity/>
            <div className="middle-con"><StudyGraph /><DistAnalysis /></div>
            <div className="bot-con"><NoiseAnalysis /></div>
        </div>
    )
}
