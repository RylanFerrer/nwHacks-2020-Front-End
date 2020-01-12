import React from 'react'

export default function DistractionCharts() {
    const distractions = {
        Instagram: 1.6,
        Sleeping: 10,
        SpacingOut: 4.1
    }
    const colors = ['#713ADB',' #49B8FF','#FF8C56','#FC5181']
    let distract = [Object.keys(distractions)]
    let values =  [Object.values(distractions)]
    const valArray = []
    for(let i = 0 ; i < values[0].length; i++) {
        valArray.push((parseFloat(values[0][i]) / 10) * 100)
    }
    return (
        <div className = "chart__wrapper chart__wrapper-dist">
            <div className = "chart__wrapper-header">
                <h4 className = "chart__wrapper-header-text">Distractions</h4>
            </div>
            {
                valArray.map((num,index) => {
                    return (
                        <div className = "chart__wrapper-bar-container">
                            <h3 className = "chart__wrapper-bar-text">{distract[0][index]}</h3>
                            <div  className = "chart__wrapper-bar" style = { { height: "20px",width: 3 * num, backgroundColor: `${colors[index]}`}}></div>
                        </div>
                    )}
                )
            }
            

        </div>
    )
}
