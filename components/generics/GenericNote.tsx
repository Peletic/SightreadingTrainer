import {Note} from "@/lib/Note";
import {musicCharacterMap} from "@/app/resources/asciiMusicCharacterMap";

// combining stem = &#119141;
// qnote = &#119135;

const baseOffset = 3;
const intervalOffset = -8;

const upStemLOffset = -8;
const upStemTOffset = 16.5;

const stemYScalar = 1.6

const offsetMap = {
    0: {
        "C": 0 * intervalOffset + baseOffset,
        "D": 1 * intervalOffset + baseOffset,
        "E": 2 * intervalOffset + baseOffset,
        "F": 3 * intervalOffset + baseOffset,
        "G": 4 * intervalOffset + baseOffset,
        "A": 5 * intervalOffset + baseOffset,
        "B": 6 * intervalOffset + baseOffset
    },
    1: {}
}

export default function GenericNote({note}: { note: Note }) {
    // we will use a negative top margin dict to accomplish our desired mapped offset
    // assume qnote e4 for testing

    return (<div className={`text-black text-[76px] h-full mx-auto`}
                 style={{marginTop: `${offsetMap["0"][note.key]}px`}}>
        {musicCharacterMap.nsQNote.charPlain}
        <span className={"absolute"}
              style={{
                  marginTop: `${upStemTOffset * (2-stemYScalar)}px`,
                  marginLeft: `${upStemLOffset}px`,
                  fontSize: "55px",
                  transform: `scale(1,${stemYScalar})`
              }}>{musicCharacterMap.stem.charPlain}</span>
    </div>)
}