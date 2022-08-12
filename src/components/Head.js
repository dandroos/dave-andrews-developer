import React from "react"
import ogImage from "../images/dd-og.png"
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
    </>
  )
}

export default HeadComponent
