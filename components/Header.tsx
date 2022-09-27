import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        {/* Redes Sociais Icons */}
        <SocialIcon
          url="https://www.youtube.com/keedzKRL"
          fgColor="gray"
          bgColor="transparent"
        />

        <SocialIcon
          url="https://www.instagram.com/victoribeiroh/"
          fgColor="gray"
          bgColor="transparent"
        />

        <SocialIcon
          url="https://github.com/VictorRibeiroH"
          fgColor="gray"
          bgColor="transparent"
        />

        <SocialIcon
          url="https://www.linkedin.com/in/victor-ribeiroh/"
          fgColor="gray"
          bgColor="transparent"
        />

        <SocialIcon
          url="https://twitter.com/_victorHribeiro"
          fgColor="gray"
          bgColor="transparent"
        />

        <SocialIcon
          url="https://www.twitch.tv/victoribeiro_dev"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1 }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex textt-sm text-gray-400">
          Entrar Em Contato
        </p>
      </motion.div>
    </header>
  );
}
