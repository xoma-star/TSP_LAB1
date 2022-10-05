import {results, corCoefs, UTransposed, mathExpects, standardDeviations} from './1.js'

//формула 7.14
//TODO: в методичке 0.93, здесб 0,99
const a_2 = corCoefs[0] / (UTransposed[1].map(x => x * x).reduce((a, b) => a + b) / UTransposed[1].length)

const table = results.map(x => x.slice(0, 2)).map(
    x => {
        const y = results[0][0] - a_2 * mathExpects[1] * standardDeviations[0] / standardDeviations[1] + a_2 * x[1] * standardDeviations[0] / standardDeviations[1]
        return [...x, y, x[0] - y]
    }
)

export default table
