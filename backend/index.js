const express = require('express');
const { createSchema, createYoga } = require('graphql-yoga');

require('dotenv').config();

const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const app = express();

const schema = createSchema({
  typeDefs: /* GraphQL */ `
    scalar File

    type Query {
      hello: String!
    }

    type UploadResponse {
      url: String!
    }

    type Mutation {
      upload(file: File!): UploadResponse!
    }
  `,
  resolvers: {
    Query: {
      hello: () => 'hello world!',
    },

    Mutation: {
      upload: async (_, { file }) => {
        const stream = file.stream();

        // create folder if not exists
        if (!fs.existsSync(path.join(__dirname, 'public/images'))) {
          fs.mkdirSync(path.join(__dirname, 'public/images'), {
            recursive: true,
          });
        }

        // save file to local
        await fs.promises.writeFile(
          path.join(__dirname, `public/images/${file.name}`),
          stream
        );

        // upload to cloudinary
        const result = await cloudinary.uploader.upload(
          path.join(__dirname, `public/images/${file.name}`),
          {
            public_id: file.name,
            folder: 'graphql-yoga',
          }
        );

        // delete file from local
        await fs.promises.unlink(
          path.join(__dirname, `public/images/${file.name}`)
        );

        return { url: result.secure_url };
      },
    },
  },
});

const yoga = createYoga({ schema });

app.use('/graphql', yoga);

app.listen(4000, () => {
  console.log('Server is running on port 4000');
});
