import {results, dispersions, mathExpects, corCoefs, standardDeviations} from './1.js'

const table = results.map(x => {
  const a = mathExpects[0] - corCoefs[0]  * standardDeviations[0] / standardDeviations[1] * (mathExpects[1] - x[1])
  return [x[0], x[1], a, x[0] - a]
})

export default table