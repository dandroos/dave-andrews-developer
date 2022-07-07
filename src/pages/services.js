import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Link as MLink,
  Typography,
} from "@mui/material"
import {
  Flash,
  LeadPencil,
  Palette,
  Resize,
  Responsive,
  SearchWeb,
  Server,
  Translate,
} from "mdi-material-ui"

import { Link } from "gatsby"
import PageWrapper from "../components/PageWrapper"
import React from "react"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

const Services = () => {
  const Service = ({ title, children, noDivider }) => (
    <Box py={2}>
      <Typography variant="h3" gutterBottom>
        {title}
      </Typography>
      {children}
      <Typography mt={3} variant="caption" display="block">
        <MLink component={Link} to="/contact">
          Contact me
        </MLink>{" "}
        for more information.
      </Typography>
      {!noDivider && <Divider sx={{ mt: 5 }} />}
    </Box>
  )

  const Feature = ({ primary, secondary, Icon }) => (
    <ListItem>
      <ListItemIcon>
        <Icon />
      </ListItemIcon>
      <ListItemText primary={primary} secondary={secondary} />
    </ListItem>
  )
  return (
    <>
      <Seo title="Services" url="/services" />
      <PageWrapper title="Services">
        <StaticImage
          src="../images/dave2.jpg"
          alt="Dave at a computer"
          transformOptions={{ grayscale: true }}
          placeholder="blurred"
        />
        <Typography variant="lead" gutterBottom>
          How can I help you?...
        </Typography>
        <Service title="Websites">
          <Typography paragraph>
            I have been creating websites since my teens. Although the
            technology has changed and improved substantially over the years,
            the challenge of balancing aesthetic and function remains the same.
            It's a challenge that I enjoy very much!
          </Typography>
          <Typography paragraph>
            As I am primarily a web developer, I am proficient with{" "}
            <strong>HTML5</strong>, <strong>CSS3</strong> and{" "}
            <strong>JavaScript</strong> (the holy trinity for web development!).
            I am also an expert in <strong>React</strong>,{" "}
            <strong>Gatsby</strong> and <strong>Next</strong> which are the main
            frameworks/solutions I normally use to create websites and
            applications.
          </Typography>
          <Typography>My websites include...</Typography>
          <List>
            <ListSubheader>Standard features</ListSubheader>
            <Feature
              primary="Responsive design"
              secondary="From mobile phones to widescreen TVs, my websites look great on all devices!"
              Icon={Responsive}
            />
            <Feature
              primary="Optimised assets"
              secondary="Intelligently optimised images and data to ensure fast load times."
              Icon={Flash}
            />
            <Feature
              primary="Scalable"
              secondary="I use scalable technologies so that your website can grow in sync with your business."
              Icon={Resize}
            />
            <Feature
              primary="SEO (Search Engine Optimisation) ready"
              secondary="Well-organised code and relevant 'tags' included to improve your search engine rank."
              Icon={SearchWeb}
            />
            <ListSubheader>Optional features</ListSubheader>
            <Feature
              primary="CMS (Content Management System)"
              secondary="Flexible solutions for you to update your own content."
              Icon={LeadPencil}
            />
            <Feature
              primary="Hosting advice/solutions"
              secondary="Help on how best to serve up your site."
              Icon={Server}
            />
            <Feature
              primary="Styling advice"
              secondary="I can offer advice on styling to provide your visitors with a great user experience."
              Icon={Palette}
            />
            <Feature
              primary="Multilingual content"
              secondary="I offer the best implementation of multilingual websites and can provide the translations via specialist translators if required."
              Icon={Translate}
            />
          </List>
        </Service>
        <Service title="Business Solutions">
          <Typography>
            I also create bespoke client records systems and invoicing solutions
            among other applications for businesses. Time is such a precious
            commodity and the amount that can be saved by implementing reliable
            automation and smart solutions is very valuable. I have experience
            with numerous technologies and programming languages to achieve
            this.
          </Typography>
        </Service>
        <Service title="Anything else?" noDivider>
          <Typography>
            I can also create mobile applications, standalone apps and I am
            studying game development in my spare time! (I always enjoy learning
            new skills!) Oh, and I can also make a good cup of tea!
          </Typography>
        </Service>
      </PageWrapper>
    </>
  )
}

export default Services
