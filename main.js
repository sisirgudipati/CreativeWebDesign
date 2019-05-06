
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

function getYe(){
  let quote ="";
  var xhttp0 = new XMLHttpRequest();
  xhttp0.onreadystatechange=function(){
    if(this.readyState==4 && this.status==200){
      quote=JSON.parse(this.responseText).quote;
      document.getElementById("yeQ").innerHTML=quote;
      document.getElementById("ye").style.display="flex";
    }
  };
  xhttp0.open("GET", "https://api.kanye.rest", true);
  xhttp0.send();
}

function closeYe(){
  document.getElementById("ye").style.display="none";
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
