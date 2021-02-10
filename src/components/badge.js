import React from "react"

const Badge = ({ text, color, logo, logoColor }) => {
  if (!text) text = logo

  if (!color) color = "05122A"

  text = text.replace(new RegExp("-", "g"), "_")

  if (logoColor) {
    return (
      <img
        style={{ margin: "0 0.125em" }}
        src={`https://img.shields.io/badge/-${text}-${color}?style=flat&logo=${logo}&logoColor=${logoColor}`}
      />
    )
  }

  return (
    <img
      style={{ margin: "0 0.125em" }}
      src={`https://img.shields.io/badge/-${text}-${color}?style=flat&logo=${logo}`}
    />
  )
}

export default Badge
