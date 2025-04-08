import logo from "../assets/logo/logo.png";
import "../styles/footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="top-logo">
        <img src={logo} alt="BIT Durg" />
      </div>
      <div className="footer-links">
        <div className="footer-section address">
          <h3>ADDRESS</h3>
          <ul>
            <li>Institute Code: 01, Established in 1986</li>
            <li>Bhilai House, Durg, Chhattisgarh-491001</li>
            <li>
              Email: <a href="mailto:bit@bitdurg.ac.in">bit@bitdurg.ac.in</a>
            </li>
            <li>Phone: 0788-2359297</li>
            <li>Fax: +91 0788-2359263</li>
          </ul>
        </div>
        <div className="footer-section downloads">
          <h3>DOWNLOADS</h3>
          <ul>
            <li>
              <a
                href="http://bitdurg.ac.in/downloads/Forms/Backlog_Exam_Form_2021-22.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Backlog Exam Form
              </a>
            </li>
            <li>
              <a
                href="/pdf/REVALUATION FORM FOR AUTONOMOUS BATCH.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Revaluation Form
              </a>
            </li>
            <li>
              <a
                href="http://bitdurg.ac.in/downloads/Forms/Transfer_Provisional_Certificate_Form.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Transfer & Provisional Certificate Form
              </a>
            </li>
            <li>
              <a
                href="https://www.bitdurg.ac.in/downloads/BIT_Durg_Calendar_2024.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Calendar
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1EI7PWFkUk9boI9oOyuc28vhtwD2fdwOc/view"
                target="_blank"
                rel="noopener noreferrer"
              >
                Prospectus
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-section important-links">
          <h3>IMPORTANT LINKS</h3>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Academics</a>
            </li>
            <li>
              <a href="#">Admissions</a>
            </li>
            <li>
              <a href="#">Research</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
