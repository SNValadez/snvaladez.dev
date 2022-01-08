import React from 'react'
import { TOTAL_SCREAM } from '../utilities/comUtils';




function Compocon() {

    const mapAllScreams =() => {

        return(
            TOTAL_SCREAM.map((scream)=>(
                (scream.component) ? <scream.component 
                screamName={scream.scream_name}
                key={scream.scream_name}
                id={scream.scream_name}/> : <div key={scream.scream_name}></div>
            )
            )
        )
    }


    return (
        <div className="compo-container">
            

            {mapAllScreams()}



        </div>
    )
}



export default Compocon;