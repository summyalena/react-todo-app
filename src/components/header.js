/* eslint-disable */

import React from 'react'

function header() {
  const headerStyle = {
    padding: "20px 0",
    lineHeight: "1.5em",
  }
  return (
    <header style={headerStyle}>
     <nav>
        <h1 style={{
           fontSize: "6rem",
           fontWeight: "600",
           marginBottom: "2rem",
           lineHeight: "1em",
           color: "#ececec",
           textTransform: "lowercase",
           textAlign: "center",
        }}>Tasks</h1>
       
     </nav>
    </header>
  )
}

export default header