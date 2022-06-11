import React from "react";
import "../css/index.css";
import trustpilot from "../images/trustpilot.svg";
import sideSandal from "../images/side-sandal-remove-bg.png";
import angleSandal from "../images/angle-sandal-remove-bg.png";
import frontSandal from "../images/front-sandal-remove-bg.png";
import baseOfSandal from "../images/baseOfSandal-remove-bg.png";
import desertBackground from "../images/CalicoBasin.jpg";

const navbarStyles = {
  textAlign: "center",
  borderBottom: "2px solid black",
  fontSize: "2em",
};

const sandalHazyBackgroundStyle = {
  background: "black",
  opacity: 0.3,
  zIndex: 1,
  height: 220,
  width: 220,
};

const sandalStyle = {
  position: "absolute",
  top: "5%",
  left: "0%",
  height: 200,
  width: 200,
  padding: "5px",
};

const SandalImage = ({ type, src }: { type: string; src: string }) => {
  return (
    <div className={`sandalImage ${type}`}>
      <article className="sandal">
        <div
          className="hazyBackgroundContainer"
          style={{ border: "2px solid white" }}
        >
          <div
            className="sandalHazyBackground"
            style={sandalHazyBackgroundStyle}
          />
        </div>

        <img
          className="fadesIn"
          style={sandalStyle}
          src={src}
          alt="Desert Sandal"
        />
      </article>
    </div>
  );
};

const TrustpilotReview = ({
  children,
  reviewer,
}: {
  children: any;
  reviewer: string;
}) => {
  return (
    <div className="review">
      <img
        className="trustpilot-stars"
        src={trustpilot}
        alt="TrustPilot 5 star reviews"
        width="100px"
        height="auto"
      />
      <span className="reviewer">{reviewer}</span>
      <span className="review-text">{children}</span>
    </div>
  );
};

const IndexPage = () => {
  return (
    <main id="grid">
      <nav style={navbarStyles}>Adjustable Summer Sandals</nav>
      <img
        className="sandalBackground"
        src={desertBackground}
        alt="Mojave desert background"
      />
      <SandalImage type="sideOnSandal" src={sideSandal} />
      <SandalImage type="frontSandal" src={frontSandal} />
      <SandalImage type="angleSandal" src={angleSandal} />
      <SandalImage type="backSandal" src={baseOfSandal} />
      <div className="reviews">
        <TrustpilotReview reviewer="Wiljanew">
          "Very Comfortable good fit =- worn throughout 7 day holiday with
          absolute ease"
        </TrustpilotReview>
        <TrustpilotReview reviewer="🌹🌹🌹">
          "Bought these for holiday for a change to trainers. Think they'll be
          cooler and comfortable as the temperature increases"
        </TrustpilotReview>
        <TrustpilotReview reviewer="Brenda Livesey">
          "very good quality sandals, excellent comfort. Will definitely be
          buying another colour if available"
        </TrustpilotReview>
      </div>
    </main>
  );
};

export default IndexPage;
