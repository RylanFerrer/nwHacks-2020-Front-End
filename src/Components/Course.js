import React from 'react'
import ComponentHeader from './ComponentHeader'

export default function Course(props) {
    const {name} = props
    return (
        <div className="Course">
            <ComponentHeader name="Course" />
            <div id="course_name">{name}</div>
        </div>
    )
}
