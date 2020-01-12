export const PieOptions = (data) => {
   
        return { 
            backgroundColor: "transparent",
        tooltips: {
            titleAlign: "center",
            bodyAlign: "center"
        },
        data: [{
            type: "pie",
            indexLabelFontSize: 18,
            radius: 80,
            indexLabel: "{label} - {y}",
            yValueFormatString: "###0.0\"%\"",
            dataPoints: data
        }]
    }
}
