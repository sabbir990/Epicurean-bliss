const { MongoClient, ServerApiVersion } = require("mongodb");

let db;

export const connectDB = async () => {

    if (db) return db;

    try {
        const uri = `mongodb+srv://${process.env.EPICUREAN_BLISS_DB}:${process.env.EPICUREAN_BLISS_PASS}@cluster0.p2btb5w.mongodb.net/test?retryWrites=true&w=majority`;

        const client = new MongoClient(uri, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            },
            connectTimeoutMS: 30000,
            socketTimeoutMS: 45000,
        });

        db = client.db("Epicurean_Bliss")
        return db;
    } catch (error) {
        console.log(error);
    }
};
