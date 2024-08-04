import Navbar from './Navbar.jsx';
import useVisibility from './useVisibility';
import '../styles/hero.css';
import heroImage from "../assets/images/heroImage.svg";

const Hero = () => {
  const [heroRef, isHeroVisible] = useVisibility();
  return (
    <>
      <Navbar isVisible={!isHeroVisible} />
      <div className="hero">
       <div ref={heroRef} className="hero-text">
          <h1>Hello,</h1>
          <h1>I&apos;m Samprit</h1>
          <h3>Welcome to my Blog!</h3>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="heroImage" />
        </div>
      </div>
    </>
  );
};

export default Hero