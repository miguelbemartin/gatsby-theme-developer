import React from "react";
import {FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaTwitter} from "react-icons/fa";

const availableAuthorLinks = [
  {key: "twitter", icon: <FaTwitter/>},
  {key: "github", icon: <FaGithub/>},
  {key: "linkedin", icon: <FaLinkedin/>},
  {key: "instagram", icon: <FaInstagram/>},
  {key: "mail", icon: <FaEnvelope/>}
]

export default function useAvailableAuthorLinks() {
  return availableAuthorLinks;
}
