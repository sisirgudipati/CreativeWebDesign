
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
