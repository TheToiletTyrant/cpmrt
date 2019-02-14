function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
  }
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }

$(document).ready(function() {
  $("#home").click(function() {
    window.location.href='https://cpmrt--raw.repl.co';
  });
  $("#cmembers").click(function() {
    window.location.href="https://nmembers--raw.repl.co";
  });
  $("#layer3").click(function() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
  });
});