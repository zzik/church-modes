// chord pattern
const seventhChordPattern = [0, 2, 4, 6]
//  ALL NOTES IN TWO OCTAVES
const notePool = [
    "c", "c#", "d", "d#", "e", "f", "f#" , "g", "g#" , "a", "a#" , "h",
    "c", "c#", "d", "d#", "e", "f", "f#" , "g", "g#" , "a", "a#" , "h",
    "c", "c#", "d", "d#", "e", "f", "f#" , "g", "g#" , "a", "a#" , "h"
]
//  CHURCH MODES
const 
ionian =        [0, 2, 4, 5, 7, 9, 11]
dorian =        [0, 2, 3, 5, 7, 9, 10]
phrygian =      [0, 1, 3, 5, 7, 8, 10]
lydian =        [0, 2, 4, 6, 7, 9, 11]
mixolydian =    [0, 2, 4, 5, 7, 9, 10]
aeolian =       [0, 2, 3, 5, 7, 8, 10]
locrian =       [0, 1, 3, 5, 6, 8, 10]

function getIndex(rootNote) {
    return notePool.indexOf(rootNote);
}

function getNotes(mode) {
    var toReturn = [];
    for (let i = 0; i < mode.length; i++) {
        toReturn.push(
            notePool[
                mode[
                    i]])
    }
    for (let i = 0; i < mode.length; i++) {
        toReturn.push(
            notePool[
                mode[
                    i]])
    }
    return toReturn
}


function work(rootKey, churchMode) {
    // get index of rootKey
    var rootIndex = getIndex(rootKey)
    // declare and extract 17 note array
    var extractNotes = []
        for (let i = rootIndex; i < (rootIndex + 12); i++) {
            extractNotes.push(
                notePool[
                    i])
        }
    // filter out notes
    var filteredNotes = []
        for (let i = 0; i < churchMode.length; i++) {
            filteredNotes.push(
                extractNotes[
                    churchMode[
                        i]])            
        }
        for (let i = 0; i < churchMode.length; i++) {
            filteredNotes.push(
                extractNotes[
                    churchMode[
                        i]])            
        }

        var chords = []

            for(let a = 0; a < 7; a++) {
                for (let b = 0; b < seventhChordPattern.length; b++) {
                    chords.push(
                        filteredNotes[
                            seventhChordPattern[
                                b]])
                }


                filteredNotes.shift()

            }
        
        var thisIsIt = []

        // 7 different chords, couldnt do DRY
        thisIsIt.push(chords.slice(0, 4))
        thisIsIt.push(chords.slice(4, 8))
        thisIsIt.push(chords.slice(8, 12))
        thisIsIt.push(chords.slice(12, 16))
        thisIsIt.push(chords.slice(16, 20))
        thisIsIt.push(chords.slice(20, 24))
        thisIsIt.push(chords.slice(24, 28))

        return thisIsIt

}

var givenProgression = [1,6,4,5]
var rootKey = 'h'
var churchMode = locrian

var chordList = (work(rootKey, churchMode))

let indexedProgression = givenProgression.map(num => {
    return num - 1
})

let finalProduct = [];

for(let g = 0; g < givenProgression.length; g++){
    finalProduct.push(chordList[indexedProgression[g]])
}

console.table(finalProduct)

 //console.table(work(rootKey, churchMode))