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
} from "@mui/material"
import { Link, graphql, useStaticQuery } from "gatsby"

import { Close } from "mdi-material-ui"
import React from "react"
import { connect } from "react-redux"
import { nav } from "../siteLinks"
import { setShowMobileMenu } from "../redux/actions"

const MobileMenu = ({ dispatch, isOpen }) => {
  const { title } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `).site.siteMetadata

  const handleClose = () => {
    dispatch(setShowMobileMenu(false))
  }

  return (
    <Portal>
      <Dialog fullScreen open={isOpen}>
        <Fab
          color="secondary"
          onClick={handleClose}
          sx={{ position: "absolute", top: 15, right: 15 }}
        >
          <Close />
        </Fab>
        <Box
          display="flex"
          flexDirection="column"
          minHeight="100vh"
          justifyContent="center"
          pb={6}
        >
          <Container>
            <MLink
              variant="h4"
              variantMapping={{ h4: "p" }}
              component={Link}
              to="/"
              underline="none"
            >
              {title}
            </MLink>
          </Container>
          <List>
            {nav.internal.map((i, ind) => (
              <>
                {ind === 0 && <Divider />}
                <ListItem
                  button
                  divider
                  component={Link}
                  to={i.url}
                  onClick={handleClose}
                >
                  <ListItemText
                    primaryTypographyProps={{ variant: "button" }}
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
