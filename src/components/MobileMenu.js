import {
  Box,
  Container,
  Dialog,
  Divider,
  Fab,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Link as MLink,
  Portal,
  Slide,
  Typography,
  useTheme,
} from "@mui/material"
import { Link, graphql, useStaticQuery } from "gatsby"
import { StaticImage, getImage } from "gatsby-plugin-image"

import BackgroundImage from "gatsby-background-image"
import { Close } from "mdi-material-ui"
import React from "react"
import { connect } from "react-redux"
import { convertToBgImage } from "gbimage-bridge"
import { nav } from "../siteLinks"
import { setShowMobileMenu } from "../redux/actions"

const MobileMenu = ({ dispatch, isOpen, isTablet }) => {
  const data = useStaticQuery(graphql`
    {
      title: site {
        siteMetadata {
          title
          jobTitle
        }
      }
      img: file(sourceInstanceName: { eq: "images" }, name: { eq: "dave6" }) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            transformOptions: { grayscale: true }
          )
        }
      }
    }
  `)

  const title = data.title.siteMetadata.title
  const jobTitle = data.title.siteMetadata.jobTitle
  const img = getImage(data.img)

  const bgImg = convertToBgImage(img)

  const theme = useTheme()

  const handleClose = () => {
    dispatch(setShowMobileMenu(false))
  }
  return (
    <Portal>
      <Dialog fullScreen open={isOpen} TransitionComponent={Slide}>
        <Fab
          color="secondary"
          onClick={handleClose}
          sx={{ zIndex: 500, position: "absolute", top: 15, right: 15 }}
        >
          <Close />
        </Fab>
        <Box
          display="flex"
          flexDirection="column"
          minHeight={window.innerHeight * 0.01 * 100}
          justifyContent="space-between"
          // pb={6}
        >
          <Box
            display="flex"
            alignItems="flex-end"
            component={BackgroundImage}
            {...bgImg}
            flex={1}
          >
            <Box
              width="100%"
              color="common.white"
              sx={{
                pb: 2,
                pt: 5,
                background: `linear-gradient(to top, ${theme.palette.common.black}, transparent)`,
              }}
            >
              <Container>
                <Box display="flex">
                  <StaticImage
                    src="../images/logo.png"
                    alt="Dave Andrews logo"
                    width={50}
                    placeholder="blurred"
                    // width="100%"
                  />
                  <Box ml={1}>
                    <MLink
                      variant="h4"
                      variantMapping={{ h4: "p" }}
                      component={Link}
                      to="/"
                      underline="none"
                      color="inherit"
                      onClick={handleClose}
                    >
                      {title}
                      <Typography
                        variant="inherit"
                        color="secondary.light"
                        display="block"
                      >
                        {jobTitle}
                      </Typography>
                    </MLink>
                  </Box>
                </Box>
              </Container>
            </Box>
          </Box>
          <List disablePadding>
            <ListSubheader
              sx={{
                lineHeight: 2,
                backgroundColor: theme.palette.secondary.main,
                color: theme.palette.secondary.contrastText,
              }}
            >
              Site Navigation
            </ListSubheader>
            {nav.internal.map((i, ind) => (
              <React.Fragment key={ind}>
                {ind === 0 && <Divider />}
                <ListItem
                  button
                  divider
                  component={Link}
                  to={i.url}
                  onClick={handleClose}
                  activeStyle={{ fontWeight: "bold" }}
                >
                  <ListItemIcon>
                    <i.Icon />
                  </ListItemIcon>
                  <ListItemText
                    primaryTypographyProps={{
                      variant: "button",
                      fontWeight: "inherit",
                    }}
                    primary={i.label}
                  />
                </ListItem>
              </React.Fragment>
            ))}
            <ListSubheader
              sx={{
                lineHeight: 2,
                backgroundColor: theme.palette.secondary.main,
                color: theme.palette.secondary.contrastText,
              }}
            >
              Social
            </ListSubheader>
            {nav.external.map((i, ind) => (
              <ListItem
                button
                divider
                key={ind}
                component="a"
                href={i.url}
                target="_blank"
                onClick={handleClose}
              >
                <ListItemIcon>
                  <i.Icon />
                </ListItemIcon>
                <ListItemText
                  primary={i.label}
                  primaryTypographyProps={{ variant: "button" }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Dialog>
    </Portal>
  )
}

const stp = (s) => ({
  isOpen: s.showMobileMenu,
  isTablet: s.isTablet,
})

export default connect(stp)(MobileMenu)
