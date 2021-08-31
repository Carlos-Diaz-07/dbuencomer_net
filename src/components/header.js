import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import logo from "../images/logo.svg";
import { StaticImage } from "gatsby-plugin-image";

const Header = ({ siteTitle }) => (
  <nav id="nav" class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <Link class="navbar-item" href="https://bulma.io">
        <StaticImage
          src="https://bulma.io/images/bulma-logo.png"
          width="112"
          height="28"
        />
      </Link>

      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <Link class="navbar-item">Home</Link>

        <Link class="navbar-item">Documentation</Link>
      </div>
      <div className="circle">
      <img
          src={logo}
          width="112"
          height="28"
        />
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary">
              <strong>Sign up</strong>
            </a>
            <a class="button is-light">Log in</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
