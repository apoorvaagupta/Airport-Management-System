// noinspection JSAnnotator
const createTable = `  
  CREATE TABLE IF NOT EXISTS landing_flights(
    flight_id       int             NOT NULL,
    flight_code     varchar(10)     NOT NULL,
    dept_from       char(3)         NOT NULL,
    terminal_id     varchar(5)      NOT NULL,
    counter_id      varchar(5)      NOT NULL,
    PRIMARY KEY (flight_code,flight_id),
    CONSTRAINT flight_validity      FOREIGN KEY (flight_code,flight_id)  REFERENCES flights(flight_code,flight_id)           ON DELETE CASCADE,
    CONSTRAINT flight_dept_airport  FOREIGN KEY (dept_from)              REFERENCES airport(airport_code)                    ON DELETE CASCADE,
    CONSTRAINT flight_terminal      FOREIGN KEY (terminal_id)            REFERENCES terminals(terminal_id)                   ON DELETE RESTRICT,
    CONSTRAINT flight_baggageCntr   FOREIGN KEY (terminal_id,counter_id) REFERENCES baggage_counters(terminal_id,counter_id) ON DELETE RESTRICT,
  );
`

// noinspection JSAnnotator
const dropTable = `
  DROP TABLE IF EXISTS landing_flights;
`

module.exports = {
    createTable,
    dropTable
}