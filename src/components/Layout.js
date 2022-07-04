import { AnimatePresence, motion } from "framer-motion"
import { Box, Toolbar, useMediaQuery, useTheme } from "@mui/material"
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
    //eslint-disable-next-line
  }, [])

  const [homeNav, setHomeNav] = useState(null)
  const [homeLoading, setHomeLoading] = useState(true)
  const [homeLoaded, setHomeLoaded] = useState(false)

  return (
    <>
      <Navigation
        home={homeNav}
        homeLoaded={homeLoaded}
        homeLoading={homeLoading}
      />
      <Box
        display="flex"
        flexDirection="column"
        minHeight="100vh"
        justifyContent="space-between"
        overflow="hidden"
      >
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, translateX: -1000 }}
            animate={{ opacity: 1, translateX: 0 }}
            exit={{ opacity: 0, translateX: 1000 }}
            onAnimationStart={(e) => {
              setHomeNav(false)
              setHomeLoaded(false)
              if (location.pathname === "/" && e.opacity !== 0) {
                setHomeLoading(true)
              } else {
                setHomeLoading(false)
              }
            }}
            onAnimationComplete={(e) => {
              if (location.pathname === "/" && e.opacity === 1) {
                setHomeNav(true)
                setHomeLoaded(true)
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
            <Box
              component="main"
              py={location.pathname !== "/" ? 2 : 0}
              pb={location.pathname !== "/" ? 4 : 0}
            >
              {children}
            </Box>
          </motion.div>
          {location.pathname !== "/" && <Footer />}
        </AnimatePresence>
      </Box>
    </>
  )
}

export default connect()(Layout)
