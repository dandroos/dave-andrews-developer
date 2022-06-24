import { Box, Container, Toolbar, useMediaQuery, useTheme } from "@mui/material"
import React, { useEffect } from "react"

import Footer from "./Footer"
import Navigation from "./Navigation"
import { connect } from "react-redux"
import { setIsMobile } from "../redux/actions"

const Layout = ({ dispatch, location, children }) => {
  const isMobile = useMediaQuery(useTheme().breakpoints.down("md"))

  useEffect(() => {
    dispatch(setIsMobile(isMobile))
    //eslint-disable-next-line
  }, [isMobile])

  return (
    <>
      <Navigation />
      <Toolbar sx={{ my: isMobile ? 0.5 : 1, mx: isMobile ? undefined : 10 }} />
      <Container>
        {children}
        <Footer />
      </Container>
    </>
  )
}

export default connect()(Layout)
