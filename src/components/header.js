import * as React from "react"
import { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import logo from "../images/logo-logo.svg"
import logoBLetters from "../images/logo-b-letters.svg"

function Header() {
  const [menuState, setMenuState] = useState("not-active")

  const menuActive = () => {
    if (menuState === "not-active") {
      setMenuState("is-active")
    } else {
      setMenuState("not-active")
    }
  }

  return (
    <nav id="nav" class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a href="/" class="navbar-item" id="nav-logo">
          <img
            id="logo-left"
            className="is-hidden-desktop"
            src={logo}
            width="100"
            height="100"
          />
          <img src={logoBLetters} id="logo-b-letters" />
        </a>

        <a
          onClick={menuActive}
          role="button"
          id="burger"
          class={"navbar-burger " + menuState}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class={"navbar-menu " + menuState}>
        <div class="navbar-start"></div>
        <div
          className={
            "nav-circle " +
            menuState +
            " is-hidden-mobile is-hidden-tablet-only"
          }
        >
          <img src={logo} width="140" height="135" />
        </div>

        <div class="navbar-end">
          <div class="navbar-item has-text-centered">
            <Link
              onClick={menuActive}
              to="/menu"
              class="navbar-item has-text-weight-bold brown"
            >
              Menu
            </Link>
            <Link
              onClick={menuActive}
              to="/#map"
              class="navbar-item has-text-weight-bold brown"
            >
              Encuentranos
            </Link>
            <Link
              onClick={menuActive}
              to="/#contact"
              class="navbar-item has-text-weight-bold brown"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
