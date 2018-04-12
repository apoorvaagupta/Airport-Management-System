// noinspection JSAnnotator
const createTable = `
  CREATE TABLE IF NOT EXISTS airlines(
    airline_code    char(2)         CONSTRAINT valid_IATA_airline_code CHECK(airline_code ~ '^[A-Z]+$'),
    name            varchar(100)    NOT NULL,
    PRIMARY KEY (airline_code) 
  );
`

// noinspection JSAnnotator
const dropTable = `
  DROP TABLE IF EXISTS airlines;
`

module.exports = {
    createTable,
    dropTable
}