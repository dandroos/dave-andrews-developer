import { Box, Typography } from "@mui/material"

import React from "react"
import { connect } from "react-redux"

const Index = ({ isMobile }) => {
  return (
    <Box minHeight="150vh">
      <Typography>
        You're viewing the {isMobile ? `mobile` : `desktop`} version.
      </Typography>
    </Box>
  )
}

const stp = (s) => ({
  isMobile: s.isMobile,
})

export default connect(stp)(Index)
