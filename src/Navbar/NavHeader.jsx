import { Link } from "react-router-dom";

function NavHeader() {
  return (
    <div id="NavBar">
      <div>
          <li id="HomeButton">
              <Link to="/">Clinic</Link>
          </li>
          <li>
              <Link to="/About">About</Link>
          </li>
          <li>
              <Link to="/Doctors">Doctors</Link>
          </li>
          <li>
              <Link to="/Contact">Contact Us</Link>
          </li>
      </div>
      <div className="right-side">
          <li>
              <Link to="/ForDoctors">For Doctors</Link>
          </li>
          <li>
              <Link to="/SignIn">Log In</Link>
          </li>
          <li id="signup">
              <Link to="/SignUp">Sign Up</Link>
          </li>
      </div>
    </div>
  );
}

export default NavHeader;
