import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/logo.png";
import Services from "../../api/service";

const Footer = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <footer className="wpo-site-footer">
      <div className="wpo-upper-footer">
        <div className="container">
          <div className="row">
            <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="widget about-widget">
                <div className="logo widget-title">
                  <img src={Logo} alt="footer" />
                </div>

                <p>
                  We're determined to open people's eyes to things beyond what
                  they already know, have heard about, or can imagine.
                </p>
                <ul>
                  <li>
                    <Link onClick={ClickHandler} to="/">
                      <i className="ti-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} to="/">
                      <i className="ti-twitter-alt"></i>
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} to="/">
                      <i className="ti-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} to="/">
                      <i className="ti-google"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="widget link-widget s1">
                <div className="widget-title">
                  <h3>Services</h3>
                </div>
                <ul>
                  <li>
                    <Link onClick={ClickHandler} to={`/destination`}>
                      Tour Packages
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} to={`/places`}>
                      Places to visit
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} to={`/exclusive`}>
                      Exclusive offer
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="widget link-widget">
                <div className="widget-title">
                  <h3>Important Links</h3>
                </div>
                <ul>
                  <li>
                    <Link onClick={ClickHandler} to="/contact">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} to="/">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} to="/contact">
                      Book Safari
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="widget wpo-service-link-widget">
                <div className="widget-title">
                  <h3>Contact </h3>
                </div>
                <div className="contact-ft">
                  <ul>
                    <li>
                      <i className="fi flaticon-placeholder"></i> P.O BOX
                      25956-KAMPALA <br /> Ambassador House, 2nd Floor Suit #07
                    </li>
                    <li>
                      <i className="fi flaticon-phone-call"></i>+256 750 070 309
                    </li>
                    <li>
                      <i className="fi flaticon-send"></i>info@eyeworldtours.com
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wpo-lower-footer">
        <div className="container">
          <div className="row">
            <div className="col col-xs-12">
              <p className="copyright">
                {" "}
                Copyright &copy; {new Date().getFullYear()} by{" "}
                <Link onClick={ClickHandler} to="/">
                  Seraphim Eyeworld Tours
                </Link>
                . All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
