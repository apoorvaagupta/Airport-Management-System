$(document).ready(function () {

  $("#add_baggage_btn").click(function () {
    $.get('/api/terminals/viewAll', function (terminals) {
      let terminalslist = $('#terminalsList');
      for (let i = 0; i < terminals.length; i++) {

          if (terminals[i].terminal_id === "1A" || terminals[i].terminal_id === "1D") continue;

        terminalslist.append($('<option>', {
          value: terminals[i].terminal_id,
          text: terminals[i].terminal_id
        }))

      }

    })

  })

  $.get('/api/baggage_counters/viewAll', function (baggage_counters) {

    let baggage_counters_list = $('#counters-list');

    for (let i = 0; i < baggage_counters.length; i++) {

      baggage_counters_list.append(`<li class="list-group-item">
        <div class="row text-center">
        <div class="col">${baggage_counters[i].terminal_id}</div>
        <div class="col">${baggage_counters[i].counter_id}</div>
        <div class="col">${baggage_counters[i].capacity}</div>
      <div class="col-2">
        E/X
        </div>
        </div>
        </li>`)
    }
  })

  $('#counterSubmit').click(function () {
    let terminal_id = $('#terminalsList').find(':selected').text();
    let counter_id = $('#counterId').val();
    let counter_capacity = $('#counterCapacity').val();
    console.log(terminal_id + counter_id + counter_capacity);

    if (!counter_id || !counter_capacity || !terminal_id) {

      $('#addCountersError').text('Please Enter All The Details');

    } else {

      $.ajax({
        url: '/api/baggage_counters/add',

        data: {
          terminal_id: terminal_id,
          counter_id: counter_id,
          capacity: counter_capacity

        },
        method: 'POST'
      }).done(function (msg) {
        if (msg === 'Baggage counters added') {

          $('#addCountersModal').modal('hide');
          window.location.reload();
        }
        else {
          console.log("could not add the counters right now")
        }
      })

    }
  });

});