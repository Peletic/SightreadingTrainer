import Clef from "@/components/clefs/Clef";

// We could either use actual bar line svgs to add our vertical lines or we could use css borders
// I will be using the latter for ease of use

export default function Measure({}) {
    return (<div className={"bg-purple-400/80 h-full w-full relative flex flex-row justify-start " +
        "border-l-2 border-border-col"}>

        <Clef clef={"treble"}/>

    </div>)
}