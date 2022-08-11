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
import { Link, graphql, useStaticQuery } from "gatsby"

import { Menu } from "mdi-material-ui"
import MobileMenu from "./MobileMenu"
import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { connect } from "react-redux"
import { nav } from "../siteLinks"
import { setShowMobileMenu } from "../redux/actions"

const Navigation = ({ dispatch, isMobile, isTablet, atTop, homeLoading }) => {
  const { title, jobTitle, shortJobTitle } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          jobTitle
          shortJobTitle
        }
      }
    }
  `).site.siteMetadata

  const lessThanLarge = useMediaQuery(useTheme().breakpoints.down("lg"))
  const theme = useTheme()
  return (
    <>
      <MobileMenu />
      <AppBar
        variant={atTop ? (homeLoading ? `outlined` : `elevation`) : `elevation`}
        elevation={atTop ? (homeLoading ? 0 : 5) : 5}
        color={atTop ? (homeLoading ? "transparent" : "secondary") : undefined}
        sx={{
          transition: "background .2s",
          background: homeLoading
            ? `linear-gradient(to top, transparent, ${theme.palette.common.black} )`
            : undefined,
          color: homeLoading ? theme.palette.common.white : undefined,
          border: atTop ? (homeLoading ? "none" : undefined) : undefined,
        }}
      >
        <Toolbar
          sx={{
            my: isMobile ? (atTop ? 0.5 : 0) : atTop ? 1 : 0.4,
            mx: isMobile ? undefined : isTablet ? 2.5 : 5,
            transition: "margin .25s",
          }}
        >
          <MLink
            component={Link}
            to="/"
            color="inherit"
            underline="none"
            variant="h6"
            variantMapping={{ h6: "h1" }}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <StaticImage
              src="../images/logo.png"
              alt="Dave Andrews Logo"
              height={30}
              quality={99}
              style={{ marginRight: 10 }}
              placeholder="none"
            />
            {title}
            <Typography
              display="inline"
              variant="inherit"
              color={homeLoading ? `primary.dark` : `common.black`}
              sx={{ mx: 1 }}
            >{` | `}</Typography>
            <Typography
              display="inline-block"
              color={
                homeLoading
                  ? "secondary.light"
                  : !atTop
                  ? "secondary.light"
                  : "text.secondary"
              }
              variant="inherit"
            >
              {lessThanLarge ? shortJobTitle : jobTitle}
            </Typography>
          </MLink>

          <Box flexGrow={1} />
          {!isMobile && !isTablet ? (
            <>
              {nav.internal.map((i, ind) => (
                <Button
                  key={ind}
                  variant="text"
                  component={Link}
                  to={i.url}
                  color="inherit"
                  sx={{
                    textAlign: "center",
                    mr: 4,
                  }}
                  activeStyle={{ fontWeight: "bold" }}
                >
                  {i.label}
                </Button>
              ))}
              {nav.external.map((i, ind) => {
                return (
                  <IconButton
                    key={ind}
                    size="small"
                    color="inherit"
                    edge={ind === nav.external.length - 1 ? "end" : undefined}
                    sx={{
                      ml: ind !== 0 ? 1.5 : undefined,
                    }}
                    href={i.url}
                    target="_blank"
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
  isTablet: s.isTablet,
  atTop: s.atTop,
})

export default connect(stp)(Navigation)
