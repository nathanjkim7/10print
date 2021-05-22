/*
  one possible implemenation of the 10print.org algorithm written in JavaScript
*/

const sw = process.stdout.columns
const FgRed = "\x1b[31m"
const FgBlue = "\x1b[34m"
const RESET = "\x1b[0m"
let w = 0;
let d = 7;

function draw () {
  setTimeout(draw, 1000 / 144)
  if(w > sw - 1 || w < 0)
  {
    d = -d
  }
  
    w += d
  
  let output = ''
  for (let i = 0; i < w; i++) {
    if (Math.random() > 0.5) {
      output += '\x1b[5m\x1b[31m\x1b[107m + ⊂(▀¯▀⊂)'
    } else {
      output += '\x1b[5m\x1b[34m\x1b[107m + (⊃▀¯▀)⊃'
    }
  }
  console.log(output)
}

draw()
