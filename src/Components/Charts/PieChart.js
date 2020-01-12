import React, { Component } from 'react'
import CanvasJSReact from '../../Assets/Plugins/canvasjs.react';
import {PieOptions} from './Chart Data/PieOptions';
let data = [{y: 41, label: "Social Media", color: "#713ADB"}, {y: 24, label:"News", color: "#49B8FF"}, {y:20, label: "Document", color: "#FF8C56"}, {y: 13, label: "Design", color: "#FC5181"}];
const CanvasJSChart = CanvasJSReact.CanvasJSChart;
let option = PieOptions(data);

class PieChart extends Component {
    render() {
        return (
            <div>
				<CanvasJSChart id = "chart" options = {option} 
					onRef={ref => this.chart = ref}
				/>
            </div>
        )
    }
}
export default PieChart;
