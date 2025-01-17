import React from "react";
import "./Greeting.css";
// import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
// import BannerImg from "./BannerImg";
import Typewriter from "typewriter-effect";
import myImage from "../../assets/Zamil Image 2024-05-05.jpg";
// import CompetitiveSites from "../../components/competitiveSites/CompetitiveSites";
// import { competitiveSites } from "../../portfolio";
export default function Greeting(props) {
  const theme = props.theme;
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text" style={{ color: theme.orange }}>
                {greeting.title}
              </h1>
              <h1 className="greeting-sub" style={{ color: theme.grayText }}>
                <mark data-entity="person">{greeting.sub}</mark>
              </h1>
              <h1 className="greeting-typewriter" style={{color: theme.blue}}>
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("مرحبا")
                      .pauseFor(3000)
                      .deleteAll()
                      .typeString("வணக்கம்")
                      .pauseFor(3000)
                      .deleteAll()
                      .typeString("Hello")
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("Hola")
                      .pauseFor(200)
                      .deleteAll()
                      .typeString("Bonjour")
                      .pauseFor(200)
                      .deleteAll()
                      .typeString("你好 ")
                      .pauseFor(200)
                      .deleteAll()
                      .typeString("안녕하세요 ")
                      .pauseFor(200)
                      .deleteAll()
                      .typeString("こんにちは ")
                      .pauseFor(200)
                      .deleteAll()
                      .typeString("नमस्ते ")
                      .pauseFor(200)
                      .deleteAll()
                      .typeString("ہیلو ")
                      .pauseFor(200)
                      .deleteAll()
                      .typeString("Здравствуйте ")
                      .pauseFor(200)
                      .deleteAll()
                      .typeString("سلام ")
                      .pauseFor(1000)
                      .start();
                  }}
                  options={{
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>
              <span
                className="greeting-text-span subTitle"
                style={{ color: theme.text }}>
                <div className="entities">
                  An <mark data-entity="action">Ambitious</mark>{" "}
                  individual who{" "}
                  <mark data-entity="verb">Thrives</mark> on{" "}
                  <mark data-entity="skill">Learning</mark> and<mark data-entity="goal">Growth</mark>                 
                </div>
              </span>
              {/*<CompetitiveSites logos={competitiveSites.competitiveSites} />*/}
              <div className="button-greeting-div">
                <Button text="Contact me" href="/contact" />
                {/*<Button
                  text="See my resume"
                  newTab={true}
                  href={greeting.resumeLink}
                />*/}
              </div>
            </div>
          </div>
          <div className="greeting-image-div">           
          <img style={{borderRadius: "80%",}} src={myImage} alt="Description" />
          </div>
        </div>
      </div>
    </Fade>
  );
}