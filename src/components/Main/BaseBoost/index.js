// import React, { useState } from 'react'
// import {TOTAL_SCREAM, GET_SCREAM_INDIE} from "../../../utilities/comUtils"

// import ScreamService from "../../../utilities/ScreamService"
// import "./style.css"

// import {faBars, faThermometerQuarter} from "@fortawesome/free-solid-svg-icons"
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

// function BaseBoost() {

//     const [showBaseOptions, setShowBaseOptions] = useState(false);
//     const [selectedScream, setSelectedScream] = useState(0);

// const updateCurrentScream = (currentScream)=>{

// if(!currentScream || !currentScream.screamInView)
// return;
// let screamIndex = GET_SCREAM_INDIE(currentScream.screamInView)


// if(screamIndex < 0)
// return

// }



// let currentScreamSub = ScreamService.currentScreamBroadCaster.subscribe(updateCurrentScream)



// const getBaseBoostOptions = () => {
//     return(
//         TOTAL_SCREAM.map((scream, i)=> (

//             <div key={scream.scream_name} className={getBaseBoostOptionsClass(i)}
//             onClick={() => switchScream(i, scream)}>







//                 <span>{scream.scream_name}</span>
//             </div>

//         )

//         )
//     )
// }


//         const getBaseBoostOptionsClass =(index) =>{

//     let classy = "baseboost-option";

//     if (index < TOTAL_SCREAM.length -1)
//     //
//     classy += "baseboost-option-sep";

//     if (selectedScream === index)
//     classy += "selected-baseboost-op";


//     return 

// }



//         const switchScream=(index, scream)=>{


//             let screamComponent = document.getElementById(scream.scream_name);
//                 if (!screamComponent) return;


//                 screamComponent.scrollIntoView({ behavior: "smooth" });

//                 setShowBaseOptions(false);

//                             setSelectedScream(index)



//         };



//     return (
//         <div>

// //            <div className="baseboost-option" onClick={() => setShowBaseOptions(!showBaseOptions)}>



// //                         <div className="baseboost-parent">


// //                             <div className="baseboost-hamburger" onClick={()=> setShowBaseOptions(!showBaseOptions)}>
// //                                 <FontAwesomeIcon className="baseboost-hamburger-bars" icon={faBars} />

// //                             </div>


// //                             <div className="baseboost-logo">
// //                                 <span>|S. N. Valadez|</span>
// //                             </div>


// //                             <div className={showBaseOptions ? "baseboost-options show-hamburger-options" : "baseboost-options"}>
// {/* //                                 {getBaseBoostOptions()} */}
// //                             </div>

// //                         </div>

// //            </div>

// //         </div>
// //     )
//     }


// export default BaseBoost;