$(document).ready(function () {

  $.get('/api/airport/viewAll', function (airports) {

    let airportslist = $('#airports-list');

    for (let i = 0; i < airports.length; i++) {

      airportslist.append(`<li class="list-group-item">
                            <div class="row text-center">
                                <div class="col-1">${airports[i].airport_code}</div>
                                <div class="col-4">${airports[i].name}</div>
                                <div class="col-2">${airports[i].city}</div>
                                <div class="col-2">${airports[i].country}</div>
                                <div class="col-2">${airports[i].contact_no}</div>
                                <div class="col-1">E/X</div>
                            </div>
                        </li>`)
    }
  })

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

  $('#airportSubmit').click(function () {
    let airportCode = $('#airportCode').val();
    let airportName = $('#airportName').val();
    let airportCity = $('#airportCity').val();
    let airportCountry = $('#airportCountry').val();
    let airportContact = $('#airportContact').val();

    if (!airportCode || !airportName || !airportCity || ! airportCountry || !airportContact ) {

      $('#addAirportsError').text('Please Enter All The Details');

    } else {

      $.ajax({
        url: '/api/airport/add',

        data: {
          airport_code: airportCode,
          name: airportName,
          city: airportCity,
          country: airportCountry,
          contact_no: airportContact,

        },
        method: 'POST'
      }).done(function (msg) {
        if (msg === 'Airport added') {

          $('#addAirportsModal').modal('hide');
          window.location.reload();
        }
        else {
          console.log("could not add the airport right now")
        }
      })

    }
  });

})