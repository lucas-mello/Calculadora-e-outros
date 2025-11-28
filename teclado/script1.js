$(function(){
alert('= = = Bem vindo ao site! = = =');
var v1,v2,op;

$ ("input[name=btn]").click(function(){
  $("#result").val($("#result").val()+ $(this).val());
});




$("input[name=ce]").click(function(){
   $("#result").val(' ');
    $("#op").text(' ');
});


 $("input[name=c]").click(function(){
    var len = $("#result").val().length;
                var valor  = $("#result").val();

                  
   valor=valor.replace(valor.charAt(len - 1), " ");
                $("#result").val(valor);

});

 
});