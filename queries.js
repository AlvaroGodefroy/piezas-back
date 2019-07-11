const Connection = require('pg').Pool
const connection = new Connection({
  user: 'idmaqajxsucdsd',
  host: 'ec2-107-21-216-112.compute-1.amazonaws.com',
  database: 'dat538a8plk292',
  password: '483201dbf1a6d8daf432b20a78b3403948e471a9bd892cd816b0e264d83c5cd4',
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
  const formreq  = request.body
  connection.query("SELECT * FROM users WHERE user_name = $1 and password= $2" , [formreq.usuario,formreq.password], (error, results) => {
    if (error) {
      throw error
    }else  {
      var resultado = results;

        if(resultado.rows.length >0){

       response.status(200).json({ val: 'true' })
         }
         else{
        response.status(200).json({ val: 'false' })
         }

    }

  })
}

const getusudi= (request, response) => {
  const formreq  = request.body
  connection.query("SELECT * FROM users WHERE user_name = $1 and password= $2" , [formreq.usuario,formreq.password], (error, results) => {
    if (error) {
      throw error
    }else  {
      var resultado = results;

        if(resultado.rows.length >0){

       response.status(200).json({ val: 'true' })
         }
         else{
        response.status(200).json({ val: 'false' })
         }

    }

  })
}



const getUserVerifi= (request, response) => {
  const formreq2= request.body
  connection.query('SELECT * FROM users WHERE user_name = $1 and nivel = 1', [formreq2.usuario], (error, results) => {
    if (error) {
      throw error
    }else  {
      var resultado2 = results;

        if(resultado2.rows.length >0){

       response.status(200).json({ val: 'true' })
         }
         else{
        response.status(200).json({ val: 'false', val2: formreq2.usuario})
         }

    }
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


const updateshop = (request, response) => {
  const dsd =  request.body
  console.log(dsd)
  connection.query(
    'UPDATE myshops SET confirmado = 1  WHERE idcompra = $1',    [ dsd.id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send('User modified with ID: ' )
    }
  )



}

const deleteshop = (request, response) => {
  const dsd =  request.body
  console.log(dsd)
  connection.query(
    'delete from myshops  WHERE idcompra = $1',    [ dsd.id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send('User delete with ID: ' )
    }
  )
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
    } else
    {
      response.status(200).json(results.rows)
    }

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


const getShop = (request, response) => {
  connection.query('SELECT * FROM myshops where confirmado is null', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getShop1 = (request, response) => {
  connection.query('SELECT * FROM myshops where confirmado=1 ', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getReseñas = (request, response) => {
  connection.query('SELECT * FROM reseñas ', (error, results) => {
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


const getProductByIdCate = (request, response) => {
  const id = parseInt(request.params.id)

  connection.query('SELECT * FROM products WHERE category_id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}






const createProduct = (request, response) => {
  const { category_id, nombre, descripcion,precio,urlim ,stock} = request.body

  connection.query('INSERT INTO products (category_id, nombre, descripcion,precio,img,stock) VALUES ($1, $2, $3,$4,$5,$6)', [category_id, nombre, descripcion,precio,urlim,stock], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).json({ val: 'true' })
  })
}


const createShop = (request, response) => {
  const { user, productosL,productosP,direccion} = request.body

  connection.query('select max(COALESCE(idcompra,0))+1 as maxid from myshops', (error, results1) => {
    if (error) {
      throw error
    }
    console.log(results1.rows[0 ].maxid)
    connection.query('INSERT INTO myshops (username,products,total,lugar,idcompra) VALUES ($1,$2,$3,$4,$5)', [user, productosL,productosP,direccion,results1.rows[0].maxid], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).json({ val: 'true' })
    })



  })



}

const createReseña = (request, response) => {
  const { idprod,reseña} = request.body

  connection.query('INSERT INTO reseñas (product_id,comentario) VALUES ($1,$2)', [idprod,reseña], (error, results) => {
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
  getUserVerifi,
  deleteshop,
  createShop,
  getShop,
  updateshop,
  createReseña,
  getReseñas,
  //categorys
  getShop1,
  getCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
  getProductByIdCate,
  getusudi,
  //products
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
}
