import * as React from "react"

import PageWrapper from "../components/PageWrapper"
import Seo from "../components/seo"
import { Typography } from "@mui/material"

const NotFoundPage = () => (
  <PageWrapper title="No page here!">
    <Seo title="404: Not found" />
    <Typography>
      This isn't the page you're looking for! Try a different link.
    </Typography>
  </PageWrapper>
)

export default NotFoundPage
