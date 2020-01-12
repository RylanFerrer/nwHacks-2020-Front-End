import React from 'react'
import MultiLineChart from './Charts/MultiLineChart'
import ComponentHeader from './ComponentHeader'
import lightNobg from './images/lightNobg.svg'

export default function LightAnalysis() {
    return (
        <div className="EnvAnalysiL">
        <ComponentHeader name="Ambient noise" />
        <div className="EnvAnalysisL__topHalf">
            <div className="EnvAnalysisL__topHalf-resultbox">
                <img alt = "noise" src={lightNobg} />
                <div className="EnvAnalysisL__topHalf-result">
                    <div className="EnvAnalysisL__topHalf-resultdata">
                        <div id="category">Adjust light to deep twilight</div>
                    </div>
                    <div id="blurb"> You work best in 20 lx, which is similar to deep twilight here.</div>
                </div>
            </div>
            <div className="EnvAnalysisL__topHalf-filter">Show: <a href>last session ></a></div>
        </div>
        <div className="EnvAnalysisL_chartbox">
            <div className="EnvAnalysisL_chartbox-legend">
                <div className="EnvAnalysisL__chartbox-legendentry">
                    <div id="noise_circle"></div>
                   
                </div>
                <div>Light</div>
                <div className="EnvAnalysisL__chartbox-legendentry">
                    <div id="eff_circle"></div>
                </div>
                <div>Efficiency</div>
            </div>
            <div>
                <MultiLineChart colour="#FF7D00" />
            </div>
        </div> 

    </div>
    )
}
