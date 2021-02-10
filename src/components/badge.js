import React from "react"

const Badge = ({ text, logo, logoColor }) => {
  if (!text) text = logo

  text = text.replace(new RegExp("-", "g"), "_")

  if (logoColor) {
    return (
      <img
        style={{ margin: "0 0.125em" }}
        src={`https://img.shields.io/badge/-${text}-05122A?style=flat&logo=${logo}&logoColor=${logoColor}`}
      />
    )
  }

  return (
    <img
      style={{ margin: "0 0.125em" }}
      src={`https://img.shields.io/badge/-${text}-05122A?style=flat&logo=${logo}`}
    />
  )
}

export default Badge
