import { Col, Row } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <Row
        className="text-center-custom"
        style={{
          background: "#f7f8f8",
          padding: "10px",
          marginTop: "10px 0",
          margin: "0",
        }}
      >
        <Col lg={3} sm={4} xs={12}>
          <p className="footer-link-head">
            <strong>Popular Categories</strong>
          </p>
          <ul style={{ paddingLeft: "0" }}>
            <li className="footer-link">Cars</li>
            <li className="footer-link">Flats for rent</li>
            <li className="footer-link">Mobile Phones</li>
            <li className="footer-link">Jobs</li>
          </ul>
        </Col>
        <Col lg={3} sm={4} xs={12}>
          <p className="footer-link-head">
            <strong>Trending Searches</strong>
          </p>
          <ul style={{ paddingLeft: "0" }}>
            <li className="footer-link">Bikes</li>
            <li className="footer-link">Watches</li>
            <li className="footer-link">Books</li>
            <li className="footer-link">Dogs</li>
          </ul>
        </Col>
        <Col lg={3} sm={4} xs={12}>
          <p className="footer-link-head">
            <strong>About us</strong>
          </p>
          <ul style={{ paddingLeft: "0" }}>
            <li className="footer-link">About Dubizzle Group</li>
            <li className="footer-link">OLX Blog</li>
            <li className="footer-link">Contact US</li>
            <li className="footer-link">OLX for Businesses</li>
          </ul>
        </Col>
        <Col lg={3} sm={4} xs={12}>
          <p className="footer-link-head">
            <strong>Olx</strong>
          </p>
          <ul style={{ paddingLeft: "0" }}>
            <li className="footer-link">Help</li>
            <li className="footer-link">Sitemap</li>
            <li className="footer-link">Terms of use</li>
            <li className="footer-link">Privacy Policy</li>
          </ul>
        </Col>
        <Col>
          <p className="footer-link-head">
            <strong>Follow US</strong>
          </p>
          <div>
            <span className="social-footer-link">
              <img src="/twiter.svg" alt="twiter" />
            </span>
            <span className="social-footer-link">
              <img src="/facebook.svg" alt="facebook" />
            </span>
            <span className="social-footer-link">
              <img src="/youtube.svg" alt="youtube" />
            </span>
            <span className="social-footer-link">
              <img src="/instagram.svg" alt="instagram" />
            </span>
          </div>
          <div style={{ marginTop: "32px" }}>
            <img
              src="/appstore.svg"
              alt="appstore"
              style={{ width: "70px" }}
              className="app-download-image"
            />
            <img
              src="/googleplay.svg"
              alt="googleplay"
              className="app-download-image"
              style={{ width: "70px" }}
            />
            <img
              src="/appgallery.svg"
              alt="appgallery"
              className="app-download-image"
              style={{ width: "70px" }}
            />
          </div>
        </Col>
      </Row>

      <div className="footer-credit-bg">
        <div className="footer-credit">
          <p className="footer-credit-p">
            <strong className="footer-credit-p">
              Free Classified in Pakistan. © 2006-2024 OLX
            </strong>
          </p>
        </div>
      </div>
    </>
  );
};
export default Footer;
