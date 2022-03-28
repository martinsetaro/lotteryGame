let ingresoNumeros = document.querySelector('.ingresoDeNumeros');
let numeroSorteo = document.querySelector('.seccionNumeros');
let botonTirar = document.querySelector('.btn_numeros');
let seccionNumeros = document.querySelector('.seccionNumeros');
let inputNumber1 = document.querySelector('.inputNumber1');
let inputNumber2 = document.querySelector('.inputNumber2');
let recargar = document.querySelector('.recargar');

let numeros;
ingresoNumeros.addEventListener('keyup', function(e){
    numeros = e.target.value;
    
});


botonTirar.addEventListener('click', function(){
    
    let numero1 = Math.floor(Math.random() * (50 - 1) + 1);
    let numero2 = Math.floor(Math.random() * (50 - 1) + 1);
    let numero3 = Math.floor(Math.random() * (50 - 1) + 1);
    let numero4 = Math.floor(Math.random() * (50 - 1) + 1);
    let numero5 = Math.floor(Math.random() * (50 - 1) + 1);
    let numero6 = Math.floor(Math.random() * (50 - 1) + 1);

    seccionNumeros.innerHTML = `<div class="numero">${numero1}</div>
                                <div class="numero">${numero2}</div>
                                <div class="numero">${numero3}</div>
                                <div class="numero">${numero4}</div>
                                <div class="numero">${numero5}</div>
                                <div class="numero">${numero6}</div>`;
        
    if(inputNumber1.value == numero1 || inputNumber1.value == numero2 || inputNumber1.value == numero3 || inputNumber1.value == numero4 || inputNumber1.value == numero5 || inputNumber1.value == numero6){
        alert('Ganaste!!!');
    }else if(inputNumber2.value == numero1 || inputNumber2.value == numero2 || inputNumber2.value == numero3 || inputNumber2.value == numero4|| inputNumber2.value == numero5|| inputNumber2.value == numero6){
alert('Ganaste!!!')
       
    }else{
        alert('Ohh has perdido o no has ingresado numero , no hagas trampa ☺ !!!')
        
    }
    
   botonTirar.disabled = true;
   recargar.style.display = 'block';
   
for(let i = 0; i < seccionNumeros.children.length; i++){
   if(inputNumber1.value == seccionNumeros.children[i].innerHTML){
       seccionNumeros.children[i].style.backgroundColor = '#0F5495';
       seccionNumeros.children[i].style.color = 'white';
       seccionNumeros.children[i].style.border = '1px solid white';
       seccionNumeros.children[i].style.animation = 'animacion 3s';
      
       
   }
    else if(inputNumber2.value == seccionNumeros.children[i].innerHTML){
        seccionNumeros.children[i].style.backgroundColor = '#0F5495';
        seccionNumeros.children[i].style.color = 'white';
        seccionNumeros.children[i].style.border = '1px solid white';
    }}


});


















 
        
   



