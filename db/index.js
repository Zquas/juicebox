const { Client } = require('pg');

const client = new Client(`postgres://localhost/juicebox-dev`);

module.exports = {
    client,
}

async function createUser({ username, password }) {
    try {  
      const { rows } = await client.query(
        `SELECT id, username 
        FROM users;
      `, [username, password]);
    
      return rows;
    } catch (error) {
      throw error;
    }
  }

module.exports = {
    createUser
    // add createUser here!
  }