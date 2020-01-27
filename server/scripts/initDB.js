const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
let db = null;

const clubData = [
  {
    name: 'club-julix',
  },
  {
    name: 'club-rebibix',
  },
  {
    name: 'club-melanix',
  },
  {
    name: 'club-jonix',
  },
];

const initializeDB = async () => {
  const client = await MongoClient.connect(url, {
    auth: { user: 'julix', password: 'secret' },
    poolSize: 10,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  db = client.db('match');
};

const addData = async () => {
  const data = await db.collection('clubs').insertMany(clubData);
  console.log(data);
  return data;
};

const clearDB = async () => {
  return await db.dropDatabase();
};

const allInitialize = async () => {
  await initializeDB();
  await clearDB();
  await addData(clubData);
};

allInitialize();
