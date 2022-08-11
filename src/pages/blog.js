import { Box, Typography } from "@mui/material"

import HeadComponent from "../components/Head"
import PageWrapper from "../components/PageWrapper"
import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { connect } from "react-redux"

const Blog = ({ isMobile }) => {
  return (
    <>
      <PageWrapper title="Blog">
        {isMobile ? (
          <StaticImage
            src="../images/dave6.jpg"
            alt="Dave Andrews"
            aspectRatio={1}
            placeholder="blurred"
            transformOptions={{ grayscale: true, cropFocus: "east" }}
            style={{ marginBottom: 10, marginTop: 10 }}
          />
        ) : (
          <StaticImage
            src="../images/dave6.jpg"
            alt="Dave Andrews"
            aspectRatio={2}
            placeholder="blurred"
            transformOptions={{ grayscale: true, cropFocus: "east" }}
            style={{ marginBottom: 10, marginTop: 10 }}
          />
        )}
        <Box
          textAlign="center"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          height="100%"
        >
          <Typography variant="h5" gutterBottom>
            Coming soon...
          </Typography>
          <Typography>
            I will post here about my adventures in modern web development! Come
            back soon.
          </Typography>
        </Box>
      </PageWrapper>
    </>
  )
}

const stp = (s) => ({
  isMobile: s.isMobile,
})
export default connect(stp)(Blog)

export const Head = () => <HeadComponent title="Blog" url="/blog" />
