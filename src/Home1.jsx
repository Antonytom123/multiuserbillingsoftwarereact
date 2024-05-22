import React from 'react';
import { Link } from 'react-router-dom';
import './Home1.css';
// import login from "./login";
import logo from './img/logo/logo3.png'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './assets/css/animate.css';
import './assets/css/meanmenu.min.css';
import './assets/css/font-awesome.min.css';
import './assets/css/themify-icons.css';
import './assets/css/flaticon.css';
import './assets/css/magnific.min.css';
import './assets/style/style.css';
import './assets/css/responsive.css';
// import './assets/js/vendor/modernizr-2.8.3.min.js';

const Home1 = () => {
    return (
        <>
             <header className="header-one">
    <div id="sticker" className="header-area hidden-xs">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <div className="row">
              <div className="col-md-3 col-sm-3">
                <div className="logo">
                  <a className="navbar-brand page-scroll white-logo" href="/">
                    <img src={logo} alt="Logo" />
                  </a>
                </div>
              </div>
              <div className="col-md-9 col-sm-9">
                <div className="header-right-link">
                  <Link className="s-menu" to="/signin">Login</Link>
                </div>
                <div className="header-right-link">
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle"
                      type="button"
                      id="navbar-example"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      style={{ backgroundColor: 'orange', width: '120px', height: '42px', marginTop: '-10px', color: 'white' }}
                    >
                      <b style={{ fontSize: '14px' }}>REGISTER</b>
                    </button>
                    <div className="dropdown-menu" aria-labelledby="navbar-example" style={{ marginLeft: '-15px' }}>
                      <Link className="dropdown-item" to="/register" style={{ color: 'black', marginLeft: '10px' }}>Company Registration</Link>
                      <Link className="dropdown-item" to="/registerstaff" style={{ color: 'black', marginLeft: '10px' }}>Staff Registration</Link>
                    </div>
                  </div>
                </div>
                <nav className="navbar navbar-default">
                  <div className="collapse navbar-collapse" id="navbar-example">
                    <div className="main-menu">
                      <ul className="nav navbar-nav navbar-right">
                        <li><Link className="pages" to="/">Home</Link></li>
                        <li><Link to="/about">About us</Link></li>
                        <li><Link to="/service">Service</Link></li>
                        <li><Link to="/contact">Contacts</Link></li>
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>

  <div className="slide-area fix" data-stellar-background-ratio="0.6">
    <div className="display-table">
      <div className="display-table-cell">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="slide-content text-center">
                <h2 className="title2">Best multiuser billing software in india</h2>
                <div className="layer-1-3">
                  <Link to="/login" className="ready-btn left-btn">Get started</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>



  <footer className="footer1">
    <div className="footer-area">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-3 col-xs-12">
            <div className="footer-content">
              <div className="footer-head">
                <h4>Services Link</h4>
                <ul className="footer-list">
                  <li><a href="#">Home</a></li>
                  <li><a href="#">About us</a></li>
                  <li><a href="#">Contact us</a></li>
                  <li><a href="#">Services</a></li>
                  <li><a href="#">Privacy</a></li>
                  <li><a href="#">Terms & Condition</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-4 col-xs-12">
            <div className="footer-content last-content">
              <div className="footer-head">
                <h4>Information</h4>
                <div className="footer-contacts">
                  <p><span>Tel :</span> 9983898799</p>
                  <p><span>Email :</span> billsoftware.com</p>
                  <p><span>Location :</span> Carnival 1, Infopark, Kakkanad</p>
                </div>
                <div className="footer-icons">
                  <ul>
                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fa fa-google"></i></a></li>
                    <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                    <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-area-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-6 col-xs-12"></div>
          </div>
        </div>
      </div>
    </div>
  </footer>


        </>
    );
}

export default Home1;
