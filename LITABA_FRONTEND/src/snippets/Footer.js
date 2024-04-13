import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <ul className="footer-nav">
          <li>Home</li>
          <li>News</li>
          <li>Sport</li>
          <li>Business</li>
          <li>Innovation</li>
          <li>Culture</li>
          <li>Travel</li>
          <li>Earth</li>
          <li>Video</li>
          <li>Live</li>
          <li>Audio</li>
          <li>Weather</li>
          <li>Litaba Shop</li>
        </ul>
      </div>
        
      <div className="footer-section">
        <select className="language-form">
          <option value="">Litaba in other languages</option>
          <option value="isiZulu">isiZulu</option>
          <option value="isiXhosa">isiXhosa</option>
          <option value="Afrikaans">Afrikaans</option>
          <option value="English">English</option>
          <option value="Sesotho">Sesotho</option>
          <option value="Xitsonga">Xitsonga</option>
          <option value="siSwati">siSwati</option>
          <option value="Tshivenda">Tshivenda</option>
          <option value="isiNdebele">isiNdebele</option>
        </select>
      </div>

      <hr className="divider" />

      <div className="footer-section">
        <ul className="site-nav">
          <li>Terms of Use</li>
          <li>About the LITABA</li>
          <li>Privacy Policy</li>
          <li>Cookies</li>
          <li>Accessibility Help</li>
          <li>Contact the LITABA</li>
          <li>Advertise with us</li>
          <li>Do not share or sell my info</li>
          <li>Contact technical support</li>
        </ul>
      </div>

      <div className="footer-section">
        <p className="copyright">&copy; 2024 LITABA. All rights reserved. The LITABA is not responsible for the content of external sites. Read about our approach to external linking.</p>
      </div>
    </footer>
  );
}

export default Footer;
