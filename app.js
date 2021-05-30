var translateBtn = document.querySelector("#translate-btn");
var translateTxt=document.querySelector("#translate-txt");
var outputTxt = document.querySelector("#output-txt");


// API
 var serverURL = "https://api.funtranslations.com/translate/morse.json";



function getTranslationURL(input){
 return serverURL +"?"+"text="+ input;
}

function clickHandle(){
 var inputText=translateTxt.value;
 fetch(getTranslationURL(inputText))
 .then((response) =>response.json())
 .then((json) => {
  var  translatedTxt=json.contents.translated;
  outputTxt.innerText=translatedTxt;
 })
}

translateBtn.addEventListener("click",clickHandle);