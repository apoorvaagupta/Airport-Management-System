$(document).ready(function () {

  $("#add_gate").click(function () {
    $.get('/api/terminals/viewAll', function (terminals) {
      let terminalslist = $('#terminalsList');
      for (let i = 0; i < terminals.length; i++) {

        terminalslist.append($('<option>', {
          value: terminals[i].terminal_id,
          text: terminals[i].terminal_id
        }))

      }

    })

  });

  $.get('/api/gates/viewAll', function (gates) {

    let gates_list = $('#gates-list');

    for (let i = 0; i < gates.length; i++) {

      gates_list.append(`<li class="list-group-item">
        <div class="row text-center">
        <div class="col">${gates[i].terminal_id}</div>
        <div class="col">${gates[i].gate_id}</div>
        <div class="col">${gates[i].capacity}</div>
      <div class="col-2">
        E/X
        </div>
        </div>
        </li>`)
    }
  })

  $('#gateSubmit').click(function () {
    let terminal_id = $('#terminalsList').find(':selected').text();
    let gate_id = $('#gateId').val();
    let capacity = $('#Capacity').val();

    if (!gate_id || !capacity || !terminal_id) {

      $('#addGatesError').text('Please Enter All The Details');

    } else {

      $.ajax({
        url: '/api/gates/add',

        data: {
          terminal_id: terminal_id,
          gate_id: gate_id,
          capacity: capacity

        },
        method: 'POST'
      }).done(function (msg) {
        if (msg === 'Gates added') {

          $('#addRunwaysModal').modal('hide');
          window.location.reload();
        }
        else {
          console.log("could not add the gates right now")
        }
      })

    }
  });

});