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
                  {Services.slice(0, 5).map((service, sitem) => (
                    <li key={sitem}>
                      <Link
                        onClick={ClickHandler}
                        to={`/service-single/${service.id}`}
                      >
                        {service.title}
                      </Link>
                    </li>
                  ))}
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
                    <Link onClick={ClickHandler} to="/about">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} to="/destination">
                      Populer Destinition
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} to="/room">
                      Awesome Rooms
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} to="/service">
                      Our Services
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} to="/pricing">
                      Pricing Plan
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
                      <i className="fi flaticon-placeholder"></i>7 Green Lake
                      Street Crawfordsville, IN 47933
                    </li>
                    <li>
                      <i className="fi flaticon-phone-call"></i>+1 800 123 456
                      789
                    </li>
                    <li>
                      <i className="fi flaticon-send"></i>parador@gmail.com
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
                Copyright &copy; 2022 Parador by{" "}
                <Link onClick={ClickHandler} to="/">
                  wpOceans
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
