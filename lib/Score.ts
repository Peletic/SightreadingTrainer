import Stave from "@/lib/Stave";
import Rest from "@/lib/Rest";
import {Note} from "@/lib/Note";

export default class Score {
    staves : Stave[]

    constructor() {
        this.staves = []
    }

    getCurrentNotes(tick: number) {
        const notes : Note[] = []
        for (const stave of this.staves) {
            // We assume we're going to be working in only quarter notes ATM.
            notes.push(... stave.getCurrentNotes(tick, 1))
        }

        if (notes.length > 0) {
            return notes;
        } else {
            // todo: cleanup logic. we should always have at least 1 stave and staves themselves should dictate rests vs nonrests
            return Rest
        }
    }
}