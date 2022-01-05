# Fun Tav Travel and Tour

## Available Scripts

In the project directory, you can run:

### `npm install`

Install dependencies

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:5000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### Database

Use firestore for database \
Collections: \
- users 
- orders 
- packages 
- custom_orders 

### Deployment

Deployed use heroku

#### API
GET: \
- get all packages: https://funtav-api.herokuapp.com/package
- get package by id: https://funtav-api.herokuapp.com/package/:id
- get all orders: https://funtav-api.herokuapp.com/order
- get order by id: https://funtav-api.herokuapp.com/order/:id
- get order by user id: https://funtav-api.herokuapp.com/order/user/:id
- get all custom order: https://funtav-api.herokuapp.com/orders

POST: \
- create custom order: https://funtav-api.herokuapp.com/order/custom
- validate user: https://funtav-api.herokuapp.com/user/validate
- create user https://funtav-api.herokuapp.com/user
- create order: https://funtav-api.herokuapp.com/order

