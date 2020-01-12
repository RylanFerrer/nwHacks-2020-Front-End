import React from 'react'
import ComponentHeader from './ComponentHeader'
import Distraction from './Distraction'

export default function DistractionBreakdown() {
    return (
        <div className = "Window">
            <ComponentHeader>Breakdown</ComponentHeader>
            {//TODO: put in name and time from json, choose highest 5 values
}
            <Distraction name = {"Instagram"} time = {92384} />
            <Distraction name = {"Google Drive"} time = {12932} />
            <Distraction name = {"Facebook"} time = {2133} />
            <Distraction name = {"WSJ"} time = {1241} />
            <Distraction name = {"Other"} time = {12487} />
        </div>
    )
}