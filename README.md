# Cloudinary Image Upload GraphQL Server

## Overview

This repository contains a GraphQL server and a frontend that enables users to upload images to Cloudinary from the GraphQL server. The GraphQL server is built using graphql-yoga and express, while the frontend is built with React. The frontend uses @apollo/client and graphql-upload-client to query the GraphQL server.

## Backend

The backend is built with the following packages:

- [Express](https://www.npmjs.com/package/express): For creating and running the backend server
- [GraphQL Yoga](https://the-guild.dev/graphql/yoga-server/docs): For building the GraphQL server and writing GraphQL Schemas
- [Dotenv](https://www.npmjs.com/package/dotenv): For storing environment variables
- [Cloudinary](https://www.npmjs.com/package/cloudinary): For uploading images to Cloudinary from the server

The backend also requires the following environment variables to be set:

- CLOUDINARY_CLOUD_NAME=
- CLOUDINARY_API_KEY=
- CLOUDINARY_API_SECRET=

## Frontend

The frontend is built with React and uses the following packages:

- @apollo/client: For querying the GraphQL server
- graphql-upload-client: For handling image uploads to the GraphQL server

## How to run the code

1.  Clone the repository: `git clone https://github.com/nemo0/graphql-yoga-cloudinary-react.git`
2.  Navigate to the repository directory: `cd backend`
3.  Install the dependencies for the backend: `npm install` (or `yarn install`)
4.  Set the environment variables in a `.env` file in the root of the backend folder
5.  Run the backend server: `npm run start` (or `yarn start`)
6.  Navigate to the frontend directory: `cd frontend`
7.  Install the dependencies for the frontend: `npm install` (or `yarn install`)
8.  Start the frontend: `npm start` (or `yarn start`)

The frontend should now be running on [http://localhost:5173](http://localhost:5173) and the GraphQL server will be running on [http://localhost:4000/graphql](http://localhost:4000/graphql).
