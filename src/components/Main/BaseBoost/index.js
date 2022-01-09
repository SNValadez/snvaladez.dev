import React, { useState } from 'react'
import {TOTAL_SCREAM, GET_SCREAM_INDIE} from "../../../utilities/comUtils"

import ScreamService from "../../../utilities/ScreamService"
import "./style.css"

import {faBars} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

function BaseBoost() {

    const [showBaseOptions, setShowBaseOptions] = useState(false);
    const [selectedScream, setSelectedScream] = useState(0);

const updateCurrentScream = (currentScream)=>{

if(!currentScream || !currentScream.screamInView)
return;
let screamIndex = GET_SCREAM_INDIE(currentScream.screamInView)
if(screamIndex < 0)
return

}



let currentScreamSub = ScreamService.currentScreamBroadCaster.subscribe(updateCurrentScream)

    return (
        <div>
            
        </div>
    )
}


export default BaseBoost;