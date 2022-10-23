import React from "react";
import { Link } from "react-router-dom";
import imageHero from "../../images/park/1.jpeg";

const ClickHandler = () => {
  window.scrollTo(10, 0);
};

const Hero2 = (props) => {
  return (
    <section className="static-hero">
      <div className="hero-container">
        <div className="hero-inner">
          <div className="container-fluid">
            <div className="row justify-content-end">
              <div className="col-lg-6">
                <div className="wpo-slide-content">
                  <div className="slide-title">
                    <h2 className="d-flex flex-column">
                      <span>Seraphim</span>Eye World Tours
                    </h2>
                    <p>
                      Seraphim Eyeworld Tours is one of the top tourism
                      businesses in Uganda. Its headquarters are in Kampala, and
                      it also has an office in the Rukungiri-Bwambara
                      Sub-county, with the aim of providing expert services to
                      travelers and explorers from all over the world.
                    </p>
                    <span>Explorer Uganda while cherishing every moment</span>
                  </div>
                  <div className="clearfix"></div>
                  <div className="slide-btns mt-2">
                    <Link
                      className="theme-btn"
                      onClick={ClickHandler}
                      to="/room"
                    >
                      {" "}
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="left-img">
        <img src={imageHero} style={{ minHeight: "100%" }} />
      </div>
    </section>
  );
};

export default Hero2;
