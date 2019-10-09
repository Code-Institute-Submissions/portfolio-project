$(document).ready(function() {
  $("#coin-space-calculator").on("click", function() {
    return false;
  });

  $("#mad-memory-game").on("click", function() {
    return false;
  });

  $("#the-brigades").on("click", function() {
    return false;
  });

  $("#social-network").on("click", function() {
    return false;
  });

  /* Function taken from StackOverflow and modified.
  Source: https://stackoverflow.com/questions/9383016/for-loop-at-an-interval */
  function eloper() {
    $("#empty-line").remove();
    let interval;
    let i = 0;
    let textInitial = "Full Stack Developer";
    let text = textInitial.split("");
    function dostuff() {
      $("#eloper").append(text[i]);

      if (i < text.length) i++;
      else clearInterval(interval);
    }
    interval = setInterval(dostuff, 160);
    return false;
  }

  eloper();

  if ($(window).width() < 480) {
    $("input").addClass("form-control");
  }
});

/* jQuery media */
