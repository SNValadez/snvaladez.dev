import Main from "../components/Main"

import React from 'react'


export const GET_SCREAM_INDIE = (scream_name)=>{


    if(!scream_name) return -1
    for(let i =0; i< TOTAL_SCREAM.length; i++){
        if (TOTAL_SCREAM[i].scream_name === scream_name) return i;
    }

    return -1;

}

export const TOTAL_SCREAM = [
      {
          scream_name: "Main",
          component: Main

        }

]






 function comUtils() {
    return (
        <div>
            
        </div>
    )
}


export default comUtils