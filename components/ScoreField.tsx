import State from "@/lib/State";
import Stave from "@/components/Stave";


const DIMENSION_WIDTH_STRING = ""
const DIMENSION_HEIGHT_STRING = ""

export default function ScoreField({state, setState}: { state: State, setState: any }) {
    return (
        <div className={"min-w-full min-h-full grow bg-blue-500 flex flex-col"}>
            <Stave state={state} setState={setState}/>
        </div>
    );
}