import React from 'react'
import noise from './Images/noise.svg'
import ComponentHeader from './ComponentHeader'

export default function AmbientNoise(props) {
    const {data} = props;

    const checker = () => {
        if (data < 10) {return "quiet"}
        else if (data >= 11 && data < 50) { return "asmr"}
        else {return "jet engine"}
    }

    return (
        <div class="Environment">
            <ComponentHeader name="Ambient noise" />
            <div className="envwrapper">
                <img src={light} alt="a speaker"/>
                <div className="infowrapper">
                    <div>{data}db</div>
                    <div>{checker}</div>
                </div>
            </div>
        </div>
    )
}
