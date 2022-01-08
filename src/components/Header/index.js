import React from "react";
import Typical from 'react-typical';
// import "./style.css"
// import Nav from "../Nav"

// function Header(props) {
//      console.log(props.page);
//     return (
//         <header>
//             <h1>
//                 S. N. Valadez
//             </h1>
//             <Nav >
            
//            </Nav>
//         </header>
//     )

// }

function Header() {
    return (
        <div className="header-container">
            <div className="header-parent">
                <div className="header-details">
                    <div className="colz">
                        <a href="https://github.com/SNValadez">
                            <i className="fa fa-github"></i>
                        </a>
                        <a href="https://twitter.com/snvaladez">
                            <i className="fa fa-twitter"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/sn-valadez-0962a6207">
                            <i className="fa fa-linkedin"></i>
                        </a>
                     
                    </div>

                    <div className="header-details-name">

                        <span className="primary-text">
                            {" "}
                            Hey, there! I'M <span className="highlighted-text">S. N. Valadez</span>

                        </span>
                    </div>
                
                <div className="header-details-role">
                    <span className="primary-text">
                        {" "}
                        <h1>
                            {" "}
                            <Typical 
                            loop={Infinity}
                            steps={[
                                "Hard-Working 🦾",
                                1000,
                                "Full Stack Web Developer 💻",
                                1000,
                                "Enthusiastic 💞",
                                1000,
                                "Software Engineer 😎",
                                1000,
                                "Team Player 🌎",
                                1000,
                            ]}
                            />
                        </h1>
                    </span>
                </div>

                </div>

            </div>
        </div>
    )
}


export default Header;