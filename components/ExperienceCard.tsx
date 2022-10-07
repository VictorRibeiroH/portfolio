import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
    w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden"
    >
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://scontent.fbfh4-1.fna.fbcdn.net/v/t39.30808-6/260223144_138777325174137_3366544782409311573_n.png?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=iqR7P_Om1nIAX9U5HXV&_nc_ht=scontent.fbfh4-1.fna&oh=00_AT9QK-faj80xx-kIDADvfN-sI-omVH5sU_h0sJt69GBRnQ&oe=6344EEDF"
        alt="Logo Dellaju Estética"
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Desenvolvedor front-end</h4>
        <p className="font-bold text-2xl mt-1">Dellaju Estética</p>
        <div className="flex space-x-2 my-2">
          <img
            className="h-10 w-10 rounded-full"
            src="https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png"
            alt="JavaScript"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png"
            alt="TypeScript"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png"
            alt="Node"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png"
            alt="React"
          />
          {/* Tech */}
          {/* Tech */}
        </div>
        <p className="uppercase py-5 text-gray-300">Jun 2021 - Jul 2022</p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Criação do aplicativo da clínica</li>
          <li>Atualização do sistema</li>
          <li>
            Uso diário de tecnologias como Node, NestJS, React, React Native,
            Redux, TypeScript e JavaScript;
          </li>
        </ul>
      </div>
    </article>
  );
}
