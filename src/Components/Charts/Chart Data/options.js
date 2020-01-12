export const options = (dps) => {

    return {
    backgroundColor: "transparent",
    interactivityEnabled: true,
    data: [{
        type: "line",
        dataPoints : dps
    }],    
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