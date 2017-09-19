// aqui el codigo js
// 'use strict'
const app  = {
    init : function () {
          app.dibujoHtml();//dibujara el HTML desde js.
          app.configuracion();
      },
    
    array : [
      '  12*12',
      '121  *1',
      '1 *21 1',
      '12 *121',
      '121*  1',
      '  *12 2',
      '1212 *1'
    ],

    configuracion : function () {
      $('td').click(app.insertarNumeros)
    },

    insertarNumeros : function (event) {
      let bomba = event.target.id;
      // console.log(bomba)
      bomba.split();
      let i=bomba[0];
      let j=bomba[2];
      $(this).append(app.array[i][j]);
      if(app.array[i][j] == '*'){
        alert('peligro!!!!');
      }
   },


    dibujoHtml : function () {
        for (let i = 0; i < 7; i++) {
            $('#tablero').append(`<tr id='fila${i}'>`);
            for (let j = 0; j < 7; j++) {
                $('#fila' + i).append(`<td id='${i}-${j}'></td>`);
            }
        }
    },

    limpiarAlternetivas: function () {
      // $('#inicio').empty();//elimina el icono.
    }
}
	$(document).ready(app.init);
