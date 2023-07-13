import React from "react";
import { footerlogo, logo } from "../../assets";
// import color from "../../constant";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import { BsInstagram } from "react-icons/bs";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import { AiOutlineLinkedin } from "react-icons/ai";
// import CommonButton from "../Button/CommonButton";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="page-footer font-small blue ">
      <div className="row m-0 py-3 py-md-4 py-lg-5 d-flex justify-content-center">
        <div className="col-12 col-lg-5 py-3 py-lg-0 ">
          <div className="row  d-flex justify-content-start  align-items-start ">
            <div
              className="col-8 py-2 text-lg-start text-sm-center d-none d-sm-block"
              style={{ background: "transparent" }}
            >
              <img src="PNG_LH.png" alt="" style={{ width: "300px" }} />
            </div>
            {/* <div className="col-8 py-2 d-none d-sm-block">
              <text
                className="Text-1 text-center "
                style={{ fontWeight: "bold" }}
              >
              </text>
            </div> */}
            <div className="col-8 py-1 d-none d-sm-flex justify-content-start">
              <span className="Social-Icon mx-3">
                <FiFacebook />
              </span>
              <span className="Social-Icon mx-3">
                <FiTwitter />        
              </span>
              <span className="Social-Icon mx-3">
                <FiInstagram />
              </span>
              <span className="Social-Icon mx-3">
                <AiOutlineLinkedin />
              </span>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-5  p-0 m-0 d-flex justify-content-center align-items-center flex-column ">
          <div className="row d-flex justify-content-around justify-content-md-center m-0">
          
            <div className="col-12 col-sm-5 text-center text-sm-start">
              <div className="row ">
                <text className="Heading-1 py-2" style={{ fontWeight: "bold" }}>
                  Quick links
                </text>
                <Link
                  className="py-1"
                  to="/"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  Home
                </Link>
                <Link
                  className="py-1"
                  to="/about"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  About
                </Link>
                <Link
                  className="py-1"
                  to="/reservation"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  Reservations
                </Link>
                <Link
                  to="/blogs"
                  className="py-1"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  Blogs
                </Link>
                <Link
                  to="/contactus"
                  className="py-1"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  Contact Us
                </Link>{" "}
              </div>
            </div>
            <div className="col-12 col-sm-5 text-center text-sm-start">
              <div className="row ">
                <text className="Heading-1 py-2" style={{ fontWeight: "bold" }}>
                  Services
                </text>
                <Link
                  className="py-1"
                  to="/about"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  About Hotel
                </Link>
                <Link
                  className="py-1"
                  to="/reservation"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  Food & drinks
                </Link>
                <Link
                  className="py-1"
                  to="/about"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  City tour
                </Link>
                <Link
                  className="py-1"
                  to="/reservation"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  Breakfast
                </Link>
                <Link
                  className="py-1"
                  to="/reservation"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  Comfortable suite
                </Link>
              </div>
            </div>
            <div className="col-12 col-sm-5 text-center text-sm-start py-3  d-block d-sm-none">
              <span className="Social-Icon mx-1 ">
                <FiFacebook />
              </span>
              <span className="Social-Icon mx-1">
                <FiTwitter />
              </span>
              <span className="Social-Icon mx-1">
                <FiInstagram />
              </span>
              <span className="Social-Icon mx-1">
                <AiOutlineLinkedin />
              </span>
            </div>
          </div>
        </div>
      </div>
      <hr />

      <div className="row m-0 py-2 py-md-3 d-flex justify-content-center ">
        <text
          className="Text-1"
          style={{
            textAlign: "center",
          }}
        >
          © 2023 Atraski | All rights reserved
        </text>
      </div>
    </footer>
  );
};

export default Footer;
