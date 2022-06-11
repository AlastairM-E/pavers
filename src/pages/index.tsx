import React from "react";
import "../css/index.css";
import sideSandal from "../images/side-sandal-remove-bg.png";
import angleSandal from "../images/angle-sandal-remove-bg.png";
import frontSandal from "../images/front-sandal-remove-bg.png";
import baseOfSandal from "../images/baseOfSandal-remove-bg.png";
import desertBackground from "../images/CalicoBasin.jpg";

const navbarStyles = {
  textAlign: "center",
  borderBottom: "2px solid black",
};

const sandalHazyBackgroundStyle = {
  background: "black",
  opacity: 0.3,
  zIndex: 1,
  height: 200,
  width: 200,
};

const sandalStyle = {
  position: "absolute",
  top: "7.5%",
  left: "0%",
  height: 200,
  width: 200,
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

        <img style={sandalStyle} src={src} alt="Desert Sandal" />
      </article>
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
    </main>
  );
};

export default IndexPage;
