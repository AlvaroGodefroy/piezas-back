const Connection = require('pg').Pool
const connection = new Connection({
  user: 'ehbctmvfhkqqgz',
  host: 'ec2-54-83-205-27.compute-1.amazonaws.com',
  database: 'd7u2v9gddd9265',
  password: '6ec3d0d372fef3acb9f8179f600aa3f064869981d79071b4e8d0add997339217',
  port: 5432,
  ssl: true
})

//------------------USERS------------------------------------//
const getUsers = (request, response) => {
  connection.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}



const getUserById = (request, response) => {
  const id = parseInt(request.params.id)

  connection.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getUserLogin= (request, response) => {
  const { user_name,  password } = request.body

  connection.query('SELECT * FROM users WHERE user_name = $1 and password = $2', [user_name,password], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json({ val: 'true' })
  })
}

const createUser = (request, response) => {
  const { user_name, first_name, last_name, email, password } = request.body

  connection.query('INSERT INTO users (user_name, first_name, last_name, email, password) VALUES ($1, $2, $3, $4, $5)', [user_name, first_name, last_name, email, password], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`User added with ID: `)
  })
}

const updateUser = (request, response) => {
  const id = parseInt(request.params.id)
  const { user_name, first_name, last_name, email, password } = request.body

  connection.query(
    'UPDATE users SET user_name = $1, first_name = $2, last_name = $3, email = $4, password = $5 WHERE id = $6',
    [user_name, first_name, last_name, email, password, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User modified with ID: `)
    }
  )
}

const deleteUser = (request, response) => {
  const id = parseInt(request.params.id)

  connection.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`User deleted with ID: `)
  })
}

//------------------USERS------------------------------------//
//------------------CATEGORIES------------------------------------//
const getCategories = (request, response) => {
  connection.query('SELECT * FROM categories ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getCategoryById = (request, response) => {
  const id = parseInt(request.params.id)

  connection.query('SELECT * FROM categories WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createCategory = (request, response) => {
  const { descripcion } = request.body

  connection.query('INSERT INTO categories (descripcion) VALUES ($1)', [descripcion], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).json({ val: 'true' })
  })
}

const updateCategory = (request, response) => {
  const id = parseInt(request.params.id)
  const { descripcion} = request.body

  connection.query(
    'UPDATE categories SET descripcion = $1  WHERE id = $2',
    [descripcion, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User modified with ID: `)
    }
  )
}

const deleteCategory = (request, response) => {
  const id = parseInt(request.params.id)

  connection.query('DELETE FROM categories WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`User deleted with ID: `)
  })
}

//------------------CATEGORIES------------------------------------//
//------------------PRODUCTS------------------------------------//
const getProducts = (request, response) => {
  connection.query('SELECT * FROM products ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getProductById = (request, response) => {
  const id = parseInt(request.params.id)

  connection.query('SELECT * FROM products WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createProduct = (request, response) => {
  const { category_id, nombre, descripcion } = request.body

  connection.query('INSERT INTO products (category_id, nombre, descripcion) VALUES ($1, $2, $3)', [category_id, nombre, descripcion], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).json({ val: 'true' })
  })
}

const updateProduct = (request, response) => {
  const id = parseInt(request.params.id)
  const { category_id, nombre, descripcion  } = request.body

  connection.query(
    'UPDATE products SET category_id = $1, nombre = $2, descripcion = $3 WHERE id = $4',
    [category_id, nombre, descripcion , id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User modified with ID: `)
    }
  )
}

const deleteProduct = (request, response) => {
  const id = parseInt(request.params.id)

  connection.query('DELETE FROM products WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`User deleted with ID: `)
  })
}

//------------------PRODDUCTS------------------------------------//

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  getUserLogin,
  //categorys
  getCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
  //products
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
}