import React from "react";
import { Link } from "react-router-dom";

import SectionTitleS2 from "../SectionTitleS2";
import PricingData from "./PricingData";

const ClickHandler = () => {
  window.scrollTo(10, 0);
};

const PricingSection = (props) => {
  const pricingTiles = () => {
    if (props.showAll) {
      return PricingData;
    } else {
      return PricingData.slice(0, 3);
    }
  };
  return (
    <section className="wpo-pricing-section section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <SectionTitleS2
              MainTitle={"Places to Visit"}
              introText={
                "All of the locations in Uganda and Rwanda have been visited by our tour consultants, who have chosen the best locations that are worthwhile of your time and money. We take into account locations that are distinct, special, exciting, allow you to learn more about nature, and engage you on your anticipated vacation. View a few of the available packages below, then work with one of our guides to create your own thrilling tale."
              }
            />
          </div>
        </div>
        <div className="wpo-pricing-wrap">
          <div className="row">
            {pricingTiles().map((pricing, pitem) => (
              <div className="col col-lg-4 col-md-6 col-12" key={pitem}>
                <div className="wpo-pricing-item">
                  <div className="wpo-pricing-top">
                    <div className="wpo-pricing-img">
                      <img src={pricing.prImg} alt="" />
                    </div>
                    <div className="wpo-pricing-text">
                      <h4>{pricing.pakage}</h4>
                      {/* <h2>
                        ${pricing.price}
                        <span>/Per {pricing.subs}</span>
                      </h2> */}
                    </div>
                  </div>
                  <div className="wpo-pricing-bottom">
                    <div className="wpo-pricing-bottom-text">
                      <ul>
                        <li>{pricing.l1}</li>
                        <li>{pricing.l2}</li>
                        <li>{pricing.l4}</li>
                        <li>{pricing.l3}</li>
                      </ul>
                      <Link
                        onClick={ClickHandler}
                        className="theme-btn"
                        to={`/places/${pricing.id}`}
                      >
                        Read more
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {!props.showAll && (
        <div className="wpo-pricing-item row d-flex justify-content-center">
          <div
            className="wpo-pricing-bottom-text"
            style={{ width: "fit-content", marginTop: "1rem" }}
          >
            <Link onClick={ClickHandler} className="theme-btn" to="/places">
              View all
            </Link>
          </div>
        </div>
      )}
    </section>
  );
};

export default PricingSection;
