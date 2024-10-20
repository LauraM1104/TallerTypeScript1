import { data } from './data.js';
var datosTbody = document.getElementById('datos');
var prom = document.getElementById('promedio');
CompletarTablaconDatos(data);
function CompletarTablaconDatos(datos) {
    console.log('Desplegando series');
    var cantidadseries = 0;
    var numtemporadas = 0;
    datos.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n                           <td>").concat(serie.name, "</td>\n                           <td>").concat(serie.channel, "</td>\n                           <td>").concat(serie.seasons, "</td>");
        datosTbody.appendChild(trElement);
        cantidadseries++;
        numtemporadas += serie.seasons;
    });
    console.log("El promedio de temporadas es");
    prom.innerHTML = numtemporadas / cantidadseries + "";
}
