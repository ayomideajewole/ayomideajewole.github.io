let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute('src','images/firefox-logo2.jpg');
    } else {
      myImage.setAttribute('src','images/firefox-icon.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
    let myName = prompt('What is your name?');
    //let num = 7**=3;
    if (!myName){
        setUserName();
    }else{
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla seems cool, ' + myName;
    }
}

if(!localStorage.getItem('name')){
    setUserName();
}else{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla seems cool, ' + storedName;
}

myButton.onclick = function(){
    setUserName();
}