import "dotenv/config";
import { MongoClient } from "mongodb";
import { NextResponse, NextRequest } from "next/server";


export async function GET(req: NextRequest, res: NextResponse) {
  const connectionString = process.env.DB_CONNECTION_STRING;

  const client = await MongoClient.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = client.db("movies"); // database name
  const collection = db.collection("movies"); // collection name
  const movies = await collection.find().toArray(); // get movies

  return NextResponse.json(movies);
}
