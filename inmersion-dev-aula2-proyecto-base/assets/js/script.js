let listaNombresGastos = [];
let listaValoresGastos = [];
let listaDescripcionGastos = [];
let gastoActual = -1;

alert('Recuerda que tu presupuesto mensual es de $2,883.69, que equivalen a 150 USD. NO TE EXCEDAS.')

//Esta funcion se invoca al momento que el usuario hace clic en el boton
function clickBoton() {
    let nombreGasto = document.getElementById('nombreGasto').value;
    let descripcionGasto = document.getElementById('descripcionGasto').value;
    let valorGasto = document.getElementById('valorGasto').value;

    if (gastoActual === -1) {

        listaNombresGastos.push(nombreGasto);
        listaDescripcionGastos.push(descripcionGasto);
        listaValoresGastos.push(valorGasto);

    } else {

        listaNombresGastos[gastoActual] = nombreGasto;
        listaDescripcionGastos[gastoActual] = descripcionGasto;
        listaValoresGastos[gastoActual] = valorGasto;
        
        gastoActual = -1; 

        document.getElementById('btnActualizar').style.display = 'none';
        document.getElementById('btnAgregar').style.display = 'block';
        

    }


    actualizarListaGastos();
}

function actualizarListaGastos(){
    const listaElementos = document.getElementById('listaDeGastos');
    const totalElementos = document.getElementById('totalGastos');
    

    let htmlLista = '';
    let totalGastos = 0;
    
    listaNombresGastos.forEach((elemento,posicion) => {
        const valorGasto = Number(listaValoresGastos[posicion]);
        const descripcionGasto = listaDescripcionGastos[posicion];

       htmlLista += `<li>◇◆◇ ${elemento} 
       <br>◇◆◇ $ ${valorGasto.toFixed(2)}
       <br>◇◆◇ Detalle del Gasto: ${descripcionGasto}
       <button onclick="modificarGasto(${posicion});">Modificar</button>
       <button onclick="eliminarGasto(${posicion});">Eliminar</button>
       </li>`;

       //Calculamos el total de gastos
       totalGastos += Number(valorGasto);
       
    });

    listaElementos.innerHTML = htmlLista;
    totalElementos.innerHTML = totalGastos.toFixed(2);

    if (totalGastos > 2884) {
        alert('Exediste tu presupuesto mensual de $2,883.69 (Equivalente a 150 USD)')
    }

    limpiar();
}

function limpiar(){
    document.getElementById('nombreGasto').value = '';
    document.getElementById('descripcionGasto').value = '';
    document.getElementById('valorGasto').value = '';
   
}

function modificarGasto(posicion) {
    document.getElementById('nombreGasto').value = listaNombresGastos[posicion];
    document.getElementById('descripcionGasto').value = listaDescripcionGastos[posicion];
    document.getElementById('valorGasto').value = listaValoresGastos[posicion];
    
    gastoActual = posicion;

    document.getElementById('btnActualizar').style.display = 'block';
    document.getElementById('btnAgregar').style.display = 'none';

}

function actualizarGasto(){
        
        clickBoton();

}


function eliminarGasto(posicion){
    listaNombresGastos.splice(posicion, 1);
    listaDescripcionGastos.splice(posicion, 1);
    listaValoresGastos.splice(posicion, 1);
    
    actualizarListaGastos();
}