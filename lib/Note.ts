export type NatKey = "C"|"D"|"E"|"F"|"G"|"A"|"B"
export type SharpKey = "C#"|"D#"|"F#"|"G#"|"A#"
export type FlatKey = "Db"|"Eb"|"Gb"|"Ab"|"Bb"

export type Octave = 0|1|2|3|4|5|6|7|8

export type Key = NatKey | SharpKey | FlatKey;

// We may also need accidental naturals in the future. TBD
export interface NoteType {
    beats : number,
    name : NoteName,
}

//i might kill myself for doing this implementation later
export type NoteName = "qNote" | "hNote" | "wNote" | "eighthNote" | "sixteenthNote" | "thirtytwoNote" | "sixfourNote" | "onetwoeightNote"


export class Note {
    key: Key
    beats: number
    octave: Octave

    startingBeat: number
    endingBeat: number

    constructor(key: Key, octave: Octave, beats: number, startingBeat: number) {
        this.key = key;
        this.beats = beats;
        this.octave = octave;
        this.startingBeat = startingBeat;
        this.endingBeat = this.startingBeat + this.beats
    }
}

export class QuarterNote implements NoteType {
    name: NoteName = "qNote"
    beats: number = 1;
}

export class HalfNote implements NoteType {
    name: NoteName = "hNote"
    beats: number = 2;
}

export class WholeNote implements NoteType {
    name: NoteName = "wNote"
    beats: number = 4;
}

export class EighthNote implements NoteType {
    name: NoteName = "eighthNote"
    beats: number = 1/8;
}

export class SixteenthNote implements NoteType {
    name: NoteName = "sixteenthNote"
    beats: number = 1/16;
}

export class ThirtySecondNote implements NoteType {
    name: NoteName = "thirtytwoNote"
    beats: number = 1/32;
}

export class SixtyFourthNote implements NoteType {
    name: NoteName = "sixfourNote"
    beats: number = 1/64;
}

export class OneHundredTwentyEighthNote implements NoteType {
    name: NoteName = "onetwoeightNote"
    beats: number = 1/128;
}
