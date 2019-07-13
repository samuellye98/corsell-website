const Pool = require('pg').Pool
const pool = new Pool({
  user: 'corsell',
  host: 'localhost',
  database: 'corsell',
  password: 'password',
  port: 5432,
})

pool.on('connect', () => {
  console.log('connected to the db');
});

// pool.end(() => {
//   console.log('connection ended')
// })

pool.query('DROP TABLE IF EXISTS asdf')
  .then((res) => {
    console.log(res)
    pool.end()
  })
  .catch((err) => {
    console.log(err)
    pool.end()
  })
