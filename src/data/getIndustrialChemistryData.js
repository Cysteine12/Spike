import connect from "./connect"

const { client } = connect()

async function run() {
    try {
      await client.connect();
      const database = client.db('ChemiatryDB');
      const ichDB = database.collection('IndustrialChemistryDB');
      // Query for a movie that has the title 'Back to the Future'
      const query = { id: 1 };
      const data = await ichDB.findOne(query);
      console.log(data);
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
  run().catch(console.dir);