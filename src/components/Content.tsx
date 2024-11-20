import React, { ReactHTMLElement, ReactNode } from "react"

const Content = (props) => {
  return (
    <div style={{ display: "flex", height: "80vh", color: "white" }}>
      {props.children}
    </div>
  )
}

export default Content