import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="pb-5 mt-5 ">
        <div className="container position-relative py-4 overflow-hidden">
        <div
          style={{ top: "0"  , height:"3px" , backgroundColor: 'rgb(35,35,35)'}}
          className="overlay_footer position-absolute w-100"
        ></div>
          <p className="text-white text-decoration-underline text-center text-md-start  pt-3 fs-5">Questions? Contact us.</p>
          <div className="row text-center text-md-start">
            <div className="col-md-4">
              <div className="footer-item">
                <ul className=" list-unstyled text-white">
                  <li className="mb-3 text-decoration-underline">FAQ</li>
                  <li className="mb-3 text-decoration-underline">Media Center</li>
                  <li className="mb-3 text-decoration-underline">Ways to Watch</li>
                  <li className="mb-3 text-decoration-underline">Cookie Preferences</li>
                  <li className="mb-3 text-decoration-underline">Speed Test</li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="footer-item">
                <ul className=" list-unstyled text-white">
                  <li className="mb-3 text-decoration-underline">Help Center</li>
                  <li className="mb-3 text-decoration-underline">Investor Relations</li>
                  <li className="mb-3 text-decoration-underline">Terms of Use</li>
                  <li className="mb-3 text-decoration-underline">Corporate Information</li>
                  <li className="mb-3 text-decoration-underline">Legal Notices</li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="footer-item">
                <ul className=" list-unstyled text-white">
                  <li className="mb-3 text-decoration-underline">Account</li>
                  <li className="mb-3 text-decoration-underline">Jobs</li>
                  <li className="mb-3 text-decoration-underline">Privacy</li>
                  <li className="mb-3 text-decoration-underline">Contact Us</li>
                  <li className="mb-3 text-decoration-underline">Only on Netflix</li>
                </ul>
              </div>
            </div>
          </div>
          <div
          style={{ bottom: "0"  , height:"3px" , backgroundColor: 'rgb(35,35,35)'}}
          className="overlay_footer position-absolute w-100"
        ></div>
        </div>
          <p className="text-center text-white mt-5 fw-bold">Designed by / <span className="text-danger text-uppercase">Mohamed Elbana</span> </p>
      </footer>
    </>
  );
}
