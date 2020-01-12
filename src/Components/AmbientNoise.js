import React from 'react'
import noise from './Images/noise.svg'
import ComponentHeader from './ComponentHeader'

export default function AmbientNoise(props) {
    const {data,noiseData} = props;

    const checker = () => {
        if (noiseData < 10) {return "quiet"}
        else if (noiseData >= 11 && data < 50) { return "asmr"}
        else {return "jet engine"}
    }

    return (
        <div class="Environment">
            <ComponentHeader name="Ambient noise" />
            <div className="envwrapper">
                <img src={noise} alt="a speaker"/>
                <div className="infowrapper">
                    <div>{noiseData} db</div>
                    <div>{checker}</div>
                </div>
            </div>
        </div>
    )
}
