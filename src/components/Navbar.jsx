import PropTypes from 'prop-types'; // Import PropTypes
import '../styles/navbar.css';

const Navbar = ({ isVisible }) => {
  return (
    <div className={`navbar-text ${isVisible ? 'show' : ''}`}>
      <p>Hello, I&apos;m Samprit</p>
      <span>Welcome to my Blog!</span>
    </div>
  );
};

// Add PropTypes validation
Navbar.propTypes = {
  isVisible: PropTypes.bool.isRequired
};

export default Navbar;