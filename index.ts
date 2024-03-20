import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import authRoutes from './src/routes/auth.routes';
import bodyParser from 'body-parser'; // Assuming you're using this
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import morgan from 'morgan';
import userRouter from './src/routes/user.routes';
import postRouter from './src/routes/post.routes';
import swaggerDocs from './swagger';
import { connectDB, client } from './src/db/db';


dotenv.config();

// const app = express();
// ... your Apollo Server setup


// Environment-based Config (example)
const isDevelopment = process.env.NODE_ENV === 'development';
const PORT = process.env.PORT || 4000;

// ... your database connection function


async function startServer() {
    try {
        await connectDB();

        const app = express(); // Initialize Express app

        // ... (Your Apollo Server setup)

        // Apply auth routes
        app.use(express.json());

        app.use(cors());
        app.use(morgan('tiny'));
        app.disable('x-powered-by'); // less hackers know about our stack


        app.get('/', (req, res) => {
            res.status(201).json("Home GET Request");
        });

        app.use('/api/auth', authRoutes);
        app.use('/api/user', userRouter)
        app.use('/api/post', postRouter)

        // Error Handling Middleware (Place this after other routes)
        app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
            console.error('Unhandled error:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        });

        // ... (Server Start with error handling)
        app.listen(PORT, () => {
            console.log(
                `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
            );
            swaggerDocs(app, port)

        }).on('error', (err) => {
            console.error('Server startup error:', err);
        });
        swaggerDocs(app, port)



    } catch (error) {
        // ... (Your existing error handling logic)
        console.error('Unable to connect to bAIdentity database:', error);

    }
}

startServer();





//
// async function startServer() {
//     try {
//         await connectDB();
//
//         // ... your Apollo Server setup
//
//         // Server Start with error handling
//         app.listen(PORT, () => {
//             console.log(
//                 `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
//             );
//         }).on('error', (err) => {
//             console.error('Server startup error:', err);
//         });
//
//     } catch (error) {
//         console.error('Unable to connect to database:', error);
//     }
// }
//
// startServer();
//
//
//

















// import express from 'express';
// import { ApolloServer } from 'apollo-server-express';
// import mongoose from 'mongoose';
// import dotenv from 'dotenv'; // Prefer the 'import' syntax
// dotenv.config();
//
// // Import types
// import typeDefs from './src/schema/user.gql';
// import resolvers from './src/resolvers/user';
// import connectDB from './db';
// import User from './user.model';
//
// // Establish database connection
// connectDB();
//
// // Create Express app
// const app = express();
//
// // Create Apollo Server
// const server = new ApolloServer({
//     typeDefs,
//     resolvers,
// });
//
// // Apply Apollo middleware to the Express app
// server.start().then(() => {
//     server.applyMiddleware({ app });
// });
//
// // Start the Express server
// const PORT = process.env.PORT || 4000;
// app.listen(PORT, () => {
//     console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
// });
//




























//
//
//
//
//
// import express from 'express';
// import { ApolloServer } from 'apollo-server-express';
// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// dotenv.config();
//
// // Import routes
// import authRoutes from './src/routes/auth.routes';
//
// // ... (Rest of your imports)
//
// // ... (Environment-based Config)
//
// // ... (Database connection function)
//
// async function startServer() {
//     try {
//         await connectDB();
//
//         const app = express(); // Initialize Express app
//
//         // ... (Your Apollo Server setup)
//
//         // Apply auth routes
//         app.use('/api/auth', authRoutes);
//
//         // Error Handling Middleware (Place this after other routes)
//         app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
//             console.error('Unhandled error:', err);
//             res.status(500).json({ error: 'Internal Server Error' });
//         });
//
//         // ... (Server Start with error handling)
//         app.listen(PORT, () => {
//             console.log(
//                 `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
//             );
//         }).on('error', (err) => {
//             console.error('Server startup error:', err);
//         });
//
//
//     } catch (error) {
//         // ... (Your existing error handling logic)
//         console.error('Unable to connect to bAIdentity database:', error);
//
//     }
// }
//
// startServer();














//
//
// import express from 'express';
// import { ApolloServer } from 'apollo-server-express';
// // ... other imports
// import { connectDB } from './src/db/db';
//
// const app = express();
// // ... Your Apollo Server setup
//
// async function startServer() {
//     try {
//         await connectDB();
//
//         // ... (rest of Apollo Server setup)
//
//         // Server Start with error handling
//         app.listen(PORT, () => {
//             console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
//         }).on('error', (err) => {
//             console.error('Server startup error:', err);
//         });
//
//     } catch (error) {
//         console.error('Unable to connect to database:', error);
//     }
// }
//
// startServer();
//
//

























//
//
// import express from 'express';
// import cors from 'cors';
// import morgan from 'morgan';
// import dotenv from 'dotenv';
// import connect from './database/conn.js';
// import userRouter from './router/user.js';
// import postRouter from './router/post.js';
// import swaggerDocs from './swagger.js'
//
// dotenv.config()
// const app = express();
// /** middlewares */
// app.use(express.json());
// app.use(cors());
// app.use(morgan('tiny'));
// app.disable('x-powered-by'); // less hackers know about our stack
//
// const port = process.env.PORT || 8080;
// /** HTTP GET Request */
// app.get('/', (req, res) => {
//     res.status(201).json("Home GET Request");
// });
//
// /** api routes */
// app.use('/api/user', userRouter)
// app.use('/api/post', postRouter)
// /** start server only when we have valid connection */
// connect().then(() => {
//     try {
//         app.listen(port, () => {
//             console.log(`Server connected to http://localhost:${port}`);
//         })
//         swaggerDocs(app, port)
//     } catch (error) {
//         console.log('Cannot connect to the server')
//     }
// }).catch(error => {
//     console.log("Invalid database connection...!");
// })
