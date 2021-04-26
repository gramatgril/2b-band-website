import React from "react";
import {
  FaYoutube,
  FaSoundcloud,
  FaBandcamp,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaSpotify,
} from "react-icons/fa";

export const navLinks = [
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
    id: 5,
    path:
      "https://open.spotify.com/artist/1QuXKNeGI133xFeLeODbb8?si=oSFCyf0qTYOSlF7_iwWx-Q",
    icon: <FaSpotify className="icon" />,
  },
  {
    id: 4,
    path:
      "https://www.deezer.com/en/artist/1885041?app_id=140685&utm_source=lf&utm_content=dc1e0af90d54ab9fb7370309145bb436",
    icon: <i className="cib-deezer icon"></i>,
  },
  {
    id: 5,
    path: "https://2bband.bandcamp.com/",
    icon: <FaBandcamp className="icon" />,
  },
  {
    id: 6,
    path: "https://soundcloud.com/glasbena-skupina-2b",
    icon: <FaSoundcloud className="icon" />,
  },
];
