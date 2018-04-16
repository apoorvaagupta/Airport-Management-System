// noinspection JSAnnotator
const createTable = `  
  CREATE TABLE IF NOT EXISTS takeoff_flights(
    flight_id       int             NOT NULL,
    flight_code     varchar(10)     NOT NULL,
    arr_at          char(3)         NOT NULL,
    terminal_id     varchar(5)      NOT NULL,
    row_id          varchar(5)      NOT NULL,
    PRIMARY KEY (flight_code,flight_id),
    CONSTRAINT flight_validity      FOREIGN KEY (flight_code,flight_id)  REFERENCES flights(flight_code,flight_id) ON DELETE CASCADE,
    CONSTRAINT flight_arr_airport   FOREIGN KEY (arr_at)             REFERENCES airport(airport_code)              ON DELETE CASCADE,
    CONSTRAINT flight_terminal      FOREIGN KEY (terminal_id)        REFERENCES terminals(terminal_id)             ON DELETE RESTRICT,
    CONSTRAINT flight_checkInRow    FOREIGN KEY (terminal_id,row_id) REFERENCES check_in_rows(terminal_id,row_id)  ON DELETE RESTRICT,
  );
`

// noinspection JSAnnotator
const dropTable = `
  DROP TABLE IF EXISTS takeoff_flights;
`

module.exports = {
    createTable,
    dropTable
}