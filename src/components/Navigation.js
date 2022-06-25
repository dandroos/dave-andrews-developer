import {
  AppBar,
  Box,
  Button,
  IconButton,
  Link as MLink,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material"
import { Facebook, Menu } from "mdi-material-ui"
import { Link, graphql, useStaticQuery } from "gatsby"

import MobileMenu from "./MobileMenu"
import React from "react"
import { connect } from "react-redux"
import { nav } from "../siteLinks"
import { setShowMobileMenu } from "../redux/actions"

const Navigation = ({ dispatch, isMobile, atTop }) => {
  const { title } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `).site.siteMetadata

  const lessThanLarge = useMediaQuery(useTheme().breakpoints.down("lg"))

  return (
    <>
      {isMobile && <MobileMenu />}
      <AppBar
        variant="outlined"
        elevation={0}
        color={atTop ? "transparent" : undefined}
        sx={{ border: atTop ? "none" : undefined }}
      >
        <Toolbar
          sx={{
            my: isMobile ? 0.5 : atTop ? 1 : 0.4,
            mx: isMobile ? undefined : lessThanLarge ? undefined : 10,
          }}
        >
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
                  key={ind}
                  variant="text"
                  component={Link}
                  to={i.url}
                  color="inherit"
                  sx={{ mr: 4 }}
                  activeStyle={{ fontWeight: "bold" }}
                >
                  {i.label}
                </Button>
              ))}
              {nav.external.map((i, ind) => {
                return (
                  <IconButton
                    color="inherit"
                    edge={ind === nav.external.length - 1 ? "end" : undefined}
                    sx={{
                      ml: ind !== 0 ? 2 : undefined,
                    }}
                  >
                    <i.Icon />
                  </IconButton>
                )
              })}
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
  atTop: s.atTop,
})

export default connect(stp)(Navigation)
