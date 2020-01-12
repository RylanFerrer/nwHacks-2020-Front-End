import React from 'react'
import CanvasJSReact from '../../Assets/Plugins/canvasjs.react';
import {multioption} from './Chart Data/MultiLineOptions';
const CanvasJSChart = CanvasJSReact.CanvasJSChart

export default function MultiLineChart(props) {
    const {color} = props
    let data1 = [{y:0,label:"8am"},{y:25, label:"9am"},{y:75,label:"10am"},{y:100,label:"11am"},{y:60,label:"12pm"}]
    let data2 = [{y:30,label:"8am"},{y:50, label:"9am"},{y:65,label:"10am"},{y:25,label:"11am"},{y:50,label:"12pm"}]
    let option = multioption(data1,data2,color);
    return (
        <div>
            <CanvasJSChart id = "chart" options = {option} 
				/>
        </div>
    )
}
