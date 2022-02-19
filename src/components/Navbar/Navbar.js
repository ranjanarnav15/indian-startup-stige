import React from "react";
import "./Navbar.css";
import { InternshipPlaces } from "../../data/InternshipPlaces";
import { OnlineTrain } from "../../data/OnlineTrain";

function Navbar() {
  const data = InternshipPlaces;
  const dataOnline = OnlineTrain;
  return (
    <>
      <nav class="navbar navbar-expand-lg internshala_nav">
        <div className="container">
          <div class="d-flex flex-grow-1">
            <span class="w-100 d-lg-none d-block"></span>
            <a class="navbar-brand d-none d-lg-inline-block" href="#">
              <img
                src="https://internshala.com/static/images/common/new_internshala_logo.svg"
                alt="Internshala Logo"
              />
            </a>
            <a
              class="navbar-brand-two mx-auto d-lg-none d-inline-block"
              href="#"
            >
              <img
                src="https://internshala.com/static/images/common/new_internshala_logo.svg"
                alt="Internshala logo"
              />
            </a>
            <div class="w-100 text-right">
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#myNavbar"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
            </div>
          </div>
          <div
            class="collapse navbar-collapse flex-grow-1 text-right"
            id="myNavbar"
          >
            <ul class="navbar-nav ms-auto flex-nowrap">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Internships
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    {data.map((item) => {
                      return (
                        <a href="#!" key={item.id} className="nav_a">
                          Internship in {item.name} <br />
                        </a>
                      );
                    })}
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Online Trainings
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    {dataOnline.map((item) => {
                      return (
                        <a href="#!" key={item.id} className="nav_a">
                          {item.name} <br />
                        </a>
                      );
                    })}
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://internshala.com/fresher-jobs">
                  Fresher Jobs
                </a>
              </li>
              <li class="nav-item">
                <a
                  href="https://internshala.com/registration/student"
                  className="nav_login"
                >
                  <div className="login">Login</div>
                </a>
              </li>
              <li class="nav-item">
                <a
                  href="https://internshala.com/registration/student"
                  className="nav_reg"
                >
                  <div className="register">Register</div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <hr />
    </>
  );
}

export default Navbar;
