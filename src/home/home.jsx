import "./home.css"

import linkedin_icon from "../assets/linkedin.svg"
import twitter_icon from "../assets/twitter-x.svg"
import github_icon from "../assets/github.svg"
import background_image from "../assets/header.jpg"
import selfie_image from "../assets/selfie.jpg"
import cake_icon from "../assets/cake2.svg"
import mortarboard_icon from "../assets/mortarboard.svg"
import book_icon from "../assets/book.svg"
import location_icon from "../assets/geo-alt.svg"

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
    <div id="about-me">
        <h1>About Me</h1>

        <div className="flex-container">
            <div className="left" id="selfie">
                <img src={selfie_image}/>
            </div>
            <div className="right">
                <a>
                Hi! I&apos;m Kyle — an engineering student from California. I&apos;m majoring in 
                Mechanical Engineering, but I spend a lot of my energy with software engineering; 
                I&apos;m trying to get well rounded in both subjects. This page is dedicated to 
                showcasing some of the projects I&apos;ve been working on. I&apos;m a hands-on person, 
                so this is my way of learning.
                </a>
                <div className="flex-container">
                    <div className="info-card left">
                        <div className="icon-text-pair">
                            <img className="icon" src={mortarboard_icon}/>
                            <a style={{textTransform: "underline"}} href="https://canadacollege.edu">Cañada College</a>
                        </div>
                        <div className="icon-text-pair">
                            <img className="icon" src={book_icon}/>
                            <a style={{textTransform: "underline"}}>Studying Mechanical Engineering</a>
                        </div>
                    </div>
                    <div className="info-card right">
                        <div className="icon-text-pair">
                            <img className="icon" src={cake_icon}/>
                            <a>February 1st, 2005</a>
                        </div>

                        <div className="icon-text-pair">
                            <img className="icon" src={location_icon}/>
                            <a>Bay Area, California</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div id="project-list">
        <h1>What I&apos;ve Been Up To</h1>
        <a>The following are some projects I&apos;ve been working on. Feel free to shoot me a question about any of them!</a>

    </div>

    </div>

}