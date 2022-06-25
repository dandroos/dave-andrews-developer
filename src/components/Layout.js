import { AnimatePresence, motion } from "framer-motion"
import { Box, Container, Toolbar, useMediaQuery, useTheme } from "@mui/material"
import React, { useEffect } from "react"
import { setAtTop, setIsMobile } from "../redux/actions"

import Footer from "./Footer"
import Navigation from "./Navigation"
import { connect } from "react-redux"

const Layout = ({ dispatch, location, children }) => {
  const isMobile = useMediaQuery(useTheme().breakpoints.down("md"))

  useEffect(() => {
    dispatch(setIsMobile(isMobile))
    //eslint-disable-next-line
  }, [isMobile])

  useEffect(() => {
    document.addEventListener("scroll", () => {
      dispatch(setAtTop(window.scrollY === 0))
    })
    dispatch(setAtTop(window.scrollY === 0))
  }, [])

  return (
    <>
      <Navigation />
      <Box
        display="flex"
        flexDirection="column"
        minHeight="100vh"
        justifyContent="space-between"
        py={2}
        overflow="hidden"
      >
        <AnimatePresence exitBeforeEnter>
          <Box
            key={location.pathname}
            component={motion.div}
            initial={{ opacity: 0, scale: 1.4 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
          >
            <Toolbar
              sx={{ my: isMobile ? 0.5 : 1, mx: isMobile ? undefined : 10 }}
            />
            <Container>{children}</Container>
          </Box>
          <Footer />
        </AnimatePresence>
      </Box>
    </>
  )
}

export default connect()(Layout)
