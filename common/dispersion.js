const dispersion = (mathExpect, x) => x.map(v => (v - mathExpect) ** 2).reduce((a, b) => a + b) / (x.length - 1)

export default dispersion