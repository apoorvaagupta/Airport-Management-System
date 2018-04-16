// noinspection JSAnnotator
const createTable = `
  CREATE TABLE IF NOT EXISTS gates(
    terminal_id     varchar(5)      NOT NULL,
    gate_id         varchar(5)      CONSTRAINT valid_gate_id CHECK(gate_id ~ '^[A-Za-z0-9 -]+$'),
    capacity        int             NOT NULL CONSTRAINT positive_capacity CHECK(capacity > 0),
    PRIMARY KEY (terminal_id,gate_id),
    CONSTRAINT terminal_gates FOREIGN KEY (terminal_id) REFERENCES terminals(terminal_id) ON DELETE CASCADE
  );
`

// noinspection JSAnnotator
const dropTable = `
  DROP TABLE IF EXISTS gates;
`

module.exports = {
    createTable,
    dropTable
}