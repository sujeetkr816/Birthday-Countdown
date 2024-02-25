
  function startCountdown() {
    var name = document.getElementById("nameInput").value;
    var birthdate = new Date(document.getElementById("birthdateInput").value);
    var today = new Date();

    birthdate.setFullYear(today.getFullYear());

    if (birthdate < today) {
      birthdate.setFullYear(today.getFullYear() + 1);
    }

    var daysUntilBirthday = Math.ceil((birthdate - today) / (1000 * 60 * 60 * 24));

    var countdownMessage = "Hello, " + name + "! Your birthday is in " + daysUntilBirthday + " days.";
    document.getElementById("countdown").innerText = countdownMessage;
  }
