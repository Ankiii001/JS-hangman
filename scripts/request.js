const getPuzzle = async wordCount => {
    const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    if( response.status === 200 ){
        const data = await response.json() 
        return data.puzzle
    } else {
        throw new Error('Unable to fetch the puzzle')
    }
}

// fetch way

// const getPuzzle = wordCount => {
//     return fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`).then( response => {
//     if( response.status === 200 ){
//         return response.json()
//     } else {
//         throw new Error('Unable to fetch the puzzle')
//     }
// }).then( data => data.puzzle )
// }
