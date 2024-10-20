
import { Serie } from './serie.js';
import { data } from './data.js';


let datosTbody: HTMLElement = document.getElementById('datos')!;
let prom: HTMLElement= document.getElementById('promedio')!;
CompletarTablaconDatos(data);

function CompletarTablaconDatos(datos: Serie[]): void {
  console.log('Desplegando series');
  let cantidadseries=0
  let numtemporadas=0
  datos.forEach((serie) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${serie.id}</td>
                           <td>${serie.name}</td>
                           <td>${serie.channel}</td>
                           <td>${serie.seasons}</td>`;
    datosTbody.appendChild(trElement);

    cantidadseries++;
    numtemporadas += serie.seasons
    
  });
  console.log ("El promedio de temporadas es")
  prom.innerHTML = numtemporadas/cantidadseries + "";
}

