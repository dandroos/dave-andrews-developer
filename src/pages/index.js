import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  rgbToHex,
  useTheme,
} from "@mui/material"
import { Information, Phone, Wrench } from "mdi-material-ui"
import { Link, graphql, useStaticQuery } from "gatsby"

import BackgroundImage from "gatsby-background-image"
import React from "react"
import Seo from "../components/seo"
import WindowHeightCalculator from "../components/WindowHeightCalculator"
import { connect } from "react-redux"
import { convertToBgImage } from "gbimage-bridge"
import { getImage } from "gatsby-plugin-image"
import { motion } from "framer-motion"

const Index = ({ isMobile, ready }) => {
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

  const img = convertToBgImage(
    getImage(isMobile ? query.imgMob : query.imgDesk)
  )
  const theme = useTheme()
  return (
    <>
      <Seo title="" />
      {ready && (
        <Box
          // height="100vh"
          height={isMobile ? WindowHeightCalculator() : "100vh"}
          width="100%"
          component={BackgroundImage}
          {...img}
          style={{ backgroundPosition: !isMobile ? undefined : `center 0` }}
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
            bottom={isMobile ? 10 : 50}
            left={isMobile ? "50%" : 50}
            py={2.5}
            width={isMobile ? "90%" : "30%"}
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
                dropping by! Make yourself at home, have a look around and let
                me know if I can be of any assistance!
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
      )}
    </>
  )
}

const stp = (s) => ({
  isMobile: s.isMobile,
  ready: s.siteReady,
})

export default connect(stp)(Index)
