# FunTav – Travel Package Booking (Backend API)

Express REST API for **FunTav**, a small travel and tour booking site. It stores users, tour packages and orders in Cloud Firestore.

Built in late 2021 – early 2022. The frontend lives in [funtav-fe](https://github.com/vectshad/funtav-fe).

<!-- Screenshot: add an image at docs/screenshot.png (for example, an API response) and uncomment the line below -->
<!-- ![API response](docs/screenshot.png) -->

## Tech stack

- Node.js + Express 4
- Firebase JS SDK v9 (Cloud Firestore)
- CORS and body-parser middleware

## API

| Method | Path | Description |
|---|---|---|
| GET | `/package` | List all tour packages |
| GET | `/package/:id` | Get one package |
| GET | `/order` | List all orders |
| GET | `/order/:id` | Get one order |
| GET | `/order/user/:id` | List orders for a user |
| POST | `/order` | Create an order |
| GET | `/orders` | List custom trip requests |
| POST | `/order/custom` | Create a custom trip request |
| POST | `/user` | Register a user |
| POST | `/user/validate` | Log in (check username and password) |

Firestore collections: `users`, `packages`, `orders`, `custom_orders`.

## Run locally

Requires Node.js and a Firebase project with Firestore enabled.

1. Copy `.env.example` to `.env` and fill in your Firebase web app config.
2. Install and start:

```bash
npm install
node --env-file=.env server.js
```

(`--env-file` needs Node.js 20.6 or newer. On older versions, set the variables in your shell and run `npm start`.)

The API listens on http://localhost:5000 (or `PORT` if set).

## Status and known limitations

- The Heroku deployment (`funtav-api.herokuapp.com`) is offline since Heroku ended its free tier.
- Passwords are stored and compared in plain text, and endpoints have no authentication. This is a learning project and isn't safe for real user data.
- No automated tests.
