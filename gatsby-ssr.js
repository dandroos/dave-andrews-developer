import Layout from "./src/components/Layout"
import React from "react"
import { typography } from "./style"

export const wrapPageElement = ({ props, element }) => {
  return <Layout {...props}>{element}</Layout>
}

export const onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
  setHtmlAttributes({ lang: "en" })
  setHeadComponents([
    <link rel="preconnect" href="https://fonts.googleapis.com" />,
    <link
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossOrigin="true"
    />,
    <link
      href={`https://fonts.googleapis.com/css2?family=${typography.fontFamily
        .split(" ")
        .join("+")}&display=swap`}
      rel="stylesheet"
    ></link>,
  ])
}
