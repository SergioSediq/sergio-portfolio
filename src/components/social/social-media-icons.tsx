"use client";

import { useInView } from "framer-motion";
import React, { useRef } from "react";
import { Button } from "../ui/button";
import { SiGithub, SiInstagram, SiLinkedin, SiX } from "react-icons/si";
import { config } from "@/data/config";
import Link from "next/link";

const BUTTONS = [
  {
    name: "Github",
    href: config.social.github,
    icon: <SiGithub size={"24"} className="text-gray-900 dark:text-gray-100" />,
    noLink: false,
  },
  {
    name: "LinkedIn",
    href: config.social.linkedin,
    icon: <SiLinkedin size={"24"} className="text-gray-900 dark:text-gray-100" />,
    noLink: false,
  },
  {
    name: "Twitter",
    href: "",
    icon: <SiX size={"24"} className="text-gray-900 dark:text-gray-100" />,
    noLink: true,
  },
  {
    name: "Instagram",
    href: "",
    icon: <SiInstagram size={"24"} className="text-gray-900 dark:text-gray-100" />,
    noLink: true,
  },
];

const SocialMediaButtons = () => {
  const ref = useRef<HTMLDivElement>(null);
  const show = useInView(ref, { once: true });
  return (
    <div ref={ref} className="z-10">
      {show &&
        BUTTONS.map((button) =>
          button.noLink ? (
            <Button key={button.name} variant={"ghost"} className="cursor-default opacity-70">
              {button.icon}
            </Button>
          ) : (
            <Link href={button.href} key={button.name} target="_blank">
              <Button variant={"ghost"}>{button.icon}</Button>
            </Link>
          )
        )}
    </div>
  );
};

export default SocialMediaButtons;
