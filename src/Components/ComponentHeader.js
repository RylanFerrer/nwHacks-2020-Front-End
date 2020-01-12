import React, {useState} from 'react'

export default function ComponentHeader(props) {
    const [name, setName] = useState(props.name);
    return (
        <div>
            <h1>{name}</h1>
        </div>
    )
}
