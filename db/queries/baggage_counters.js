// noinspection JSAnnotator
const createTable = `
  CREATE TABLE IF NOT EXISTS baggage_counters(
    terminal_id     varchar(5)      NOT NULL,
    counter_id      varchar(5)      CONSTRAINT valid_counter_id CHECK(counter_id ~ '^[A-Za-z0-9 -]+$'),
    capacity        smallint        NOT NULL CONSTRAINT positive_capacity CHECK(capacity > 0),
    PRIMARY KEY (terminal_id,counter_id),
    CONSTRAINT terminal_baggageCounter FOREIGN KEY (terminal_id) REFERENCES terminals(terminal_id) ON DELETE CASCADE
  );
`

// noinspection JSAnnotator
const dropTable = `
  DROP TABLE IF EXISTS baggage_counters;
`

module.exports = {
    createTable,
    dropTable
}