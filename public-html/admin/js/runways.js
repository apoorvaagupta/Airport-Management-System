$(document).ready(function () {

  $("#add_runways_btn").click(function () {
    $.get('/api/terminals/viewAll', function (terminals) {

      let terminalslist = $('#terminalsList');
      for (let i = 0; i < terminals.length; i++) {
        terminalslist.append($('<option>', {
          value: terminals[i].terminal_id,
          text: terminals[i].terminal_id
        }))
      }

    })

  })

  $.get('/api/runways/viewAll', function (runways) {

    let runways_list = $('#runways-list');

    for (let i = 0; i < runways.length; i++) {

      runways_list.append(`<li class="list-group-item">
        <div class="row text-center">
        <div class="col">${runways[i].terminal_id}</div>
        <div class="col">${runways[i].runway_id}</div>
        <div class="col">${runways[i].weight}</div>
      <div class="col-2">
        E/X
        </div>
        </div>
        </li>`)
    }
  })

  $('#runwaySubmit').click(function () {
    let terminal_id = $('#terminalsList').find(':selected').text();
    let runway_id = $('#runwayId').val();
    let weight = $('#runwayWeight').val();

    if (!runway_id || !weight || !terminal_id) {

      $('#addRunwayError').text('Please Enter All The Details');

    } else {

      $.ajax({
        url: '/api/runways/add',

        data: {
          terminal_id: terminal_id,
          runway_id: runway_id,
          weight: weight

        },
        method: 'POST'
      }).done(function (msg) {
        if (msg === 'Runways added') {

          $('#addRunwaysModal').modal('hide');
          window.location.reload();
        }
        else {
          console.log("could not add the runways right now")
        }
      })

    }
  });

});