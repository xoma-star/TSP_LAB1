//npm install computational-linear-algebra-js
import {
    corCoefs,
    dispersions,
    mathExpects,
    student,
    standardDeviations
} from './tasks/1.js'
import table from './tasks/2.js'
import task3 from './tasks/3.js'


console.log({mathExpects, dispersions, standardDeviations, corCoefs, student})
console.log("\n\ntask2")
console.log(table.map(x => x.map(v => v.toFixed(2)).join("\t")).join("\n"))
console.log("\n\ntask3")
console.log(task3.map(x => x.map(v => v.toFixed(2)).join("\t")).join("\n"))