import { useEffect, useRef } from "react";
import "../styles/slider.css";

import recruiter2 from "../assets/companies/recruiter2.png";
import recruiter3 from "../assets/companies/recruiter3.png";
import recruiter4 from "../assets/companies/recruiter4.png";
import recruiter5 from "../assets/companies/recruiter5.png";
import recruiter6 from "../assets/companies/recruiter6.png";
import recruiter7 from "../assets/companies/recruiter7.png";
import recruiter8 from "../assets/companies/recruiter8.png";
import recruiter9 from "../assets/companies/recruiter9.png";
import recruiter10 from "../assets/companies/recruiter10.png";
import recruiter11 from "../assets/companies/recruiter11.png";
import recruiter12 from "../assets/companies/recruiter12.png";
import recruiter13 from "../assets/companies/recruiter13.png";
import recruiter14 from "../assets/companies/recruiter14.png";
import recruiter15 from "../assets/companies/recruiter15.png";
import recruiter16 from "../assets/companies/recruiter16.png";
import recruiter17 from "../assets/companies/recruiter17.png";
import recruiter18 from "../assets/companies/recruiter18.png";
import recruiter19 from "../assets/companies/recruiter19.png";
import recruiter20 from "../assets/companies/recruiter20.png";
import recruiter21 from "../assets/companies/recruiter21.png";
import recruiter22 from "../assets/companies/recruiter22.png";
import recruiter23 from "../assets/companies/recruiter23.png";
import recruiter24 from "../assets/companies/recruiter24.png";
import recruiter25 from "../assets/companies/recruiter25.png";
import recruiter27 from "../assets/companies/recruiter27.png";
import recruiter28 from "../assets/companies/recruiter28.png";
import recruiter29 from "../assets/companies/recruiter29.png";
import recruiter31 from "../assets/companies/recruiter31.png";
import recruiter32 from "../assets/companies/recruiter32.png";

function Slider() {
  const logosRef = useRef(null);

  useEffect(() => {
    if (logosRef.current) {
      const copy = logosRef.current.cloneNode(true);
      logosRef.current.parentNode.appendChild(copy);
    }
  }, []);

  return (
    <div className="logos">
      <div className="logos-slide" ref={logosRef}>
        <img src={recruiter2} alt="Recruiter 2" />
        <img src={recruiter3} alt="Recruiter 3" />
        <img src={recruiter4} alt="Recruiter 4" />
        <img src={recruiter5} alt="Recruiter 5" />
        <img src={recruiter6} alt="Recruiter 6" />
        <img src={recruiter7} alt="Recruiter 7" />
        <img src={recruiter8} alt="Recruiter 8" />
        <img src={recruiter9} alt="Recruiter 9" />
        <img src={recruiter10} alt="Recruiter 10" />
        <img src={recruiter11} alt="Recruiter 11" />
        <img src={recruiter12} alt="Recruiter 12" />
        <img src={recruiter13} alt="Recruiter 13" />
        <img src={recruiter14} alt="Recruiter 14" />
        <img src={recruiter15} alt="Recruiter 15" />
        <img src={recruiter16} alt="Recruiter 16" />
        <img src={recruiter17} alt="Recruiter 17" />
        <img src={recruiter18} alt="Recruiter 18" />
        <img src={recruiter19} alt="Recruiter 19" />
        <img src={recruiter20} alt="Recruiter 20" />
        <img src={recruiter21} alt="Recruiter 21" />
        <img src={recruiter22} alt="Recruiter 22" />
        <img src={recruiter23} alt="Recruiter 23" />
        <img src={recruiter24} alt="Recruiter 24" />
        <img src={recruiter25} alt="Recruiter 25" />
        <img src={recruiter27} alt="Recruiter 27" />
        <img src={recruiter28} alt="Recruiter 28" />
        <img src={recruiter29} alt="Recruiter 29" />
        <img src={recruiter31} alt="Recruiter 31" />
        <img src={recruiter32} alt="Recruiter 32" />
      </div>
    </div>
  );
}

export default Slider;
