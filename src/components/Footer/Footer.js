import React from "react";
import "./Footer.css";
import { InternshipPlaces } from "../../data/InternshipPlaces";
import { InternshipStreams } from "../../data/InternshipStreams";
import { OnlineTrain } from "../../data/OnlineTrain";
import { About } from "../../data/About";

function Footer() {
  const data = InternshipPlaces;
  const dataStreams = InternshipStreams;
  const dataOnline = OnlineTrain;
  const dataAbout = About;

  return (
    <div className="footer">
      <footer class="page-footer font-small container">
        <div class="container text-center text-md-left">
          <div class="row">
            <div class="col-md-3 mx-auto">
              <h5 class="font-weight-bold mt-3 mb-4 listing">
                Internships by places
              </h5>
              <div className="listing">
                <ul class="list-unstyled">
                  <li className="li_footer">
                    {data.map((item) => {
                      return (
                        <a href="#!" className="footer_a" key={item.id}>
                          Internship in {item.name} <br />
                        </a>
                      );
                    })}
                  </li>
                  <li className="li_footer">
                    <a href="#!" className="footer_a">
                      Virtual Internship
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <hr class="clearfix w-100 d-md-none" />

            <div class="col-md-3 mx-auto">
              <h5 class="font-weight-bold listing mt-3 mb-4">
                Internships by streams
              </h5>

              <ul class="list-unstyled">
                <li className="li_footer">
                  {dataStreams.map((item) => {
                    return (
                      <a href="#!" className="footer_a" key={item.id}>
                        {item.name} Internship <br />
                      </a>
                    );
                  })}
                </li>
                <li className="li_footer">
                  <a href="#!" className="footer_a">
                    Summer Research Fellowship
                  </a>
                </li>
                <li className="li_footer">
                  <a href="#!" className="footer_a">
                    Campus Ambassador Program
                  </a>
                </li>
              </ul>
            </div>

            <hr class="clearfix w-100 d-md-none" />

            <div class="col-md-3 mx-auto">
              <h5 class="font-weight-bold listing mt-3 mb-4">
                Online Trainings
                <a
                  href="https://trainings.internshala.com/?utm_source=is_web_is-footer&utm_campaign=HP_Category_Eng"
                  className="footer_a"
                >
                  <span class="offer_badge">OFFER</span>
                </a>
              </h5>

              <ul class="list-unstyled">
                <li className="li_footer">
                  {dataOnline.map((item) => {
                    return (
                      <a href="#!" key={item.id} className="footer_a">
                        {item.name} <br />
                      </a>
                    );
                  })}
                </li>
              </ul>
            </div>

            <hr class="clearfix w-100 d-md-none" />

            <div class="col-md-3 mx-auto">
              <h5 class="font-weight-bold listing mt-3 mb-4">
                About Internshala
              </h5>

              <ul class="list-unstyled">
                <li className="li_footer">
                  {dataAbout.map((item) => {
                    return (
                      <a href="#!" key={item.id} className="footer_a">
                        {item.name} <br />
                      </a>
                    );
                  })}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="horiRow" />
        <div className="footer_final">
          <div className="left_final">
            <div className="getApp">
              <a
                href="https://play.google.com/store/apps/details?id=com.internshala.app&referrer=utm_source%3Dplay_footer"
                className="playApp"
                target="_blank"
              >
                <i class="fab fa-google-play"></i> Get Android App{" "}
              </a>
            </div>
            <div className="socialMedia">
              <a
                href="https://www.instagram.com/internshala/?utm_source=IS_footer"
                target="_blank"
              >
                <i class="socialMediaIcons fab fa-instagram"></i>
              </a>
              <a
                href="https://twitter.com/Internshala?utm_source=IS_footer"
                target="_blank"
              >
                <i class="socialMediaIcons fab fa-twitter"></i>
              </a>
              <a
                href="https://www.youtube.com/c/internshalaofficial"
                target="_blank"
              >
                <i class="socialMediaIcons fab fa-youtube"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/internshala/?utm_source=is-footer"
                target="_blank"
              >
                <i class="socialMediaIcons fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          <div className="right_final">
            <h6 class="copyright">© Copyright 2021 Internshala</h6>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
