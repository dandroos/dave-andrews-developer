import * as React from "react"

import HeadComponent from "../components/Head"
import PageWrapper from "../components/PageWrapper"
import { Typography } from "@mui/material"

const NotFoundPage = () => (
  <PageWrapper title="No page here!">
    <Typography>
      This isn't the page you're looking for! Try a different link.
    </Typography>
  </PageWrapper>
)

export default NotFoundPage

export const Head = () => <HeadComponent title="404" />
