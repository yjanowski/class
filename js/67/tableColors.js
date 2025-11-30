(function () {
  'use strict';

 
    
  
  
  let interval;
  const startButton = document.querySelector('#start');
  const colorTable = document.querySelector('#colorTable tbody');
  const colors = [];
  let color1;
  let backgroundColor1;
  let increment = 200;

  function colorTableRowCreator(colorUsed, backgroundColorUsed, timeColorUsed){
    return{
    colorUsed,
    backgroundColorUsed,
    timeColorUsed
    }
  }

  function addRows(){
    removeFirstRow();
 const now = new Date();
      const colorTableRow1 = colorTableRowCreator(color1, backgroundColor1, now.toLocaleString());
      colors.push(colorTableRow1);
      const row = colorTable.insertRow();
      row.innerHTML = `<td>${colorTableRow1.colorUsed}</td>
                    <td>${colorTableRow1.backgroundColorUsed}</td>
                    <td>${colorTableRow1.timeColorUsed}</td>`;
      row.style.color = colorTableRow1.colorUsed;
      row.style.backgroundColor = colorTableRow1.backgroundColorUsed;
      row.addEventListener('click', ()=>{
        stop();
        row.style.color = colorTableRow1.colorUsed;
        row.style.backgroundColor = colorTableRow1.backgroundColorUsed;
      })
      
  }
  function removeFirstRow(){
    if (!colors[0])
    {
      colorTable.deleteRow(0)
    }
  }

  function start() {
    let r = 0;
    let g = 0;
    let b = 0;

    interval = setInterval(() => {
      if ((r += increment) >= 256) {
        r = 0;

        if ((g += increment) >= 256) {
          g = 0;

          if ((b += increment) >= 256) {
            b = 0;
          }
        }
      }
      color1 = `rgb(${r}, ${g}, ${b})`;
      backgroundColor1 = `rgb(${b}, ${g}, ${r})`;
      document.body.style.color = color1;
      document.body.style.backgroundColor = backgroundColor1;
      
      addRows();

      console.log(`${r}, ${g}, ${b}`);
      startButton.innerText = 'stop';
    }, 1000);
  }

  function stop() {
    clearInterval(interval);
    interval = null;
    //this.innerText = 'start';
    //e.target.innerText = 'start';
    startButton.innerText = 'start';
  }


  function pickRandomColor() {
    return `#${Math.floor(Math.random() * 16777216).toString(16).padStart(6, '0') }`;
  }

  startButton.addEventListener('click', e => {
    if (!interval) {
      start();
    } else {
      stop();
    }
  });
}());
