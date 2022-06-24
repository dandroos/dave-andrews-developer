import { Box, Typography } from "@mui/material"

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
      <Typography variant="caption">
        All content &copy; {getCopyrightYear()} Dave Andrews
      </Typography>
    </Box>
  )
}

export default Footer
