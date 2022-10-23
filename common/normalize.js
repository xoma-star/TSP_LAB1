import mathExpect from "./mathExpect.js"
import transpose from "./transpose.js"
import dispersion from "./dispersion.js"

const normalize = (x) => transpose(transpose(x).map(v => {
  const me = mathExpect(v)
  const di = dispersion(me, v)

  return v.map(z => (z - me) / Math.sqrt(di))
}))

export default normalize