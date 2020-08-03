import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"

import { library } from "@fortawesome/fontawesome-svg-core"

library.add(faExternalLinkAlt)

const ProjectBox: React.FC<{
  title: string
  external?: string
  icon?: string
  link: string
  bg: string
}> = ({ title, external, icon, link, bg }) => (
  <a href={link} style={{ textDecoration: "none" }}>
    <div
      style={{
        border: "1px dashed #312D05",
        borderRadius: "10px",
        backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 1),70%, rgba(255, 255, 255, 0)),
        url(${bg})`,
        backgroundSize: "cover",
        padding: "1em 1em 1em 1em",
        marginTop: "30px",
      }}
    >
      {icon && (
        <img src={icon} height={100} style={{ verticalAlign: "middle" }} />
      )}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h3>{title}</h3>
        {external && (
          <span
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "10px",
              padding: "0 10px 0 10px",
            }}
          >
            {external} <FontAwesomeIcon icon={["fas", "external-link-alt"]} />
          </span>
        )}
      </div>
    </div>
  </a>
)

export default ProjectBox
