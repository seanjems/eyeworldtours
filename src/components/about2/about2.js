import React from "react";
import { Link } from "react-router-dom";
import abimg from "../../images/park/2.jpeg";

const About2 = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <section className="wpo-about-section section-padding">
      <div className="container">
        <div className="wpo-about-section-wrapper">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 col-12">
              <div className="wpo-about-img">
                <img src={abimg} alt="" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <div className="wpo-about-content">
                <div className="about-title">
                  <span>Exclusive Offer</span>
                  <h2>2 Week cross Uganda-Rwanda Tour</h2>
                </div>
                <div className="wpo-about-content-inner">
                  <p>
                    If you are brave enough to travel far across the desert,
                    love the outdoors, are strong and tough, then this trip is
                    for you. On this tour you travel through the impenetrable
                    forests of the famous Uganda Safari Park Kidepo, Murchison
                    Falls, Queen Elizabeth, Kibale and Bwindi. You will also
                    travel to Rwanda where you will see different mountain
                    ranges before completing a city tour to learn about the
                    history of the Rwandan people. A stroll through the above
                    mentioned parks will put you in the habitat of lions,
                    leopards, buffaloes, giraffes, elephants, hippos and other
                    wild animals, making it a worthwhile destination for nature
                    lovers. The safari site also has beautiful scenery.
                  </p>
                  <div className="about-info-wrap">
                    <div className="about-info-left">
                      <p>14 days</p>
                      <ul>
                        <li>
                          <i className="fa fa-star" aria-hidden="true"></i>
                        </li>
                        <li>
                          <i className="fa fa-star" aria-hidden="true"></i>
                        </li>
                        <li>
                          <i className="fa fa-star" aria-hidden="true"></i>
                        </li>
                        <li>
                          <i className="fa fa-star" aria-hidden="true"></i>
                        </li>
                        <li>
                          <span>
                            <i className="fa fa-star" aria-hidden="true"></i>
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="about-info-right">
                      <p>Only</p>
                      <h3>$5210</h3>
                    </div>
                  </div>
                  <Link
                    className="theme-btn"
                    onClick={ClickHandler}
                    to="/destination-single/1"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About2;
