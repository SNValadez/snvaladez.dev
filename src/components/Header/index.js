import React from "react";
import "./style.css"
import Nav from "../Nav"

function Header(props) {
     console.log(props.page);
    return (
        <header>
            <h1>
                S. N. Valadez
            </h1>
            <Nav >
            
           </Nav>
        </header>
    )

}

export default Header;