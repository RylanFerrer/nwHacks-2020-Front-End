import React from 'react'
import ComponentHeader from './ComponentHeader'
import Distraction from './Distraction'

export default function DistractionBreakdown() {
    return (
        <div class = "DistractionBreakdown">
            <ComponentHeader>Breakdown</ComponentHeader>
            <Distraction name = {"Instagram"} prcnt = {45} />
            <Distraction name = {"Google Drive"} prcnt = {20} />
            <Distraction name = {"Facebook"} prcnt = {15} />
            <Distraction name = {"WSJ"} prcnt = {7.5} />
            <Distraction name = {"Other"} prcnt = {12.5} />
        </div>
    )
}