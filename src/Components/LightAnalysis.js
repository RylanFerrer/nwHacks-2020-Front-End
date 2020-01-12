import React from 'react'
import lightNobg from './Images/lightNobg.svg'
import ComponentHeader from './ComponentHeader'

export default function LightAnalysis() {
    return (
        <div>
            <ComponentHeader name="Ambient light" />
            <div className="EnvAnalysisL__topHalf">
                <div className="EnvAnalysisL__topHalf-resultbox">
                    <img src={lightNobg} />
                    <div className="EnvAnalysisL__topHalf-result">
                        <div className="EnvAnalysisL__topHalf-resultdata">
                            <div id="category">Adjust light to deep twilight</div>
                        </div>
                        <div id="blurb">You work best at <span>20 lx</span>, which is similar to <span>deep twilight</span> here.</div>
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
                    <MultiChart />
                </div>
            </div> 
        </div>
    )
}
