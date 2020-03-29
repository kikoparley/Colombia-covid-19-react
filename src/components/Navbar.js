import React from "react";

import "../styles/Badge.css";
import confLogo from "../images/logo.png";
class Navbar extends React.Component {
  render() {
    return (
      <div className='Navbar'>
        <p className='Navbar__brand' href='/'>
          <img className='Navbar__brand-logo' src={confLogo} alt='logo' />
          <h1 className='Badge__section-nameIndex'> Estadísticas Covid-19</h1>
        </p>
      </div>
    );
  }
}

export default Navbar;
