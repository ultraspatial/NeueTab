// Shows the time
window.onload = function() {
  setInterval(function(){
      var date = new Date();
      var displayDate = date.toLocaleDateString();
      var displayTime = date.toLocaleTimeString();

      document.getElementById('time').innerHTML = displayTime;
      document.getElementById('date').innerHTML= displayDate
  }, 1000); // 1000 milliseconds = 1 second
}