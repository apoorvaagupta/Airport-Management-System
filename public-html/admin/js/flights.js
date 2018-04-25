$(document).ready(function () {

    $("#add_flight_btn").click(function () {
        // console.log("LS");

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

                if (terminals[i].terminal_id === "1A" || terminals[i].terminal_id === "1D") continue;

                terminalslist.append($('<option>', {
                    value: terminals[i].terminal_id,
                    text: terminals[i].terminal_id
                }))

            }

        });

        $.get('/api/airlines/viewAll', function (airlines) {

            let airlineslist = $('#airlinesList');


            // console.log("HEY" + terminals[0].terminal_id);
            for (let i = 0; i < airlines.length; i++) {

                airlineslist.append($('<option>', {
                    value: airlines[i].airline_code,
                    text: airlines[i].airline_code + " : " + airlines[i].name
                }))

                // console.log("HEY - airlineslist");

            }

        });

        $.get('/api/airplanes/viewAll', function (airplanes) {

            let airplaneslist = $('#aircraftList');


            // console.log("HEY" + terminals[0].terminal_id);
            for (let i = 0; i < airplanes.length; i++) {

                airplaneslist.append($('<option>', {
                    value: airplanes[i].reg_no,
                    text: airplanes[i].reg_no
                }))

                // console.log("HEY 4");

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

            $.get('/api/baggage_counters/getAll', {terminal_id: selected}, function (counters) {
                let counterslist = $('#countersList');
                $('#countersList').find('option').remove();

                for (let i = 0; i < counters.length; i++) {

                    counterslist.append($('<option>', {
                        value: counters[i].counter_id,
                        text: counters[i].counter_id
                    }));

                }
            })


        });

        $.get('/api/runways/getAll', {terminal_id: "1"}, function (runways) {

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

        $.get('/api/gates/getAll', {terminal_id: "1"}, function (gates) {

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

        $.get('/api/baggage_counters/getAll', {terminal_id: "1"}, function (counters) {
            let counterslist = $('#countersList');
            $('#countersList').find('option').remove();

            for (let i = 0; i < counters.length; i++) {

                counterslist.append($('<option>', {
                    value: counters[i].counter_id,
                    text: counters[i].counter_id
                }));

            }
        })

    });

    $.get('/api/flights/viewAll', function (flights) {

        let flightslist = $('#flights-list');

        for (let i = 0; i < flights.length; i++) {

            let arr_time = flights[i].arr_time.toString();
            let time = arr_time.substring(11,16);
            let date = arr_time.substring(8,10) + "/" + arr_time.substring(5,7) + "/" + arr_time.substring(0,4);

            flightslist.append(`<li class="list-group-item">
                <div class="row text-center">
                    <div class="col">${flights[i].flight_code}</div>
                    <div class="col">${flights[i].airline_code}</div>
                    <div class="col-2"><b>${flights[i].dept_from}</b></div>
                    <div class="col-2">`+ time +`<br>` + date + `</div>
                    <div class="col">${flights[i].terminal_id}</div>
                    <div class="col">${flights[i].gate_id}</div>
                    <div class="col"><b>${flights[i].counter_id}</b></div>
                    <div class="col-1">E/X</div>
                </div>
            </li>`)
        }
    });

    $("#flightsSubmit").click(function () {
        let flightID = $('#flightID').val();
        let flightCode = $('#flightCode').val();
        let dept_from = $('#airportsList').val();
        let airlineCode = $('#airlinesList').val();
        let aircraftNum = $('#aircraftList').val();
        let terminal = $('#terminalsList').val();
        let runway = $('#runwaysList').val();
        let gate = $('#gatesList').val();
        // let depDate = $('#depDate').val();
        let arrDate = $('#arrDate').val();
        // let depTime = $('#depTime').val();
        let arrTime = $('#arrTime').val();
        let counter = $('#countersList').val();

        if (!flightCode || !flightID || !dept_from || !airlineCode || !aircraftNum|| !terminal
            || !runway || !gate /*|| !depDate*/ || !arrDate /*|| !depTime*/ || !arrTime || !counter) {

            $('#addFlightsError').text("Please Enter All The Details!");

        } else {

            // if(depDate < '2013-01-01') console.log("Please enter valid departure date!");
            if(arrDate > '2023-12-31') console.log("Please enter valid arrival date!");

            // let dept_time = depDate + " " + depTime;
            let dept_time = "2012-12-31 23:59";
            let arr_time = arrDate + " " + arrTime;

            $.ajax({
                url: '/api/flights/add',

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
                    dept_from: dept_from,
                    counter_id: counter
                },
                method: 'POST'
            }).done(function (msg) {
                if (msg === "Arrival flight added") {

                    $('#addArrFlightsModal').modal('hide');
                    window.location.reload();
                }
                else {
                    console.log("could not add the flight right now")
                }
            })

        }
    });

    // $.get('/api/v1/batches/' + batchId, function (batch) {
    //   $('#title').text("Lectures for " + batch.data.name + " Batch");
    //   let lectures = batch.data.lectures;
    //   lectures.sort(function (a, b) {
    //     return (+a.id) - (+b.id);
    //   });
    //   let lecturesList = $('#minicourses-list');
    //   for (let i = 0; i < lectures.length; i++) {
    //
    //     lecturesList.append(`<li class="list-group-item" style="height: auto">
    //               <div class="row">
    //                   <div class="col-2">` + lectures[i].name + `</div>
    //                   <div class="col-2">` + (lectures[i].date ? lectures[i].date.split('T')[0] : '-') + `</div>
    //                   <div class="col-2">` + (lectures[i].startTime ? lectures[i].startTime.split('T')[1].split(':00.000')[0] : '-') + `</div>
    //                   <div class="col-1">` + (lectures[i].endTime ? lectures[i].endTime.split('T')[1].split(':00.000')[0] : '-') + `</div>
    //                   <div class="col-2">` + (lectures[i].teacher ? lectures[i].teacher.name : '-') + `</div>
    //                   <div class="col-1">` + (lectures[i].room ? lectures[i].room.name : '-') + `</div>
    //                   <div class="col-2">
    //                       <i class="fa fa-times cancel" style="color: orange; font-size: 24px"  lecture-id="` + lectures[i].id + `"></i>&nbsp;&nbsp;
    //                       <i class="fa fa-pencil edit" style="color: #1EB3E2; font-size: 24px"  lecture-id="` + lectures[i].id + `"></i>&nbsp;&nbsp;&nbsp;
    //                       <i class="fa fa-trash-o delete" style="color: red; font-size: 24px"  lecture-id="` + lectures[i].id + `"></i>
    //                   </div>
    //               </div>
    //           </li>`)
    //   }
    //
    //   $('.cancel').click(function (e) {
    //     let lectureId = e.target.getAttribute('lecture-id');
    //     $.ajax({
    //       url: '/api/v1/lectures/cancel/' + lectureId,
    //       method: 'PUT',
    //       headers: {
    //         "Authorization": "Bearer " + localStorage.getItem("clienttoken")
    //       }
    //     }).done(function (res) {
    //       if (res.success === true) {
    //         window.location.reload();
    //       } else {
    //         window.alert('Could Not Delete The Lecture Right Now!')
    //       }
    //     })
    //   })
    //
    //   $('.edit').click(function (e) {
    //     let lectureId = e.target.getAttribute('lecture-id');
    //     $.get('/api/v1/lectures/' + lectureId, function (lecture) {
    //       if (lecture.success === true) {
    //         $('#editLectureName').val(lecture.data.name);
    //         $('option[value="' + lecture.data.teacherId + '"][name="teacher"]').attr('selected', true);
    //         $('option[value="' + lecture.data.roomId + '"][name="room"]').attr('selected', true);
    //
    //         $('#editLecturesModal').modal('show');
    //
    //         $('#editLectureSave').click(function () {
    //
    //           let name = $('#editLectureName').val();
    //           let teacherId = $('#editTeachersList').val();
    //           let roomId = $('#editRoomsList').val();
    //           if (!name || !roomId || !teacherId) {
    //
    //             $('#editLecturesError').text('Please Enter All The Details');
    //
    //           } else {
    //             $.ajax({
    //
    //               url: '/api/v1/lectures/' + lectureId,
    //               data: {
    //                 values: {
    //                   name: name,
    //                   teacherId: teacherId,
    //                   roomId: roomId
    //                 }
    //               },
    //               method: 'PUT',
    //               headers: {
    //                 "Authorization": "Bearer " + localStorage.getItem("clienttoken")
    //               }
    //             }).done(function (lecture) {
    //
    //               if (lecture.success === true) {
    //
    //                 $('#editLecturesModal').modal('hide');
    //                 window.location.reload();
    //               }
    //               else {
    //                 console.log("could not edit the room right now")
    //               }
    //             });
    //
    //           }
    //         })
    //       }
    //     })
    //   })
    //
    //   $('.delete').click(function (e) {
    //     let lectureId = e.target.getAttribute('lecture-id');
    //     $.ajax({
    //       url: '/api/v1/lectures/' + lectureId,
    //       method: 'DELETE',
    //       headers: {
    //         "Authorization": "Bearer " + localStorage.getItem("clienttoken")
    //       }
    //     }).done(function (res) {
    //       if (res.success === true) {
    //         window.location.reload();
    //       } else {
    //         window.alert('Could Not Delete The Lecture Right Now!')
    //       }
    //     })
    //   })
    //
    // })


})