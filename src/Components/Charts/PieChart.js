import React, { Component } from 'react'
import CanvasJSReact from '../../Assets/Plugins/canvasjs.react';
let data = [{y: 41, label: "Social Media"}, {y: 24, label:"News"}, {y:20, label: "Document"}, {y: 13, label: "Design"}];
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

class PieChart extends Component {
    render() {
        return (
            <div>
                <div className = "chart__wrapper">
				<ComponentHeader name = "Efficency"/>
				<CanvasJSChart id = "chart" options = {option} 
					onRef={ref => this.chart = ref}
				/>
			    </div>
            </div>
        )
    }
}
export default PieChart;
