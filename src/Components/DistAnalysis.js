import React from 'react'
import ComponentHeader from './ComponentHeader'
import trash from './images/trash.svg'
import PieChart from './Charts/PieChart'

export default function DistAnalysis() {
    return (
        <div className="study">
            <ComponentHeader name="Distractions" />
            <div className = "study__container">
                <div className="study__header">
                    <img className = "study__img" src={trash} />
                    <div className="DistAnalysis__analysis-result">
                        <h3>Uninstall Facebook</h3>
                        <h4>to improve productivity by 24%</h4>
                    </ div>
                </div> 
            </div>
            <div className="DistAnalysis__indepth">You spend <span>43% of your time on Social Media</span>. It is recommended you delete Instagram to free up
            more time. Hover over the sections to learn more!</div>
            <div><PieChart /></div>
        </div>
    )
}
