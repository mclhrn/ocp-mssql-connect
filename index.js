const sql = require('mssql');

const config = {
  server: 'localhost',
  database: 'adapterservice',
  user: 'SA',
  password: process.env.SA_PASSWORD,
  options: {
    encrypt: true
  }
};

(async function() {
  try {
    await sql.connect(config);
    const result = await sql.query`SELECT name FROM sys.databases`;
    console.log(result);
  } catch (err) {
    console.error(err);
  }
})();
