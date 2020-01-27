const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://mongo:27017';
let db = null;

const initializeDB = async () => {
  const client = await MongoClient.connect(url, {
    auth: { user: 'julix', password: 'secret' },
    poolSize: 10,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  db = client.db('match');
};

function getClub() {
  const dataClub = db
    .collection('clubs')
    .find()
    .toArray();
  return dataClub;
}

const allInitialize = async () => {
  await initializeDB();
};

allInitialize();

module.exports = { getClub };
