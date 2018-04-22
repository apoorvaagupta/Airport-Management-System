$(document).ready(function () {
    console.log("WHAT");
    $("#add_flight_btn").click(function () {
        console.log("LS");
        $.get('/api/terminals/viewAll', function (terminals) {

            let terminalslist = $('#terminalsList');


            console.log("HEY" + terminals[0].terminal_id);
            for (let i = 0; i < terminals.length; i++) {

                terminalslist.append($('<option>', {
                    value: terminals[i].terminal_id,
                    text: terminals[i].terminal_id
                }))

                console.log("HEY");

            }

        })

        $.get('/api/airlines/viewAll', function (airlines) {

            let airlineslist = $('#airlinessList');


           // console.log("HEY" + terminals[0].terminal_id);
            for (let i = 0; i < airlines.length; i++) {

                airlineslist.append($('<option>', {
                    value: airlines[i].airline_code,
                    text: airlines[i].airline_code
                }))

                console.log("HEY");

            }

        })
        $.get('/api/airplanes/viewAll', function (airplanes) {

            let airplaneslist = $('#aircraftsList');


            // console.log("HEY" + terminals[0].terminal_id);
            for (let i = 0; i < airplanes.length; i++) {

                airplaneslist.append($('<option>', {
                    value: airplanes[i].name,
                    text: airplanes[i].name
                }))

                console.log("HEY 4");

            }

        })
        $('#terminalsList').change(function(){

            $.get('/api/runways/getAll',{terminal_id : $(this).val()}, function (runways) {

                let runwayslist = $('#runwaysList');


                // console.log("HEY" + terminals[0].terminal_id);
                for (let i = 0; i < runways.length; i++) {

                    runwayslist.append($('<option>', {
                        value: runways[i].runway_id,
                        text: runways[i].runway_id
                    }))

                    console.log("HEY 4");

                }

            })

            $.get('/api/gates/getAll',{terminal_id : $(this).val()}, function (gates) {

                let gateslist = $('#gatesList');


                // console.log("HEY" + terminals[0].terminal_id);
                for (let i = 0; i < gates.length; i++) {

                    gateslist.append($('<option>', {
                        value: gates[i].gate_id,
                        text: gates[i].gate_id
                    }))

                    console.log("HEY 4");

                }

            })



        });




    })
})