import { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import img1 from "../assets/gallery/1.jpg";
import img2 from "../assets/gallery/2.jpg";
import img3 from "../assets/gallery/3.jpg";
import img4 from "../assets/gallery/4.png";
import img5 from "../assets/gallery/5.jpg";
import img6 from "../assets/gallery/6.jpg";
import img7 from "../assets/gallery/7.jpg";
import img8 from "../assets/gallery/8.jpg";
import img9 from "../assets/gallery/9.jpg";
import img10 from "../assets/gallery/10.jpg";
import img11 from "../assets/gallery/11.jpg";
import img12 from "../assets/gallery/12.png";
import img13 from "../assets/gallery/13.jpg";
import img14 from "../assets/gallery/14.jpg";
import img16 from "../assets/gallery/16.png";
import img17 from "../assets/gallery/17.jpg";
import img18 from "../assets/gallery/18.jpg";
import img19 from "../assets/gallery/19.jpg";
import img20 from "../assets/gallery/20.jpg";

const MyWrapper = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const allImages = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img16,
    img17,
    img18,
    img19,
    img20,
  ];

  return (
    <>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter="10px" itemStyle={{ borderRadius: "10px" }}>
          {allImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Image ${index + 1}`}
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>

      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          style={{
            position: "sticky",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.7)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
            width: "100%",
            height: "100%",
          }}
        >
          <img
            src={selectedImage}
            style={{ maxHeight: "70%", maxWidth: "70%" }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default MyWrapper;
