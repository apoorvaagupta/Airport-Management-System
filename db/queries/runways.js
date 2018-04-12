// noinspection JSAnnotator
const createTable = `
  CREATE TABLE IF NOT EXISTS runways(
    terminal_id     varchar(5)      NOT NULL,
    runway_id       varchar(5)      CONSTRAINT valid_runway_id CHECK(runway_id ~ '^[A-Za-z0-9 -]+$'),
    weight          int             NOT NULL CONSTRAINT positive_weight CHECK(weight > 0),
    PRIMARY KEY (terminal_id,runway_id),
    CONSTRAINT terminal_runways FOREIGN KEY (terminal_id) REFERENCES terminals(terminal_id) ON DELETE CASCADE
  );
`

// noinspection JSAnnotator
const dropTable = `
  DROP TABLE IF EXISTS runways;
`

module.exports = {
    createTable,
    dropTable
}