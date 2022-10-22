document.getElementById('btn-fld-1').addEventListener('click', function () {
    const messiField = document.getElementById('messi');
    const messiFieldValue = messiField.innerText;

    const listItem = document.getElementById('list-item');
    const li = document.createElement('li');
    li.innerText = messiFieldValue;
    listItem.appendChild(li);
    document.querySelector('#btn-fld-1').disabled = true;
})

document.getElementById('btn-fld-2').addEventListener('click', function () {
    const neymerField = document.getElementById('neymer');
    const neymerFieldValue = neymerField.innerText;

    const listItem = document.getElementById('list-item');
    const li = document.createElement('li');
    li.innerText = neymerFieldValue;
    listItem.appendChild(li);
    document.querySelector('#btn-fld-2').disabled = true;
})
document.getElementById('btn-fld-3').addEventListener('click', function () {
    const ronaldoField = document.getElementById('ronaldo');
    const ronaldoFieldValue = ronaldoField.innerText;

    const listItem = document.getElementById('list-item');
    const li = document.createElement('li');
    li.innerText = ronaldoFieldValue;
    listItem.appendChild(li);
    document.querySelector('#btn-fld-3').disabled = true;
})
document.getElementById('btn-fld-4').addEventListener('click', function () {
    const mbappeField = document.getElementById('mbappe');
    const mbappeFieldValue = mbappeField.innerText;

    const listItem = document.getElementById('list-item');
    const li = document.createElement('li');
    li.innerText = mbappeFieldValue;
    listItem.appendChild(li);
    document.querySelector('#btn-fld-4').disabled = true;
})
document.getElementById('btn-fld-5').addEventListener('click', function () {
    const salahField = document.getElementById('salah');
    const salahFieldValue = salahField.innerText;

    const listItem = document.getElementById('list-item');
    const li = document.createElement('li');
    li.innerText = salahFieldValue;
    listItem.appendChild(li);
    document.querySelector('#btn-fld-5').disabled = true;
})
document.getElementById('btn-fld-6').addEventListener('click', function () {
    const lewandowskiField = document.getElementById('lewandowski');
    const lewandowskiFieldValue = lewandowskiField.innerText;

    const listItem = document.getElementById('list-item');
    const li = document.createElement('li');
    li.innerText = lewandowskiFieldValue;
    listItem.appendChild(li);
    document.querySelector('#btn-fld-6').disabled = true;
})