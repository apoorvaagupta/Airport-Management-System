// noinspection JSAnnotator
const createTable = `
  CREATE TABLE IF NOT EXISTS airplanes(
    reg_no      varchar(7)      CONSTRAINT aircraft_registration_number CHECK(reg_no ~ '^[A-Z0-9 -]+$'),
    icao_code   varchar(6)      CONSTRAINT icao_code CHECK(reg_no ~ '^[A-Z0-9 -]+$'),
    name        varchar(100)    NOT NULL,
    capacity    smallint        NOT NULL CONSTRAINT positive_capacity CHECK(capacity > 0),
    weight      int             NOT NULL CONSTRAINT positive_weight CHECK(weight > 0),
    PRIMARY KEY (reg_no)
  );
`

// noinspection JSAnnotator
const dropTable = `
  DROP TABLE IF EXISTS airplanes;
`

module.exports = {
    createTable,
    dropTable
}