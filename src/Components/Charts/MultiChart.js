import React, { Component } from 'react';
import CanvasJSReact from '../../Assets/Plugins/canvasjs.react';
import multioption from './Chart Data/MultiLineOptions';
let data1 = [{y: 0, label: "8am"}, {y: 75, label: "9am"}, {y: 100, label: "10am"}, {y: 60, label: "11am"}, {y: 50, label: "12pm"}];
let data2 = [{y: 30, label: "8am"}, {y: 15, label: "9am"}, {y: 25, label: "10am"}, {y: 70, label: "11am"}, {y: 40, label: "12pm"}];

let option = multioption(data1,data2)

class MultiChart extends Component {

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
export default MultiChart;
