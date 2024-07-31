# Environment Variables

To configure the application, create a `.env` file in the root directory of your project with the following templates.

## `.env` Template for Server

```plaintext
HOST=0.0.0.0
PORT=1337
APP_KEYS=YOUR_APP_KEYS_HERE
API_TOKEN_SALT=YOUR_API_TOKEN_SALT_HERE
ADMIN_JWT_SECRET=YOUR_ADMIN_JWT_SECRET_HERE
TRANSFER_TOKEN_SALT=YOUR_TRANSFER_TOKEN_SALT_HERE

# Database Configuration
DATABASE_CLIENT=postgres
DATABASE_HOST=YOUR_DATABASE_HOST_HERE
DATABASE_PORT=5432
DATABASE_NAME=YOUR_DATABASE_NAME_HERE
DATABASE_USERNAME=YOUR_DATABASE_USERNAME_HERE
DATABASE_PASSWORD=YOUR_DATABASE_PASSWORD_HERE
DATABASE_SSL=true

# Stripe
STRIPE_KEY=YOUR_STRIPE_KEY_HERE
CLIENT_URL=http://localhost:3000

# Cloudinary
CLOUDINARY_NAME=YOUR_CLOUDINARY_NAME_HERE
CLOUDINARY_KEY=YOUR_CLOUDINARY_KEY_HERE
CLOUDINARY_SECRET=YOUR_CLOUDINARY_SECRET_HERE
JWT_SECRET=YOUR_JWT_SECRET_HERE
```

## `.env` Template for Client

```plaintext
REACT_APP_STRIPE_APP_KEY=YOUR_REACT_APP_STRIPE_APP_KEY_HERE
REACT_APP_STRIPE_PUBLISHABLE_KEY=YOUR_REACT_APP_STRIPE_PUBLISHABLE_KEY_HERE
REACT_APP_STRIPE_APP_PROD_URL=YOUR_REACT_APP_STRIPE_APP_PROD_URL_HERE
REACT_APP_DEV_URL=http://localhost:1337
```
## Instructions

```plaintext
Create a .env file in the root directory of your project (if it does not already exist).

Copy the appropriate template from above and paste it into your .env file.

Replace the placeholder values with your actual configuration values.

Save the .env file and restart your application to apply the changes.
```
