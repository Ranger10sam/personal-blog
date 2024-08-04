
import { Link } from "@mui/material";
import proj1 from "../assets/images/proj1-mob.jpg";
import proj2 from "../assets/images/proj2-mob.jpg";
import proj3 from "../assets/images/proj3-mob.jpg";
import proj4 from "../assets/images/proj4-mob.jpg";
import proj5 from "../assets/images/proj5-mob.jpg";
import proj6 from "../assets/images/proj6-mob.jpg";
import '../styles/eachCard.css'

function EachCard() {
  return (
    <>  
        <div className="project-grid">
            <Link className="card-container mobile-img1">
                <img className="card-container-img" src={proj1} alt="Project 1"></img>
                <h3>Realtime Word Counter</h3>
                <p className="card-container-p">A Realtime Word Counter which will help you count the number of words in Realtime</p>
            </Link>
            <Link className="card-container mobile-img2">
                <img className="card-container-img" src={proj2} alt="Project 2"></img>
                <h3>Realtime Character Counter</h3>
                <p className="card-container-p">A Realtime Character Counter which will help you count the number of Character in Realtime</p>
            </Link>
            <Link className="card-container mobile-img3">
                <img className="card-container-img" src={proj3} alt="Project 3"></img>
                <h3>G Agency</h3>
                <p className="card-container-p">A Landing page section for a small agency, with functionalities like split screen, and autoplay video playback</p>
            </Link>
            <Link className="card-container mobile-img4">
                <img className="card-container-img" src={proj4} alt="Project 4"></img>
                <h3>Realtime Clock</h3>
                <p className="card-container-p">A Realtime Clock made with HTML, CSS, JS which shows you the live analog clock</p>
            </Link>
            <Link className="card-container mobile-img5">
                <img className="card-container-img" src={proj5} alt="Project 5"></img>
                <h3>Realtime Clock 2.0</h3>
                <p className="card-container-p">A Minimal Realtime Clock made with HTML, CSS, JS which shows you the live analog clock</p>
            </Link>
            <Link className="card-container mobile-img6">
                <img className="card-container-img" src={proj6} alt="Project 6"></img>
                <h3>Endospinocon 2024</h3>
                <p className="card-container-p">A Freelance Project made for the collaboration event between Spine Research Foundation India & HP GHosh Hospital </p>
            </Link>
        </div>
        
    </>
  );
}

export default EachCard