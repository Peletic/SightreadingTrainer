export type NatKey = "C"|"D"|"E"|"F"|"G"|"A"|"B"
export type SharpKey = "C#"|"D#"|"F#"|"G#"|"A#"
export type FlatKey = "Db"|"Eb"|"Gb"|"Ab"|"Bb"

export type Octave = 0|1|2|3|4|5|6|7|8

export type Key = NatKey | SharpKey | FlatKey;

// We may also need accidental naturals in the future. TBD

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
