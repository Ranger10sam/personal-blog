import { Link } from "@mui/material";
import { useEffect, useRef } from "react";
import { annotate } from "https://unpkg.com/rough-notation?module";
import proj1 from "../assets/images/proj1.jpg";
import proj2 from "../assets/images/proj2.jpg";
import proj3 from "../assets/images/proj3.jpg";
import proj4 from "../assets/images/proj4.jpg";
import proj5 from "../assets/images/proj5.jpg";
import proj6 from "../assets/images/proj6.jpg";
import '../styles/eachCard.css';

const projects = [
  {
    imgSrc: proj1,
    title: "Realtime Word Counter",
    description: "A Realtime Word Counter which will help you count the number of words in Realtime",
    className: "mobile-img1",
  },
  {
    imgSrc: proj2,
    title: "Realtime Character Counter",
    description: "A Realtime Character Counter which will help you count the number of Character in Realtime",
    className: "mobile-img2",
  },
  {
    imgSrc: proj3,
    title: "G Agency",
    description: "A Landing page section for a small agency, with functionalities like split screen, and autoplay video playback",
    className: "mobile-img3",
  },
  {
    imgSrc: proj4,
    title: "Realtime Clock",
    description: "A Realtime Clock made with HTML, CSS, JS which shows you the live analog clock",
    className: "mobile-img4",
  },
  {
    imgSrc: proj5,
    title: "Realtime Clock 2.0",
    description: "A Minimal Realtime Clock made with HTML, CSS, JS which shows you the live analog clock",
    className: "mobile-img5",
  },
  {
    imgSrc: proj6,
    title: "Endospinocon 2024",
    description: "A Freelance Project made for the collaboration event between Spine Research Foundation India & HP GHosh Hospital",
    className: "mobile-img6",
  },
];

function EachCard() {
  const underlineRefs = useRef([]);

  useEffect(() => {
    underlineRefs.current.forEach(ref => {
      if (ref) {
        const annotation = annotate(ref, {
          type: 'underline',
          color: 'black',
          padding: 0
        });
        ref.addEventListener('mouseover', () => annotation.show());
        ref.addEventListener('mouseout', () => annotation.hide());
      }
    });
  }, []);

  return (
    <div className="project-grid">
      {projects.map((project, index) => (
        <Link key={index} className={`card-container ${project.className}`}>
          <img className="card-container-img" src={project.imgSrc} alt={`Project ${index + 1}`} />
          <h3>{project.title}</h3>
          <p className="card-container-p">{project.description}</p>
          <span
            ref={el => underlineRefs.current[index] = el}
            className="underLine"
          >
            Read More
          </span>
        </Link>
      ))}
    </div>
  );
}

export default EachCard;
