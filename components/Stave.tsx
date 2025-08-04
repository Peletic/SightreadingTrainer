import {Treble} from "@/lib/clefs/Treble";
import * as Staff from "@/lib/Stave"
import Clef from "@/components/clefs/Clef";

export default function Stave() {

    // we need to use our global state variable and element index to dynamically render our notes.
    // for now, we will be using a test case

    const testCase = new Staff.default(Treble)

    return (<div className={"grow bg-green-400 w-[95%] min-h-[100%] relative grid mx-auto gap-6 grid-cols-1 row-auto justify-start"}>
        <div className={"bg-[url('/staff.svg')] bg-repeat-x bg-contain bg-center bg-origin-content " +
            "min-w-auto min-h-[20%] max-h-24 my-[48px] py-4 " +
            "grid grid-rows-1 grid-cols-4 gap-4 " +
            "justify-items-center content-center"}>
            <div className={"bg-pink-400/80 h-full w-full relative flex flex-row justify-start"}>
                <Clef clef={testCase.clef.name}/>

                {/*add time sig*/}
            </div>
            <Clef clef={testCase.clef.name}/>
            <div className={"bg-purple-400"}>

            </div>
        </div>

        <div className={"bg-[url('/staff.svg')] bg-repeat-x bg-contain bg-center bg-origin-content " +
            "min-w-auto min-h-[20%] max-h-24 my-[48px] py-4 " +
            "grid grid-rows-1 grid-cols-4 gap-4 " +
            "justify-items-center content-center"}>
            <div className={"bg-purple-400"}>

            </div>
        </div>
    </div>)
}