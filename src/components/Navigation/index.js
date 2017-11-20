import React from 'react';
import './navigation.css';
import { ROOT } from '../../routes';

const Navigation = ({
  nav_items,
  nav_image,
  facebook_url,
  youtube_url,
  phone,
}) => (
  <div className="nav-container">
    <a href={ROOT}>
      <img className="logo" src={nav_image} alt="Pause Hostels" />
    </a>
    <div className="link-wrapper">
      <div className="contact-info">
        <div className="phone">
          <img className="phone-icon" src="/phone-icon.png" alt="Contact" />
          <p>Contact us directly on {phone}</p>
        </div>
        <div>
          <a href={facebook_url}>
            <img
              className="social-icon"
              src="/facebook-icon.png"
              alt="Facebook"
            />
          </a>
          <a href={youtube_url}>
            <img
              className="social-icon"
              src="/youtube-icon.png"
              alt="YouTube"
            />
          </a>
        </div>
      </div>
      <div className="nav-links">
        <ul>
          {nav_items.map(({ nav_item }) => (
            <li>
              <a href={nav_item.url}>{nav_item.title}</a>
            </li>
          ))}
        </ul>
      </div>
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
);

export default Navigation;
