const transpose = (array) => array[0].map((_, colIndex) => array.map(row => row[colIndex]))

const results = [
    [26.37, 41.98, 17.66, 16.05, 22.85],
    [28.00, 43.83, 17.15, 15.47, 23.25],
    [27.83, 42.83, 15.38, 17.59, 24.55],
    [31.67, 47.28, 18.39, 16.92, 26.59],
    [23.50, 38.75, 18.32, 15.66, 26.22],
    [21.04, 35.12, 17.81, 17.00, 27.52],
    [16.94, 32.07, 21.42, 16.77, 25.76],
    [37.56, 54.25, 26.42, 15.68, 23.10],
    [18.84, 32.70, 17.23, 15.92, 23.41],
    [25.77, 40.51, 30.43, 15.29, 25.17],
    [33.52, 49.78, 21.71, 15.61, 25.39],
    [28.21, 43.84, 28.33, 15.70, 24.56],
    [28.76, 44.03, 30.42, 16.87, 24.45],
    [24.60, 39.46, 21.66, 15.25, 23.81],
    [24.51, 38.78, 25.77, 16.05, 24.48]
]

const resultsTransposed = transpose(results)

export const mathExpects = resultsTransposed.map(
    x => x.reduce((a,b) => a + b) / x.length
)

export const dispersions = resultsTransposed.map(
    (x, i) => x.map(v => Math.pow(v - mathExpects[i], 2)).reduce((a, b) => a + b) / (x.length - 1)
)

export const standardDeviations = dispersions.map(x => Math.sqrt(x))

const U = []
for(const v of results){
    U.push(v.map((x, i) => (x - mathExpects[i]) / standardDeviations[i]))
}

const UTransposed = transpose(U)
export const corCoefs = UTransposed.map(x => x.map((v, i) => v * U[i][0]).reduce((a, b) => a + b) / x.length).slice(1, U.length)
export const student = corCoefs.map(x => Math.abs(x) * Math.sqrt(U.length - 2) / Math.sqrt(1 - Math.pow(x, 2)))