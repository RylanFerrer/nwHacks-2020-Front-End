// const ctx = canvas.getContext("2d");

// const a = 'background: linear-gradient(180.1deg, #713BDB 0.43%, rgba(227, 219, 242, 0) 99.57%);'

export const options = (dps, canvas) => {
    return {
    backgroundColor: "transparent",
    interactivityEnabled: true,
    height: "300",
    width: "700",
    lineThickness: "0",
    tooltips: {
        titleAlign: 'center',
        bodyAlign: 'center'
    },
    data: [{
        markerSize: '0',
        lineColor: " #5B2EB4",
        fillOpacity: '.2',
        type: "area",
        color: "rgb(227, 219, 242)",
        dataPoints: dps
    }],    
    axisX: {
        intervalType: "hour",
        valueFormatString: "YYYY-MM-DD HH:mm:ss",
        labelMaxWidth: 100, // change label width accordingly
        scaleBreaks: {
            customBreaks: [
            ]
        }
    }, 
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
}