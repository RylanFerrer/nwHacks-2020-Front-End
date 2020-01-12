
import React, { Component } from 'react';
import CanvasJSReact from '../../Assets/Plugins/canvasjs.react';
import ComponentHeader from "../ComponentHeader"
import {options} from './Chart Data/options' 
import Modal from '../Modal/Modal'
const CanvasJSChart = CanvasJSReact.CanvasJSChart;
let dps = [{x: 1, y: 100}, {x: 2, y: 50},];   //dataPoints.
let xVal = dps.length + 1;
let yVal = 15;
let updateInterval = 1000;

let option =  options(dps )

class Chart extends Component {
	state = {
		onBreak: false,
		active: false,
		isDone: false
	}
	componentDidMount() {
		this.time = setInterval(this.updateChart, updateInterval);
	}
	
	changeActive = () => {
		this.setState({
			active: !this.state.active
		})
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
			<Modal  changeActive = {this.changeActive}active = {this.state.active}/>
			<div className = "chart__wrapper">
				<ComponentHeader name = "Efficency"/>
				<CanvasJSChart id = "chart" options = {option} 
					onRef={ref => this.chart = ref}
				/>
			</div>
			</div>
	
		);
	}
}
export default Chart;