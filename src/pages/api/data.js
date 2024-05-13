import { MongoClient } from "mongodb";

const connectionString = process.env.DB_CONNECTION_STRING;

export default async function handler(req, res) {
  const { method } = req;

  if (!connectionString) {
    return res
      .status(500)
      .json({ error: "Missing database connection string" });
  }

  const client = await MongoClient.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = client.db("movies"); // Replace with your database name
  const collection = db.collection("movies"); // Replace with your collection name

  try {
    switch (method) {
      case "GET":
        const data = await collection.find().toArray();
        res.status(200).json(data);
        break;
      case "POST":
        const newData = req.body;
        await collection.insertOne(newData);
        res.status(201).json({ message: "Data created successfully" });
        break;
      // Implement similar logic for PUT and DELETE methods
      default:
        res.setHeader("Allow", ["GET", "POST"]);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  } finally {
    await client.close();
  }
}
