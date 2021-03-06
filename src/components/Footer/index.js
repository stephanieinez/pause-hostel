import React from 'react';
import { Link } from 'react-router-dom';

import './footer.css';
import { ROOT, CONTACT_PAGE } from '../../routes';
import { youtubeImage, facebookImage } from '../../images';

const Footer = ({ nav_items, nav_image, facebook_url, youtube_url, phone }) => (
  <div className="footer">
    <div className="nav-container">
      <Link to={ROOT}>
        <img className="logo" src={nav_image} alt="Pause Hostels" />
      </Link>
      <div className="link-wrapper">
        <div className="contact-info">
          <div className="phone">
            <img className="phone-icon" src="/phone-icon.png" alt="Contact" />
            <p>Contact us directly on {phone}</p>
          </div>
          <div>
            <a href={facebook_url}>
              <img className="social-icon" src={facebookImage} alt="Facebook" />
            </a>
            <a href={youtube_url}>
              <img className="social-icon" src={youtubeImage} alt="YouTube" />
            </a>
          </div>
          <Link className="book-button" to={CONTACT_PAGE}>
            Book Now
          </Link>
        </div>
        <div className="nav-links">
          <ul>
            {nav_items.map(({ nav_item }, idx) => (
              <li key={`navitems-${idx}`}>
                <Link to={nav_item.url}>{nav_item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <Link className="book-button-mobile" to={CONTACT_PAGE}>
          Book Now
        </Link>
        <div className="contact-info-mobile">
          <div className="phone">
            <img
              className="phone-icon-mobile"
              src="/phone-icon.png"
              alt="Contact"
            />
            <p>Call us: {phone}</p>
          </div>
        </div>
      </div>
    </div>
    <div className="legal">
      Pause Hostels/Mexico/Belize/All Rights Reserved 2017
    </div>
    <div className="credits">
      <p>
        Site made with &hearts; by
        <a href="https://github.com/stephanieinez"> Steph</a> &
        <a href="https://github.com/grady-lad"> Martin</a>
      </p>
    </div>
  </div>
);

export default Footer;
