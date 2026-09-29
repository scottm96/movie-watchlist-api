import 'dotenv/config';
import { PrismaClient } from "../generated/prisma/client.ts";
import { PrismaNeon } from '@prisma/adapter-neon'

const adapter = new PrismaNeon({
  connectionString: process.env.DATABASE_URL,
});


const prisma = new PrismaClient({
    adapter,
    log: 
        process.env.NODE_ENV === "development"
            ? ["query", "error", "warn"]
            : ["error"],
});

const connectDB = async () => {
    try{
        await prisma.$connect();
        console.log("DB Connected via prisma");
    } catch {
        console.error(`Database connection error: ${error.message}`);
        process.exit(1);
    }
}


const disconnectDB = async () => {
        await prisma.$disconnect();
}

export{ prisma, connectDB, disconnectDB}