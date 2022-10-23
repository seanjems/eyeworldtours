import React, { Fragment } from "react";
import PageTitle from "../../components/pagetitle/PageTitle";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Scrollbar from "../../components/scrollbar";
import Destinations from "../../api/destination";
import Benefits from "./benefits";
import DestinationSidebar from "./sidebar";
import Footer from "../../components/footer";
import Logo from "../../images/logo2.png";
import PricingData from "../../components/PricingSection/PricingData";

import dimg1 from "../../images/destination-single/2.jpg";
import dimg2 from "../../images/destination-single/3.jpg";
import Newslatter from "../../components/Newslatter/Newslatter";
import PlacesSidebar from "./PlacesSidebar";

const PlacesSinglePage = (props) => {
  const { id } = useParams();

  const destinationDetails = PricingData.find((item) => {
    return parseInt(item.id) === parseInt(id);
  });
  console.log(
    "🚀 ~ file: PlacesSinglePage.js ~ line 32 ~ destinationDetails ~ destinationDetails",
    destinationDetails
  );

  return (
    <Fragment>
      <Navbar hclass={"wpo-header-style-3"} Logo={Logo} />
      {destinationDetails && (
        <PageTitle pageTitle={destinationDetails.pakage} pagesub={"places"} />
      )}
      <section className="wpo-destination-single-section section-padding">
        {destinationDetails && (
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-12">
                <div className="wpo-destination-single-wrap">
                  <div className="wpo-destination-single-content">
                    <img src={destinationDetails.prImg} alt="" />
                    <div className="wpo-destination-single-content-des">
                      <h2>{destinationDetails.pakage}</h2>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: destinationDetails.article,
                        }}
                      />
                      {/* <div className="wpo-destination-single-sub-img">
                        <ul>
                          <li>
                            <img src="" alt="" />
                          </li>
                          <li>
                            <img src="" alt="" />
                          </li>
                        </ul>
                      </div> */}
                    </div>
                  </div>
                  {/* <div
                  dangerouslySetInnerHTML={{
                    __html: destinationDetails.descriptionPar2,
                  }}
                /> */}
                  <div className="room-d-text">
                    <div className="room-title">
                      <h2>Features</h2>
                    </div>
                    <ul>
                      <li>
                        <Link style={{ cursor: "text" }}>
                          {destinationDetails.l1}
                        </Link>
                      </li>
                      <li>
                        <Link style={{ cursor: "text" }}>
                          {destinationDetails.l2}
                        </Link>
                      </li>
                      <li>
                        <Link style={{ cursor: "text" }}>
                          {destinationDetails.l3}
                        </Link>
                      </li>
                      <li>
                        <Link style={{ cursor: "text" }}>
                          {destinationDetails.l4}
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <Benefits />
                </div>
              </div>
              <PlacesSidebar />
            </div>
          </div>
        )}
      </section>
      <Newslatter nClass={"section-bg"} />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default PlacesSinglePage;
