
  /* Function taken from StackOverflow and modified.
  Source: https://stackoverflow.com/questions/9383016/for-loop-at-an-interval */
  function eloper() {
    var eloperElement = document.getElementById("full-stack-title");
    let interval;
    let i = 0;
    let textInitial = "Full Stack Developer";
    let text = textInitial.split("");
    function dostuff() {
      eloperElement.append(text[i]);

      if (i < text.length -1) i++;
      else clearInterval(interval);
    }
    interval = setInterval(dostuff, 160);
  }

  eloper();

