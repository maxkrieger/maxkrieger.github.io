import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"

import { library } from "@fortawesome/fontawesome-svg-core"
import { Link } from "gatsby"

library.add(faExternalLinkAlt)

const InnerProjectBox: React.FC<any> = ({
  title,
  kind,
  external,
  icon,
  link,
  bg,
}) => (
  <div
    style={{
      outline: "1px dashed #312D05",
      borderRadius: "10px",
      backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 1), 70%, rgba(255, 255, 255, 0)),
        url(${bg})`,
      backgroundSize: "cover",
      backgroundPosition: "left",
      padding: "12px 16px",
      height: "170px",
      marginTop: "30px",
    }}
  >
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-end",
        gap: 5,
        height: "100%",
        maxWidth: "70%",
      }}
    >
      <h3 style={{ fontSize: "24px", fontWeight: 500 }}>{title}</h3>
      <p style={{ margin: 0 }}>{kind}</p>
    </div>
  </div>
)

const ProjectBox: React.FC<{
  title: string
  kind: string
  external?: boolean
  icon?: string
  link: string
  bg: string
}> = ({ title, kind, external, icon, link, bg }) =>
  external ? (
    <a href={link} style={{ textDecoration: "none" }}>
      {" "}
      <InnerProjectBox
        bg={bg}
        link={link}
        external={external}
        icon={icon}
        title={title}
        kind={kind}
      />
    </a>
  ) : (
    <Link to={link} style={{ textDecoration: "none" }}>
      <InnerProjectBox
        bg={bg}
        link={link}
        external={external}
        icon={icon}
        title={title}
        kind={kind}
      />
    </Link>
  )

export default ProjectBox
