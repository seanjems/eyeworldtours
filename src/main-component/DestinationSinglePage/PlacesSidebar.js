import React from "react";
import Destinations from "../../api/destination";
import { Link } from "react-router-dom";
import ins1 from "../../images/instragram/1.jpg";
import ins2 from "../../images/instragram/2.jpg";
import ins3 from "../../images/instragram/3.jpg";
import ins4 from "../../images/instragram/4.jpg";
import ins5 from "../../images/instragram/5.jpg";
import ins6 from "../../images/instragram/6.jpg";
import PricingData from "../../components/PricingSection/PricingData";
const PlacesSidebar = (props) => {
  const SubmitHandler = (e) => {
    e.preventDefault();
  };

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <div className="col-lg-4 col-md-8">
      <div className="wpo-single-sidebar">
        <div className="wpo-service-widget widget">
          <h2>All Places</h2>
          <ul>
            {PricingData.map((destination, Sitem) => (
              <li key={Sitem}>
                <Link onClick={ClickHandler} to={`/places/${destination.id}`}>
                  {destination.pakage}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* <div className="wpo-newsletter-widget widget">
                    <h2>Newsletter</h2>
                    <p>Join 20,000 Sabscribers!</p>
                    <form className="form" onSubmit={SubmitHandler}>
                        <input type="text" placeholder="Email Address" />
                        <button type="submit">Sign Up</button>
                    </form>
                    <span>By signing up you agree to our <Link onClick={ClickHandler} to="/destination-single/1">Privecy Policy</Link></span>
                </div> */}
        {/* <div className="wpo-instagram-widget widget">
                    <h2>Instagram Shot</h2>

                    <ul>
                        <li><img src={ins1} alt="" /></li>
                        <li><img src={ins2} alt="" /></li>
                        <li><img src={ins3} alt="" /></li>
                        <li><img src={ins4} alt="" /></li>
                        <li><img src={ins5} alt="" /></li>
                        <li><img src={ins6} alt="" /></li>
                    </ul>
                </div> */}

        <div className="wpo-contact-widget widget">
          <h2>
            Book now <br /> or Inquire more
          </h2>
          <p>
            Contact us now to customise and book your next safari and enjoy
            these life changing experiences
          </p>
          <Link onClick={ClickHandler} to="/contact">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlacesSidebar;
