"use client";
import React, { useState } from "react";
import "./style.css"; // Import your CSS file
import Gallery from "../components/gallery/Gallery";

const albumsData = [
  {
    id: 1,
    category: 1,
    title: "The Drive of your life",
    image: "assets/images/2a.jpg",
    visible: false,
  },
  {
    id: 2,
    category: 2,
    title: "The Power of Dreams",
    image: "assets/images/1a.jpg",
    visible: true,
  },
  {
    id: 3,
    category: 2,
    title: "Romantic Chipping",
    image: "assets/images/3a.jpg",
    visible: true,
  },
  {
    id: 4,
    category: 3,
    title: "What the Fog?",
    image: "assets/images/4a.jpg",
    visible: false,
  },
  {
    id: 5,
    category: 4,
    title: "Project #36",
    image: "assets/images/5a.jpg",
    visible: false,
  },
  {
    id: 6,
    category: 4,
    title: "Adidas: 360°",
    image: "assets/images/6a.jpg",
    visible: false,
  },
  {
    id: 7,
    category: 3,
    title: "People of India",
    image: "assets/images/7a.jpg",
    visible: false,
  },
  {
    id: 8,
    category: 4,
    title: "Soho House Barcelona",
    image: "assets/images/8a.jpg",
    visible: false,
  },
  {
    id: 9,
    category: 1,
    title: "With Charleen",
    image: "assets/images/9a.jpg",
    visible: false,
  },
];

export default function Albums() {
  const [filter, setFilter] = useState<string | number>("all");

  const handleFilterChange = (category: string | number) => {
    setFilter(category);
  };

  return (
    <Gallery />
    // <div className="ms-section__block">
    //   <div id="albums">
    //     {/* Filter Buttons */}
    //     <ul className="filtr-btn">
    //       <li
    //         data-filter="all"
    //         className={filter === "all" ? "active" : ""}
    //         onClick={() => handleFilterChange("all")}
    //       >
    //         <h6>All</h6>
    //       </li>
    //       <li
    //         data-filter="1"
    //         className={filter === 1 ? "active" : ""}
    //         onClick={() => handleFilterChange(1)}
    //       >
    //         <h6>Fashion</h6>
    //       </li>
    //       <li
    //         data-filter="2"
    //         className={filter === 2 ? "active" : ""}
    //         onClick={() => handleFilterChange(2)}
    //       >
    //         <h6>Urban</h6>
    //       </li>
    //       <li
    //         data-filter="3"
    //         className={filter === 3 ? "active" : ""}
    //         onClick={() => handleFilterChange(3)}
    //       >
    //         <h6>Sport</h6>
    //       </li>
    //       <li
    //         data-filter="4"
    //         className={filter === 4 ? "active" : ""}
    //         onClick={() => handleFilterChange(4)}
    //       >
    //         <h6>Expression</h6>
    //       </li>
    //     </ul>

    //     {/* Album Items */}
    //     <div className="filtr-container row">
    //       {albumsData.map((album) => {
    //         const isVisible = filter === "all" || album.category === filter;

    //         return (
    //           <div
    //             key={album.id}
    //             className={`album-item col-md-4 filtr-item ${
    //               isVisible ? "" : "filteredOut"
    //             }`}
    //             data-category={album.category}
    //             style={{
    //               opacity: isVisible ? 1 : 0,
    //               transform: isVisible ? "scale(1)" : "scale(0.5)",
    //               pointerEvents: isVisible ? "auto" : "none",
    //               transition: "0.5s ease-out",
    //             }}
    //           >
    //             <a href="gallery.html" data-type="page-transition">
    //               <div className="album-item__overlay">
    //                 <span className="album-item__cover"></span>
    //                 <h5>{album.title}</h5>
    //               </div>
    //               <div
    //                 className="album-item__img"
    //                 style={{ backgroundImage: `url(${album.image})` }}
    //               ></div>
    //             </a>
    //           </div>
    //         );
    //       })}
    //     </div>
    //   </div>
    // </div>
  );
}
