// Module used for 6 Most Recent Posts 
// TODO: UPDATE TO ONLY INCLUDE APPROVED POSTS
const db = require('../connection');

const GET_6_RECENT_ITEMS = `SELECT * FROM items WHERE status = 'Approved' ORDER BY item_id DESC LIMIT 6`;

const get6RecentItems = () => {
  // Query the DB and return results
  return db.any(GET_6_RECENT_ITEMS);
};

module.exports = get6RecentItems;
