import { MongoClient } from "mongodb";
function MongoDBThing(){
    

    // Replace the uri string with your MongoDB deployment's connection string.
    const uri = "mongodb://myDBReader:D1fficultP%40ssw0rd@mongodb0.example.com:27017/?authSource=admin";
    
    const client = new MongoClient(uri);
    
    async function run() {
      try {
        const database = client.db("sample_mflix");
        const movies = database.collection("movies");
    
        // query for movies that have a runtime less than 15 minutes
        const query = { runtime: { $lt: 15 } };
    
        const options = {
          // sort returned documents in ascending order by title (A->Z)
          sort: { title: 1 },
          // Include only the `title` and `imdb` fields in each returned document
          projection: { _id: 0, title: 1, imdb: 1 },
        };
    
        const cursor = movies.find(query, options);
    
        // print a message if no documents were found
        if ((await movies.countDocuments(query)) === 0) {
          console.log("No documents found!");
        }
    
        for await (const doc of cursor) {
          console.dir(doc);
        }
    
      } finally {
        await client.close();
      }
    }
    run().catch(console.dir);
    

}

export default MongoDBThing;