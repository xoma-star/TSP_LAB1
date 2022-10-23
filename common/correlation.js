import transpose from "./transpose.js"

const correlation = U => {
  const transposed = transpose(U)
  const a = []
  for(let j = 0; j < U[0].length; j++){
    a.push(
        transposed.map((x, k) => k === j ? 1 : x
          .map((v, i) => v * U[i][j])
          .reduce((a, b) => a + b) / x.length
        )
    )
  }
  return a
}


export default correlation