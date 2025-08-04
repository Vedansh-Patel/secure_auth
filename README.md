# Secure Auth App

A Node.js authentication app using Express, MongoDB (Mongoose), and bcrypt.

## Setup

1. Clone the repo:
   ```
   git clone https://github.com/yourname/secure-auth-app.git
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment:
   - Copy `.env.example` to `.env`
   - Set your MongoDB URI

4. Start the server:
   ```
   npm run dev
   ```

## Routes

- `POST /auth/register` – Register a new user
- `POST /auth/login` – Login existing user