// noinspection JSAnnotator
const createTable = `
  CREATE TABLE IF NOT EXISTS airport(
    airport_code  char(3)       CONSTRAINT valid_IATA_airport_code CHECK(airport_code ~ '^[A-Z]+$'),
    name          varchar(100)  NOT NULL,
    city          varchar(30)   NOT NULL,
    country       varchar(30)   NOT NULL,
    contact_no    varchar(16)   NOT NULL,
    PRIMARY KEY (airport_code) 
  );
`

// noinspection JSAnnotator
const dropTable = `
  DROP TABLE IF EXISTS airport;
`

module.exports = {
  createTable,
  dropTable
}