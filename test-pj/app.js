const express = require('express')
const app = express()

const port = 3000
const exphbs = require('express-handlebars')


app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')


app.get('/', (req, res) => {
  const pageIndex = '首頁'
  res.render('index', { page: pageIndex })
})


app.get('/:page_name', (req, res) => {
  const pageList = ['About', 'Portfolio', 'Contact']
  const page = pageList.find(page => page.toLowerCase() === req.params.page_name)
  res.render('index', { page: page })
})

// 優化前
// app.get('/about', (req, res) => {
//   const pageAbout = 'About'
//   res.render('index', { page: pageAbout })
// })

// app.get('/portfolio', (req, res) => {
//   const pagePortfolio = 'Portfolio'
//   res.render('index', { page: pagePortfolio })
// })

// app.get('/contact', (req, res) => {
//   const pageContact = 'Contact'
//   res.render('index', { page: pageContact })
// })


app.listen(port, () => {
  console.log(`it works! it's on http://localhost:${port}`)
})
