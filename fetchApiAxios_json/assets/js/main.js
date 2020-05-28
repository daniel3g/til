/* fetch('people.json')
    .then(respost => respost.json())
    .then(json => loadElementsPage(json)); */

axios('people.json').then(respost => loadElementsPage(respost.data));

function loadElementsPage(json){
    const table = document.createElement('table');

    for(let people of json){
        const tr = document.createElement('tr');
        let td = document.createElement('td');
        td.innerHTML = people.nome;
        tr.appendChild(td);

        /* td = document.createElement('td');
        td.innerHTML = people.idade;
        tr.appendChild(td); */

        td = document.createElement('td');
        td.innerHTML = people.email;
        tr.appendChild(td);

        table.appendChild(tr);
    }

const result = document.querySelector('.result');
result.appendChild(table);
}


