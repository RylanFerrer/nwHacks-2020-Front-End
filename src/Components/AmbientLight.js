import React from 'react'
import light from './Images/light.svg'
import ComponentHeader from './ComponentHeader'

export default function AmbientLight(props) {
    const {data} = props;
    const checker = () => {
        if (data < 10) {return "dim"}
        else if (data >= 11 && data < 50) { return "well-lit"}
        else {return "retinas burning"}
    }
 
    return (
        <div className="Environment">
            <ComponentHeader name="Ambient light" />
            <div className="envwrapper">
                <img src={light} alt="a lightbulb"/>
                <div className="infowrapper">
                    <div>{data}lx</div>
                    <div>{checker}</div>
                </div>
            </div>
        </div>
    )
}
