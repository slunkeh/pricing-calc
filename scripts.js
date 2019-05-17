/* 
1. Get slider elements
2. 
*/


const slider = document.getElementById("myRange");
const output = document.getElementById("demo");
output.innerHTML = slider.value;


slider.oninput = function() {
  output.innerHTML = this.value;
}

// Arrays

let total = 0;

const requestURL = 'pages.json';
const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
  var superHeroes = request.response;
  populateHeader(superHeroes);
  showHeroes(superHeroes);
}

const pages = ["1-10", "10-50", "50-150", "150-250", "250+"];
const style = ["none", "simple", "moderate", "high", "best"];
const copywriting = ["none", "5-10", "10-25", "25-50"];
const seo = ["none", "30kw", "80kw", "150kw"];
let responsive = true;
const database = ["none", "basic", "advanced", "full"];
const ecom = ["none", "basic", "advanced", "full"];
const cms = ["none", "basic", "advanced", "full"];
