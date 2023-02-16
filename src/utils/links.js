import React from "react";
import {
  FaYoutube,
  FaSoundcloud,
  FaBandcamp,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaSpotify
} from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";

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
           id: 4,
           path: "https://open.spotify.com/artist/5W4QkA1mEehyEUZpA9vmcW",
           icon: <FaSpotify className="icon" />,
         },
         {
           id: 5,
           path: "https://www.tiktok.com/@2bband",
           icon: <IoLogoTiktok className="icon" />,
         },
         {
           id: 6,
           path: "https://2bband.bandcamp.com/",
           icon: <FaBandcamp className="icon" />,
         },
         {
           id: 7,
           path: "https://soundcloud.com/glasbena-skupina-2b",
           icon: <FaSoundcloud className="icon" />,
         },
       ];
