import {
  AppBar,
  Box,
  Button,
  IconButton,
  Link as MLink,
  Toolbar,
  Typography,
} from "@mui/material"
import { Link, graphql, useStaticQuery } from "gatsby"

import { Menu } from "mdi-material-ui"
import MobileMenu from "./MobileMenu"
import React from "react"
import { connect } from "react-redux"
import { nav } from "../siteLinks"
import { setShowMobileMenu } from "../redux/actions"

const Navigation = ({ dispatch, isMobile }) => {
  const { title } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `).site.siteMetadata

  return (
    <>
      {isMobile && <MobileMenu />}
      <AppBar variant="outlined">
        <Toolbar sx={{ my: isMobile ? 0.5 : 1, mx: isMobile ? undefined : 10 }}>
          <MLink
            component={Link}
            to="/"
            color="inherit"
            underline="none"
            variant="h6"
            variantMapping={{ h6: "h1" }}
          >
            {title}
          </MLink>

          <Box flexGrow={1} />
          {!isMobile ? (
            <>
              {nav.internal.map((i, ind) => (
                <Button
                  component={Link}
                  to={i.url}
                  color="inherit"
                  sx={{ ml: ind !== 0 ? 4 : 0 }}
                >
                  {i.label}
                </Button>
              ))}
            </>
          ) : (
            <IconButton
              color="inherit"
              edge="end"
              onClick={() => dispatch(setShowMobileMenu(true))}
            >
              <Menu />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
    </>
  )
}

const stp = (s) => ({
  isMobile: s.isMobile,
})

export default connect(stp)(Navigation)
