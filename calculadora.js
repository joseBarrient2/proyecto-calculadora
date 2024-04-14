const d = document;
const numeros = d.getElementsByClassName('digitos');
const operador = d.querySelector('.operadores');
let pantalla = d.querySelector('.pantalla');
let change = 0; 
//console.log(numeros);
let valor1 = "";
let valor2 = "";
let queOperador = "";
 

operador.addEventListener('click',defineOperacion);
//pantalla.textContent = 0;
for(x=0; x< numeros.length; x++){
    numeros[x].addEventListener('click',extraeValores);
}

function extraeValores(e){
    if(change == 0){
        let val = e.target.id;
        pantalla.value += val;
        valor1 += val;   
    }
    else if(change == 1){
        let val = e.target.id;
        pantalla.value += val;
        valor2 += val;
    } 
}

function defineOperacion(event){
    change = 1;
    //console.log(operador.value);
    if(event.target.id === "answer"){
        if(valor1 === '' || valor2 === ''){
           console.log('complete la operacion');
           return;
        }
        ejecutarOperacion(valor1,valor2,queOperador);
    }
    else if(event.target.id === "limpiar"){
           limpiar()
    }
    else{
        queOperador = event.target.id;
        pantalla.value += queOperador;
        //console.log(typeof pantalla.value);
    }
}

function limpiar(){
    valor1 = " ";
    valor2 = " ";
    queOperador = " ";
    pantalla.value = ' ';
    change = 0;
}

function ejecutarOperacion(v1,v2,ope){
    if(ope === "-"){
        resultado = Number(v1) - Number(v2);
        d.querySelector('.resultado').textContent = resultado;
        limpiar();
    }
    else if(ope === "+"){
        resultado = Number(v1) + Number(v2);
        d.querySelector('.resultado').textContent = resultado;
        limpiar();

    }
    else if(ope === "*"){
        resultado = Number(v1) * Number(v2);
        d.querySelector('.resultado').textContent = resultado;
        limpiar();
    }
    else if(ope === "/"){
        resultado = Number(v1) / Number(v2);
        d.querySelector('.resultado').textContent = resultado;
        limpiar();
    }
    else if(ope === "p"){
        resultado = Math.pow(Number(v1),Number(v2));
        d.querySelector('.resultado').textContent = resultado;
        limpiar();
    }
    else if(ope === "%"){
        resultado = Number(v1) % Number(v2);
        d.querySelector('.resultado').textContent = resultado;
        limpiar();
    }
    else if(ope === "limpiar"){
        pantalla.textContent = ' ';
        d.querySelector('.resultado').textContent = ' ';
        change = 0;
    }
}