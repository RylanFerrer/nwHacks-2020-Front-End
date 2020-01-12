import React, {useState,useEffect} from 'react'
import ComponentHeader from './ComponentHeader'
import {light,noise} from './Helper/EnviroVars'
// light noise temperature
export default function Environment(props) {
    const {img,title,data} = props;
    const [flavour, setFlavour] = useState("test");

    function defText() {
        switch (title) {
            case ("light"):
                lightFlavours;
                break;
            default:
                noiseFlavours;
        }
    }

    function lightFlavours() {
        if (data < 10) {
            setFlavour(light.low);
        } else if (data >= 11 && data < 20) {
            setFlavour(light.mid);
        }
        setFlavour(light.high);
    }

    function noiseFlavours() {

    }

    useEffect( () => {
        defText()
    }, [defText])
   
    
    return (
        <div className = "Environment">
            <ComponentHeader>Ambient {title}</ComponentHeader>
            <div id = "content">
                <img src={img} />
                <div>
                    <span>{data}</span>
                    <span>{flavour}</span>
                </div>
            </div>
        </div>
    )
}
