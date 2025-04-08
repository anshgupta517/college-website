import { useState, useEffect } from "react";
import "../styles/updates.css";
import News from "../assets/icons/news.png";
import Notice from "../assets/icons/notice.png";

const Updates = () => {
  const [activeNewsIndex, setActiveNewsIndex] = useState(0);
  const [activeNoticeIndex, setActiveNoticeIndex] = useState(0);
  const items = [
    {
      type: "news",
      content:
        "Inauguration of Induction Program, B.Tech 1st Year 2020 (Video)",
    },
    {
      type: "news",
      content: "Vice Principal Address Principal Address (Video)",
    },
    { type: "news", content: "Prof. Incharge First Year Address (Video)" },
    {
      type: "news",
      content: "Presentation by the Engineering Departments (Video)",
    },
    { type: "news", content: "NSS, NCC, NPTEL, Library Presentation (Video)" },
    { type: "news", content: "Various Clubs Presentation (Video)" },
    { type: "news", content: "Motivational Talk (Video)" },
    { type: "news", content: "Human Values (Video)" },
    { type: "news", content: "Extra Curricular Activities (Video)" },
    { type: "news", content: "ONLINE INDUCTION PROGRAM – 2020" },
    { type: "news", content: "Workshop on Cyber Disease held at BIT,Durg" },
    {
      type: "news",
      content:
        "Introducing employment oriented new vocational Degree Course (B.Voc) at very reasonable fees.",
    },
    {
      type: "news",
      content: "International Conference (ISC-2019) On 8th & 9th Dec, 2019",
    },
    { type: "notice", content: "Employment Notification 2024" },
    { type: "notice", content: "Application Form for Employment 2024" },
    {
      type: "notice",
      content: "Notification SC/ST/OBC Category Scholarship 2024",
    },
    { type: "notice", content: "Fee Structure for B.Tech" },
    { type: "notice", content: "Fee Structure for MTech" },
    { type: "notice", content: "Notice: Semester Fee for B.Tech." },
    { type: "notice", content: "Enquiry for Firewall Security Services" },
    { type: "notice", content: "Enquiry for Internet Leased Line - 1 Gbps" },
    { type: "notice", content: "Enquiry for Workstation Computer of Corei7" },
    { type: "notice", content: "Enquiry for Laptop of Corei5" },
  ];

  useEffect(() => {
    const newsInterval = setInterval(() => {
      setActiveNewsIndex((prevIndex) => (prevIndex + 1) % newsItems.length);
    }, 5000);

    const noticeInterval = setInterval(() => {
      setActiveNoticeIndex((prevIndex) => (prevIndex + 1) % noticeItems.length);
    }, 5000);

    return () => {
      clearInterval(newsInterval);
      clearInterval(noticeInterval);
    };
  }, []);

  const newsItems = items.filter((item) => item.type === "news");
  const noticeItems = items.filter((item) => item.type === "notice");

  return (
    <div className="update-section">
      <div className="update-header">
        <h1>Latest Updates</h1>
      </div>
      <div className="updates-container">
        <div className="update-box">
          <div className="header1">
            <img src={News} alt="" />
            <h2>What&apos;s New</h2>
          </div>
          <div className="window-content">
            {newsItems.map((item, index) => (
              <div
                key={index}
                className={`content-item ${
                  activeNewsIndex === index ? "active" : ""
                }`}
              >
                {item.content}
              </div>
            ))}
          </div>
        </div>
        <div className="update-box">
          <div className="header1">
            <img src={Notice} alt="" />
            <h2>Notices</h2>
          </div>
          <div className="window-content">
            {noticeItems.map((item, index) => (
              <div
                key={index}
                className={`content-item ${
                  activeNoticeIndex === index ? "active" : ""
                }`}
              >
                {item.content}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Updates;
