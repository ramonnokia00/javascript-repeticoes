function contagem() {
    let voltasValue = Number(document.querySelector("#voltas").value);

    for (let i = 0; i <= voltas.value; i++) {
        console.log(i);

    }
}
function tabuada() {
    let numeroValue = Number(document.querySelector("#numero").value);

    for (let i = 0; i <= 10; i++) {
        console.log(`${numeroValue} X ${i} = ${numeroValue * i}`);

    }
}
function somar() {
    let somaValue = Number(document.querySelector("#sominha").value);

    for (let i = 1; i <= 100; i++) {
        console.log(`${somaValue} + ${i} = ${somaValue + i}`);

    }
}
function pares() {
    let somaValue = Number(document.querySelector("#paress").value);

    for (let i = 1; i <= 50; i++) {
        if (i % 2 === 0 )
        console.log(`${i}`);

    }
}
function decrecente() {
    let descrecenteValue = Number(document.querySelector("#decre").value);

    for (let i = descrecenteValue; i >= 1; i--) {
        console.log(i);

    }
}
function listas() {
    let listaDeNomes = document.querySelector("#lista").value;
    let nomes = listaDeNomes.split(","); 

    for (let i = nomes.length - 1; i >= 0; i--) {
        console.log(nomes[i].trim()); 
    }
}
function impares() {
    let imparValue = Number(document.querySelector("#impar").value);

    for (let i = 0; i <= 30; i++) {
        if (i % 2 === 1 )
        console.log(`${i}`);

    }
}

