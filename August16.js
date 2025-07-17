$(document).ready(function () {
  var envelope = $("#envelope");
  var btn_open = $("#open");
  var btn_reset = $("#reset");
  var non = $("#no");

  envelope.click(function () {
    open();
  });
  btn_open.click(function () {
    open();
  });
  btn_reset.click(function () {
    close();
  });
  non.click(function () {
  Show();
 });

  function open() {
    envelope.addClass("open").removeClass("close");
  }
  function close() {
    envelope.addClass("close").removeClass("open");
  }
});
 function Show() {
  document.getElementById("nuh-uh").style.display = "block";
 };

  window.addEventListener('load', () => {
    confetti({
      particleCount: 100,
      spread: 100,
      origin: { y: 0.6 } // drop from a bit lower
    });
  });

document.querySelectorAll('.strip').forEach(strip => {
  strip.addEventListener('click', () => {
    strip.classList.toggle('active');
  });
});


