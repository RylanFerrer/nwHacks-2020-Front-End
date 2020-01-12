import React from 'react'

export default function Productivity() {
    const [change,setChange] = useState(false);

    function toggle() {
        setChange(!change);
    }

    return (
        <div className="Productivity">
            <div className="Productivity__changed">
                <img src="" alt="down arrow"/>
                <div>{changedData}%</div>
                <div>Efficiency last session</div>
            </div>
            <div className="Productivity__prcnt">
                <div id={`last-${change ? "pos" : "neg"}`}>{data}%</div>
                <div id="average">{data}%</div>
            </div>
        </div>
    )
}
