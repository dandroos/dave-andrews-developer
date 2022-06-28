import { Box, Typography } from "@mui/material"
import { graphql, useStaticQuery } from "gatsby"

import BackgroundImage from "gatsby-background-image"
import React from "react"
import { connect } from "react-redux"
import { convertToBgImage } from "gbimage-bridge"
import { getImage } from "gatsby-plugin-image"

const Index = ({ isMobile }) => {
  const img = convertToBgImage(
    getImage(
      useStaticQuery(graphql`
        {
          file(sourceInstanceName: { eq: "images" }, name: { eq: "dave1" }) {
            childImageSharp {
              gatsbyImageData(
                quality: 95
                placeholder: BLURRED
                transformOptions: { grayscale: true, cropFocus: NORTH }
              )
            }
          }
        }
      `).file
    )
  )

  return (
    <Box
      height="100vh"
      width="100%"
      component={BackgroundImage}
      {...img}
      style={{ backgroundPosition: !isMobile ? `0 -23rem` : `center 0` }}
      display="flex"
      alignItems="center"
      justifyContent="center"
      color="common.white"
    >
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
