// abrir função 1
function horas(){
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds()
  if (hours <=9)
hours="0"+hours;
  if (minutes<=9)
minutes="0"+minutes;
  if (seconds<=9)
seconds="0"+seconds;
  var cdate="<b><font color=#ff0000 face=arial size=2>"+hours+":"+minutes+":"+seconds+" "+"</font>" 
  clock.innerHTML= cdate;
setTimeout("horas()",1000);
}
// fechar função 1


// abrir função 2
 function Tempo(){
        horario = new Date()
        hora = horario.getHours()
        minuto = horario.getMinutes()
        segundo = horario.getSeconds()
        if (hora < 10) {
          hora = "0" + hora
        }
        if (minuto < 10) {
          minuto = "0" + minuto
        }
        if (segundo < 10) {
          segundo = "0" + segundo
        }
        document.getElementById("lugar").innerHTML = hora + ":" + minuto + ":" + segundo;  // hora no documento
        // barra de título
        // barra de status
      }
      window.setInterval("Tempo()", 1000)

// fechar função 2

