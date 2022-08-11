import { CssBaseline, ThemeProvider } from "@mui/material"

import LoadingScreen from "../../src/components/LoadingScreen"
import React from "react"
import { theme } from "../../src/theme"

const SiteWrapper = ({ children }) => {
  return (
    <>
      <form
        name="contact"
        action="#"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <input type="hidden" name="name" />
        <input type="hidden" name="email" />
        <input type="hidden" name="tel" />
        <input type="hidden" name="message" />
      </form>
      {/* <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href={`https://fonts.googleapis.com/css2?family=${typography.fontFamily
            .split(" ")
            .join("+")}&display=swap`}
          rel="stylesheet"
        ></link>
      </Helmet> */}
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <LoadingScreen />
        {children}
      </ThemeProvider>
    </>
  )
}

export default SiteWrapper
