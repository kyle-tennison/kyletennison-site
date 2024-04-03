import "./home.css"

import linkedin_icon from "../assets/linkedin.svg"
import twitter_icon from "../assets/twitter-x.svg"
import github_icon from "../assets/github.svg"
import background_image from "../assets/header.jpg"

export default function Home(){


    return <div id="home-page">

    <div className="banner" style={{backgroundImage: `url(${background_image})`}}>
        <h1>Kyle Tennison</h1>
        <h2>Engineering Student and Software Developer</h2>
        <div id="social-icons">

            <img src={twitter_icon}></img>
            <img src={github_icon}></img>
            <img src={linkedin_icon}></img>

        </div>
        <p>kyletennison05@gmail.com</p>
    </div>


    </div>

}