# Environment Variables

To configure the application, create a `.env` file in the root directory of your project with the following templates.

## `.env` Template for Server

```plaintext
# General Configuration
HOST=0.0.0.0
PORT=1337
APP_KEYS=<Your_App_Keys>  # Generate secure random keys
API_TOKEN_SALT=<Your_API_Token_Salt>
ADMIN_JWT_SECRET=<Your_Admin_JWT_Secret>
TRANSFER_TOKEN_SALT=<Your_Transfer_Token_Salt>

# Database Configuration
DATABASE_CLIENT=postgres
DATABASE_HOST=<Your_Database_Host>  # e.g., localhost or your cloud database endpoint
DATABASE_PORT=5432  # Default port for PostgreSQL
DATABASE_NAME=<Your_Database_Name>
DATABASE_USERNAME=<Your_Database_Username>
DATABASE_PASSWORD=<Your_Database_Password>
DATABASE_SSL=true  # Set to true if using SSL, false otherwise

# Stripe
STRIPE_KEY=<Your_Stripe_Secret_Key>
CLIENT_URL=<Your_Client_URL>  # e.g., https://cartopia-store.vercel.app

# Cloudinary
CLOUDINARY_NAME=<Your_Cloudinary_Cloud_Name>
CLOUDINARY_KEY=<Your_Cloudinary_API_Key>
CLOUDINARY_SECRET=<Your_Cloudinary_API_Secret>

# JWT Secret for authentication
JWT_SECRET=<Your_JWT_Secret>

```

## `.env` Template for Client

```plaintext
VITE_REACT_APP_STRIPE_APP_KEY=<Your_Stripe_Secret_Key>
VITE_REACT_APP_STRIPE_PUBLISHABLE_KEY=<Your_Stripe_Publishable_Key>
VITE_REACT_APP_DEV_URL=<Your_Development_URL>  # e.g., http://localhost:3000
REACT_APP_API_BASE_URL=<Your_API_Base_URL>  # e.g., http://localhost:1337 or https://your-api-endpoint.com
```

## Instructions

```plaintext
Create a .env file in the root directory of your project (if it does not already exist).

Copy the appropriate template from above and paste it into your .env file.

Replace the placeholder values with your actual configuration values.

Save the .env file and restart your application to apply the changes.
```

## Contributing
```plaintext
Feel free to contribute to the project by submitting issues or pull requests.
If you find this project useful, consider starring the repository to show your support!
```
