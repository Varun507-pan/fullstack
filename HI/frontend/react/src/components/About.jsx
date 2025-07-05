import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>We dont chase trends. We set them.</p>
            </div>
            <p className="mid">
              Welcome to PR where bold meets effortless.
We are not just selling clothes — we are crafting confidence. From sharp streetwear to refined classics, every piece is designed to turn heads and elevate your presence. Because real style doesnt beg for attention — it owns the room.
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="/about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
