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
      <style>
        {`
        :root {
          --dark-color: #002533;
        }
        
        #grid {
          display: grid;
          font-family: "Austin", "Times New Roman", "Georgia", serif;
          color: var(--dark-color);
          grid-template-columns: repeat(12, 1fr);
          grid-template-rows: repeat(15, 50px);
          grid-gap: 5px;
          font-size: 1em !important;
        }
        
        nav {
          grid-column: 1/13;
          grid-row: 1/2;
          text-align: center;
          border-bottom: 2px solid var(--dark-color);
          font-size: 2em;
        }
        
        .sandalBackground {
          width: 100%;
          height: 100%;
          grid-column: 1/13;
          grid-row: 2/12;
          opacity: 0.75;
        }
        
        .sandalImage {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .sandal {
          position: relative;
        }
        
        .fadesIn {
          position: absolute;
          top: 5%;
          left: 5%;
          height: 190px;
          width: 190px;
          padding: 5px;
        }
        
        .sideOnSandal {
          grid-column: 1/ 4;
          grid-row: 1/10;
          opacity: 0;
          animation-name: fade-in;
          animation-duration: 0.75s;
          animation-fill-mode: forwards;
          animation-delay: 0s;
        }
        .frontSandal {
          grid-column: 4/7;
          grid-row: 1/10;
          opacity: 0;
          animation-name: fade-in;
          animation-duration: 0.75s;
          animation-fill-mode: forwards;
          animation-delay: 0.75s;
        }
        .angleSandal {
          grid-column: 7/10;
          grid-row: 1/10;
          opacity: 0;
          animation-name: fade-in;
          animation-duration: 0.75s;
          animation-fill-mode: forwards;
          animation-delay: 1.5s;
        }
        .backSandal {
          grid-column: 10/13;
          grid-row: 1/10;
          opacity: 0;
          animation-name: fade-in;
          animation-duration: 0.75s;
          animation-fill-mode: forwards;
          animation-delay: 2.25s;
        }
        
        .reviews {
          grid-column: 1/13;
          grid-row: 9/11;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
        
        .review {
          z-index: 1;
          padding: 10px;
          background: white;
          text-align: center;
          margin: 5px;
          width: 30%;
          height: 100px;
        }
        
        .trustpilot-stars {
          margin-left: auto;
          margin-right: auto;
          /* position: absolute; */
          height: auto;
          width: 100px;
          /* left: 0;
              top: 0; */
        }
        
        .sandalHazyBackground {
          background: var(--dark-color);
          opacity: 0.5;
          z-index: 1;
          height: 220px;
          width: 220px;
        }
        
        .review > * {
          display: block;
        }
        
        .review-text {
          font-size: 0.8em;
          font-style: italic;
        }
        
        .reviewer {
          font-size: 1em;
          margin: 10px 0px;
        }
        
        .product-info-section {
          font-size: large;
          border-bottom: 2px solid var(--dark-color);
          border-top: 2px solid var(--dark-color);
          padding: 5px;
          grid-column: 1/13;
          grid-row: 12/16;
          display: flex;
          justify-content: center;
          align-items: top;
        }
        
        .buy-now-button {
          background: white;
          font-size: large;
          border: 2px solid var(--dark-color);
          padding: 5px;
          font-family: "Austin", "Times New Roman", "Georgia", serif;
          color: var(--dark-color);
        }
        
        .buy-now-button:hover {
          transition: 0.2s;
          background: var(--dark-color);
          color: white;
        }
        
        @keyframes fade-in {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        
        `}
      </style>
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
