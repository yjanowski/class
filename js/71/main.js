(async function () {
    'use strict';
    const contactsTable = document.querySelector('#contactsTable tbody');
    let loading = document.querySelector('#loading');

    document.querySelector('#loadButton').addEventListener('click', () => { chooseFile(`file://c:\\foo`) });



    async function chooseFile(file) {
        try {
            loading.innerText = 'Loading....';
            const people = await fetch(file);
            if (!people.ok)
                throw new Error(`${people.status} (${people.statusText})`)
            const newPersonObject = await people.json();
            loading.innerText = 'done Loading....';
            newPersonObject.forEach((p) => {
                const row = contactsTable.insertRow();
                row.innerHTML = `<td>${p.first}</td>
                     <td>${p.last}</td>
                     <td>${p.email}</td>
                     <td>${p.phone}</td>`

            });
        }
        catch (error) {
            console.error(`This is the error - ${error}`);
        }
    }



    // chooseFile('otherPeople.json');
    // chooseFile('people.json');
    // chooseFile('people.json');



}());