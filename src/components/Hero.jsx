
import '../styles/hero.css';
import heroImage from "../assets/images/heroImage.svg"

const Hero = () => {
  return (
    <>
    <div className="hero">
      <div className='hero-text'>
        <h1>Hello,</h1>
        <h1>I&apos;m Samprit</h1>
        <h3 className="">Welcome to my Blog!</h3>
      </div>
      <div className="hero-image">
        <img className="" src={heroImage} alt="heroImage"/>
      </div>
    </div>
    </>
  )
}

export default Hero