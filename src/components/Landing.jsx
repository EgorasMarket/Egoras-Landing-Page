import React, { useState } from "react";

import BusinessIcon from "@mui/icons-material/Business";
import DescriptionIcon from "@mui/icons-material/Description";
import PrivacyTipIcon from "@mui/icons-material/PrivacyTip";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import "../css/landing.css";
import "../css/header.css";

var acc = document.getElementById("accordion");
// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function () {
//     this.classList.toggle("active");
//     var panel = this.nextElementSibling;
//     if (panel.style.maxHeight) {
//       panel.style.maxHeight = null;
//     } else {
//       panel.style.maxHeight = panel.scrollHeight + "px";
//     }
//   });
// }

const Landing = () => {
  const [openDrop, setOpenDrop] = useState("not_mobile_menu");
  const [accord, setAccord] = useState("nav_link2a");
  const [accordy, setAccordy] = useState("not_accordiony");
  const [panel, setPanel] = useState("not_panel");

  const openPanel = () => {
    setPanel("panel");
    setAccord("not_nav_link2a");
    setAccordy("accordiony");
  };
  const closePanel = () => {
    setPanel("not_panel");
    setAccord("nav_link2a");
    setAccordy("not_accordiony");
  };
  const openDropDown = () => {
    setOpenDrop("mobile_menu");
  };
  const closeDropDown = () => {
    setOpenDrop("not_mobile_menu");
  };

  return (
    <div style={{ overflow: "hidden", height: "100vh", width: "100vw" }}>
      <section className="landingSection">
        <div className="header_section">
          <div className="container-fluid">
            <div className="header-area">
              <a href="#" className="nav_link1">
                {" "}
                <img
                  src="/img/egoras_logo.svg"
                  alt=""
                  className="header_logo"
                />
              </a>
              <div className="nav_link2">
                <a href="#" className="nav_link2a products">
                  Products
                  <img
                    src="/img/arrow-down-icon.svg"
                    alt=""
                    className="arrow_down_icon"
                  />
                </a>
                <div className="hover_drop_down">
                  <a href="" className="company_link">
                    <BusinessIcon className="iconss" /> Company
                  </a>
                  <a href="" className="company_link">
                    <DescriptionIcon className="iconss" />
                    White Paper
                  </a>
                  <a href="" className="company_link">
                    <PrivacyTipIcon className="iconss" />
                    Privacy
                  </a>
                </div>
                <a href="https://egoras.com/about" className="nav_link2a">
                  About Us
                </a>
              </div>

              <img
                src="/img/open_drop.svg"
                alt=""
                className="open_drop_icon"
                onClick={openDropDown}
              />
              {/* ============ */}
              {/* ============ */}
              {/* mobile menu start */}
              <div
                className={
                  openDrop == "not_mobile_menu"
                    ? "not_mobile_menu"
                    : "mobile_menu"
                }
              >
                <img
                  src="/img/closes_drop.svg"
                  alt=""
                  className="close_drop_icon"
                  onClick={closeDropDown}
                />
                <div className="nav_link2_mobile">
                  <div className="accordion">
                    <p
                      className={
                        accord == "nav_link2a" ? "nav_link2a" : "not_nav_link2a"
                      }
                      onClick={openPanel}
                    >
                      Products
                    </p>
                    <p
                      className={
                        accordy == "not_accordiony"
                          ? "not_nav_link2a"
                          : "nav_link2a"
                      }
                      onClick={closePanel}
                    >
                      Products
                    </p>
                    <div
                      className={
                        panel == "not_panel"
                          ? "not_accordion_inner_div"
                          : "accordion_inner_div"
                      }
                    >
                      <a href="#" className="accordion_inner_links">
                        Company
                      </a>
                      <a href="#" className="accordion_inner_links">
                        White-Paper
                      </a>
                      <a href="#" className="accordion_inner_links">
                        Privacy
                      </a>
                    </div>
                  </div>
                  <hr style={{ width: "100%" }} className="hr" />
                  <a href="https://egoras.com/about" className="nav_link2a">
                    About Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ============= */}
        {/* ============= */}
        {/* ============= */}
        {/* ============= */}

        <div className="landing_body">
          <div className="container">
            <div className="landing_area">
              <div className="landing_section_txts">
                <h3 className="landing_txt1">
                  Interest-Free
                  <br /> Loans With Egoras.
                </h3>
                <h6 className="landing_txt2">
                  It can be painful to sell your physical or crypto assets at
                  loss. With Egoras you can get Instant Interest-free loans with
                  your physical and crypto assets.
                </h6>
                <img
                  src="/img/tokens_icons.svg"
                  alt=""
                  className="tokens_icons"
                />

                <div className="landing_buttons">
                  <a
                    href="https://physical.egoras.com/"
                    className="landing_btn1"
                  >
                    Physical Assets
                  </a>
                  <a href="https://crypto.egoras.com/" className="landing_btn2">
                    Crypto Assets
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* =================================================================================================================================================================================================================================================================== */}
          {/* Partners Section start  */}
          <div className="gtpartnersSection">
            <div className="container">
              <div className="gttitleLine"></div>
              <div className="gthowItWorksTitle">
                <h1 className="gttitle">Our Investors & Partners</h1>
              </div>
              <div className="gtPartnersArea">
                <div className="gtpatLogo">
                  <a href="https://paidnetwork.com/" target="blank">
                    <img
                      src="/img/partners/PAIDNETWORK.svg"
                      alt=""
                      className="gtpartnerLogos   paid"
                    />
                  </a>
                </div>
                <div className="gtpatLogo">
                  <a href="https://yellowroad.app/" target="blank">
                    <img
                      src="/img/partners/yellow-road-white.svg"
                      alt=""
                      className="gtpartnerLogos yellow"
                    />
                  </a>
                </div>
                <div className="gtpatLogo">
                  <a href="https://www.threem.capital/" target="blank">
                    <img
                      src="/img/partners/threecapital-black.svg"
                      alt=""
                      className="gtpartnerLogos three"
                    />
                  </a>
                </div>
                <div className="gtpatLogo">
                  <a href="https://buidlhodl.capital/" target="blank">
                    <img
                      src="/img/partners/build-logo-white.svg"
                      alt=""
                      className="gtpartnerLogos build"
                    />
                  </a>
                </div>
                <div className="gtpatLogo">
                  <a href="https://exnetwork.community/" target="blank">
                    <img
                      src="/img/partners/ex-capital-white.svg"
                      alt=""
                      className="gtpartnerLogos ex"
                    />
                  </a>
                </div>

                <div className="gtpatLogo">
                  <a href="https://titans.ventures/" target="blank">
                    <img
                      src="/img/partners/TITANS2.svg"
                      alt=""
                      className="gtpartnerLogos titans"
                    />
                  </a>
                </div>
                <div className="gtpatLogo">
                  <a href="https://www.juncapital.io/" target="blank">
                    <img
                      src="/img/partners/jun-logo-white.svg"
                      alt=""
                      className="gtpartnerLogos jun"
                    />
                  </a>
                </div>
                <div className="gtpatLogo">
                  <a href="https://nuls.medium.com/" target="blank">
                    <img
                      src="/img/partners/NULS.svg"
                      alt=""
                      className="gtpartnerLogos nuls"
                    />
                  </a>
                </div>
                <div className="gtpatLogo">
                  <a href="https://www.mantradao.com/" target="blank">
                    <img
                      src="/img/partners/mantra-logo-white.svg"
                      alt=""
                      className="gtpartnerLogos  mantra"
                    />
                  </a>
                </div>
                <div className="gtpatLogo">
                  <a href="#" target="blank">
                    <img
                      src="/img/partners/resurgence-logo-white.svg"
                      alt=""
                      className="gtpartnerLogos  mantra"
                    />
                  </a>
                </div>
                <div className="gtpatLogo">
                  <a href="#" target="blank">
                    <img
                      src="/img/partners/QUIVERX.svg"
                      alt=""
                      className="gtpartnerLogos  mantra"
                    />
                  </a>
                </div>
                <div className="gtpatLogo">
                  <a href="#" target="blank">
                    <img
                      src="/img/partners/propel-logo-white.svg"
                      alt=""
                      className="gtpartnerLogos  mantra"
                    />
                  </a>
                </div>
                <div className="gtpatLogo">
                  <a href="#" target="blank">
                    <img
                      src="/img/partners/blackdragon-dark.svg"
                      alt=""
                      className="gtpartnerLogos  mantra"
                    />
                  </a>
                </div>
                <div className="gtpatLogo">
                  <a href="#" target="blank">
                    <img
                      src="/img/partners/n3rd-logo-white.svg"
                      alt=""
                      className="gtpartnerLogos  mantra"
                    />
                  </a>
                </div>
                <div className="gtpatLogo">
                  <a href="#" target="blank">
                    <img
                      src="/img/partners/skyfast-dark.svg"
                      alt=""
                      className="gtpartnerLogos  mantra"
                    />
                  </a>
                </div>
                <div className="gtpatLogo">
                  <a href="#" target="blank">
                    <img
                      src="/img/partners/chaos-black.svg"
                      alt=""
                      className="gtpartnerLogos  mantra"
                    />
                  </a>
                </div>
                <div className="gtpatLogo">
                  <a href="#" target="blank">
                    <img
                      src="/img/partners/aussie-black.svg"
                      alt=""
                      className="gtpartnerLogos  mantra"
                    />
                  </a>
                </div>
                <div className="gtpatLogo">
                  <a href="#" target="blank">
                    <img
                      src="/img/partners/ventures-black.svg"
                      alt=""
                      className="gtpartnerLogos  mantra"
                    />
                  </a>
                </div>
                <div className="gtpatLogo">
                  <a href="#" target="blank">
                    <img
                      src="/img/partners/everse-logo-1.png"
                      alt=""
                      className="gtpartnerLogos  mantra"
                    />
                  </a>
                </div>
              </div>
            </div>

            <img
              src="/img/partner-circle.svg"
              alt=""
              className="gtpartnersCircle"
            />
          </div>
          {/* Partners Section end  */}
          {/* ============== */}
          {/* ============== */}
          {/* ============== */}
          {/* ============== */}
        </div>
        {/* =========== */}
        {/* =========== */}
        {/* =========== */}
        {/* =========== */}
        {/* =========== */}
        <div className="footer_links">
          <a href="https://twitter.com/egorasmarket">
            <TwitterIcon className="social_icon" />
          </a>
          <a href="#">
            <TelegramIcon className="social_icon" />
          </a>
          <a href="https://web.facebook.com/egorasmarket/">
            <FacebookOutlinedIcon className="social_icon" />
          </a>

          <a
            href="https://web.facebook.com/egorasmarket/"
            className="linked_in_link"
          >
            <img src="/img/linkedin_icon.svg" alt="" className=" linked_in" />
          </a>
        </div>
        {/* =============== */}
        {/* =============== */}
        {/* =============== */}
        {/* =============== */}
        {/* =============== */}

        <div className="footer_section">
          <div className="container">
            <div className="footer_area">
              <div className="footer_txts">
                <hr className="hr2" />
                ©️ 2021 Egoras Technologies LTD(RC - 1832671). All rights
                reserved.
              </div>
            </div>
          </div>
          <img src="/img/footer_blur.svg" alt="" className="footer_blur" />
        </div>
        <img src="/img/big_blur1.png" alt="" className="big_blur" />
      </section>
    </div>
  );
};

export default Landing;
