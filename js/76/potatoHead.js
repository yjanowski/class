(function () {
    'use strict';

    let dragging = false;
    let offset;
    let activeElement;
    const parts = [`potatoHeadNose.png`, `potatoHeadNose2.png`, `eyesWithBlueEyelids-removebg-preview.png`, `eyesWithLashes-removebg-preview.png`, `redLips.png`, `eyesNoseGlasses-removebg-preview.png`, `teethWithMustache-removebg-preview.png`, `whiteHoleEyes-removebg-preview.png`, `teeth-removebg-preview.png`];
    const list = [];
    let i = 0;


    function createPart() {
        parts.forEach(e => {
            let x = document.createElement('div');
            x.innerHTML = `<img id=${i++} class="potatoHeadBody" src = "images/${e}">`;
            document.body.appendChild(x);
            
            // const b = x.querySelector('img');
            // const o = getComputedStyle(b);
            // if (list.length < 0)
            // list.push({ item: `${e}`, locationX: `${o.left}`, locationY: `${o.top}` });
        })
        // localStorage.setItem('parts',JSON.stringify(list));
    }
    createPart();


    // const existingItems = JSON.parse(localStorage.getItem('parts'));
    // console.log(existingItems);
    // existingItems.forEach(e => {
    //     let f = document.createElement('div');
    //     f.innerHTML = `<img class="potatoHeadBody" src = "${e.src}">`;
    //     f.style.position = `absolute`;
    //     f.style.top = `${e.locationY}px`;
    //     f.style.left = `${e.locationX}px`;

    //     document.body.appendChild(f);
    // })






    document.addEventListener('mousedown', (e) => {
        e.preventDefault();
        console.log(e.target);
        if (e.target.className === 'potatoHeadBody') {
            dragging = true;
            activeElement = e.target;
            offset = { x: e.offsetX, y: e.offsetY };
        }
    })

    document.addEventListener('mousemove', (e) => {
        if (dragging) {
            activeElement.style.top = `${e.pageY - offset.y}px`;
            // console.log(e.pageY);
            activeElement.style.left = `${e.pageX - offset.x}px`;
            // console.log(dragging);
            // console.log(e.target);
            

        }

    })

    document.addEventListener('mouseup', (e) => {
        dragging = false;
        const part = { src: `${activeElement.id}`, locationX: `${e.pageX}`, locationY: `${e.pageY}` };
        list.push(part);
        const hi = JSON.stringify(list);
        localStorage.setItem("items", hi)
        console.log(activeElement);

    })



}());