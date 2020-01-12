import React from 'react'
import ComponentHeader from './ComponentHeader'
import trash from './Images/trash.svg'

export default function DistAnalysis() {
    return (
        <div className="DistAnalysis">
            <ComponentHeader name="Distractions" />
            <div className="DistAnalysis__analysis">
                <img src={trash} />
                <div className="DistAnalysis__analysis-result">
                    <div>Uninstall {data}</div>
                    <div>to improve productivity by {data}%</div>
                </div>
            </div> 
            <div className="DistAnalysis__indepth">You spend <span>{data}</span>. It is recommended you delete {data} to free up
            more time. Hover over the sections to learn more!</div>
            <div>chart here</div>
        </div>
    )
}
