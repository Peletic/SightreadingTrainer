import Alto from "@/components/clefs/Alto";
import Bass from "@/components/clefs/Bass";
import Treble from "@/components/clefs/Treble";


export default function Clef({clef}: { clef: string }) {
    clef = clef.toLowerCase()
    return (
        <>
            {
                clef == "alto" ?
                    <Alto/> :
                    clef == "bass" ?
                        <Bass/> :
                        <Treble/>
            }
        </>
    )
}