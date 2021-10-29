import React, { useState } from "react";
// import "./about.css";
import MedicineStore from "../../assets/images/medicine-store.png";
import ClickAndCollect from "../../assets/images/ClickAndCollect.png";
import ScanOrder from "../../assets/images/ScanOrder.png";
import JatinImage from "../../assets/images/jatin_image_files/64748517_174385556912285_695364649589017995_n.jpg";
import RolitImage from "../../assets/images/rolit-image.jpg";
import IvanImage from "../../assets/images/ivan_image.jpeg";
import RishabImage from "../../assets/images/Rishab.jpeg";
import Discount from "../../assets/images/Discount.png";
import { Link as Link2 } from "react-scroll";
import Button from "@material-ui/core/Button";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};
const About = (props) => {
  return (
    <div>
      <div className="container">
        <div className="row mb-5" style={{ paddingTop: "230px" }}>
          <div className="col-12 text-center">
            <h2 style={{ fontSize: "40px", fontWeight: "500" }}>
              Vision and Mission
            </h2>
          </div>
          <br />
          <div className="col-12 text-center">
            <p style={{ fontSize: "22px" }}>
              Control your medical needs like never before. <br></br>
              We link your orders with potential sellers to make your work easy.
              <br></br>
              <br></br>
              <Button class="MuiButtonBase-root MuiButton-root MuiButton-contained Green_Button MuiButton-containedPrimary">
                <Link2
                  to="features"
                  activeClass="active" spy={true} smooth={true} offset={-70} duration={100}
                  className="font-weight-bold"
                  style={{ textDecoration: "none", color: "#ffffff" }}
                >
                  More
                </Link2>
              </Button>
            </p>
          </div>
        </div>
        <br />
        <div className="row mt-5 pt-5" name="features">
          <div className="col-12 text-center">
            <h2 style={{ fontSize: "40px", fontWeight: "500" }}>Features</h2>
            <br />
          </div>
          {/* Cards */}
          <div className="col-12 col-md-4 py-3 d-flex justify-content-center align-items-center">
            <div className="card" style={{ width: "18rem" }}>
              <img
                className="card-img-top"
                src={MedicineStore}
                alt="Card image cap"
              />
              <div className="card-body text-center">
                <h4 className="card-title">Connect Easily</h4>
                <p className="card-text text-justify">
                  Technology connects us to the whole world, we connect you to
                  the medicine store nearby you.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 py-3 d-flex justify-content-center align-items-center">
            <div className="card" style={{ width: "18rem" }}>
              <img
                className="card-img-top"
                src={ClickAndCollect}
                alt="Card image cap"
              />
              <div className="card-body text-center">
                <h4 className="card-title">Click and Collect</h4>
                <p className="card-text text-justify">
                  Collect your medicine from the store as per your convenience
                  and forget shipping charges.
                </p>
              </div>
            </div>
          </div>
          {/* <div className="col-12 col-md-4 py-3 d-flex justify-content-center align-items-center">
            <div className="card" style={{ width: "18rem" }}>
              <img
                className="card-img-top"
                src={Discount}
                alt="Card image cap"
              />
              <div className="card-body text-center">
                <h4 className="card-title">Buy more for less</h4>
                <p className="card-text text-justify">
                  Get upto 40% discounts on your first buy, and 20% off on next
                  three orders.{" "}
                </p>
              </div>
            </div>
          </div> */}
          <div className="col-12 col-md-4 py-3 d-flex justify-content-center align-items-center">
            <div className="card" style={{ width: "18rem" }}>
              <img
                className="card-img-top"
                src={ScanOrder}
                alt="Card image cap"
              />
              <div className="card-body text-center">
                <h4 className="card-title">Scan your Order</h4>
                <p className="card-text text-justify">
                  Just upload the clear picture of the doctor's prescription and
                  sumbit your order.
                </p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="row mt-5 pt-5 text-center">
          <div className="col-12 text-center">
            <h2 style={{ fontSize: "40px", fontWeight: "500" }}>Our Thoughts</h2>
            <br />
          </div>
          <div className="col-12" >
            <Carousel
              swipeable={true}
              draggable={false}
              showDots={false}
              responsive={responsive}
              ssr={true} // means to render carousel on server-side.
              infinite={true}
              autoPlay={props.deviceType !== "mobile" ? true : false}
              autoPlaySpeed={3000}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={500}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              deviceType={props.deviceType}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              <div className="d-flex justify-content-center align-items-center">
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    className="card-img-top"
                    src={JatinImage}
                    alt="Card image cap"
                  />
                  <div className="card-body text-center">
                    <h4 className="card-title">Jatin Bajaj</h4>
                    <p className="card-text text-justify">
                      Saving time of customers,is not an option, its a necassity
                    </p>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    className="card-img-top"
                    src={RishabImage}
                    alt="Card image cap"
                  />
                  <div className="card-body text-center">
                    <h4 className="card-title">Rishab Goyal</h4>
                    <p className="card-text text-justify">
                      Wasting a medicine is a crime, and sharing is a blessing.
                    </p>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    className="card-img-top"
                    src={IvanImage}
                    alt="Card image cap"
                  />
                  <div className="card-body text-center">
                    <h4 className="card-title">Ivan Ganatra</h4>
                    <p className="card-text text-justify">
                      Saving time and taking preventions are on the same path.
                    </p>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    className="card-img-top"
                    src={RolitImage}
                    alt="Card image cap"
                  />
                  <div className="card-body text-center">
                    <h4 className="card-title">Rolit Trivedi</h4>
                    <p className="card-text text-justify">
                      Health precautions are now a top priority.
                    </p>
                  </div>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;

