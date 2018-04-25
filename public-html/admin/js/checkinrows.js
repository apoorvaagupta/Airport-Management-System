$(document).ready(function () {

  $("#add_row_btn").click(function () {
    $.get('/api/terminals/viewAll', function (terminals) {

      let terminalslist = $('#terminalsList');

      // console.log("HEY" + terminals[0].terminal_id);
      for (let i = 0; i < terminals.length; i++) {

          if (terminals[i].terminal_id === "1" || terminals[i].terminal_id === "1C") continue;

        terminalslist.append($('<option>', {
          value: terminals[i].terminal_id,
          text: terminals[i].terminal_id
        }))

      }

    })

  })

  $.get('/api/check_in_rows/viewAll', function (rows) {

    let rows_list = $('#rows-list');

    for (let i = 0; i < rows.length; i++) {

      rows_list.append(`<li class="list-group-item">
        <div class="row text-center">
        <div class="col">${rows[i].terminal_id}</div>
        <div class="col">${rows[i].row_id}</div>
        <div class="col">${rows[i].num_counters}</div>
      <div class="col-2">
        E/X
        </div>
        </div>
        </li>`)
    }
  })

  $('#rowSubmit').click(function () {
    let terminal_id = $('#terminalsList').find(':selected').text();
    let row_id = $('#rowId').val();
    let no_of_counters = $('#rowCounters').val();

    if (!row_id || !no_of_counters || !terminal_id) {

      $('#addRowError').text('Please Enter All The Details');

    } else {

      $.ajax({
        url: '/api/check_in_rows/add',

        data: {
          terminal_id: terminal_id,
          row_id: row_id,
          num_counters: no_of_counters

        },
        method: 'POST'
      }).done(function (msg) {
        if (msg === 'Check_in_row added') {

          $('#addRowsModal').modal('hide');
          window.location.reload();
        }
        else {
          console.log("could not add the rows right now")
        }
      })

    }
  });


});