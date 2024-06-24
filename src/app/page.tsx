"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";

import { RxPlay, RxPause } from "react-icons/rx";

import erdlochIllustration from "../../public/erdloch-illustration.jpg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Gourmet Erdloch Infos direkt vom Hang
        </p>
        <p className="">Anerkannte Konsumform seit 1867!</p>

          <MusicPlayer />
      </div>

      <div className="animate-spinning">
        <Image
          src={erdlochIllustration}
          alt="Erdloch Illustration"
          width={erdlochIllustration.width / 2}
          height={erdlochIllustration.height / 2}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left"></div>
    </main>
  );
}

function MusicPlayer() {
  const [playing, setPlaying] = useState(false);

  const buttonRef = useRef<HTMLButtonElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  const playSound = () => {
    if (audioRef.current) {
      if (playing) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }

      setPlaying((prev) => !prev);
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.1;
    }
  }, []);

  return (
    <div className="fixed bottom-4 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
      <Button
        ref={buttonRef}
        onClick={playSound}
        className="flex flex-row gap-2"
      >
        {playing ? (
          <>
            <RxPause />
            Pause Erdloch Ambiente
          </>
        ) : (
          <>
            <RxPlay />
            Play Erdloch Ambiente
          </>
        )}
      </Button>
      <audio ref={audioRef} src="/lord-of-the-weed-ambiance.mp3" loop></audio>
    </div>
  );
}
