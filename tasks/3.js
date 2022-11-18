import transpose from "../common/transpose.js"
import normalize from "../common/normalize.js"
import correlation from "../common/correlation.js"
import mathExpect from "../common/mathExpect.js"
import dispersion from "../common/dispersion.js"

const AAPL = [150.17, 154.09, 162.51, 165.35, 172.10, 171.52, 163.62, 155.81, 157.37, 150.70, 150.43, 138.20, 140.09, 138.38, 147.27]
const MSFT = [256.72, 260.36, 280.74, 282.91, 291.91, 286.15, 268.09, 256.06, 264.46, 244.74, 237.92, 232.90, 234.24, 228.56, 242.12]
const META = [164.70, 169.27, 159.10, 167.11, 180.50, 167.96, 161.78, 160.32, 169.15, 146.29, 140.41, 135.68, 133.45, 126.76, 130.01]

const results = transpose([AAPL, MSFT, META])

const U = normalize(results)

const task3 = correlation(U)

export const student3 = task3.map(v => v.map(x => Math.abs(x) * Math.sqrt(U.length - 2) / Math.sqrt(1 - Math.pow(x, 2))))

const regr_self = (a, b) => a.map((x, i) => {
  const c = mathExpect(a) - task3[0][1]  * Math.sqrt(dispersion(mathExpect(a), a)) / Math.sqrt(dispersion(mathExpect(b), b)) * (mathExpect(b) - b[i])
  return [x, b[i], c, x - c]
})

export const AAPL_MSFT = regr_self(AAPL, MSFT)
export const META_MSFT = regr_self(META, MSFT)
export const AAPL_META = regr_self(AAPL, META)

export default task3