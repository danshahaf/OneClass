const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://oneclass:<OC0716_BU>@elastic-cluster-0716-614044913946.us-east-1.docdb-elastic.amazonaws.com:27017';

// Database and collection names
const dbName = '<database-name>';
const collectionName = '<collection-name>';

// Insert item into the database
async function insertItem(item) {
  const client = new MongoClient(url);
  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const result = await collection.insertOne(item);
    console.log('Item inserted successfully:', result.insertedId);
  } catch (err) {
    console.error('Error inserting item:', err);
  } finally {
    await client.close();
  }
}

// Edit item in the database
async function editItem(itemId, updatedItem) {
  const client = new MongoClient(url);
  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const result = await collection.updateOne({ _id: itemId }, { $set: updatedItem });
    console.log('Item edited successfully:', result.modifiedCount);
  } catch (err) {
    console.error('Error editing item:', err);
  } finally {
    await client.close();
  }
}

// Remove item from the database
async function removeItem(itemId) {
  const client = new MongoClient(url);
  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const result = await collection.deleteOne({ _id: itemId });
    console.log('Item removed successfully:', result.deletedCount);
  } catch (err) {
    console.error('Error removing item:', err);
  } finally {
    await client.close();
  }
}


// Get all items from the database
async function getItems() {
    const client = new MongoClient(url);
    try {
      await client.connect();
      const db = client.db(dbName);
      const collection = db.collection(collectionName);
      const items = await collection.find({}).toArray();
      console.log('All Items:', items);
    } catch (err) {
      console.error('Error retrieving items:', err);
    } finally {
      await client.close();
    }
  }

// Usage example
(async function () {
    const itemToInsert = { name: 'Example Item', price: 9.99 };
    await insertItem(itemToInsert);
    await getItems();
  
    const itemIdToUpdate = '<item-id-to-update>';
    const updatedItem = { price: 14.99 };
    await editItem(itemIdToUpdate, updatedItem);
    await getItems();
  
    const itemIdToRemove = '<item-id-to-remove>';
    await removeItem(itemIdToRemove);
    await getItems();
  })();