import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import HeroImage from "../assets/images/image.jpeg";
import Principal from "../assets/images/principal.png";
import SethBalkrishan from "../assets/images/seth_balkrishan.png";
import "../styles/home.css";
import Dots from "../assets/icons/dots.png";
import Group from "../assets/images/group.jpg";
import Updates from "./updates";
import Masonry from "./masonry";
import Gallery from "../assets/icons/gallery.png";
import Head from "../assets/images/head.png";
import Pl from "../assets/images/pl.jpg";
import Slider from "./slider";
import FeedbackForm from "./form";
import Tour from "./Tour";
import Footer from "./footer";
import Social from "./social";

const RunningCounter = ({ endNumber, duration }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const increment = endNumber / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= endNumber) {
              clearInterval(timer);
              setCount(endNumber);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [endNumber, duration]);

  return <div ref={counterRef}>{count}+</div>;
};

RunningCounter.propTypes = {
  endNumber: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
};

const Home = () => {
  const masonryRef = useRef(null);

  useEffect(() => {
    const eyes = document.querySelectorAll(".eye");
    let rafId;

    const handleMouseMove = (event) => {
      cancelAnimationFrame(rafId);

      rafId = requestAnimationFrame(() => {
        const { clientX, clientY } = event;

        eyes.forEach((eye) => {
          const { left, top, width, height } = eye.getBoundingClientRect();
          const eyeCenterX = left + width / 2;
          const eyeCenterY = top + height / 2;

          const angle = Math.atan2(clientY - eyeCenterY, clientX - eyeCenterX);
          const rotation = angle * (180 / Math.PI) + 90;

          eye.style.transform = `rotate(${rotation}deg)`;
        });
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    const handleWheel = (e) => {
      if (masonryRef.current && masonryRef.current.contains(e.target)) {
        const { scrollTop, scrollHeight, clientHeight } = masonryRef.current;
        const isScrolledToBottom = scrollHeight - scrollTop === clientHeight;
        const isScrolledToTop = scrollTop === 0;

        if (
          (e.deltaY > 0 && isScrolledToBottom) ||
          (e.deltaY < 0 && isScrolledToTop)
        ) {
          return;
        }

        e.preventDefault();
        masonryRef.current.scrollTop += e.deltaY;
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <>
      <Social />
      <div className="hero">
        <img src={HeroImage} alt="Hero" />
        <div className="herotext">
          <p>Welcome to BIT, Durg</p>
          <h1> Aspire to excel.</h1>
        </div>
      </div>
      <div className="section-header-div">
        <h2 className="section-header">Our Leadership</h2>
        <hr />
      </div>
      <div className="principal">
        <div className="card">
          <div className="card-image">
            <img src={SethBalkrishan} alt="Seth Balkrishan" />
          </div>
          <div className="card-content">
            <h2>The Visionary</h2>
            <p>
              Seth Balkrishan was a great philanthropist and a paragon of human
              virtues. His contributions in the field of education, sports,
              social upliftment and spiritual need of the community are
              legendary in Bhilai and indeed in the region. His enlightened
              humanity stands today as a beacon of hope.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-image">
            <img src={Principal} alt="Principal" />
          </div>
          <div className="card-content">
            <h2>Message from the Principal</h2>
            <p>
              Bhilai Institute Of Technology, Durg, with a mission to provide
              world class technical manpower to serve the industry, profession
              and society and to contribute effectively to the national economic
              development, has acquired the status of one of the premier
              technological institutions of India.
            </p>
          </div>
        </div>
      </div>

      <div className="dots">
        <img src={Dots} alt="" />
      </div>

      <div className="about">
        <div className="about-text">
          <h1>Our Motto</h1>
          <hr />
          <p>
            BIT is a dynamic place with the Institute’s Motto “Aspire To Excel”.
            “Educate to Elevate” is the guiding light in the pursuit of BIT to
            provide Qualitative Higher Education to the students, who can be a
            catalyst for greater social change. BIT always strives to amalgamate
            various resources and systems of the Institute with a clear focus on
            3 E’s – Enrichment, Enlightenment and Employment.{" "}
          </p>
        </div>
        <div className="about-img">
          <img src={Group} alt="Group" />
        </div>
      </div>

      <div className="stat-screen">
        <div className="stat-wrap">
          <div className="stats-container">
            <h2 className="stats-title">Our Legacy of Excellence</h2>
          </div>
          <div className="stats-section">
            <div className="stat-item">
              <div className="stat-number">
                <RunningCounter endNumber={73000} duration={3000} />
              </div>
              <h3>Books</h3>
            </div>
            <div className="stat-item">
              <div className="stat-number">
                <RunningCounter endNumber={1750} duration={3000} />
              </div>
              <h3>Journals/Periodicals</h3>
            </div>
            <div className="stat-item">
              <div className="stat-number">
                <RunningCounter endNumber={38} duration={3000} />
              </div>
              <h3>Years of Excellence</h3>
            </div>
            <div className="stat-item">
              <div className="stat-number">
                <RunningCounter endNumber={217} duration={3000} />
              </div>
              <h3>Faculty Members</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="updates-section">
        <Updates />
      </div>

      <hr />

      <div className="gallery-section">
        <div className="masonry-window" ref={masonryRef}>
          <Masonry />
        </div>
        <div className="gallery-header">
          <div className="gallery-title-container">
            <img src={Gallery} alt="Gallery" />
            <h2 className="gallery-title">Gallery</h2>
          </div>
          <div className="gallery-subtitle-container">
            <h4 className="gallery-subtitle">Events and student activities</h4>
          </div>
          <div>
            <button
              className="gallery-close-btn"
              onClick={() => (masonryRef.current.style.display = "none")}
              aria-label="Close gallery"
            >
              Close Gallery ×
            </button>
          </div>
        </div>
      </div>

      <div className="placement">
        <div className="pl-left">
          <img src={Pl} alt="" />
        </div>
        <div className="pl-right">
          <h1>Placement & Recruiters</h1>
          <p>
            We highly value our partnership with recruiters, alumni and friends
            of BIT, Durg and remain committed to making your recruiting
            experience productive and positive. I on the behalf of the entire
            fraternity of BIT, Durg, cordially invite companies/organizations
            for campus placement and summer internships of our students. I
            sincerely look forward that recruiting organizations and graduating
            students find the best match between their needs and capabilities.
          </p>
          <div className="phead">
            <div className="info">
              Dr. Manisha Sharma <br />
              (Vice Principal & Head Training and Placement Cell) <br />
              Phone : 0788-2356790 <br />
              Mobile: 9425234261 <br />
              Email : tpo@bitdurg.ac.in
            </div>
            <img src={Head} alt="" />
          </div>
        </div>
      </div>

      <div className="slider">
        <h1>Our Recruiters</h1>
        <Slider />
      </div>

      <div className="campus-container">
        <div className="campus1">
          <h1>Campus Tour</h1>
          <h3>
            Take a virtual tour of our campus and get a feel of what it is like
            to be a part of BIT, Durg.
          </h3>
        </div>
        <div className="campus">
          <div className="campus-left">
            <Tour />
          </div>
          <div className="campus-right">
            <div className="campus-facilities">
              <ul className="facilities-list">
                <li>Hostels</li>
                <li>Library</li>
                <li>Medical Facility</li>
                <li>Gymnasium</li>
                <li>Sports</li>
                <li>Shopping Complex</li>
                <li>Bank</li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
      </div>
      <div className="line">
        <hr />
      </div>

      <div className="feedback-form-container">
        <div className="feedback-form-header">
          <h2 className="feedback-form-title">
            Write your valuable insights and queries
          </h2>
          <h4>We are reading them.</h4>{" "}
          <section className="move-area">
            <div className="container">
              <div className="eye"></div>
              <div className="eye"></div>
            </div>
          </section>
        </div>
        <FeedbackForm />
      </div>

      <div className="last-section">
        <div className="ls-left">
          <div className="option">
            <i className="fas fa-users"></i>
            <span>Parent Zone</span>
          </div>
          <div className="option">
            <i className="fas fa-graduation-cap"></i>
            <span>Students Corner</span>
          </div>
          <div className="option">
            <i className="fas fa-chalkboard-teacher"></i>
            <span>Faculty Corner</span>
          </div>
          <div className="option">
            <i className="fas fa-info-circle"></i>
            <span>1st Year Students Information</span>
          </div>
          <div className="option">
            <i className="fas fa-shield-alt"></i>
            <span>Anti Ragging Cell</span>
          </div>
          <div className="option">
            <i className="fas fa-female"></i>
            <span>Women Security Cell</span>
          </div>
          <div className="option">
            <i className="fas fa-comment-alt"></i>
            <span>Grievance Redressal</span>
          </div>
        </div>
        <div className="ls-right">
          <div className="ls-header">Success Stories</div>
          <div className="ls-content">
            <div className="ls-content-top">
              <iframe
                src="https://www.youtube.com/embed/aTWRXqfos0c?autoplay=0"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                src="https://www.youtube.com/embed/E08Lu3ajVi0?autoplay=0"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
            <div className="ls-content-bottom">
              <iframe
                src="https://www.youtube.com/embed/ifMPZ1Srt9M?autoplay=0"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <Footer />
      </div>
    </>
  );
};

export default Home;
