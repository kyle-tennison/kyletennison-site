import ProjectCard from "./project-card";

import "./home.css";
import linkedin_icon from "../assets/icons/linkedin.svg";
import twitter_icon from "../assets/icons/twitter-x.svg";
import github_icon from "../assets/icons/github.svg";
import background_image from "../assets/icons/header.jpg";
import selfie_image from "../assets/selfie.jpg";
import cake_icon from "../assets/icons/cake2.svg";
import mortarboard_icon from "../assets/icons/mortarboard.svg";
import book_icon from "../assets/icons/book.svg";
import location_icon from "../assets/icons/geo-alt.svg";
import boxes_icon from "../assets/icons/boxes.svg";
import link_icon from "../assets/icons/link.svg";

import magnetite_img from "../assets/project-pictures/magnetite.png";
import pyrite_img from "../assets/project-pictures/pyrite.png";
import climber_img from "../assets/project-pictures/climber.jpg";
import franklin_img from "../assets/project-pictures/franklin.png";
import parsley_img from "../assets/project-pictures/parsley.png"
import onpy_img from "../assets/project-pictures/onpy.png"
import polybrain_img from "../assets/project-pictures/polybrain.png"

export default function Home() {
  return (
    <div id="home-page">
      <div
        className="banner"
        style={{ backgroundImage: `url(${background_image})` }}
      >
        <h1>Kyle Tennison</h1>
        <h2>ME Student and Independent SWE</h2>
        <div id="social-icons">
          <img className="icon clickable" src={twitter_icon}></img>
          <img
            className="icon clickable"
            src={github_icon}
            onClick={() =>
              window.open("https://github.com/kyle-tennison", "_blank")
            }
          ></img>
          <img
            className="icon clickable"
            src={linkedin_icon}
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/kyle-tennison-1704631b0/",
                "_blank",
              )
            }
          ></img>
        </div>
        <p>kyletennison05@gmail.com</p>
      </div>
      <div id="about-me">
        <h1>About Me</h1>

        <div className="flex-container">
          <div className="left" id="selfie">
            <img src={selfie_image} />
          </div>
          <div className="right">
            <a>
              Hi! I&apos;m Kyle — a mechanical engineering student from California.
              I&apos;m majoring in Mechanical Engineering, but I spend a lot of
              my time with software engineering; I&apos;m trying to get well
              rounded in both subjects. This page is dedicated to showcasing
              some of the projects I&apos;ve been working on. I&apos;m a
              hands-on person, so this is my way of learning.
            </a>
            <div className="flex-container">
              <div className="info-card left">
                <div className="icon-text-pair">
                  <img className="icon" src={mortarboard_icon} />
                  <a
                    style={{ textTransform: "underline" }}
                    href="https://gatech.edu/"
                  >
                    Georgia Tech
                  </a>
                </div>
                <div className="icon-text-pair">
                  <img className="icon" src={book_icon} />
                  <a style={{ textTransform: "underline" }}>
                    Studying Mechanical Engineering
                  </a>
                </div>
              </div>
              <div className="info-card right">
                <div className="icon-text-pair">
                  <img className="icon" src={cake_icon} />
                  <a>February 1st, 2005</a>
                </div>

                <div className="icon-text-pair">
                  <img className="icon" src={location_icon} />
                  <a>Bay Area, California</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="project-list">
        <h1>What I&apos;ve Been Up To</h1>
        <a>
          The following are some projects I&apos;ve been working on. Feel free
          to shoot me a question about any of them!
        </a>

        <div className="flex-container cards-container">
          <ProjectCard
            img={polybrain_img}
            title="Polybrain"
            text="AI powered CAD generation."
            icon={link_icon}
            icon_text="Visit website"
            link="https://polybrain.xyz/"
            date="May-October 2024"
          />
          <ProjectCard
            img={magnetite_img}
            title="Magnetite FEA"
            text="A 2D Finite-Element Method Mechanical Simulator, built in Rust."
            icon={github_icon}
            icon_text="Check it out on GitHub"
            link="https://github.com/kyle-tennison/Magnetite"
            date="March-April 2024"
          />
          <ProjectCard
            img={onpy_img}
            title="OnPy"
            text="A Python API for building 3D models with OnShape"
            icon={github_icon}
            icon_text="Check it out on GitHub"
            link="https://github.com/kyle-tennison/onpy"
            date="May 2024"
          />
          <ProjectCard
            img={pyrite_img}
            title="Pyrite FEA"
            text="Another 2D FEA Simulator built Natively in Python."
            icon={github_icon}
            icon_text="Check it out on GitHub"
            link="https://github.com/kyle-tennison/Pyrite"
            date="March 2024"
          />
          <ProjectCard
            img={franklin_img}
            title="Franklin"
            text="A self-balancing robot friend. Work in progress."
            icon={github_icon}
            icon_text="Check it out on GitHub"
            link="https://github.com/kyle-tennison/franklin"
            date="December-Now 2023"
          />
          <ProjectCard
            img={parsley_img}
            title="Parsley"
            text="An external post-post-processor to fix faulty machine code."
            icon={github_icon}
            icon_text="Check it out on GitHub"
            link="https://github.com/kyle-tennison/parsley"
            date="October-November 2023"
          />
          <ProjectCard
            img={climber_img}
            title="5940 BREAD 2023 Climber"
            text="Climber Subsystem for the FRC 2023 Competition."
            icon={boxes_icon}
            icon_text="Check out the Model"
            link="https://cad.onshape.com/documents/f24fe5dbb9a6ebea2bf3693f"
            date="January-March 2023"
          />
        </div>
      </div>
    </div>
  );
}
