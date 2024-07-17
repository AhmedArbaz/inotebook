import React from 'react'
import { Link,useLocation } from 'react-router-dom'
const Navbar = () => {
  // Using location Hook  ya use hota hay ager hamin location change karni ho to ab jsay useEffect may loction ko use karin kay location jasy /about ho to ausy active kar do ternry operator ko use kain gay aur load kay liay useEffect ko
  let location = useLocation();

  return (
    <>
      <nav className="navbar navbar-dark  navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"><span>&lt;</span>iNotebook/&gt;</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/"? "active": ""}`} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/about"? "active": ""}`} to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">Pricing</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>

    </>
  )
}

export default Navbar
