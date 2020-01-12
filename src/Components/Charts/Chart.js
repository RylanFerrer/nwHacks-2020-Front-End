import React, { Component } from 'react';
import CanvasJSReact from '../../Assets/Plugins/canvasjs.react';
import {options} from './Chart Data/options' 
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

var dps = [{x: 1, y: 10}];   //dataPoints.
var xVal = dps.length + 1;
var yVal = 15;
var updateInterval = 10000;

class Chart extends Component {
	componentDidMount() {
		setInterval(this.updateChart, updateInterval);
	}
	updateChart  = () =>  {
		yVal = yVal +  Math.round(5 + Math.random() *(-5-5));
		dps.push({x: xVal,y: yVal});
		xVal+= 1;
		if (dps.length >  10 ) {
			dps.shift();
		}
		this.chart.render();
	}
	render() {
		return (
		<div>
			<h1>React Dynamic Line Chart</h1>
			<CanvasJSChart options = {options(dps)} 
				onRef={ref => this.chart = ref}
			/>
		</div>
		);
	}
}

export default Chart;