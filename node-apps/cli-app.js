const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  readline.question(`Path to source JSON:`, (path) => {
    console.log(`Modifying JSON file at ${path}`)
    readline.close()
  })