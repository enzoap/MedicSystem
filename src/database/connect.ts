import { createConnection } from "typeorm";

export const connection = {
    async connect(): Promise<void> {
        await createConnection() 
    }
}