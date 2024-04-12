import React from "react"
export default function Video({ src }: { src: string }) {
  return (
    <video
      controls
      style={{
        borderRadius: "10px",
        width: "100%",
        height: "auto",
        marginTop: "10px",
        marginBottom: "40px",
      }}
    >
      <source src={`/${src}`} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  )
}
