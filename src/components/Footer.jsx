import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          <p className="contact-title">CONTACT</p>
          <h2 className="footer-main-text">
            We&rsquo;re focused on building brands and a better future.
          </h2>
          <h2 className="footer-main-text">
            If you&rsquo;d like to partner with us, we&rsquo;re{" "}
            <span className="highlight">here</span> to talk.
          </h2>

          <div className="footer-links">
            <div className="footer-column">
              <p>Open Spaces</p>
              <p>GIR</p>
              <p>Letterfolk</p>
              <p>Yield</p>
              <p>Poketo</p>
              <p>Equal Parts</p>
            </div>
            <div className="footer-column">
              <p>Careers</p>
              <p>Press</p>
            </div>
            <div className="footer-column">
              <p>Instagram</p>
              <p>Twitter</p>
            </div>
            <div className="footer-column">
              <p>228 Park Ave S.</p>
              <p>New York, NY 10003</p>
              <p>acquisitions@patternbrands.com</p>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer-bottom">
        <div className="footer-bottom-divider"></div>
        <div className="footer-bottom-container">
          <div className="footer-bottom-text">© 2025 Pattern Brands</div>
        </div>
      </div>
    </>
  );
};

export default Footer;

