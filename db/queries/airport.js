const createTable = `
  CREATE TABLE IF NOT EXISTS airport(
    airport_code int check(airport_code > 0),
    name varchar(100) NOT NULL,
    city varchar(30) NOT NULL,
    country varchar(30) NOT NULL,
    contact_no int NOT NULL,
    email varchar(50) NOT NULL,
    PRIMARY KEY (airport_code) 
  );
`

const dropTable = `
  DROP TABLE IF EXISTS airport;
`

module.exports = {
  createTable,
  dropTable
}