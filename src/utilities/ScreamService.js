import { TOTAL_SCREAM } from "./comUtils";

import { Subject } from "rxjs"



 class ScreamService{

    static currentScreamFadeIn = new Subject();

    static currentScreamBroadCaster = new Subject();

    static screamHandler = new ScreamService();


    constructor(){
        window.addEventListener("scroll",
        this.checkCurrentScreamUnderView);
    }

    screamToHire =()=>{
        let contactMeScream = document.getElementById("Contact")
        if(!contactMeScream) return;
        contactMeScream.scrollIntoView({behavior:"smooth"})
    }

    screamToMain =()=>{
        let mainScream = document.getElementById("Main")
        if(!mainScream) return;
        mainScream.scrollIntoView({behavior:"smooth"})
    }

    isElemInView =(elem, type)=>{
        let rec =elem.getBoundingClientRect();

        let elemTop = rec.top;

        let elemBot =rec.bottom

        let partialVis = elemTop <window.innerHeight && elemBot >=0;
        let completVis = elemTop >= 0 && elemBot <= window.innerHeight;


        switch(type) {

            case "complete":
                return completVis
                default:
                    return false

            case "partial":
                return partialVis;

        }
    }
    
    checkCurrentScreamUnderView =(event)=>{
        if(!event || object.keys(event).length < 1)
        return;

        for(let scream of TOTAL_SCREAM){
            let screamFromDom = document.getElementById(scream.scream_name);
            if(!screamFromDom)
            continue;

            let fullVis = this.isElemInView(screamFromDom, "complete");
            let partialVis= this.isElemInView(screamFromDom, "partial")



            if (fullVis || partialVis){

                if(partialVis && !scream.alreadyRendered){

                    ScreamService.currentScreamFadeIn.next({
                        fadeInScream: scream.scream_name
                    });
                    scream["alreadyRendered"] = true;
                    break;
                }

                         if(fullVis){
                             ScreamService.currentScreamBroadCaster.next({
                                 screamInView: scream.scream_name,
                             });

                             break;
                         }

            }
        }
    }
}



export default ScreamService;