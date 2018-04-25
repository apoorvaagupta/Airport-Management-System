$(document).ready(function () {

    $("#add_flight_btn").click(function () {

        $.get('/api/airport/viewAll', function (airports) {

            let airportslist = $('#airportsList');

            for (let i = 0; i < airports.length; i++) {

                if (airports[i].airport_code === "DEL") continue;

                airportslist.append($('<option>', {
                    value: airports[i].airport_code,
                    text: airports[i].airport_code + " : " + airports[i].name + ", " + airports[i].city
                }));

            }

        });

        $.get('/api/terminals/viewAll', function (terminals) {

            let terminalslist = $('#terminalsList');

            for (let i = 0; i < terminals.length; i++) {

                if (terminals[i].terminal_id === "1" || terminals[i].terminal_id === "1C") continue;

                terminalslist.append($('<option>', {
                    value: terminals[i].terminal_id,
                    text: terminals[i].terminal_id
                }))

            }

        });

        $.get('/api/airlines/viewAll', function (airlines) {

            let airlineslist = $('#airlinesList');

            for (let i = 0; i < airlines.length; i++) {

                airlineslist.append($('<option>', {
                    value: airlines[i].airline_code,
                    text: airlines[i].airline_code + " : " + airlines[i].name
                }))

            }

        });

        $.get('/api/airplanes/viewAll', function (airplanes) {

            let airplaneslist = $('#aircraftList');

            for (let i = 0; i < airplanes.length; i++) {

                airplaneslist.append($('<option>', {
                    value: airplanes[i].reg_no,
                    text: airplanes[i].reg_no
                }))

            }

        });

        $('#terminalsList').change(function () {

            var selected = $(this).val();

            $.get('/api/runways/getAll', {terminal_id: selected}, function (runways) {

                let runwayslist = $('#runwaysList');
                $('#runwaysList').find('option').remove();

                // console.log("HEY" + terminals[0].terminal_id);
                for (let i = 0; i < runways.length; i++) {

                    runwayslist.append($('<option>', {
                        value: runways[i].runway_id,
                        text: runways[i].runway_id
                    }))

                    // console.log("HEY 4");

                }

            })

            $.get('/api/gates/getAll', {terminal_id: selected}, function (gates) {

                let gateslist = $('#gatesList');
                $('#gatesList').find('option').remove();


                // console.log("HEY" + terminals[0].terminal_id);
                for (let i = 0; i < gates.length; i++) {

                    gateslist.append($('<option>', {
                        value: gates[i].gate_id,
                        text: gates[i].gate_id
                    }))

                    // console.log("HEY 4");

                }

            })

            $.get('/api/check_in_rows/getAll', {terminal_id: selected}, function (rows) {
                let rowslist = $('#rowsList');
                $('#rowsList').find('option').remove();

                for (let i = 0; i < rows.length; i++) {

                    rowslist.append($('<option>', {
                        value: rows[i].row_id,
                        text: rows[i].row_id
                    }));

                }
            })


        });

        $.get('/api/runways/getAll', {terminal_id: "1A"}, function (runways) {

            let runwayslist = $('#runwaysList');
            $('#runwaysList').find('option').remove();

            // console.log("HEY" + terminals[0].terminal_id);
            for (let i = 0; i < runways.length; i++) {

                runwayslist.append($('<option>', {
                    value: runways[i].runway_id,
                    text: runways[i].runway_id
                }))

                // console.log("HEY 4");

            }

        });

        $.get('/api/gates/getAll', {terminal_id: "1A"}, function (gates) {

            let gateslist = $('#gatesList');
            $('#gatesList').find('option').remove();


            // console.log("HEY" + terminals[0].terminal_id);
            for (let i = 0; i < gates.length; i++) {

                gateslist.append($('<option>', {
                    value: gates[i].gate_id,
                    text: gates[i].gate_id
                }))

                // console.log("HEY 4");

            }

        });

        $.get('/api/check_in_rows/getAll', {terminal_id: "1A"}, function (rows) {
            let rowslist = $('#rowsList');
            $('#rowsList').find('option').remove();

            for (let i = 0; i < rows.length; i++) {

                rowslist.append($('<option>', {
                    value: rows[i].row_id,
                    text: rows[i].row_id
                }));

            }
        })

    });

    $.get('/api/flights_dept/viewAll', function (flights) {

        let flightslist = $('#flights-list');

        for (let i = 0; i < flights.length; i++) {

            let arr_time = flights[i].dept_time.toString();
            let time = arr_time.substring(11,16);
            let date = arr_time.substring(8,10) + "/" + arr_time.substring(5,7) + "/" + arr_time.substring(0,4);

            flightslist.append(`<li class="list-group-item">
                <div class="row text-center">
                    <div class="col">${flights[i].flight_code}</div>
                    <div class="col">${flights[i].airline_code}</div>
                    <div class="col-2"><b>${flights[i].arr_at}</b></div>
                    <div class="col-2">`+ time +`<br>` + date + `</div>
                    <div class="col">${flights[i].terminal_id}</div>
                    <div class="col">${flights[i].row_id}</div>
                    <div class="col"><b>${flights[i].gate_id}</b></div>
                    <div class="col-1">E/X</div>
                </div>
            </li>`)
        }
    });

    $("#flightsSubmit").click(function () {
        let flightID = $('#flightID').val();
        let flightCode = $('#flightCode').val();
        let arr_at = $('#airportsList').val();
        let airlineCode = $('#airlinesList').val();
        let aircraftNum = $('#aircraftList').val();
        let terminal = $('#terminalsList').val();
        let runway = $('#runwaysList').val();
        let gate = $('#gatesList').val();
        let depDate = $('#depDate').val();
        // let arrDate = $('#arrDate').val();
        let depTime = $('#depTime').val();
        // let arrTime = $('#arrTime').val();
        let row = $('#rowsList').val();

        if (!flightCode || !flightID || !arr_at || !airlineCode || !aircraftNum|| !terminal
            || !runway || !gate || !depDate /*|| !arrDate*/ || !depTime /*|| !arrTime*/ || !row) {

            $('#addFlightsError').text("Please Enter All The Details!");

        } else {

            if(depDate < '2013-01-01') console.log("Please enter valid departure date!");
            // if(arrDate > '2023-12-31') console.log("Please enter valid arrival date!");

            let dept_time = depDate + " " + depTime;
            // let arr_time = arrDate + " " + arrTime;
            let arr_time = "2024-01-01 00:01";

            $.ajax({
                url: '/api/flights_dept/add',

                data: {
                    flightID: flightID,
                    flightCode: flightCode,
                    airlineCode: airlineCode,
                    dept_time: dept_time,
                    arr_time: arr_time,
                    aircraft_no: aircraftNum,
                    terminal_id: terminal,
                    runway_id: runway,
                    gate_id: gate,
                    arr_at: arr_at,
                    row_id: row
                },
                method: 'POST'
            }).done(function (msg) {
                if (msg === "Departure flight added") {

                    $('#addArrFlightsModal').modal('hide');
                    window.location.reload();
                }
                else {
                    console.log("could not add the flight right now");
                }
            })

        }
    });

})