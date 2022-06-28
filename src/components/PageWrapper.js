import { Container, Typography } from "@mui/material"

import React from "react"

const PageWrapper = ({ title, children }) => {
  return (
    <>
      <Container>
        <Typography variant="h2">{title}</Typography>
        {children}
      </Container>
    </>
  )
}

export default PageWrapper
