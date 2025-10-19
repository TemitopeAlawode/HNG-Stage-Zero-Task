# Stage 0: Dynamic Profile Endpoint

This project provides a single GET /me endpoint that returns a JSON response containing my profile information, a dynamic cat fact fetched from the Cat Facts API, and a current UTC timestamp in ISO 8601 format. The API is built using Node.js and Express, with error handling and best practices like environment variables and logging.

# Prerequisites

- Node.js (v18 or higher recommended).
- npm (comes with Node.js).
- A code editor like VS Code.
- Postman for testing the API.

# Setup Instructions

1. Clone the repository
```bash
 git clone https://github.com/TemitopeAlawode/HNG-Stage-Zero-Task.git
```

2. Install dependencies
```bash
npm i express axios dotenv nodemon typescript @types/node @types/express
```

3. Create a .env file in the project root and add the following environment variables
```bash
PORT=8000
USER_EMAIL=Your-email-address
USER_NAME=Your-Full-Name
USER_STACK=Your-tech-stack
```
Replace the values with your actual email, name, and stack

4. In package.json file, make some changes “scripts” and add
```bash
 "server": "nodemon --exec ts-node src/server.ts"
```

5. Start the server
```bash
npm run server
```
The API will be available at http://localhost:8000/me

6. Test the API using Postman or browser to ensure that the connection is successful and the server is running:
```bash
http://localhost:8000
http://localhost:8000/me
 ```