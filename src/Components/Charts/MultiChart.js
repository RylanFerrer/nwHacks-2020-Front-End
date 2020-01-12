import React, { Component } from 'react'

export default class MultiChart extends Component {


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
