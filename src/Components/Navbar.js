import {React,useState }from 'react'
import PropTypes from 'prop-types'

import { Link, Outlet } from 'react-router-dom'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
/* We can specify the type of props send to the components and if we pass diffrent data type it shows error and note that function name.propType as p should be lower case */
export default function Navbar(props) {
  
  return (
    <>

      <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary sticky-top  ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">News Thunder</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/news">All News</Link>
              </li>
              <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categories
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/Business">Business</Link></li>
            <li><Link className="dropdown-item" to="/entertainment">Entertainment</Link></li>
            <li><Link className="dropdown-item" to="/health">Health</Link></li>
            <li><Link className="dropdown-item" to="/science">Science</Link></li>
            <li><Link className="dropdown-item" to="/sports">Sports</Link></li>
            <li><Link className="dropdown-item" to="/technology">Technology</Link></li>
           
          </ul>
        </li>
              <li className="nav-item">
                <Link className="nav-link disabled">Disabled</Link>
              </li>
            </ul>
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.changes}/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                {props.theme}
                </label>
               
            </div>
          </div>
        </div>
      </nav>
      <Outlet/>
    </>
  )
}



Navbar.propTypes = {
  listname: PropTypes.string
}