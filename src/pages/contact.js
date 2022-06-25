import {
  Box,
  Button,
  Grid,
  Icon,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material"
import { Phone, Send, Whatsapp } from "mdi-material-ui"
import React, { useState } from "react"

import PageWrapper from "../components/PageWrapper"

const Contact = () => {
  const [fields, setFields] = useState({
    name: "",
    email: "",
    tel: "",
    message: "",
  })

  const handleChange = (e) => {
    setFields({
      ...fields,
      [e.currentTarget.name]: e.currentTarget.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const encode = (data) => {
      return Object.keys(data)
        .map(
          (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&")
    }

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        ...fields,
      }),
    })
      .then(() => {
        // dispatch(
        //   setToast({
        //     open: true,
        //     msg: "Thanks! I'll get back to you as soon as possible.",
        //     severity: "success",
        //   })
        // )
        setFields({
          name: "",
          email: "",
          tel: "",
          message: "",
        })
      })
      .catch(() => {
        // dispatch(
        //   setToast({
        //     open: true,
        //     msg: "Hmmm... Something went wrong. Please try again in a few moments.",
        //     severity: "error",
        //   })
        // )
      })
  }
  return (
    <PageWrapper title="Contact">
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography>
              You can send me a message by completing and submitting the below
              form...
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              label="Name"
              value={fields.name}
              onChange={handleChange}
              name="name"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              label="Email"
              type="email"
              value={fields.email}
              onChange={handleChange}
              name="email"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              label="Phone"
              type="tel"
              value={fields.tel}
              onChange={handleChange}
              name="tel"
              required={false}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Message"
              multiline
              value={fields.message}
              onChange={handleChange}
              name="message"
              rows={6}
            />
          </Grid>
          <Grid item xs={12}>
            <Button fullWidth startIcon={<Send />} size="large" type="submit">
              Send
            </Button>
          </Grid>
        </Grid>
      </form>
      <Box mt={3}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            You can also contact me in the following ways...
          </Grid>
          <Grid item xs={12} md={6}>
            <Button
              fullWidth
              variant="outlined"
              sx={{ flexDirection: "column" }}
              href="tel:123456789"
              target="_blank"
            >
              <Icon sx={{ height: "1.8rem" }}>
                <Phone />
              </Icon>
              <ListItemText
                primary="Phone"
                secondary="123 456 789"
                sx={{ textAlign: "center" }}
              />
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Button
              fullWidth
              variant="outlined"
              sx={{ flexDirection: "column" }}
              href="https://wa.me/123456789"
              target="_blank"
            >
              <Icon sx={{ height: "1.8rem" }}>
                <Whatsapp />
              </Icon>
              <ListItemText
                primary="WhatsApp"
                secondary="123 456 789"
                sx={{ textAlign: "center" }}
              />
            </Button>
          </Grid>
        </Grid>
      </Box>
    </PageWrapper>
  )
}

export default Contact
