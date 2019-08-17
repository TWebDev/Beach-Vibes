import React from 'react'
import Logo from '../../media/logos/BV_Icon.svg'

export default class NavbarCustom extends React.Component {
  render() {
    return (
      <nav className="navbar is-spaced is-primary" role="navigation" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            <span className="navbar-item" href="/">
              {/*<img src={AM} alt="Amazing Mexico"/>*/}
              <img src={Logo} alt="Amazing Mexico"/>
            </span>
          </div>
          <div className="navbar-menu">
            <div className="navbar-start">
              <div className="navbar-item is-flex">
                <p className="title has-text-black is-size-5">
                  <a className="navbar-item" href="#locations"><span>Puerto Vallarta</span></a>
                </p>
              </div>
              <div className="navbar-item is-flex">
                <p className="title has-text-black is-size-5">
                  <a className="navbar-item" href="#locations"><span>Cancun</span></a>
                </p>
              </div>
              <div className="navbar-item is-flex">
                <p className="title has-text-black is-size-5">
                  <a className="navbar-item" href="#locations"><span>Cabo</span></a>
                </p>
              </div>
              <div className="navbar-item is-flex">
                <p className="title has-text-black is-size-5">
                  <a className="navbar-item" href="#locations"><span>Loreto</span></a>
                </p>
              </div>
              <div className="navbar-item is-flex">
                <p className="title has-text-black is-size-5">
                  <a className="navbar-item" href="#form"><span>Contact</span></a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown mobile-only">
          <button className="dropbtn"> 
            <i className="fa fa-arrow-left"></i>
          </button>
          <div className="dropdown-content">
            <a href="#pvm">Puerto Vallarta</a>
            <a href="#cnm">Cancun</a>
            <a href="#com">Cabo</a>
            <a href="#lom">Loreto</a>
          </div>
        </div> 
      </nav>
    )
  }


}