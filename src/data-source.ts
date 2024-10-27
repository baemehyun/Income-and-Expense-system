import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User" //example model
import { Token } from "./entity/Token" //example model
import dotenv from "dotenv";
dotenv.config(); //read .env file
export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: false,
    entities: [User,Token],
    migrations: ["./src/migration/*.ts"],
    subscribers: [],
    extra: {
        // Use mysql2 to ensure compatibility
        connectionLimit: 10,
      },
    
})
