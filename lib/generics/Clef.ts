export default interface Clef {
    // We aren't going to be introducing subclefs. Sorry all other parts!
    name: "Alto" | "Bass" | "Treble";

    // Bass, Alto, Treble respectively
    trebleDelta: -2 | -1 | 0;
}