export type natKey = "C"|"D"|"E"|"F"|"G"|"A"|"B"
export type sharpKey = "C#"|"D#"|"F#"|"G#"|"A#"
export type flatKey = "Db"|"Eb"|"Gb"|"Ab"|"Bb"

export type octave = 0|1|2|3|4|5|6|7|8

export type key = natKey | sharpKey | flatKey;

// We may also need accidental naturals in the future. TBD

export class Note {
    key: key
    beats: number
    octave: octave

    startingBeat: number
    endingBeat: number

    constructor(key: key, octave: octave, beats: number, startingBeat: number) {
        this.key = key;
        this.beats = beats;
        this.octave = octave;
        this.startingBeat = startingBeat;
        this.endingBeat = this.startingBeat + this.beats
    }
}