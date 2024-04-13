import { Link } from "gatsby"
import React from "react"

export default function Experiment({
  image,
  title,
  slug,
}: {
  image: string
  title: string
  slug: string
}) {
  return (
    <Link to={slug} style={{ textDecoration: "none" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <img
          src={image}
          style={{
            objectFit: "cover",
            objectPosition: "center",
            width: "100%",
            aspectRatio: "4/3",
            borderRadius: "10px",
            overflow: "hidden",
            outline: "1px dashed #312D05",
            margin: 0,
          }}
        />
        <h3 style={{ fontSize: "14px", margin: 0 }}>{title}</h3>
      </div>
    </Link>
  )
}
