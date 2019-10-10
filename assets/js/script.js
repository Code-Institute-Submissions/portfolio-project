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



/* Global variables */




var projectContent = document.getElementById("project-content");
var techUsed = document.getElementById("tech-used");
var githubLink = document.getElementById("github-link");
var deployedLink = document.getElementById("deployed-link");

function coinSpaceF() {


    projectContent.innerHTML = `<strong>Coin Space Calculator</strong> has been one of my first
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
    projectContent.innerHTML = `<strong>Mad Memory</strong> is a mini-game, written with 
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
    projectContent.innerHTML = `<strong>Brigades: The card game</strong> is a game written with
  an array of JS frameworks and libraries. It uses React to set up the interface
  together with elements of CSS and Bootstrap, used to arrange them in page. 
  The multiplayer traffic is handled by Node.js. The purpose of the game is to
  have your brigade occupying the starting position of the enemy. Each game can
  (and is recommended to be) played in teams of at least 2 players, each being
  in command of a Napoleonic brigade. 120 cards are being drawn, one at a time
  by each player. Cards provide players with options (like attacking, defending,
  fortifying, forming squares, etc). The game is played on a 100 by 100 grid
  with certain  geographical features`;

    techUsed.innerHTML = `
<i class="h2 fab fa-html5 mx-1"></i>
<i class="h2 fab fa-css3-alt mx-1"></i>
<i class="h2 fab fa-bootstrap mx-1"></i>
<i class="h2 fab fa-js-square mx-1"></i>
<i class="h2 fab fa-node-js mx-1"></i>
<i class="h2 fab fa-react mx-1"></i>
<i class="h2 icon-unity mx-1"></i>

`
    githubLink.setAttribute("href", "http://www.facebook.com");
    deployedLink.setAttribute("href", "http://www.google.com");

    return false;
}

function socialNetworkF() {
    projectContent.innerHTML = `<strong>A number of studies have found an association 
  between social media use and depression, anxiety, sleep problems, eating 
  issues, and increased suicide risk, warn researchers from the University 
  of Melbourne’s National Centre of Excellence in Youth Mental Health, 
  in an article on The Conversation. The CNC in America recently revealed 
  the suicide rate in the US has grown nearly 25% since 1999, with Dr Nassir 
  Ghaemi telling CNN part of the blame must lie with the rise of social media.
  A 2015 study by the University of Missouri found that regularly using 
  Facebook could lead to symptoms of depression if the site triggered feelings 
  of envy in the user.</strong>`;

    techUsed.innerHTML = `
<i class="h2 fab fa-html5 mx-1"></i>
<i class="h2 fab fa-css3-alt mx-1"></i>
<i class="h2 fab fa-bootstrap mx-1"></i>
<i class="h2 fab fa-js-square mx-1"></i>
<i class="h2 fab fa-vuejs mx-1"></i>
`
    githubLink.setAttribute("href", "https://www.theweek.co.uk/checked-out/90557/is-social-media-bad-for-your-mental-health");
    deployedLink.setAttribute("href", "https://www.theweek.co.uk/checked-out/90557/is-social-media-bad-for-your-mental-health");

    return false;
}

function sendForm() {
    alert("Thank you very much for your message. I will get back to you as soon as possible");
}


eloper();