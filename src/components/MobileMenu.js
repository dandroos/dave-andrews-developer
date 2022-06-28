import {
  Box,
  Container,
  Dialog,
  DialogContent,
  Divider,
  Fab,
  List,
  ListItem,
  ListItemText,
  Link as MLink,
  Portal,
  Slide,
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

const MobileMenu = ({ dispatch, isOpen }) => {
  const data = useStaticQuery(graphql`
    {
      title: site {
        siteMetadata {
          title
        }
      }
      img: file(sourceInstanceName: { eq: "images" }, name: { eq: "dave1" }) {
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
          minHeight="100vh"
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
                </MLink>
              </Container>
            </Box>
          </Box>
          <List disablePadding>
            {nav.internal.map((i, ind) => (
              <>
                {ind === 0 && <Divider />}
                <ListItem
                  key={ind}
                  button
                  divider
                  component={Link}
                  to={i.url}
                  onClick={handleClose}
                  activeStyle={{ fontWeight: "bold" }}
                >
                  <ListItemText
                    primaryTypographyProps={{
                      variant: "button",
                      fontWeight: "inherit",
                    }}
                    primary={i.label}
                  />
                </ListItem>
              </>
            ))}
          </List>
        </Box>
      </Dialog>
    </Portal>
  )
}

const stp = (s) => ({
  isOpen: s.showMobileMenu,
})

export default connect(stp)(MobileMenu)
