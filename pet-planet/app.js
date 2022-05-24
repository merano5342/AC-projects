const express = require('express')
const app = express()
const port = 3000



// response.sendfile('index.html');
// app.set('view engine', 'html');

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index')
})
// http://localhost:3000/



// app.get('/:things/is/the/best', (req, res) => {
//   console.log('request params language is: ', req.params.things)
//   res.send(`<h1> ${req.params.things} <br> is the best thing in the world</h1>`)
// })



app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}/`)
})