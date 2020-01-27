const clubsStore = require('../store/clubsStore');

const listClub = async (req, res) => {
  try {
    const data = await clubsStore.getClub();
    res.send(data);
  } catch (e) {
    console.error(e);
  }
};

module.exports = { listClub };
