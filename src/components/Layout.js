import { AnimatePresence, motion } from "framer-motion"
import { Box, Container, Toolbar, useMediaQuery, useTheme } from "@mui/material"
import React, { useEffect, useState } from "react"
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

  const [homeNav, setHomeNav] = useState(null)

  return (
    <>
      <Navigation home={homeNav} />
      <Box
        display="flex"
        flexDirection="column"
        minHeight="100vh"
        justifyContent="space-between"
        overflow="hidden"
      >
        <AnimatePresence exitBeforeEnter>
          <Box
            key={location.pathname}
            component={motion.div}
            initial={{ opacity: 0, translateX: -1000 }}
            animate={{ opacity: 1, translateX: 0 }}
            exit={{ opacity: 0, translateX: 1000 }}
            onAnimationStart={() => {
              setHomeNav(false)
            }}
            onAnimationComplete={(e) => {
              if (location.pathname === "/" && e.opacity === 1) {
                setHomeNav(true)
              } else {
                setHomeNav(false)
              }
            }}
          >
            {location.pathname !== "/" && (
              <Toolbar
                sx={{ my: isMobile ? 0.5 : 1, mx: isMobile ? undefined : 10 }}
              />
            )}
            <Box component="main">{children}</Box>
          </Box>
          {location.pathname !== "/" && <Footer />}
        </AnimatePresence>
      </Box>
    </>
  )
}

export default connect()(Layout)
