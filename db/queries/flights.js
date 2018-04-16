// noinspection JSAnnotator
const createTable = `  
  CREATE TABLE IF NOT EXISTS flights(
    flight_id       int             NOT NULL,
    flight_code     varchar(10)     NOT NULL CONSTRAINT valid_flight_code CHECK(flight_code ~ '^[A-Za-z0-9 -]+$'),
    airline_code    char(2)         NOT NULL,
    dept_time       timestamptz     NOT NULL,
    arr_time        timestamptz     NOT NULL,
    type            char(1)         NOT NULL CONSTRAINT valid_flight_type CHECK (type in ('D','L')),
    aircraft_no     varchar(7)      NOT NULL,
    terminal_id     varchar(5)      NOT NULL,
    runway_id       varchar(5)      NOT NULL,
    gate_id         varchar(5)      NOT NULL,
    CONSTRAINT flight_time_validity CHECK(dept_time < arr_time),
    PRIMARY KEY (flight_code,flight_id),
    CONSTRAINT flight_airline   FOREIGN KEY (airline_code)          REFERENCES airlines(airline_code)           ON DELETE CASCADE,
    CONSTRAINT flight_aircraft  FOREIGN KEY (aircraft_no)           REFERENCES airplanes(reg_no)                ON DELETE RESTRICT,
    CONSTRAINT flight_terminal  FOREIGN KEY (terminal_id)           REFERENCES terminals(terminal_id)           ON DELETE RESTRICT,
    CONSTRAINT flight_runway    FOREIGN KEY (terminal_id,runway_id) REFERENCES runways(terminal_id,runway_id)   ON DELETE RESTRICT,
    CONSTRAINT flight_gate      FOREIGN KEY (terminal_id,gate_id)   REFERENCES gates(terminal_id,gate_id)       ON DELETE RESTRICT 
  );
`

// noinspection JSAnnotator
const dropTable = `
  DROP TABLE IF EXISTS flights;
`

module.exports = {
    createTable,
    dropTable
}