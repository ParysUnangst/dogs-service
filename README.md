# Dogs Service

This is a small NestJS application that demonstrates basic CRUD (Create, Read, Update, Delete) operations for a simple resource called "Dogs".

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Example Requests](#example-requests)
- [Error Handling](#error-handling)
- [License](#license)

## Installation

1. Ensure you have Node.js installed. You can download it from [Node.js official website](https://nodejs.org/).

2. Clone the repository:
   ```bash
   git clone https://github.com/your-username/dogs-service.git
   cd dogs-service

3. Install the dependencies:
npm install

4. Start the NestJS application:
npm run start


Usage
Once the application is running, you can access it at http://localhost:3000.

You can use tools like Postman or curl to interact with the API endpoints.

API Endpoints

Get All Dogs
Method: GET
URL: /dogs
Response:
[
  {
    "id": 1,
    "name": "Buddy",
    "age": 3
  },
  {
    "id": 2,
    "name": "Max",
    "age": 5
  }
]
Create a New Dog
Method: POST
URL: /dogs
Body:
{
  "name": "Buddy",
  "age": 3
}
Response:
{
  "id": 1,
  "name": "Buddy",
  "age": 3
}


Get a Dog by ID
Method: GET
URL: /dogs/:id
Response:
{
  "id": 1,
  "name": "Buddy",
  "age": 3
}


Update a Dog
Method: PUT
URL: /dogs/:id
Body:
{
  "name": "Buddy",
  "age": 4
}

Response:
{
  "id": 1,
  "name": "Buddy",
  "age": 4
}

Delete a Dog
Method: DELETE
URL: /dogs/:id
Response:
{
  "message": "Dog deleted successfully"
}

Example Requests

Get All Dogs
Request:
curl -X GET http://localhost:3000/dogs
Response:

  {
    "id": 1,
    "name": "Buddy",
    "age": 3
  },
  {
    "id": 2,
    "name": "Max",
    "age": 5
  }


Create a New Dog
Request:
curl -X POST http://localhost:3000/dogs -H "Content-Type: application/json" -d '{"name": "Buddy", "age": 3}'

Response:
{
  "id": 1,
  "name": "Buddy",
  "age": 3
}

Get a Dog by ID
Request:
curl -X GET http://localhost:3000/dogs/1
Response:
{
  "id": 1,
  "name": "Buddy",
  "age": 3
}

Update a Dog
Request:
curl -X PUT http://localhost:3000/dogs/1 -H "Content-Type: application/json" -d '{"name": "Buddy", "age": 4}'
Response:
{
  "id": 1,
  "name": "Buddy",
  "age": 4
}

Delete a Dog
Request:
curl -X DELETE http://localhost:3000/dogs/1
Response:
{
  "message": "Dog deleted successfully"
}


Error Handling
The application includes basic error handling. For example, attempting to fetch, update, or delete a non-existent dog will result in a 404 Not Found response:

Request:
curl -X GET http://localhost:3000/dogs/999
Response:
{
  "statusCode": 404,
  "message": "Dog not found",
  "error": "Not Found"
}

License
This project is licensed under the MIT License - see the LICENSE file for details.