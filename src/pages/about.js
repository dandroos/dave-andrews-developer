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
    <PageWrapper title="About me">
      <Seo title="About me" />
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
            <strong>PHP</strong>, <strong>Python</strong> and{" "}
            <strong>C#</strong>. I love the almost inifinite opportunities to
            learn that app development opens up to me. I'm taking my first
            tentative steps into game development right now and I'm enjoying the
            challenge!
          </Typography>
          <Typography>
            When I'm not working, I enjoy gaming (Xbox baby!), photography,
            cycling and volunteering at my local dog rescue association. As an
            amateur musician, I also love to play the piano and drums and I
            occasionally make chiptune (8 bit) versions of music by Bach and
            Vivaldi.
          </Typography>
          {/* <Typography variant="h4" gutterBottom>
            My Links
          </Typography>
          <Typography gutterBottom>
            You can find me on various platforms. Some I use more than others
            and if you go in with low expectations, I'm not a terrible 'follow'!
          </Typography>
          <Grid container spacing={0.35}>
            <ExtraLink
              title="Twitter"
              Icon={Twitter}
              url="https://twitter.com"
            />
            <ExtraLink
              title="Instagram"
              Icon={Instagram}
              url="https://instagram.com"
            />
            <ExtraLink
              title="Facebook"
              Icon={Facebook}
              url="https://facebook.com"
            />
            <ExtraLink title="Twitch" Icon={Twitch} url="https://twitch.com" />
            <ExtraLink
              title="YouTube"
              Icon={Youtube}
              url="https://youtube.com"
            />
            <ExtraLink title="GitHub" Icon={Github} url="https://github.com" /> */}
          {/* </Grid> */}
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
  )
}

export default About
