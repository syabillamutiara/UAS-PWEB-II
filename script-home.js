function displayTime(){
  var dateTime = new Date();
  var hrs = dateTime.getHours();
  var min = dateTime.getMinutes();
  var sec = dateTime.getSeconds();
  var session = document.getElementById('session');
  var ucapan = document.getElementById('ucapan');
  // var background = document.getElementsbyTagName('body');

  if (hrs >= 12) {
    session.innerHTML = 'PM';
  } 
  else {
    session.innerHTML = 'AM';
  }

  if (5 <= hrs&&hrs < 12) {
    ucapan.innerHTML = 'Hello, Good Morning!';
  }
  else if (12 <= hrs&&hrs < 18) {
    ucapan.innerHTML = 'Hello, Good Afternoon!';
  }
  else if (18 <= hrs&&hrs <= 20) {
    ucapan.innerHTML = 'Hello, Good Evening!';
  }
  else if (20 < hrs&&hrs <= 24) {
    ucapan.innerHTML = 'Hello, Good Night!';
  }
  else if (0 <= hrs&&hrs < 5) {
    ucapan.innerHTML = 'Hello, Good Night!';
  }

  document.getElementById('hours').innerHTML = hrs;
  document.getElementById('minutes').innerHTML = min;
  document.getElementById('seconds').innerHTML = sec;
}

setInterval(displayTime, 1000);

var time = new Date().getHours();
  if (document.body) {
    if (5 <= time&&time < 12) {
      document.body.background = '../pagi.jpg';
    }
    else if (12 <= time&&time < 16) {
      document.body.background = '../siang.jpg';
    }
    else if (16 <= time&&time <= 18) {
      document.body.background = '../sore.jpg';
    }
    else if (18 < time&&time <= 24) {
      document.body.background = '../malam.jpg';
    }
    else if (0 <= time&&time < 5) {
      document.body.background = '../malam.jpg';
    }
  }