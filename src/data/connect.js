const connect = () => {
    const { MongoClient } = require('mongodb');

    const uri = "mongodb+srv://Helixcoders:Baroncysteine%401@spikedb.avwhy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    return { client }
}

export default connect