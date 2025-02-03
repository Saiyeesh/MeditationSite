import React from "react";
import "./Home.css";
import img from "../../assets/banner.jpeg";

import law from "../../assets/law.jpeg";
import mind from "../../assets/mind.jpeg";
import emo from "../../assets/emo.jpeg";
import cre from "../../assets/cre.jpeg";
import contact from "../../assets/contact.jpeg";
import logo from "../../assets/meditationLogo.png";

import { TbMapSearch } from "react-icons/tb";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaWindows } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { BsCCircle } from "react-icons/bs";

import { motion } from "framer-motion";
const Home = () => {
  return (
    <>
      <div className="main">
        <div className="hero">
          <div className="hero-content">
            <motion.div
              className="hero-content"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 10 }}
              transition={{ duration: 3 }}
            >
              <h1>Yoga for Home is for Health and Wealth</h1>
              <p>
                It communicates the idea of bringing yoga into the home,
                highlighting accessibility, and its benefits.
              </p>
              <motion.button
                className="cta-button"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <button>Join a Class</button>
              </motion.button>
            </motion.div>
          </div>
          <motion.div
            className="hero-image"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
          >
            <img src={img} alt="Meditation" />
          </motion.div>
        </div>
        <div className="secoundPart">
          <h2>Features</h2>
          <p>A Complete Yoga Teacher With all features you need</p>
          <div className="main-box">
            <div className="box">
              <h1>Mind Programming</h1>
              <p>
                Mind programming typically refers to techniques or methods that
                influence or change an individual's thoughts, beliefs,
                behaviors, and mental patterns. It’s often associated with
                practices like neuro-linguistic programming (NLP), hypnosis,
                affirmations, visualization, and self-suggestion.
              </p>
              <div className="imgDown">
                <img src={mind} alt="" className="imgbox" />
              </div>
            </div>
            <div className="box">
              <h1>Emotional Fitness</h1>
              <p>
                Emotional fitness refers to the ability to understand, manage,
                and regulate your emotions in a healthy and constructive way.
                It’s akin to physical fitness but focuses on emotional
                well-being.Just like physical fitness strengthens the body, emotional fitness strengthens the mind and heart.
              </p>
              <div className="imgDown">
                <img src={emo} alt="" className="imgbox" />
              </div>
            </div>
          </div>
          <div className="main-box">
            <div className="box">
              <h1>Creative Visualization</h1>
              <p>
                Creative Visualization is a mental technique that involves
                imagining or visualizing a desired outcome or goal in vivid
                detail, as if it has already happened. It taps into the power of
                the mind to influence reality, or improve well-being.It’s a powerful technique used by athletes and spiritual practitioners to turn dreams into reality.
              </p>
              <div className="imgDown">
                <img src={cre} alt="" className="imgbox" />
             </div>
            </div>
            <div className="box">
              <h1>Law of Attraction</h1>
              <p>
                The Law of Attraction is a popular concept in personal
                development and self-help circles, which posits that like
                attracts like. In essence, it suggests that the thoughts and
                feelings you emit into the universe will attract corresponding
                experiences, into your life.
              </p>
              <div className="imgDown">
                <img src={law} alt="" className="imgbox2" />
              </div>
            </div>
          </div>
        </div>
        <div className="thirdPart">
           <div className="contact-form-container">
            <div className="image-section">
              <img src={contact} alt="Contact" className="contact-image"/>
            </div>
            <div className="form-section">
              <h2>Contact Us</h2>
              <form>
                <div className="input-field">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" placeholder="Your message" required />
                </div>
                <button type="submit">Send Message</button>
              </form>
            </div>
          </div> 
        </div>
        <div className="footerPart">
          <div className="footer1">
            <div className="logotxt">
              <img src={logo} alt="" className="logo" />
            </div>
            <p>Meditation is the key to unlock the doors of peace.</p>
          </div>
          <div className="footer2">
            <h1>Get Free Sources</h1>
            <p>Hatha Yoga</p>
            <p>Vinyasa Yoga</p>
            <p>Ashtanga Yoga</p>
            <p>Iyengar Yoga</p>
            <p>Bikram Yoga</p>
          </div>
          <div className="footer3">
            <p>Home</p>
            <p>Classes</p>
            <p>Shop</p>
            <p>Benifites</p>
            <p>Contact</p>
          </div>
          <div className="footer4">
            <div className="logoIcons">
              <TbMapSearch className="logg" />
              <p>Hyderabad, Telangana</p>
            </div>
            <div className="logoIcons">
              <FaPhone className="logg" />
              <p>+91 987654321</p>
            </div>
            <div className="logoIcons">
              <IoMdMail className="logg" />
              <p>yoga@gmail.com</p>
            </div>
          </div>
          <div className="footer5">
            <h1>Get The App</h1>
            <div>
              <div className="borderBox">
                <FaWindows />
                <p>Windows</p>
              </div>
              <div className="borderBox">
                <FaApple />
                <p>MacOs</p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-down">
          <div className="footerleft">
            <BsCCircle />
            <p>RM Meditaion INC. All Rights Reserved</p>
          </div>  
          <div className="footerright">
            <p>Terms of Services</p>
            <p>Privacy Policy</p>
            <p>Cookies</p>
          </div>  
        </div>
      </div>
    </>
  );
};

export default Home;
