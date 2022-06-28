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
    <Box py={2}>
      <Container>
        <Typography variant="caption" align="center">
          All content &copy; {getCopyrightYear()} Dave Andrews
        </Typography>
      </Container>
    </Box>
  )
}

export default Footer
