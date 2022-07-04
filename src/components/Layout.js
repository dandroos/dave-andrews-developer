import { AnimatePresence, motion } from "framer-motion"
import { Box, Toolbar, useMediaQuery, useTheme } from "@mui/material"
import React, { useEffect, useState } from "react"
import { setAtTop, setIsMobile, setSiteReady } from "../redux/actions"

import FontFaceObserver from "fontfaceobserver"
import Footer from "./Footer"
import Navigation from "./Navigation"
import WindowHeightCalculator from "./WindowHeightCalculator"
import { connect } from "react-redux"
import style from "../../style"

const Layout = ({ dispatch, location, children, ready }) => {
  const isMobile = useMediaQuery(useTheme().breakpoints.down("md"))

  useEffect(() => {
    dispatch(setIsMobile(isMobile))
    //eslint-disable-next-line
  }, [isMobile])

  useEffect(() => {
    const loadFont = () => {
      const font = new FontFaceObserver(style.typography.fontFamily)
      font.load().then(() => {
        dispatch(setSiteReady(true))
      }, loadFont)
    }
    loadFont()
    document.addEventListener("scroll", () => {
      dispatch(setAtTop(window.scrollY === 0))
    })
    dispatch(setAtTop(window.scrollY === 0))
    //eslint-disable-next-line
  }, [])

  const [homeLoading, setHomeLoading] = useState(true)
  const [homeLoaded, setHomeLoaded] = useState(false)

  return ready ? (
    <>
      <Navigation homeLoaded={homeLoaded} homeLoading={homeLoading} />
      <Box
        display="flex"
        flexDirection="column"
        minHeight={isMobile ? WindowHeightCalculator() : "100vh"}
        // minHeight="100vh"
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
              setHomeLoaded(false)
              if (location.pathname === "/" && e.opacity !== 0) {
                setHomeLoading(true)
              } else {
                setHomeLoading(false)
              }
            }}
            onAnimationComplete={(e) => {
              if (location.pathname === "/" && e.opacity === 1) {
                setHomeLoaded(true)
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
  ) : null
}

const stp = (s) => ({
  ready: s.siteReady,
})

export default connect(stp)(Layout)
