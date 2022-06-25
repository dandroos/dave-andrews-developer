import { Box, Container, Typography } from "@mui/material"

import React from "react"

const Footer = () => {
  const getCopyrightYear = () => {
    const currYear = new Date().getFullYear()
    if (currYear !== 2022) {
      return `2022 - ${currYear}`
    } else {
      return 2022
    }
  }
  return (
    <Box>
      <Container>
        <Typography variant="caption">
          All content &copy; {getCopyrightYear()} Dave Andrews
        </Typography>
      </Container>
    </Box>
  )
}

export default Footer
