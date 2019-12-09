import React from "react";
import {
  FaYoutube,
  FaSoundcloud,
  FaBandcamp,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

export const footerLinks = [
  {
    id: 0,
    path: "https://www.facebook.com/2bband.si",
    icon: <FaFacebookF className="icon" />,
  },
  {
    id: 1,
    path: "https://www.instagram.com/2bband.si/",
    icon: <FaInstagram className="icon" />,
  },
  {
    id: 2,
    path: "https://twitter.com/2bsi",
    icon: <FaTwitter className="icon" />,
  },
  {
    id: 3,
    path: "https://www.youtube.com/user/2bbandOfficial",
    icon: <FaYoutube className="icon" />,
  },
  {
    id: 4,
    path: "https://soundcloud.com/glasbena-skupina-2b",
    icon: <FaSoundcloud className="icon" />,
  },
  {
    id: 5,
    path: "https://2bband.bandcamp.com/releases",
    icon: <FaBandcamp className="icon" />,
  },
];
