$(document).ready(function () {

  $.get('/api/airplanes/viewAll', function (airplanes) {

    let airplaneslist = $('#airplanes-list');

    for (let i = 0; i < airplanes.length; i++) {

      airplaneslist.append(`<li class="list-group-item">
                            <div class="row text-center">
                                <div class="col">${airplanes[i].reg_no}</div>
                                <div class="col">${airplanes[i].icao_code}</div>
                                <div class="col-3">${airplanes[i].name}</div>
                                <div class="col">${airplanes[i].capacity}</div>
                                <div class="col">${airplanes[i].weight}</div>
                                <div class="col">E/X</div>
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

  $('#aircraftSubmit').click(function () {
    let aircraftregNo = $('#aircraftregNo').val();
    let icaoCode = $('#icaoCode').val();
    let aircraftName = $('#aircraftName').val();
    let aircraftCapacity = $('#aircraftCapacity').val();
    let aircraftWeight = $('#aircraftWeight').val();

    if (!aircraftregNo || !icaoCode || !aircraftName || ! aircraftCapacity || !aircraftWeight ) {

      $('#addAircraftError').text('Please Enter All The Details');

    } else {

      $.ajax({
        url: '/api/airplanes/add',

        data: {
          reg_no: aircraftregNo,
          icao_code: icaoCode,
          name: aircraftName,
          capacity: aircraftCapacity,
          weight: aircraftWeight

        },
        method: 'POST'
      }).done(function (msg) {
        if (msg === 'Airplane added') {

          $('#addAirplanesModal').modal('hide');
          window.location.reload();
        }
        else {
          console.log("could not add the airplanes right now")
        }
      })

    }
  });

})