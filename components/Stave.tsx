import {Treble} from "@/lib/clefs/Treble";
import * as Staff from "@/lib/Stave"
import Clef from "@/components/clefs/Clef";
import Measure from "@/components/Measure";
import StaveLine from "@/components/StaveLine"

export default function Stave() {

    // we need to use our global state variable and element index to dynamically render our notes.
    // for now, we will be using a test case

    const testCase = new Staff.default(Treble)

    return (<div className={"grow bg-green-400 w-[95%] min-h-[100%] relative grid mx-auto gap-6 grid-cols-1 row-auto justify-start"}>
        <StaveLine>
            <div className={"bg-pink-400/80 h-full w-full relative flex flex-row justify-start"}>
                <Clef clef={testCase.clef.name}/>
            </div>
            <Measure/>
        </StaveLine>

        <StaveLine>
            <Measure/>
        </StaveLine>

    </div>)
}