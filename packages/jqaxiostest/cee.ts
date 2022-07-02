const { MongoClient } = require(`mongodb`);
const assert = require(`assert`);
// Connection URL
const url = `mongodb://localhost:27017`;
// Database Name
const dbName = `myproject`;

// Use connect method to connect to the server
MongoClient.connect(url, (err, client) => {
  assert.equal(null, err);
  console.log(`Connected successfully to server`);

  const db = client.db(dbName);
  insertDocuments(db);
  client.close();
});
const insertDocuments = db => {
  // Get the documents collection
  const collection = db.collection(`documents`);
  // Insert some documents
  collection.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }], (err, result) => {
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log(`Inserted 3 documents into the collection`);
  });
};
