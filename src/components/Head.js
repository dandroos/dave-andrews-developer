import React from "react"
import ogImage from "../images/dd-og.png"
import { typography } from "../../style"
import { useSiteMetadata } from "../hooks/useSiteMetadata"

const HeadComponent = ({ title, url }) => {
  const metadata = useSiteMetadata()
  const defaultTitle = `${metadata.title} (${metadata.jobTitle}) `

  const metaTitle = title ? `${title} | ${defaultTitle}` : defaultTitle

  return (
    <>
      <title>{metaTitle}</title>
      <meta name="description" content={metadata.description} />
      <meta name="og:title" content={metaTitle} />
      <meta name="og:url" content={metadata.siteUrl + url} />
      <meta name="og:description" content={metadata.description} />
      <meta name="og:image" content={metadata.siteUrl + ogImage} />
      <meta name="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metadata.description} />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href={`https://fonts.googleapis.com/css2?family=${typography.fontFamily
          .split(" ")
          .join("+")}&display=swap`}
        rel="stylesheet"
      ></link>
    </>
  )
}

export default HeadComponent
