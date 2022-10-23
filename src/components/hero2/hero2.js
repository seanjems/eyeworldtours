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
                      With years of expertise planning trips all throughout
                      Uganda, we are your go-to tour operator and provide a
                      dedicated, specialized service. We have extensive
                      knowledge about Uganda's attractions and are passionate
                      about the country. Our headquarters are in Kampala,
                      Uganda's capital. Our creative personalized trips and
                      professionally led packaged tours & safaris reflect our
                      in-depth knowledge of the industry.
                    </p>
                    <span>Explorer Uganda while cherishing every moment</span>
                  </div>
                  <div className="clearfix"></div>
                  <div className="slide-btns mt-2">
                    <Link
                      className="theme-btn"
                      onClick={ClickHandler}
                      to="/contact"
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
