const transpose = (array) => array[0].map((_, colIndex) => array.map(row => row[colIndex]))

export default transpose