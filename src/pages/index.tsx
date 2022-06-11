import React from "react";
import "../css/index.css";
import desertSandal from "../images/baseOfSandal-removebg-preview.png";
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

const SandalImage = ({ type }: { type: string }) => {
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

        <img style={sandalStyle} src={desertSandal} alt="Desert Sandal" />
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
      <SandalImage type="backSandal" />
      <SandalImage type="frontSandal" />
      <SandalImage type="angleSandal" />
      <SandalImage type="sideOnSandal" />
    </main>
  );
};

export default IndexPage;
