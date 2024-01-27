import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import { useWidth } from "../helperFunc/helperFunc";
import { useState } from "react";

const Header = () => {
  const { isMobile } = useWidth(992);
  const [isHeader, setIsHearder] = useState(false);
  return (
    <>
      <div className="header">
        <div className="header-top">
          <div className="top-bar-items ">
            <img src="/olx-logo2.svg" alt="value" style={{ width: "40px" }} />
          </div>
          <div className="top-bar-items hover ">Motors</div>
          <div className="top-bar-items hover">Property</div>
        </div>

        <div className="header-bottom ">
          <div className="top-bar-items">
            <img src="/olx-logo.svg" alt="value" style={{ width: "60px" }} />
          </div>
          {isMobile ? (
            <>
              <div
                class={`hamburger ${isHeader && "open"}`}
                onClick={() => setIsHearder(!isHeader)}
              >
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
                <div className={`mobile-header ${isHeader && "active"}`}>
                  <div className="top-bar-items-mobile">
                    <Form.Select
                      className="select-input select"
                      style={{ width: "100%" }}
                    >
                      <option>Category</option>
                      <option value="1">Karachi</option>
                      <option value="2">Lahore</option>
                      <option value="3">Islamabad</option>
                      <option value="4">Peshawar</option>
                    </Form.Select>
                  </div>

                  <div className="top-bar-input">
                    <input
                      className="select-input search"
                      placeholder="Find Cars, Mobile Phones and more..."
                    />
                    <img
                      src="/search-bar.svg"
                      alt="search-bar"
                      className="search-icon"
                    />
                  </div>

                  <div className="top-bar-items-mobile">
                    <button className="login-btn">Login</button>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div style={{ display: "flex" }}>
              <div className="top-bar-items">
                <Form.Select className="select-input select">
                  <option>Category</option>
                  <option value="1">Karachi</option>
                  <option value="2">Lahore</option>
                  <option value="3">Islamabad</option>
                  <option value="4">Peshawar</option>
                </Form.Select>
              </div>

              <div className="top-bar-input">
                <input
                  className="select-input search"
                  placeholder="Find Cars, Mobile Phones and more..."
                />
                <img
                  src="/search-bar.svg"
                  alt="search-bar"
                  className="search-icon"
                />
              </div>

              <div className="top-bar-items">
                <button className="login-btn">Login</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default Header;
