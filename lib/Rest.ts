export default class Rest {
    startingBeat: number
    endingBeat: number

    constructor(startingBeat: number, duration: number) {
        this.startingBeat = startingBeat;
        this.endingBeat = startingBeat + duration;
    }
}