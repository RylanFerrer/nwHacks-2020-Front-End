export const multioption =(data1,data2,colour) => {
    return {
        axisY: {
            suffix: "%",
            includeZero: true,
        },
        axisX: {
            suffix: "am",
            includeZero: true,
        },
        data: [{
            type:"spline",
            dataPoint: data1,
            color: colour
        },
        {
            type:"spline",
            dataPoint: data2,
            color:"#0BAF1B"
        }]
    }
}