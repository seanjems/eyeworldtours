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

import dimg1 from "../../images/destination-single/2.jpg";
import dimg2 from "../../images/destination-single/3.jpg";
import Newslatter from "../../components/Newslatter/Newslatter";

const DestinationSinglePage = (props) => {
  const { id } = useParams();

  const destinationDetails = Destinations.find((item) => item.id === id);

  return (
    <Fragment>
      <Navbar hclass={"wpo-header-style-3"} Logo={Logo} />
      <PageTitle pageTitle={destinationDetails.title} pagesub={"destination"} />
      <section className="wpo-destination-single-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="wpo-destination-single-wrap">
                <div className="wpo-destination-single-content">
                  <img src={destinationDetails.dSimg} alt="" />
                  <div className="wpo-destination-single-content-des">
                    <h2>{destinationDetails.title}</h2>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: destinationDetails.descriptionPar1,
                      }}
                    />
                    <div className="wpo-destination-single-sub-img">
                      <ul>
                        <li>
                          <img src={destinationDetails.dimg2} alt="" />
                        </li>
                        <li>
                          <img src={destinationDetails.dimg} alt="" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: destinationDetails.descriptionPar2,
                  }}
                />
                <div className="room-d-text">
                  <div className="room-title">
                    <h2>Features</h2>
                  </div>
                  <ul>
                    {destinationDetails.placesToVist.map((item, idx) => (
                      <li key={idx}>
                        <Link style={{ cursor: "text" }}>{item}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <Benefits />
              </div>
            </div>
            <DestinationSidebar />
          </div>
        </div>
      </section>
      <Newslatter nClass={"section-bg"} />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default DestinationSinglePage;
