(function (){
'use strict';

let counter = 1;

function newButtonCreator(e){
    const newButton = document.createElement('button');
     document.body.appendChild(newButton);
     newButton.textContent = ++counter;
     newButton.addEventListener('click', newButtonCreator)
}
 document.querySelector('button').addEventListener('click', newButtonCreator);
    


}());