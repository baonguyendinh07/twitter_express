
import { MongoClient } from 'mongodb';

class DatabaseService {
  private uri:string

  public constructor () {
    this.uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_SERVERNAME}.rvkkf.mongodb.net/?retryWrites=true&w=majority&appName=${process.env.DB_SERVERNAME}`
  }

  async ConnectDatabase () {
    const client = new MongoClient(this.uri);
    try {
      // Send a ping to confirm a successful connection
      await client.db("admin").command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
}

const databaseService = new DatabaseService();
export default databaseService;