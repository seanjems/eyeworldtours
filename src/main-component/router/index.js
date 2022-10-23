import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage2 from "../HomePage2";
import AboutPage from "../AboutPage/AboutPage";
import DestinationPage from "../DestinationPage/DestinationPage";
import DestinationSinglePage from "../DestinationSinglePage/DestinationSinglePage";
import PricingPage from "../PricingPage/PricingPage";
import ContactPage from "../ContactPage/ContactPage";
import PlacesSinglePage from "../DestinationSinglePage/PlacesSinglePage";

const AllRoute = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage2 />} />
          <Route path="home" element={<Homepage2 />} />
          {/*<Route path='home2' element={<Homepage2 />} />
          <Route path='home3' element={<HomePage3 />} /> */}
          <Route path="about" element={<AboutPage />} />
          {/* <Route path="search-result" element={<SearchResults />} /> */}
          {/* <Route path="room-single/:id" element={<RoomSinglePage />} /> */}
          {/* <Route path="cart" element={<CartPage />} /> */}
          {/* <Route path="checkout" element={<CheckoutPage />} /> */}
          {/* <Route path="order_received" element={<OrderRecived />} /> */}
          {/* <Route path="room" element={<RoomPage />} /> */}
          <Route path="destination" element={<DestinationPage />} />
          <Route
            path="destination-single/:id"
            element={<DestinationSinglePage />}
          />
          <Route path="places/:id" element={<PlacesSinglePage />} />
          {/* <Route path="service" element={<ServicePage />} />
          <Route path="service-s2" element={<ServicePageS2 />} />
          <Route path="service-single/:id" element={<ServiceSinglePage />} /> */}
          <Route path="places" element={<PricingPage />} />
          {/* <Route path="404" element={<ErrorPage />} /> */}
          <Route path="contact" element={<ContactPage />} />
          {/* <Route path="blog-single/:id" element={<BlogDetails />} />
          <Route
            path="blog-single-left-sidebar/:id"
            element={<BlogDetailsLeftSiide />}
          />
          <Route
            path="blog-single-fullwidth/:id"
            element={<BlogDetailsFull />}
          />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog-left-sidebar" element={<BlogPageLeft />} />
          <Route path="blog-fullwidth" element={<BlogPageFullwidth />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<SignUpPage />} />
          <Route path="forgot-password" element={<ForgotPassword />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AllRoute;
