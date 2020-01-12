import React, {useState} from 'react'

export default function ComponentHeader(props) {
    const [name, setName] = useState(props.name);
    return (
        <div className = "header">
            <div className ="header__container">
                <h3 className = "header__text">{name}</h3>
            </div>
        </div>
    )
}
