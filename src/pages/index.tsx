import React from "react";
import "../css/index.css";
import { StaticImage } from "gatsby-plugin-image";
import TrustpilotStars from "../images/TrustpilotStars";

const SandalImage = ({ type, children }: { type: string; children: any }) => {
  return (
    <div className={`sandalImage ${type}`}>
      <article className="sandal">
        <div
          className="hazyBackgroundContainer"
          style={{ border: "2px solid white" }}
        >
          <div className="sandalHazyBackground" />
        </div>
        {children}
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
      <TrustpilotStars />
      <span className="reviewer">{reviewer}</span>
      <span className="review-text">{children}</span>
    </div>
  );
};

const IndexPage = () => {
  return (
    <>
      <main id="grid">
        <nav>Adjustable Summer Sandals</nav>
        <StaticImage
          className="sandalBackground"
          src="../images/CalicoBasin.jpg"
          placeholder="blurred"
          alt="Mojave desert background"
        />
        <SandalImage type="sideOnSandal">
          <StaticImage
            className="fadesIn"
            src="../images/side-sandal-remove-bg.png"
            alt="Desert Sandal"
            placeholder="none"
          />
        </SandalImage>
        <SandalImage type="frontSandal">
          <StaticImage
            className="fadesIn"
            src="../images/front-sandal-remove-bg.png"
            alt="Desert Sandal"
            placeholder="none"
          />
        </SandalImage>
        <SandalImage type="angleSandal">
          <StaticImage
            className="fadesIn"
            src="../images/angle-sandal-remove-bg.png"
            alt="Desert Sandal"
            placeholder="none"
          />
        </SandalImage>
        <SandalImage type="backSandal">
          <StaticImage
            className="fadesIn"
            src="../images/baseOfSandal-remove-bg.png"
            alt="Desert Sandal"
            placeholder="none"
          />
        </SandalImage>
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

        <section className="product-info-section">
          <div>
            <h2>Product Info</h2>
            <ul>
              <li>Size: 7 | 8 | 9 | 10 | 11.</li>
              <li>Price: £34.99.</li>
              <li>Color: Brown | Dark grey.</li>
            </ul>
            <button className="buy-now-button">Buy Now</button>
          </div>
        </section>
      </main>
    </>
  );
};

export default IndexPage;
