$(document).ready(() => {

  $('#btn-login').click(() => {

  if(!($('#username').val()) || !($('#password').val()))
      $('#loginError').text('Please Enter All The Details');
  else
      window.location.href = "/flights"
  })

})