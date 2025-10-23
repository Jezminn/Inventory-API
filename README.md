>Inventory / Store API
A simple RESTful API for managing products, suppliers, and orders in an inventory system.

>Base URL
https://inventory-api-uis8.onrender.com

>Technologies Used

*Node.js + Express

*MongoDB Atlas

*Mongoose

*Postman (for API Testing)

Models & Collections
Product
| Field   | Type   | Description         |
| ------- | ------ | ------------------- |
| `sku`   | String | Unique product code |
| `name`  | String | Product name        |
| `price` | Number | Product price       |
| `stock` | Number | Quantity in stock   |

Supplier
| Field     | Type   | Description           |
| --------- | ------ | --------------------- |
| `name`    | String | Supplier name         |
| `contact` | String | Supplier contact info |

Order
| Field               | Type     | Description                                 |
| ------------------- | -------- | ------------------------------------------- |
| `items`             | Array    | List of ordered products                    |
| `items[].productId` | ObjectId | Reference to Product                        |
| `items[].qty`       | Number   | Quantity ordered                            |
| `items[].price`     | Number   | Product price at order time                 |
| `supplierId`        | ObjectId | Reference to Supplier                       |
| `status`            | String   | Order status (`pending`, `completed`, etc.) |

Endpoints
PRODUCTS
| Method     | Endpoint        | Description            |
| ---------- | --------------- | ---------------------- |
| **GET**    | `/products`     | Get all products       |
| **GET**    | `/products/:id` | Get a specific product |
| **POST**   | `/products`     | Create a new product   |
| **PUT**    | `/products/:id` | Update a product       |
| **DELETE** | `/products/:id` | Delete a product       |
 
Sample Requests
Create Product

### Create a product 
POST http://localhost:5000/api/products
Content-Type: application/json

{
  "sku": "SKU003",
  "name": "Cheese Ring",
  "price": 60.99,
  "stock": 40
}

### Get all products para masaya

