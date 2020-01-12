export const multioption =(data1,data2) => {
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
        },
        {
            type:"spline",
            dataPoint: data2,

        }]
    }
}