import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  rgbToHex,
  useMediaQuery,
  useTheme,
} from "@mui/material"
import { Information, Phone, Wrench } from "mdi-material-ui"
import { Link, graphql, useStaticQuery } from "gatsby"

import BackgroundImage from "gatsby-background-image"
import HeadComponent from "../components/Head"
import React from "react"
import { connect } from "react-redux"
import { convertToBgImage } from "gbimage-bridge"
import { getImage } from "gatsby-plugin-image"
import { motion } from "framer-motion"

const Index = ({ isMobile, isTablet }) => {
  const query = useStaticQuery(graphql`
    {
      imgDesk: file(
        sourceInstanceName: { eq: "images" }
        name: { eq: "dave6" }
      ) {
        childImageSharp {
          gatsbyImageData(
            quality: 95
            placeholder: BLURRED
            aspectRatio: 1.777
            transformOptions: { grayscale: true, cropFocus: CENTER }
          )
        }
      }
      imgMob: file(
        sourceInstanceName: { eq: "images" }
        name: { eq: "dave1" }
      ) {
        childImageSharp {
          gatsbyImageData(
            quality: 95
            placeholder: BLURRED
            transformOptions: { grayscale: true, cropFocus: NORTH }
          )
        }
      }
    }
  `)
  const theme = useTheme()

  const img = convertToBgImage(
    getImage(
      useMediaQuery(theme.breakpoints.up("sm")) ? query.imgDesk : query.imgMob
    )
  )
  return (
    <>
      <Box
        height={
          !isMobile
            ? "100vh"
            : typeof window !== "undefined"
            ? window.innerHeight * 0.01 * 100
            : null
        }
        width="100%"
        component={BackgroundImage}
        {...img}
        display="flex"
        alignItems="center"
        justifyContent="center"
        color="common.white"
      >
        <Box
          position="absolute"
          component={motion.div}
          initial={{ opacity: 0, translateX: "-200%" }}
          animate={{ opacity: 1, translateX: isMobile ? "-50%" : "0%" }}
          transition={{ delay: 0.75, duration: 1 }}
          bottom={isMobile ? 10 : isTablet ? 30 : 50}
          left={isMobile ? "50%" : isTablet ? 65 : 105}
          py={2.5}
          width={isMobile ? "90%" : "30%"}
          minWidth={351}
          boxShadow={5}
          sx={{
            background: `${rgbToHex(theme.palette.primary.dark)}aa`,
            transform: isMobile ? "translateX(-50%)" : undefined,
          }}
        >
          <Container>
            <Typography variant="h3">Hi! I'm Dave!</Typography>
            <Typography gutterBottom>
              I make websites and other software applications. Thanks for
              dropping by! Make yourself at home, have a look around and let me
              know if I can be of any assistance!
            </Typography>
            <Grid container spacing={1}>
              <Grid item xs={6} md={6}>
                <Button
                  endIcon={<Wrench />}
                  fullWidth
                  component={Link}
                  to="/services"
                >
                  My Services
                </Button>
              </Grid>
              <Grid item xs={6} md={6}>
                <Button
                  endIcon={<Information />}
                  fullWidth
                  component={Link}
                  to="/about"
                >
                  About me
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button
                  endIcon={<Phone />}
                  fullWidth
                  component={Link}
                  to="/contact"
                >
                  Contact me
                </Button>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  )
}

const stp = (s) => ({
  isMobile: s.isMobile,
  isTablet: s.isTablet,
  windowHeight: s.windowHeight,
})

export default connect(stp)(Index)

export const Head = () => <HeadComponent />
