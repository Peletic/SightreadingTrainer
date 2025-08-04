"use client"
import Image from "next/image";
import ScoreField from "@/components/ScoreField";
import {useState} from "react";
import State from "@/lib/State";

export default function Home() {
    const [state, setState] = useState<State>(new State())
  return (
    <div className="font-sans min-h-screen sm:p-20">
      <main className="min-w-full min-h-[85vh] bg-red-400 flex flex-col">
          <ScoreField state={state} setState={setState}></ScoreField>
      </main>
    </div>
  );
}
