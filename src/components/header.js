import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTwitter,
  faGoodreadsG,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"
import { library } from "@fortawesome/fontawesome-svg-core"

library.add(faTwitter, faGoodreadsG, faLinkedinIn, faGithub)

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `none`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 720,
        padding: `1.5rem 0.8rem 0.3rem 0.8rem`,
        borderBottom: `5px solid #312D05`,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
      }}
    >
      <h1
        style={{
          margin: 0,
          fontFamily: "Chicago Plain",
        }}
      >
        <Link
          to="/"
          style={{
            color: `#312D05`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <div
        style={{
          fontSize: "1.2rem",
        }}
        className="iconsheet"
      >
        <a href="https://twitter.com/maxkriegers">
          <FontAwesomeIcon icon={["fab", "twitter"]} />
        </a>
        <a href="https://www.goodreads.com/maxkrieger">
          <FontAwesomeIcon icon={["fab", "goodreads-g"]} />
        </a>
        {/* <a href="https://www.linkedin.com/in/max-krieger/">
          <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
        </a> */}
        <a href="https://github.com/maxkrieger">
          <FontAwesomeIcon icon={["fab", "github"]} />
        </a>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
