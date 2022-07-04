import { Box, Container, Link, Typography } from "@mui/material"

import React from "react"
import { StaticImage } from "gatsby-plugin-image"

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
    <>
      <Box pb={4} textAlign="center">
        <Container>
          <StaticImage
            src="../images/logo-dark.png"
            alt="Dave Andrews Logo"
            height={35}
            quality={99}
            style={{ marginBottom: 5 }}
            placeholder="none"
          />
          <Typography variant="caption" display="block" align="center">
            All content &copy; {getCopyrightYear()}{" "}
            <Link
              href="mailto:dandrewsuk82@gmail.com"
              target="_blank"
              underline="hover"
            >
              Dave Andrews
            </Link>
          </Typography>
        </Container>
      </Box>
    </>
  )
}

export default Footer
