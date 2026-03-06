# Flask Authentication Experiment

This project demonstrates token based authentication using Flask.

Authentication methods implemented:

1. Authorization Header Authentication
2. Custom Header Authentication
3. JWT Authentication

------------------------------------

## Run Locally

Install dependencies

pip install -r requirements.txt

Run server

python app.py

Server runs on

http://localhost:5000


------------------------------------

## APIs

Authorization Header

GET /auth-header

Custom Header

GET /custom-header


JWT Login

POST /jwt-login

Body:
{
"username":"admin",
"password":"admin123"
}


JWT Protected

GET /jwt-protected

Header:

Authorization: Bearer <token>

------------------------------------

## Testing

All APIs tested using Postman.


------------------------------------

## Deployment

Deployed on Render