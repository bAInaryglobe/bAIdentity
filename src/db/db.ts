import { MongoClient, ServerApiVersion } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config(); // Load environment variables

// Interface for your database configuration (optional)
interface DbConfig {
    uri: string;
    serverApi?: {
        version: ServerApiVersion;
        strict: boolean;
        deprecationErrors: boolean;
    }
}

const config: DbConfig = {
    uri: process.env.MONGODB_URI || '', // Use environment variable
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
};

const client = new MongoClient(config.uri, config.serverApi);

async function connectDB() {
    try {
        await client.connect();
        console.log("Connected to MongoDB");
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error("Connection error:", error.message);
        } else {
            console.error('Unexpected error:', error);
        }
        process.exit(1);
    }
}

export { connectDB, client };
