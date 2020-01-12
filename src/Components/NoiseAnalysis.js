import React from 'react'
import ComponentHeader from './ComponentHeader'
import noiseNobg from './images/noiseNobg.svg'

export default function NoiseAnalysis() {
    return (
        <div className="EnvAnalysisN">
            <ComponentHeader name="Ambient noise" />
            <div className="EnvAnalysisN__topHalf">
                <div className="EnvAnalysisN__topHalf-resultbox">
                    <img alt = "noise" src={noiseNobg} />
                    <div className="EnvAnalysisN__topHalf-result">
                        <div className="EnvAnalysisN__topHalf-resultdata">
                            <div id="category">noise desc here</div>
                        </div>
                        <div id="blurb">You work best at <span>something</span> db, which is similar to <span>noise desc</span> here.</div>
                    </div>
                </div>
                <div className="EnvAnalysisN__topHalf-filter">Show: <a href>last session ></a></div>
            </div>
            <div className="EnvAnalysisN_chartbox">
                <div className="EnvAnalysisN_chartbox-legend">
                    <div className="EnvAnalysisN__chartbox-legendentry">
                        <div id="noise_circle"></div>
                       
                    </div>
                    <div>Noise</div>
                    <div className="EnvAnalysisN__chartbox-legendentry">
                        <div id="eff_circle"></div>
                    </div>
                    <div>Efficiency</div>
                </div>
                <div>
                    chart goes here
                </div>
            </div> 

        </div>
    )
}
