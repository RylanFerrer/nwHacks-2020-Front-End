
import React, { Component } from 'react';
import CanvasJSReact from '../../Assets/Plugins/canvasjs.react';
import {options} from './Chart Data/options' 
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

let dps = [{x: 1, y: 10}, {x: 2, y: 10},];   //dataPoints.
let xVal = dps.length + 1;
let yVal = 15;
let updateInterval = 10000;
let option =  options(dps)
class Chart extends Component {
	state = {
		onBreak: false
	}
	componentDidMount() {
		setInterval(this.updateChart, updateInterval);
	}
	changeBreak = () => {
		this.setState({
			onBreak: !this.state.onBreak
		}, () => { 
				option.axisX.scaleBreaks.customBreaks.push(
					{
							startValue: xVal,
							endValue: xVal + 1,
							color: "black",
							lineThickness: 1,
							type: "straight"
					})
		})
	}
	updateChart  = () =>  {
		if (!this.state.onBreak)
		{
			//this will be replaced when actual data is received
			yVal = yVal +  Math.round(5 + Math.random() * (-5-5));
			dps.push({x: xVal,y: yVal});
			xVal+= 1;
			if (dps.length >  10 ) {
				dps.shift();
			}
		} else {
			yVal = 0
			dps.push({x: xVal,y: null});
			xVal+= 1;
		}
		this.chart.render();
	}
	render() {
		return (
		<div>
			<h1>React Dynamic Line Chart</h1>
			<CanvasJSChart options = {option} 
				onRef={ref => this.chart = ref}
			/>
			<button onClick = {() => this.changeBreak()}>Change Break</button>
		</div>
		);
	}
}
export default Chart;