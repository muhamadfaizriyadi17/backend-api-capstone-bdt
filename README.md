# Banten-Panglipur
Banten Panglipur is an online platform that aims to showcase, preserve, and promote the rich cultural heritage of the Banten region in Indonesia. The website serves as a comprehensive resource for information and insights into the unique traditions, customs, arts, cuisine, and history of the Banten people.

## Getting Started

### Prerequisites
Before you begin, ensure you have met the following requirements:
- Node.js and npm installed. You can download them from [Node.js](https://nodejs.org/).
- A Supabase account and project. Sign up at [Supabase](https://supabase.io/).

### Clone the Repository
To get a copy of the project up and running on your local machine, follow these steps:

```sh
git clone https://github.com/your-username/banten-panglipur.git
```
```sh
cd backend-api-capstone-bdt
```
### Creat Environment File
To run the application please create an .env file first and enter the credentials of the database url from Supabase. Creat .env file and enter code like this.
```sh
DATABASE_URL=CREDENTIAL_URL_SUPABASE
```
fill in CREDENTIAL_URL_SUPABASE with the url of your database in the Supabase.
### Install Package
To install the available packages please run this command
```sh
npm install
```
### Run Application
Run the application backend by executing the command
```sh
npm run start-dev
```
### Testing Application
Testing the application using postman, by following the API documentation below
```sh
http://localhost:3000/
```
Customize the url path in the documentation

## API Documentation
* User object
```
{
    "id_user": "",
    "username": "",
    "email": "",
    "password": "",
    "image_profile": ""
}
```

## User
### GET All Users
- **URL:** `http://localhost:3000/users`
- **Method:** `GET`
- **Headers:** `Content-Type: application/json`
- **Body JSON:** none

#### Success Response:
- **Code:** 200
- **Content:**
```json
{
    "message": "Successfully get user data",
    "users": [
        {order_object},
        {order_object},
        {order_object},
        {order_object},
        {order_object}
    ]
}
```
#### Error Response:
- **Code:** 500
- **Content:**
```json
{
    message: 'Failed to get user'
}
```

### GET User ById
- **URL:** `http://localhost:3000/users/{id_user}`
- **Method:** `GET`
- **Headers:** `Content-Type: application/json`
- **Body JSON:** none

#### Success Response:
- **Code:** 200
- **Content:**
```json
{
    "message": "Successfully get user data",
    "users": [
        {order_object},
        {order_object},
        {order_object},
        {order_object},
        {order_object}
    ]
}
```
#### Error Response:
- **Code:** 404
- **Content:**
```json
{
    message: 'User not found'
}
```
- **Code:** 500
- **Content:**
```json
{
    message: 'Failed to get user data'
}
```

### POST Creat New User
- **URL:** `http://localhost:3000/users`
- **Method:** `POST`
- **Headers:** `Content-Type: application/json`
- **Body JSON:**
```json
{
  "username": "",
  "email": "",
  "password": "",
  "image_profile": ""
}
```
#### Success Response:
- **Code:** 200
- **Content:**
```json
{
    "message": "User created successfully",
    "users": [
        {order_object},
        {order_object},
        {order_object},
        {order_object},
        {order_object}
    ]
}
```
#### Error Response:
- **Code:** 500
- **Content:**
```json
{
    message: 'Failed to create user'
}
```

### PUT Edit All Data User
- **URL:** `http://localhost:3000/users/{id_user}`
- **Method:** `PUT`
- **Headers:** `Content-Type: application/json`
- **Body JSON:**
```json
{
  "username": "",
  "email": "",
  "password": "",
  "image_profile": ""
}
```
#### Success Response:
- **Code:** 200
- **Content:**
```json
{
    "message": "User updated successfully",
    "users": [
        {order_object},
        {order_object},
        {order_object},
        {order_object},
        {order_object}
    ]
}
```
#### Error Response:
- **Code:** 404
- **Content:**
```json
{
    message: 'User not found'
}
```
- **Code:** 500
- **Content:**
```json
{
    message: 'Failed to update user data'
}
```

### PATCH Spesifik Edit User Data
- **URL:** `http://localhost:3000/users/{id_user}`
- **Method:** `PATCH`
- **Headers:** `Content-Type: application/json`
- **Body JSON:**
```json
{
   "password": "",
   "image_profile": ""
}
```
#### Success Response:
- **Code:** 200
- **Content:**
```json
{
    "message": "User updated successfully",
    "users": [
        {order_object},
        {order_object},
        {order_object},
        {order_object},
        {order_object}
    ]
}
```
#### Error Response:
- **Code:** 404
- **Content:**
```json
{
    message: 'User not found'
}
```
- **Code:** 500
- **Content:**
```json
{
    message: 'Failed to update user data'
}
```

### DELETE user data
- **URL:** `http://localhost:3000/users/{id_user}`
- **Method:** `DELETE`
- **Headers:** `Content-Type: application/json`
- **Body JSON:** none

#### Success Response:
- **Code:** 200
- **Content:**
```json
{
    "message": "User deleted successfully"
}
```
#### Error Response:
- **Code:** 404
- **Content:**
```json
{
    message: 'User not found'
}
```
- **Code:** 500
- **Content:**
```json
{
    message: 'Failed to delete user data'
}
```

## Place
### GET All Places
- **URL:** `http://localhost:3000/places`
- **Method:** `GET`
- **Headers:** `Content-Type: application/json`
- **Body JSON:** none

#### Success Response:
- **Code:** 200
- **Content:**
```json
{
    "message": "Successfully get place data",
    "users": [
        {order_object},
        {order_object},
        {order_object},
        {order_object},
        {order_object}
    ]
}
```
#### Error Response:
- **Code:** 500
- **Content:**
```json
{
    message: 'Failed to get place data'
}
```

### GET Place ById
- **URL:** `http://localhost:3000/places/{id_user}`
- **Method:** `GET`
- **Headers:** `Content-Type: application/json`
- **Body JSON:** none

#### Success Response:
- **Code:** 200
- **Content:**
```json
{
    "message": "Successfully get place data",
    "users": [
        {order_object},
        {order_object},
        {order_object},
        {order_object},
        {order_object}
    ]
}
```
#### Error Response:
- **Code:** 404
- **Content:**
```json
{
    message: 'Place not found'
}
```
- **Code:** 500
- **Content:**
```json
{
    message: 'Failed to get place data'
}
```

## Favorite
### POST a new favorite place
- **URL:** `http://localhost:3000/favorites`
- **Method:** `POST`
- **Headers:** `Content-Type: application/json`
- **Body JSON:** 
```json
{
  "user_id": 
  "place_id": 
}
```
#### Success Response:
- **Code:** 201
- **Content:**
```json
{
    "message": "Favorite place added successfully",
    "favorite": [
        {order_object},
        {order_object},
        {order_object},
        {order_object},
        {order_object}
    ]
}
```
#### Error Response:
- **Code:** 500
- **Content:**
```json
{
    message: 'Failed to add favorite place'
}
```

### Get all favorite places for a user
- **URL:** `http://localhost:3000/favorites/{id_user}`
- **Method:** `GET`
- **Headers:** `Content-Type: application/json`
- **Body JSON:** none
#### Success Response:
- **Code:** 200
- **Content:**
```json
{
    "message": "Successfully get place data",
    "users": [
        {order_object},
        {order_object},
        {order_object},
        {order_object},
        {order_object}
    ]
}
```
- **Code:** 500
- **Content:**
```json
{
    message: 'Failed to get favorite places'
}
```
### DELETE favorite place data
- **URL:** `http://localhost:3000/favorites/{id_user}/{id_place}`
- **Method:** `DELETE`
- **Headers:** `Content-Type: application/json`
- **Body JSON:** none

#### Success Response:
- **Code:** 200
- **Content:**
```json
{
    "message": "Favorite place deleted successfully"
}
```
- **Code:** 500
- **Content:**
```json
{
    message: 'Failed to delete favorite place data'
}
```

## User Review
### POST a new user review
- **URL:** `http://localhost:3000/reviews`
- **Method:** `POST`
- **Headers:** `Content-Type: application/json`
- **Body JSON:**
```json
{
  "id_user": "",
  "id_place": ""
}
```
#### Success Response:
- **Code:** 201
- **Content:**
```json
{
    "message": "Review added successfully",
    "users": [
        {order_object},
        {order_object},
        {order_object},
        {order_object},
        {order_object}
    ]
}
```
#### Error Response:
- **Code:** 500
- **Content:**
```json
{
    message: 'Failed to add favorite place'
}
```

### Get all favorite places for a user
- **URL:** `http://localhost:3000/reviews/{id_place}`
- **Method:** `GET`
- **Headers:** `Content-Type: application/json`
- **Body JSON:** none
#### Success Response:
- **Code:** 200
- **Content:**
```json
{
    "message": "Successfully retrieved reviews",
    "users": [
        {order_object},
        {order_object},
        {order_object},
        {order_object},
        {order_object}
    ]
}
```
- **Code:** 500
- **Content:**
```json
{
    message: 'Failed to get user reviews'
}
```
### PUT user review data
- **URL:** `http://localhost:3000/reviews/{id_review}`
- **Method:** `PUT`
- **Headers:** `Content-Type: application/json`
- **Body JSON:**
```json
{
    "id_user": "VALUE",
    "id_place": "VALUE",
    "review_user": "VALUE",
    "rating": VALUE,
    "review_date": "VALUE"
}
```
#### Success Response:
- **Code:** 200
- **Content:**
```json
{
    "message": "Review updated successfully",
    "users": [
        {order_object},
        {order_object},
        {order_object},
        {order_object},
        {order_object}
    ]
}
```
#### Error Response:
- **Code:** 404
- **Content:**
```json
{
    message: 'Review not found'
}
```
- **Code:** 500
- **Content:**
```json
{
    message: 'Failed to update user review'
}
```
