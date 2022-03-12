let input = document.querySelector('#input');
let massa_inp = document.querySelector('#input-massa');
let narx_inp = document.querySelector('#input-narx');
let con = document.querySelector("#container")
let text ='';
let boxes = "";
let li = null;
let src = "2.jpeg";
let narx = "";
let massa = "";
// let li = document.createElement("li");
// li.innerText = "Suxrob";
// list.appendChild(li)

function soz() {
    text = input.value
    massa = massa_inp.value
    narx = narx_inp.value
    boxes += `<div class="box"><img src="${src}" alt=""><p>Nomi: ${text}</p><p>Massa: ${massa}</p><p>Narxi: ${narx}</p></div>`
    massa_inp.value = '';
    narx_inp.value = '';
    input.value = '';
    con.innerHTML = boxes;
}