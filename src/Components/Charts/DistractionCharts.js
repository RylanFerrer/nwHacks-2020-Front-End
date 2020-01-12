import React from 'react'
import ComponentHeader from '../ComponentHeader';
export default function DistractionCharts(props) 
{
    const {distractedData} = props;
    const colors = ['#713ADB',' #49B8FF','#FF8C56','#FC5181']
    let distract = [Object.keys(distractedData)]
    let values =  [Object.values(distractedData)]
    const valArray = []
    for(let i = 0 ; i < values[0].length; i++) {
        valArray.push((parseFloat(values[0][i]) / 10) * 100)
    }
    return (
        <div className = "chart__wrapper chart__wrapper-dist">
            <ComponentHeader name = "Distractions"/>
            {
                valArray.map((num,index) => {
                    return (
                        <div className = "chart__wrapper-bar-container">
                            <h3 className = "chart__wrapper-bar-text">{distract[0][index]}</h3>
                            <div  className = "chart__wrapper-bar" style = { { height: "20px",width: 3 * num, backgroundColor: `${colors[index]}`}}>
                                <p>{Math.floor(num)}%</p>
                            </div>
                        </div>
                    )}
                )
            }
            

        </div>
    )
}
