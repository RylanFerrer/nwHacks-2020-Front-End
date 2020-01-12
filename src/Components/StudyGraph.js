import React, { Component } from 'react';
import book from './images/book.svg'
import CanvasJSReact from '../Assets/Plugins/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var CanvasJS = CanvasJSReact.CanvasJS;
 
class StudyGraph extends Component {
	render() {
		const options = {
            curvature: 1,
            backgroundColor: "transparent",
            interactivityEnabled: true,
            height: "300",
            width: "700",
            animationEnabled: true,
			data: [
			{
                markerSize: '0',
                lineColor: " #5B2EB4",
                type: "column",
                color: "#9E76EE",
				dataPoints: [
					{ label: "Mon",  y: 10  },
					{ label: "Tue", y: 30  },
					{ label: "Weds", y: 60  },
					{ label: "Thurs",  y: 30  },
					{ label: "Fri",  y: 88 }
                ]
			}
            ],
            axisY: {
                gridThickness: 0,
                stripLines: [
                {
                    value: 0,
                    showOnTop: true,
                    color: "gray",
                    thickness: 2
                }
                ]
            }
		}
		
		return (
        <div className = "study">
            <h4 className = "study__text">Efficency</h4>
            <div className = "study__container">
                <div className = "study__header">
                <img className = "study__img" src = {book} />
                <div>
                    <h2>Study in two hour blocks.</h2>
                    <h4> Our vision detection and activity monitoring shows that you producvitiy drops after 2 hours.</h4>
                </div>
                </div>
                   </div>
                    <h3 className = "study__description" >Based on monitoring your activity .. distracted drowsy focus .. and using vision tracking, the chart below shows your efficiency over time.</h3>
                    <div className = "study__graph">
                        <CanvasJSChart options = {options} 
                        /* onRef={ref => this.chart = ref} *//>
                    </div>    
                  

           
        </div>
			
		);
	}
}

export default StudyGraph;