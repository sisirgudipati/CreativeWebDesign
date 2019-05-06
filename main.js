
function image(img){
  let modal = document.getElementById("myModal");
  let imager = document.getElementById("img01");
  let captionText = document.getElementById("caption");
  let nextButton = document.getElementById("next");
  let previousButton = document.getElementById("previous");
  let value = img.id;
  nextButton.value = value;
  previousButton.value = value;
  modal.style.display = "block";
  imager.src = img.src;
  captionText.innerHTML = img.alt;

}
let span = document.getElementsByClassName("close")[0];
span.onclick = function(){
  let modal = document.getElementById("myModal");
  modal.style.display = "none";
}

function switchNext(){
  let nextButton = document.getElementById("next");
  let id = nextButton.value;
  if (id == 12){
    id = 1;
  }
  else {
    id = +id + +1;
  }
  let img = document.getElementById(id);
  image(img);
}
function switchBack(){
  let backButton = document.getElementById("previous");
  let id = backButton.value;
  if (id == 1){
    id = 12;
  }
  else {
    --id;
  }
  let img = document.getElementById(id);
  image(img);
}

function sendEmail(){
  const api_key = "b2a7eede87fb5ed77a14f4a7a0c8f6d6-e566273b-35b73641";
  const mailgun = require("mailgun-js");
  const DOMAIN = 'YOUR_DOMAIN_NAME';
  const mg = mailgun({apiKey: api_key, domain: DOMAIN});
  const data = {
  	from: 'Excited User <me@samples.mailgun.org>',
  	to: 'bar@example.com, YOU@YOUR_DOMAIN_NAME',
  	subject: 'Hello',
  	text: 'Testing some Mailgun awesomness!'
  };
  mg.messages().send(data, function (error, body) {
  	console.log(body);
  });
}
