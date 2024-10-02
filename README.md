

---

# Node.js CRUD API with MongoDB

This project is a simple **Node.js CRUD API** using **Express.js** and **MongoDB**. The API allows you to perform **Create**, **Read**, **Update**, and **Delete** (CRUD) operations on products. This project uses **Mongoose** as an Object Data Modeling (ODM) library to interact with MongoDB.

## Table of Contents

- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Usage](#usage)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [License](#license)

---

## Project Structure

The project is structured as follows:

```
├── controllers/              # Contains the controller logic for the API
│   └── products.controller.js
├── models/                   # Contains Mongoose schemas and models
│   └── products.model.js
├── routes/                   # Contains the route handlers
│   └── products.route.js
├── index.js                  # Entry point for the Node.js application
└── package.json              # Contains project dependencies and scripts
```

### File Breakdown

1. **index.js**: Main server file that handles server initialization and connects to MongoDB.
2. **routes/products.route.js**: Handles all product-related routes.
3. **controllers/products.controller.js**: Contains the business logic for each route (CRUD operations).
4. **models/products.model.js**: Mongoose schema for products, defining the structure and constraints of the product documents in MongoDB.

---

## API Endpoints

The following are the available API endpoints:

- **GET /api/products**: Fetch all products.
- **GET /api/products/:id**: Fetch a single product by its ID.
- **POST /api/products**: Create a new product.
- **PUT /api/products/:id**: Update an existing product by its ID.
- **DELETE /api/products/:id**: Delete a product by its ID.

### Example Request and Response

- **GET /api/products**

  ```bash
  curl http://localhost:3000/api/products
  ```

  **Response**:

  ```json
  [
    {
      "_id": "615c1b3b5e3c7e001f9d8fb1",
      "name": "Laptop",
      "quantity": 10,
      "price": 1200,
      "image": "laptop.png",
      "createdAt": "2021-10-05T14:45:47.509Z",
      "updatedAt": "2021-10-05T14:45:47.509Z",
      "__v": 0
    }
  ]
  ```

---

## Usage

### Create a Product

- **POST** `/api/products`

  **Request Body**:

  ```json
  {
    "name": "Laptop",
    "quantity": 10,
    "price": 1200,
    "image": "laptop.png"
  }
  ```

### Fetch All Products

- **GET** `/api/products`

### Fetch Single Product

- **GET** `/api/products/:id`

  **URL Parameter**:
  
  - `id`: The MongoDB ObjectId of the product.

### Update a Product

- **PUT** `/api/products/:id`

  **Request Body** (can include any of the product fields):

  ```json
  {
    "price": 1500
  }
  ```

### Delete a Product

- **DELETE** `/api/products/:id`

---

## Technologies

- **Node.js**: JavaScript runtime environment for building server-side applications.
- **Express.js**: Minimalist web framework for building APIs.
- **MongoDB**: NoSQL database used for storing product data.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB, used for defining schemas and interacting with the database.

---

## Contributing

Feel free to contribute to this project by submitting issues, bugs, or pull requests. Follow the standard GitHub flow for making contributions:

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Push to the branch.
5. Create a Pull Request (PR).

---

## License

This project is open-source and available under the [MIT License](https://opensource.org/licenses/MIT).

---

## Author

- **Sajjad Ansari** – [GitHub](https://github.com/sajjad6ansari)

Feel free to contact me for any questions or suggestions!

---

