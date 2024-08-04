
import 'react-awesome-slider/dist/styles.css';
import '../styles/projects.css'
import EachCard from "./EachCard";
//import proj1 from "../assets/images/proj1.jpg";
//import proj2 from "../assets/images/proj2.jpg";





const Projects = () => {
  return (
    <>
        <div className='slider-container'>
            <h1>My Works</h1>
            <EachCard/>
        </div>
    </>
  )
}

export default Projects