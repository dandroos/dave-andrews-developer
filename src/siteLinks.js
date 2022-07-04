import {
  Home,
  Information,
  Instagram,
  Phone,
  Twitter,
  Wrench,
} from "mdi-material-ui"

export const nav = {
  internal: [
    {
      label: "Home",
      url: "/",
      Icon: Home,
    },
    {
      label: "Services",
      url: "/services",
      Icon: Wrench,
    },
    {
      label: "About me",
      url: "/about",
      Icon: Information,
    },
    {
      label: "Contact",
      url: "/contact",
      Icon: Phone,
    },
  ],
  external: [
    {
      label: "Twitter",
      url: "https://twitter.com/daveandrewsdevs",
      Icon: Twitter,
    },
    {
      label: "Instagram",
      url: "https://instagram.com/daveandrewsdevs",
      Icon: Instagram,
    },
  ],
}
