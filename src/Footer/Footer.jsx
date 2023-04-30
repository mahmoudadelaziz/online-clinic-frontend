import { Link } from "react-router-dom";
import twitter from "../assets/images/twitter.png";
import facebook from "../assets/images/facebook.png";
import instagram from "../assets/images/instagram.png";
import whatsapp from "../assets/images/whatsapp.png";
import youtube from "../assets/images/youtube.png";

function Footer() {
    return (
        <div className="footer-block">
            <div className="footer-container container">
                <div className="links">
                    <Link to="/" className="link">Product</Link>
                    <Link to="/" className="link">Feature</Link>
                    <Link to="/" className="link">Resources</Link>
                    <Link to="/" className="link">Clinic</Link>
                    <Link to="/" className="link">About</Link>
                    <Link to="/" className="link">Blog</Link>
                    <Link to="/" className="link">Support</Link>
                </div>
                <div className="socials">
                    <span>
                        <img alt="social" src={ facebook } className="rounded-circle"></img>
                    </span>
                    <span>
                        <img alt="social" src={ instagram } className="rounded-circle"></img>
                    </span>
                    <span>
                        <img alt="social" src={ twitter } className="rounded-circle"></img>
                    </span>
                    <span>
                        <img alt="social" src={ whatsapp } className="rounded-circle"></img>
                    </span>
                    <span>
                        <img alt="social" src={ youtube } className="rounded-circle"></img>
                    </span>
                </div>
                <p className="pt-5">&copy; 2010-2023 Privacy Terms</p>
            </div>
        </div>
    )
}

export default Footer;