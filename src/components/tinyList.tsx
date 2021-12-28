import React from "react"
const TinyList = ({ links }: { links: any[] }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {links.map(([desc, link]) => (
        <a key={link} href={link}>
          {desc}
        </a>
      ))}
    </div>
  )
}

export default TinyList
