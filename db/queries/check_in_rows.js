// noinspection JSAnnotator
const createTable = `
  CREATE TABLE IF NOT EXISTS check_in_rows(
    terminal_id     varchar(5)      NOT NULL,
    row_id          varchar(5)      CONSTRAINT valid_row_id CHECK(row_id ~ '^[A-Za-z0-9 -]+$'),
    num_counters    smallint        NOT NULL CONSTRAINT positive_num_counters CHECK(num_counters > 0),
    PRIMARY KEY (terminal_id,row_id),
    CONSTRAINT terminal_checkInRows FOREIGN KEY (terminal_id) REFERENCES terminals(terminal_id) ON DELETE CASCADE
  );
`

// noinspection JSAnnotator
const dropTable = `
  DROP TABLE IF EXISTS check_in_rows;
`

module.exports = {
    createTable,
    dropTable
}