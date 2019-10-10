
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

    if (i < text.length - 1) i++;
    else clearInterval(interval);
  }
  interval = setInterval(dostuff, 160);
}

eloper();

/* Global variables */


var coinSpace = document.getElementById("coin-space-calculator");
var madMemory = document.getElementById("mad-memory-game");
var brigades = document.getElementById("brigades");
var socialNetwork = document.getElementById("social-network");
var projectContent = document.getElementById("project-content");
var techUsed = document.getElementById("tech-used");
var githubLink = document.getElementById("github-link");
var deployedLink = document.getElementById("deployed-link");

function coinSpaceF() {
    projectContent.innerHTML = `Coin Space Calculator has been one of my first
    JS projects. The skeleton and the user interface is rendered using Bootstrap.
    The goal of this project is to calculate if the amount a coin is worth is 
    actually worth the space it occupie=s. For example, in Dublin, for the more
    expensive areas of the city it has become unprofitable to keep a coin of 
    1 cent inside your house as you are paying more rent for the space it occupies
    than 1 cent. The application can calculate for Dollars, Euros, Australian and
    Canadian Dollars, as well as for Yuan and Yen. It takes into consideration all
    available coins in circulation.`;

    techUsed.innerHTML = `
  <i class="h2 fab fa-html5 mx-1"></i>
  <i class="h2 fab fa-css3-alt mx-1"></i>
  <i class="h2 fab fa-bootstrap mx-1"></i>
  <i class="h2 fab fa-js-square mx-1"></i>
  <i class="h2 fab icon-jquery mx-1"></i>
  `
  githubLink.setAttribute("href", "http://www.facebook.com");
  deployedLink.setAttribute("href", "http://www.google.com");

  return false;
}

function madMemoryF() {
  projectContent.innerHTML = `Mad Memory is a mini-game, written with 
jQuery and using a basic HTML and Bootstrap skeleton. The game begins by
selecting the level of difficulty which can vary from very easy to insanely
hard. The player is given 20 cards, with 10 pairs of custom drawn cartoons,
all facing down. The player will then select one card at a time, trying 
to remember the drawing on the back. Each selected card will remain facing
upwards until a third card is selected, moment in which the previously 
selected two cards will be hidden again. In accordance with the difficulty
selected, the player has a limited amount of clicks and a limited amount of
time in which they have to find all 10 pairs using memory and dexterity skills`;

  techUsed.innerHTML = `
<i class="h2 fab fa-html5 mx-1"></i>
<i class="h2 fab fa-css3-alt mx-1"></i>
<i class="h2 fab fa-bootstrap mx-1"></i>
<i class="h2 fab fa-js-square mx-1"></i>
<i class="h2 icon-sass mx-1"></i>
`
githubLink.setAttribute("href", "http://www.facebook.com");
deployedLink.setAttribute("href", "http://www.google.com");

return false;
}

function brigadesF() {
  projectContent.innerHTML = `Mad Memory is a mini-game, written with 
jQuery and using a basic HTML and Bootstrap skeleton. The game begins by
selecting the level of difficulty which can vary from very easy to insanely
hard. The player is given 20 cards, with 10 pairs of custom drawn cartoons,
all facing down. The player will then select one card at a time, trying 
to remember the drawing on the back. Each selected card will remain facing
upwards until a third card is selected, moment in which the previously 
selected two cards will be hidden again. In accordance with the difficulty
selected, the player has a limited amount of clicks and a limited amount of
time in which they have to find all 10 pairs using memory and dexterity skills`;

  techUsed.innerHTML = `
<i class="h2 fab fa-html5 mx-1"></i>
<i class="h2 fab fa-css3-alt mx-1"></i>
<i class="h2 fab fa-bootstrap mx-1"></i>
<i class="h2 fab fa-js-square mx-1"></i>
<i class="h2 fab icon-jquery mx-1"></i>
`
githubLink.setAttribute("href", "http://www.facebook.com");
deployedLink.setAttribute("href", "http://www.google.com");

return false;
}

function socialNetworkF() {
  projectContent.innerHTML = `Mad Memory is a mini-game, written with 
jQuery and using a basic HTML and Bootstrap skeleton. The game begins by
selecting the level of difficulty which can vary from very easy to insanely
hard. The player is given 20 cards, with 10 pairs of custom drawn cartoons,
all facing down. The player will then select one card at a time, trying 
to remember the drawing on the back. Each selected card will remain facing
upwards until a third card is selected, moment in which the previously 
selected two cards will be hidden again. In accordance with the difficulty
selected, the player has a limited amount of clicks and a limited amount of
time in which they have to find all 10 pairs using memory and dexterity skills`;

  techUsed.innerHTML = `
<i class="h2 fab fa-html5 mx-1"></i>
<i class="h2 fab fa-css3-alt mx-1"></i>
<i class="h2 fab fa-bootstrap mx-1"></i>
<i class="h2 fab fa-js-square mx-1"></i>
<i class="h2 fab icon-jquery mx-1"></i>
`
githubLink.setAttribute("href", "http://www.facebook.com");
deployedLink.setAttribute("href", "http://www.google.com");

return false;
}
