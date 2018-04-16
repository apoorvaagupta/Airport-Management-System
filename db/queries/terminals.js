// noinspection JSAnnotator
const createTable = `
  CREATE TABLE IF NOT EXISTS terminals(
    terminal_id     varchar(5)      CONSTRAINT valid_terminal_id CHECK(terminal_id ~ '^[A-Za-z0-9 -]+$'),
    name            varchar(100)    NOT NULL,
    PRIMARY KEY (terminal_id)
  );
`

// noinspection JSAnnotator
const dropTable = `
  DROP TABLE IF EXISTS terminals;
`

module.exports = {
    createTable,
    dropTable
}