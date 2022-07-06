import {
  Facebook,
  Home,
  Information,
  Instagram,
  Phone,
  Post,
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
      label: "About",
      url: "/about",
      Icon: Information,
    },
    {
      label: "Blog",
      url: "/blog",
      Icon: Post,
    },
    {
      label: "Contact",
      url: "/contact",
      Icon: Phone,
    },
  ],
  external: [
    {
      label: "Facebook",
      url: "https://facebook.com/daveandrewsdev",
      Icon: Facebook,
    },
    {
      label: "Twitter",
      url: "https://twitter.com/daveandrewsdev",
      Icon: Twitter,
    },
    {
      label: "Instagram",
      url: "https://instagram.com/daveandrewsdev",
      Icon: Instagram,
    },
  ],
}
