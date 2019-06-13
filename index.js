const express = require('express')
const bodyParser = require('body-parser')
var cors = require('cors');
const app = express()
const db = require('./queries')
const port =process.env.PORT || 4009

app.use((req, res, next) => {
  res.set({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
    'Access-Control-Allow-Headers': 'Content-Type'
  })
  next();
})
app.use(bodyParser.json())
app.use(

  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (req, res) => {
    res.json({ info: 'Node.js, Express, and Postgres API' })
  })


app.get('/users', db.getUsers)
app.get('/usersid/:id', db.getUserById)
app.post('/users', db.createUser)
app.post('/usersLogin', db.getUserLogin)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)
app.post('/usersVerifi', db.getUserVerifi)
app.get('/getProductC',db.getProductByIdCate)
app.post('/comprap', db.createShop)
app.get('/getShop',db.getShop)
app.post('/opinionp', db.createReseña)
app.get('/getres',db.getReseñas)
app.post('/verifilog', db.getusudi)


app.get('/categories', db.getCategories)
app.get('/categories/:id', db.getCategoryById)
app.post('/categories', db.createCategory)
app.put('/categories/:id', db.updateCategory)
app.delete('/categories/:id', db.deleteCategory)

app.get('/products', db.getProducts)
app.get('/products/:id', db.getProductById)
app.post('/products', db.createProduct)
app.put('/products/:id', db.updateProduct)
app.delete('/products/:id', db.deleteProduct)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})
