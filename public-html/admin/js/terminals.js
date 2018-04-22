$(document).ready(function () {

  $.get('/api/terminals/viewAll', function (terminals) {

    let terminalslist = $('#terminals-list');

    for (let i = 0; i < terminals.length; i++) {

      terminalslist.append(`<li class="list-group-item">
        <div class="row text-center">
        <div class="col">${terminals[i].terminal_id}</div>
        <div class="col">${terminals[i].name}</div>
      <div class="col-2">
        E/X
        </div>
        </div>
        </li>`)
    }
  })

  $('#terminalsSubmit').click(function () {
    let terminal_id = $('#terminalId').val();
    let name = $('#terminalName').val();

    if (!name || !terminal_id) {

      $('#addTerminalsError').text('Please Enter All The Details');

    } else {

      $.ajax({
        url: '/api/terminals/add',

        data: {
          terminal_id: terminal_id,
          name: name

        },
        method: 'POST'
      }).done(function (msg) {
        if (msg === 'Terminal added') {

          $('#addTerminalsModal').modal('hide');
          window.location.reload();
        }
        else {
          console.log("could not add the terminals right now")
        }
      })

    }
  });

})