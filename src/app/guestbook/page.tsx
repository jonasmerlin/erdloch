import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import { db } from "../../db";
import { guestbook } from "../../../drizzle/schema";

import { Button } from "@/components/ui/button";

import { PiShovelLight } from "react-icons/pi";

import dirtTexture from "../../../public/minecraft-dirt-texture.jpg";

export default async function Home() {
  console.time("select");
  const result = await db.select().from(guestbook).all();
  console.timeEnd("select");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Erdloch Gästebuch
        </p>

        <Button className="flex flex-row gap-2">
          <PiShovelLight />
          Erdloch ausheben
        </Button>
      </div>

      {result.map(({ id, name, message, timestamp }) => (
        <div
          key={id}
          className="bg-yellow-900 text-yellow-50 dark:bg-zinc-800/30 p-4 rounded-lg w-[960px]"
          style={{
            backgroundImage: `url(${dirtTexture.src})`,
            backgroundRepeat: "repeat",
            backgroundSize: "75px 75px",
          }}
        >
          <div className="bg-yellow-950 p-6 rounded-md bg-opacity-50">
            <p className="text-lg font-bold">{name}</p>
            <p>{message}</p>
          </div>
        </div>
      ))}

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left"></div>
    </main>
  );
}
