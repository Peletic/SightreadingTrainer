import {Note} from "@/lib/Note";
import Clef from "@/lib/generics/Clef";

export default class Stave {
    // time sig should be global for the whole piece ATP. changing time sigs mid-song will be added later
    // timeSignature

    constructor(clef: Clef, notes: {[noteIdx: number] : Note[]} = {}) {
        this.clef = clef;
        this.notes = notes;
    }

    clef : Clef
    notes : {[noteIdx : number] : Note[]}= {

    }

    get(noteIdx: number) : Note[] {
        // Want to avoid throwing access errors if the key isnt present in our dit of notes
        const res: Note[] = []
        res.push(...this.notes[noteIdx])

        return res
    }

    getCurrentNotes(tick: number, scalar: number) {
        // TBD if we want to convert our blanks into rests here or earlier in the proc.
        return this.get(tick/scalar)
    }
}