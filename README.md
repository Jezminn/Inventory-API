BASE URL: https://inventory-api-uis8.onrender.com

Models & Collections
1. Product
/ Field   / Type   / Description         /
/ ------- / ------ / ------------------- /
/ `sku`   / String / Unique product code /
/ `name`  / String / Product name        /
/ `price` / Number / Product price       /
/ `stock` / Number / Quantity in stock   /

2. Supplier
/ Field     / Type   / Description           /
/ --------- / ------ / --------------------- /
/ `name`    / String / Supplier name         /
/ `contact` / String / Supplier contact info /

3. Order
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
 

