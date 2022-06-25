import React from "react"
import { Typography } from "@mui/material"

const PageWrapper = ({ title, children }) => {
  return (
    <>
      <Typography variant="h2">{title}</Typography>
      {children}
    </>
  )
}

export default PageWrapper
