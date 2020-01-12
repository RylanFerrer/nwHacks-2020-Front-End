export const options = (dps) => {
    return {
    backgroundColor: "transparent",
    interactivityEnabled: true,
    width:"800",
    lineThickness: "0",
    data: [{
        type: "line",
        dataPoints : dps
    }],    
    axisX: {
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