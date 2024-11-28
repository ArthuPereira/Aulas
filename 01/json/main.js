const fs = require('fs')
const dados = fs.readFileSync('data.json', 'utf8')
const data = JSON.parse(dados)
console.log(data['pagamentos'])