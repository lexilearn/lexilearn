import { Surreal } from "surrealdb.node";

export interface Card {
    id: string;
    question: string;
    answer: string;
}

const db = new Surreal();

try {
    // Connect to the database
    await db.connect("http://127.0.0.1:8000/rpc");

    // Signin as a namespace, database, or root user
    await db.signin({
        user: "root",
        pass: "root",
    });

    // Select a specific namespace / database
    await db.use({ namespace: "test", database: "test" });

    await db.select("test");


} catch (e) {
    console.error("ERROR", e);
}