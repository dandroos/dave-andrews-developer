import "react-responsive-carousel/lib/styles/carousel.min.css"

import { Box, Grid, Typography } from "@mui/material"

import { Carousel } from "react-responsive-carousel"
import PageWrapper from "../components/PageWrapper"
import React from "react"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import moment from "moment"

const About = () => {
  return (
    <>
      <Seo title="About me" url="/about" />
      <PageWrapper title="About me">
        <Grid container spacing={2}>
          <Grid item xs={12} md={7}>
            <Typography paragraph>
              I'm a{" "}
              {(() => {
                const i = moment(new Date(1982, 5, 27))
                return moment(new Date()).diff(i, "years")
              })()}
              -year-old Englishman now living in Fuerteventura. I've loved
              'messing around' with computers for as long as I can remember! I
              started creating websites as a teenager for local bands when the
              internet was in its relative infancy. Over the years since, I have
              learnt how to code using <strong>HTML5</strong>,{" "}
              <strong>CSS3</strong>,{` `}
              <strong>JavaScript</strong>, <strong>Java</strong>,{" "}
              <strong>PHP</strong>, <strong>Node</strong>,{" "}
              <strong>Python</strong> and <strong>C#</strong>. I love the almost
              infinite opportunities to learn that web/app development opens up
              to me. I'm taking my first steps into game development right now
              and I'm enjoying the challenge!
            </Typography>
            <Typography>
              When I'm not working, I enjoy gaming (Xbox baby!), photography,
              and cycling. As an amateur musician, I also love to play the piano
              and drums and I occasionally make chiptune (8 bit) versions of
              music by Bach and Vivaldi.
            </Typography>
          </Grid>
          <Grid item xs={12} md={5}>
            <Carousel
              autoPlay
              infiniteLoop
              interval={5000}
              showStatus={false}
              showIndicators={false}
              showArrows={false}
              showThumbs={false}
            >
              <Box>
                <StaticImage
                  src="../images/dave3.jpg"
                  alt="Dave Andrews"
                  aspectRatio={1}
                  transformOptions={{ grayscale: true }}
                  placeholder="blurred"
                />
                <Typography variant="caption">
                  Me with Linda the rescued podenco!
                </Typography>
              </Box>
              <Box>
                <StaticImage
                  src="../images/dave4.jpg"
                  alt="Dave Andrews"
                  aspectRatio={1}
                  transformOptions={{ grayscale: true }}
                  placeholder="blurred"
                />
                <Typography variant="caption">
                  Me with Robert the rescue dog!
                </Typography>
              </Box>
              <Box>
                <StaticImage
                  src="../images/dave5.jpg"
                  alt="Dave Andrews"
                  aspectRatio={1}
                  transformOptions={{ grayscale: true }}
                  placeholder="blurred"
                />
                <Typography variant="caption">Bespectacled me!</Typography>
              </Box>
              <Box>
                <StaticImage
                  src="../images/dave1.jpg"
                  alt="Dave Andrews"
                  aspectRatio={1}
                  transformOptions={{ grayscale: true }}
                  placeholder="blurred"
                />
                <Typography variant="caption">Unbespectacled me!</Typography>
              </Box>
            </Carousel>
          </Grid>
        </Grid>
      </PageWrapper>
    </>
  )
}
export default About
