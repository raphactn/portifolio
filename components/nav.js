import { Link, animateScroll as scroll } from "react-scroll";
import styles from '../styles/Home.module.css'

function Nav() {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black" id="mainNav">
      <div className="container">
        <a className="navbar-brand" href="/">Raphael <b>Caetano</b></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item" id={styles.navItem}>
              <Link
                className="nav-link"
                to="section1"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                About</Link>
            </li>
            <li className="nav-item" id={styles.navItem}>
              <a
                className="nav-link"
                href="/projects"
              >
                Projects</a>
            </li>
            <li className="nav-item" id={styles.navItem}>
              <Link
                className="nav-link"
                to="section3"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Nav;