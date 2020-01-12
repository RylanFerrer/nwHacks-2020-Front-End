import React from 'react'
import ComponentHeader from './ComponentHeader'
import noiseNobg from './Images/noiseNobg.svg'
import MultiChart from './Charts/MultiChart'



export default function NoiseAnalysis() {
    return (
        <div className="EnvAnalysisN">
            <ComponentHeader name="Ambient noise" />
            <div className="EnvAnalysisN__topHalf">
                <div className="EnvAnalysisN__topHalf-resultbox">
                    <img src={noiseNobg} />
                    <div className="EnvAnalysisN__topHalf-result">
                        <div className="EnvAnalysisN__topHalf-resultdata">
                            <div id="category">Study with light noise such as leaves rustling</div>
                        </div>
                        <div id="blurb">You work best at <span>20 db</span>, which is similar to <span>leaves rustling</span> here.</div>
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
                    <MultiChart />
                </div>
            </div>
        </div>
    )
}
