import React from "react";
import "./style.css";
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
        <div className="header-container stoke-me-base">
            <div className="header-parent">
                <div className="header-details">
                    <div className="social">
                        <div className="social-icon">


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

                        <span className="header-role-tagline">
                            Eager and knowledgeable of building applications 
                            with both front and back-end technologies.
                        </span>
                    </span>
                </div>
                <div className="header-options">
                    <a href="https://snvaladez.github.io/">
                    <button className="btn primary-btn">
                        {""}
                        Online Portfolio{" "}
                    </button>
                    </a>
                    <a href="https://www.linkedin.com/in/sn-valadez-0962a6207">
                        <button className="btn highlighted-btn">Get Online Resume</button>
                    </a>
                    <br></br>
                    <br></br>
                    <a href="https://git.heroku.com/quackchat-project3.git">
                    <button className="btn primary-btn">
                        {" "}
                        QuackChat Group Project{" "}
                    </button>
                    </a>
                </div>

                </div>
                            <div className="header-picture">
                                <div className="header-picture-background"></div>
                            </div>


            </div>
        </div>
    )
}


export default Header;