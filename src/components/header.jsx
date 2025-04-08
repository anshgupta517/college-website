import { useState } from "react";
import Logo from "../assets/logo/banner1.png";
import "../styles/header.css";
import DropdownIcon from "../assets/icons/arrow.png";

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileMenuLevel, setMobileMenuLevel] = useState("main");
  const [selectedMenu, setSelectedMenu] = useState(null);

  const navItems = [
    {
      name: "ABOUT",
      dropdownContent: (
        <div className="mega-menu about-mega-menu">
          <div className="about-menu-section">
            <h4>BIT-Durg at a glance</h4>
            <ul>
              <li>
                <a href="//bitdurg.ac.in/about">About</a>
              </li>
              <li>
                <a href="//bitdurg.ac.in/mission">Mission & Vision</a>
              </li>
              <li>
                <a href="//bitdurg.ac.in/mission">Quality Policy</a>
              </li>
              <li>
                <a href="//bitdurg.ac.in/chairman-message">Visionaries</a>
              </li>
              <li>
                <a href="//bitdurg.ac.in/director-message">Principal</a>
              </li>
              <li>
                <a href="//bitdurg.ac.in/vice-principal-message">
                  Vice Principal
                </a>
              </li>
            </ul>
          </div>
          <div className="about-menu-section">
            <h4>Administration</h4>
            <ul>
              <li>
                <a href="//bitdurg.ac.in/audit-report">Audit Report</a>
              </li>
              <li>
                <a href="//bitdurg.ac.in/governance">Governance</a>
              </li>
              <li>
                <a href="//bitdurg.ac.in/pdf/Members_of_Trusties_Governors_AcademicCouncil.pdf">
                  Governance Member
                </a>
              </li>
              <li>
                <a href="//bitdurg.ac.in/pdf/Service_Rules_17_May.pdf">
                  Service Rules
                </a>
              </li>
              <li>
                <a href="//bitdurg.ac.in/pdf/Minutes_of_meeting_GB_15_02_2022.pdf">
                  Minutes of Meeting 2022
                </a>
              </li>
              <li>
                <a href="//bitdurg.ac.in/pdf/Minutes_of_meeting_GB_24_02_2023.pdf">
                  Minutes of Meeting 2023
                </a>
              </li>
            </ul>
          </div>
          <div className="about-menu-section">
            <h4>Collaboration</h4>
            <ul>
              <li>
                <a href="//bitdurg.ac.in/mou">MOU & Tie-Ups</a>
              </li>
              <li>
                <a href="//bitdurg.ac.in/professional-membership">
                  Professional Membership
                </a>
              </li>
              <li>
                <a href="//bitdurg.ac.in/erasmus">
                  ERASMUS + Staff & student mobility
                </a>
              </li>
            </ul>
          </div>
          <div className="about-menu-section">
            <h4>Care @ BIT-Durg</h4>
            <ul>
              <li>
                <a href="//bitdurg.ac.in/anti-ragging">Anti Ragging</a>
              </li>
              <li>
                <a href="//bitdurg.ac.in/women-security-cell">
                  Women Security Cell
                </a>
              </li>
              <li>
                <a href="http://bitdurg.ac.in/bit_durg/grievance/Login/index/Student">
                  Grievance Redressal
                </a>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      name: "ACADEMICS",
      dropdownContent: (
        <div className="mega-menu academics-mega-menu">
          <div className="start">
            <div className="academics-menu-section">
              <h4>Centres @ BIT-Durg</h4>
              <ul>
                <li>
                  <a href="//bitdurg.ac.in/dlink">D Link</a>
                </li>
                <li>
                  <a
                    href="http://www.nmeict.iitb.ac.in/nmeict/wsmng/searchrc.php?search=1166"
                    target="_blank"
                  >
                    NMEICT
                  </a>
                </li>
                <li>
                  <a href="//bitdurg.ac.in/nptel">NPTEL</a>
                </li>
                <li>
                  <a href="//bitdurg.ac.in/spoken-tutorial">Spoken Tutorial</a>
                </li>
                <li>
                  <a href="//bitdurg.ac.in/texas">Texas Innovation</a>
                </li>
              </ul>
            </div>
            <div className="academics-menu-section">
              <h4>UG Programme</h4>
              <ul>
                <li>
                  <a href="//bitdurg.ac.in/ug-programme">
                    Bachelor of Technology (B.Tech)
                  </a>
                </li>
              </ul>
            </div>
            <div className="academics-menu-section">
              <h4>Doctoral Programme</h4>
              <ul>
                <li>
                  <a href="//bitdurg.ac.in/doctoral-programme">
                    Doctor of Philosophy (PhD)
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="middle">
            <div className="academics-menu-section">
              <h4>PG Programme</h4>
              <ul>
                <li>
                  <a href="//bitdurg.ac.in/pg-programme">
                    Master of Technology (M.Tech)
                  </a>
                </li>
                <li>
                  <a href="//bitdurg.ac.in/pg-programme">
                    Master of Computer Applications (MCA)
                  </a>
                </li>
                <li>
                  <a href="//bitdurg.ac.in/pg-programme">
                    Master Of Business Administration(MBA)
                  </a>
                </li>
              </ul>
            </div>

            <div className="academics-menu-section">
              <h4>More..</h4>
              <ul>
                <li>
                  <a href="//bitdurg.ac.in/academic-calendar">
                    Academic Calendar
                  </a>
                </li>
                <li>
                  <a
                    href="//bitdurg.ac.in/images/pdf/Academic_Reglations.pdf"
                    target="_blank"
                  >
                    Academic Regulations
                  </a>
                </li>
                <li>
                  <a
                    href="//bitdurg.ac.in/images/pdf/Exam_Manual.pdf"
                    target="_blank"
                  >
                    Exam Manual
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="end">
            <div className="academics-menu-section">
              <h4>Research @ BIT-Durg</h4>
              <ul>
                <li>
                  <a href="//bitdurg.ac.in/research-overview">
                    Research Overview
                  </a>
                </li>
                <li>
                  <a href="//bitdurg.ac.in/patent-copyright">
                    Patent & Copyright
                  </a>
                </li>
                <li>
                  <a href="//bitdurg.ac.in/research-policies">
                    Research Policies & Guidelines
                  </a>
                </li>
                <li>
                  <a href="//bitdurg.ac.in/research-project">
                    Sponsored Research Projects
                  </a>
                </li>
                <li>
                  <a href="//bitdurg.ac.in/bitcon">
                    Annual Conference (BITCON)
                  </a>
                </li>
                <li>
                  <a href="//bitdurg.ac.in/aicte_atal_fdp">AICTE ATAL FDP</a>
                </li>
                <li>
                  <a href="//bitdurg.ac.in/SIDSET-23">
                    International Conference
                  </a>
                </li>
                <li>
                  <a href="//bitdurg.ac.in/gallery-department?album=231">
                    SIH (Smart India Hackathon)
                  </a>
                </li>
              </ul>
            </div>
            <div className="academics-menu-section">
              <h4>Achievements</h4>
              <ul>
                <li>
                  <a href="//bitdurg.ac.in/faculty">Faculty Achievements</a>
                </li>
                <li>
                  <a href="//bitdurg.ac.in/student">Student Achievements</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      name: "ADMISSIONS",
      dropdownContent: (
        <div className="mega-menu admissions-mega-menu">
          <div className="admissions-menu-section">
            <h4>Get Started</h4>
            <ul>
              <li>
                <a href="//bitdurg.ac.in/admission">
                  <i className="fa fa-angle-double-right mr-10"></i> Admission
                  Procedure{" "}
                </a>
              </li>
              <li>
                <a href="//bitdurg.ac.in/admission#reservation">
                  <i className="fa fa-angle-double-right mr-10"></i> Reservation
                  Policy
                </a>
              </li>
              <li>
                <a href="//bitdurg.ac.in/admission#tuition">
                  <i className="fa fa-angle-double-right mr-10"></i> Tuition
                  Fees Waiver Scheme
                </a>
              </li>
              <li>
                <a href="//bitdurg.ac.in/admission#scholarship">
                  <i className="fa fa-angle-double-right mr-10"></i>{" "}
                  Scholarships
                </a>
              </li>
              <li>
                <a
                  href="//bitdurg.ac.in/downloads/Fees_Structure_2022-23.pdf"
                  target="_blank"
                >
                  <i className="fa fa-angle-double-right mr-10"></i> Fees
                  Structure (2022-23)
                </a>
              </li>
              <li>
                <a
                  href="//bitdurg.ac.in/downloads/Fees_Structure_2021-22.pdf"
                  target="_blank"
                >
                  <i className="fa fa-angle-double-right mr-10"></i> Fees
                  Structure (2021-22)
                </a>
              </li>
            </ul>
          </div>
          <div className="admissions-menu-section">
            <h4>Regular Course</h4>
            <ul>
              <li>
                <a href="//bitdurg.ac.in/ug-programme">
                  <i className="fa fa-angle-double-right mr-10"></i> B.Tech{" "}
                </a>
              </li>
              <li>
                <a href="//bitdurg.ac.in/pg-programme">
                  <i className="fa fa-angle-double-right mr-10"></i> M.Tech{" "}
                </a>
              </li>
              <li>
                <a href="//bitdurg.ac.in/pg-programme#mca">
                  <i className="fa fa-angle-double-right mr-10"></i> MCA
                </a>
              </li>
              <li>
                <a href="//bitdurg.ac.in/pg-programme#mba">
                  <i className="fa fa-angle-double-right mr-10"></i> MBA
                </a>
              </li>
              <li>
                <a href="//bitdurg.ac.in/doctoral-programme">
                  <i className="fa fa-angle-double-right mr-10"></i> Ph.D
                </a>
              </li>
            </ul>
          </div>
          <div className="admissions-menu-section">
            <h4>Lateral Entry Courses</h4>
            <ul>
              <li>
                <a href="//bitdurg.ac.in/ug-programme#be-lateral">
                  <i className="fa fa-angle-double-right mr-10"></i> B.Tech
                  Lateral Entry
                </a>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      name: "DEPARTMENT",
      dropdownContent: (
        <div className="mega-menu department-mega-menu">
          <div className="Dep-left">
            <div className="ltop department-menu-section">
              <h4>First Year</h4>
              <ul>
                <li>Btech first year</li>
              </ul>
            </div>
            <div className="lbottom department-menu-section">
              <h4>Engineering</h4>

              <ul>
                <li>Civil Engineering</li>
                <li>Computer Science and Engineering</li>
                <li>Electrical & Electronics Engineering</li>
                <li>Electronics & Telecom. Engineering</li>
                <li>Information Technology</li>
                <li>Mechanical Engineering</li>
                <li>Electrical Engineering</li>
              </ul>
            </div>
          </div>
          <div className="Dep-right">
            <div className="rtop department-menu-section">
              <h4>Sciences</h4>
              <ul>
                <li>Applied Chemistry</li>
                <li>Applied Mathematics</li>
                <li>Applied Physics</li>
                <li>Humanities</li>
              </ul>
            </div>
            <div className="rbottom department-menu-section">
              <h4>Management</h4>
              <ul>
                <li>MBA</li>
              </ul>
              <h4>Computer Application</h4>
              <ul>
                <li>MCA</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      name: "CAMPUS LIFE",
      dropdownContent: (
        <div className="mega-menu campus-life-mega-menu">
          <div className="campus-life-menu-section">
            <h4>Clubs</h4>
            <ul>
              <li>
                <a href="#">Astro Club</a>
              </li>
              <li>
                <a href="#">Clicks Club</a>
              </li>
              <li>
                <a href="#">Techno Hub</a>
              </li>
              <li>
                <a href="#">PAC</a>
              </li>
              <li>
                <a href="#">Vista Club</a>
              </li>
              <li>
                <a href="#">Quizbizz Club</a>
              </li>
              <li>
                <a href="#">Public Speaking Club</a>
              </li>
              <li>
                <a href="#">Literary Club</a>
              </li>
              <li>
                <a href="#">GDSC</a>
              </li>
            </ul>
          </div>
          <div className="campus-life-menu-section">
            <h4>Facilities</h4>
            <ul>
              <li>
                <a href="#">Library</a>
              </li>
              <li>
                <a href="#">Wifi Campus</a>
              </li>
              <li>
                <a href="#">Bank</a>
              </li>
              <li>
                <a href="#">Medical Facility</a>
              </li>
              <li>
                <a href="#">Shopping Complex</a>
              </li>
              <li>
                <a href="#">Gymnasium</a>
              </li>
              <li>
                <a href="#">All</a>
              </li>
            </ul>
          </div>
          <div className="campus-life-menu-section">
            <h4>Highlights</h4>
            <ul>
              <li>
                <a href="#">Techfest (OJAS)</a>
              </li>
              <li>
                <a href="#">Spicmacy</a>
              </li>
              <li>
                <a href="#">Hostels</a>
              </li>
              <li>
                <a href="#">Sports</a>
              </li>
              <li>
                <a href="#">NCC</a>
              </li>
              <li>
                <a href="#">NSS</a>
              </li>
              <li>
                <a href="#">Auditorium</a>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
  ];
  const MobileMenu = () => {
    if (mobileMenuLevel === "main") {
      return (
        <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
          {navItems.map((item) => (
            <div
              key={item.name}
              className="mobile-menu-item"
              onClick={() => {
                setMobileMenuLevel("submenu");
                setSelectedMenu(item.name);
              }}
            >
              {item.name}
            </div>
          ))}
        </div>
      );
    } else if (mobileMenuLevel === "submenu" && selectedMenu) {
      const selectedItem = navItems.find((item) => item.name === selectedMenu);
      return (
        <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
          <div
            className="mobile-menu-back"
            onClick={() => setMobileMenuLevel("main")}
          >
            ← Back
          </div>
          <div>
            <h3>{selectedMenu}</h3>
          </div>
          {selectedItem.dropdownContent}
        </div>
      );
    }
    return null;
  };

  return (
    <>
      <div className="header">
        <div className="logo">
          <div className="image">
            <a href="">
              <img src={Logo} alt="" />
            </a>
          </div>
        </div>

        <div className="menu">
          <div className="Htop">
            <div
              className="menu-icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              ☰
            </div>
            <ul>
              <li>
                <a href="#">Research</a>
              </li>
              <li>
                <a href="#">Conference</a>
              </li>
              <li>
                <a href="#">Central Library</a>
              </li>
              <li>
                <a href="#">Syllabus</a>
              </li>
              <li>
                <a href="#">Moodle</a>
              </li>
              <li>
                <a href="#">IIC</a>
              </li>
            </ul>
            <div className="login">
              <a href="#">Login</a>
              <div className="login-menu">
                <div>
                  <a href="#">Student Login</a>
                </div>
                <div>
                  <a href="#">Faculty Login</a>
                </div>
                <div>
                  <a href="#">Admin Login</a>
                </div>
                <div>
                  <a href="#">HOD/Incharge</a>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`Hbottom ${mobileMenuOpen ? "mobile-menu-open" : ""}`}
          >
            <nav>
              <div className="nav-items">
                {navItems.map((item) => (
                  <div
                    key={item.name}
                    className="nav-item"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <span>
                      <a href="#">{item.name}</a>
                    </span>
                    <img
                      src={DropdownIcon}
                      alt="dropdown"
                      className={`dropdown-icon ${
                        activeDropdown === item.name ? "active" : ""
                      }`}
                    />
                    <div
                      className={`dropdown ${
                        activeDropdown === item.name ? "active" : ""
                      }`}
                    >
                      {item.dropdownContent}
                    </div>
                  </div>
                ))}
              </div>
            </nav>
          </div>
        </div>
      </div>
      <MobileMenu />
      {mobileMenuOpen && (
        <div
          className="overlay"
          onClick={() => {
            setMobileMenuOpen(false);
            setMobileMenuLevel("main");
          }}
        />
      )}
    </>
  );
};

export default Header;
