(function () {
  let hour = document.querySelector(".hour");
  let minute = document.querySelector(".minute");
  let sec = document.querySelector(".sec");
  let startBtn = document.querySelector(".start");
  let stopBtn = document.querySelector(".stop");
  let resetBtn = document.querySelector(".reset");

  let countDownTimer = null;
  // console.log(startBtn)
  startBtn.addEventListener("click", function () {
    if (hour.value == 0 && minute.value == 0 && sec.value == 0) return;

    function startInterval() {
      startBtn.style.display = "none";
      stopBtn.style.display = "initial";

      countDownTimer = setInterval(function () {
        timer();
      }, 1000);
    }
    startInterval();
  });

  function timer() {
    if (sec.value > 60) {
      minute.value++;
      sec.value = parseInt(sec.value) - 59;
    }
    if (minute.value > 60) {
      hour.value++;
      minute.value = parseInt(minute.value) - 60;
    }
    if (hour.value == 0 && minute.value == 0 && sec.value == 0) {
      hour.value = "";
      minute.value = "";
      sec.value = "";
      stopInterval();
    } else if (sec.value != 0) {
      sec.value = `${sec.value <= 10 ? "0" : ""}${sec.value - 1}`;
    } else if (minute.value != 0 && sec.value == 0) {
      sec.value = 59;
      minute.value = `${minute.value <= 10 ? "0" : ""}${minute.value - 1}`;
    } else if (hour.value != 0 && minute.value == 0) {
      minute.value = 60;
      hour.value = `${hour.value <= 10 ? "0" : ""}${hour.value - 1}`;
    }
    return;
  }

  function stopInterval(state) {

    startBtn.innerHTML = state === "pause" ? "Continue" : "Start";
    stopBtn.style.display = "none";
    startBtn.style.display = "initial";
    clearInterval(countDownTimer);
  }
  stopBtn.addEventListener("click", function () {
    stopInterval("pause");
  });


  resetBtn.addEventListener("click", function () {
    hour.value = "";
    minute.value = "";
    sec.value = "";

    stopInterval();
  });

})();
