// Write your code here!

let removeMain = document.getElementById('main');
removeMain.remove();

let newHeader = document.createElement('H1');
newHeader.setAttribute('id', 'victory');
let headerText = document.createTextNode("Matt is the champion");
newHeader.appendChild(headerText);