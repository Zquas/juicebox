async function getAllUsers() {
    const { rows } = await client.query(
      `SELECT id, username 
      FROM users;
    `);
  
    return rows;
  }
  
  // and export them
  module.exports = {
    client,
    getAllUsers,
  }