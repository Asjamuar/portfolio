import Head from "next/head";
import { useEffect } from "react";
import Typewriter from "typewriter-effect/dist/core";

export default function Home() {
  useEffect(() => {
    new Typewriter("#intro", {
      strings: "Hi, I am Aditya Jamuar.",
      autoStart: true,
    });
  }, []);

  return (
    <div className="bg-black h-screen w-screen text-white font-mono">
      <Head>
        <title>Aditya Jamuar | Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="flex items-center justify-center h-screen">
          <div className="flex">
            <div id="intro" className="text-center"></div>
          </div>
        </div>
      </main>
    </div>
  );
}
