import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Sobre
      </h3>

      <motion.img
        initial={{
          x: -200,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src="https://pbs.twimg.com/profile_images/1551566062793228291/0aCCqeG2_400x400.jpg"
        alt="Foto Victor Ribeiro"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Um pouco{" "}
          <span className="underline decoration-[#F7AB0A]/50">sobre</span> mim:
        </h4>
        <p className="text-base">
          Opa, meu nome é Victor, tenho 21 anos e atuo como desenvolvedor front
          end. Minha principal stack de desenvolvimento é JavaScript com React
          JS na web e React native para mobile. Estou sempre em busca de me
          aprofundar e ficar ligado em todas as novidades que vão saindo sobre
          as linguagens que trabalho e as que tenho interesse
        </p>
      </div>
    </motion.div>
  );
}
