import React from "react"

const Callout = ({ outer, inner }: { outer: string; inner: string }) => {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <p
      style={{
        backgroundColor: "#e5fdde",
        borderRadius: "10px",
        border: "1px solid #7aec57",
        padding: "1em",
        cursor: "pointer",
      }}
      onClick={() => setIsOpen(i => !i)}
    >
      <span style={{ textDecoration: "underline" }}>{outer}</span>
      {isOpen && <div style={{ marginTop: "10px" }}>{inner}</div>}
    </p>
  )
}

export default Callout
