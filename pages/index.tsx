import Head from "next/head";
import Typewriter, { TypewriterClass } from "typewriter-effect";
import { motion } from "framer-motion";
import BlockTile from "../components/BlockTile";
import { AiOutlineUser } from "react-icons/ai";
import { FaGraduationCap } from "react-icons/fa";
import { MdTimeline } from "react-icons/md";
import { BsAward } from "react-icons/bs";

export default function Home() {
  return (
    <div className="bg-black h-screen w-screen text-white font-mono">
      <Head>
        <title>Aditya Jamuar | Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Aditya Jamuar is a full-stack developer who is crazy about doing random things and dreams of changing the world or atleast making a dent on it."
        />
        <meta name="keywords" content="Aditya Jamuar" />
      </Head>

      <main className="w-screen h-screen">
        <div className="flex items-center justify-center h-screen">
          <div className="flex flex-col">
            <motion.div
              animate={{ y: -150 }}
              transition={{ duration: 2, delay: 5 }}
              className="text-center"
            >
              <motion.h1
                className="text-3xl"
                animate={{ scale: 1.5, y: -20 }}
                transition={{ duration: 2, delay: 5 }}
              >
                <Typewriter
                  onInit={(typewriter: TypewriterClass) => {
                    typewriter.typeString("Aditya Jamuar").start();
                  }}
                  options={{
                    autoStart: true,
                    loop: false,
                    cursor: "",
                    delay: 150,
                  }}
                />
              </motion.h1>
              <h2 className="text-xl mt-1">
                <Typewriter
                  onInit={(typewriter: TypewriterClass) => {
                    typewriter
                      .pauseFor(2500)
                      .typeString("Software Developer")
                      .start();
                  }}
                  options={{
                    autoStart: true,
                    loop: false,
                    cursor: "",
                    delay: 100,
                  }}
                />
              </h2>
            </motion.div>
            <div className="w-screen flex justify-around mt-10">
              <BlockTile title={"About me"} icon={AiOutlineUser} />
              <BlockTile title={"Education"} icon={FaGraduationCap} />
              <BlockTile title={"Experience"} icon={MdTimeline} />
              <BlockTile title={"Achievements"} icon={BsAward} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
