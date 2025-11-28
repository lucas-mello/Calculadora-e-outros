$(function(){

var v1,v2,op;

$ ("input[name=btn]").click(function(){
  $("#result").val($("#result").val()+ $(this).val());
});

$("input[name=ce]").click(function(){
   $("#result").val(' ');
    $("#op").text(' ');
});

 $("input[name=soma]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="soma";
                $("#op").text($(this).val() );       

                    }else{
          	// alert('insira um valor para a operação');
          alert('insira um valor para a operação');
           }
       });

$("input[name=menos]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="menos";
                $("#op").text($(this).val() );       

                    }else{
          	// alert('insira um valor para a operação');
          alert('insira um valor para a operação');
           }
       });

$("input[name=vezes]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="vezes";
                $("#op").text($(this).val() );       

                    }else{
          	// alert('insira um valor para a operação');
          alert('insira um valor para a operação');
           }
       });

$("input[name=div]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="div";
                $("#op").text($(this).val() );       

                    }else{
          	// alert('insira um valor para a operação');
          alert('insira um valor para a operação');
           }
       });

 
// $("input[name=por]").click(function(){
//            if($("#result").val() != ' '){
//                  v1=parseFloat($("#result").val());
//                   $("#result").val(' ');
//                    op="por";
//                 $("#op").text($(this).val() );       

//                     }else{
//             // alert('insira um valor para a operação');
//           alert('insira um valor para a operação');
//            }
//        });

$("input[name=btn-raiz]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-raiz";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.sqrt(v1));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });
     
     $("input[name=btn-cubica]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-cubica";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.cbrt(v1));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });

$("input[name=btn-log]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-log";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.log(v1));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });

$("input[name=btn-log10]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-log10";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.log10(v1));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });

$("input[name=btn-log1]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-log1";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.log1p(v1));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });

$("input[name=btn-seno]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-seno";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.sin(v1));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });
  


$("input[name=btn-cos]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-cos";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.cos(v1));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });


$("input[name=btn-tan]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-tan";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.tan(v1));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });

$("input[name=btn-acos]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-acos";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.acos(v1));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });
$("input[name=btn-atan]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-atan";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.atan(v1));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });

// inicio area da potencia
$("input[name=btn-pot1]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot1";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,2));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });

$("input[name=btn-pot2]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot2";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,3));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });

$("input[name=btn-pot3]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot3";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,4));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });

$("input[name=btn-pot4]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot4";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,5));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });

$("input[name=btn-pot5]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot5";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,6));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });


$("input[name=btn-pot7]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot7";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,7));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });

$("input[name=btn-pot8]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot8";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,8));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });

$("input[name=btn-pot9]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot9";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,9));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });


$("input[name=btn-pot10]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot10";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,10));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });
$("input[name=btn-pot11]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot11";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,11));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });

$("input[name=btn-pot12]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot12";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,12));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });
$("input[name=btn-pot13]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot13";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,13));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });

$("input[name=btn-pot14]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot14";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,14));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });

$("input[name=btn-pot15]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot15";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,15));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });

$("input[name=btn-pot16]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot16";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,16));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });

$("input[name=btn-pot17]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot17";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,17));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });

$("input[name=btn-pot18]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot18";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,18));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });

$("input[name=btn-pot19]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot19";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,19));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });

$("input[name=btn-pot20]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot20";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,20));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });

$("input[name=btn-pot21]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot21";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,21));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });

$("input[name=btn-pot22]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot22";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,22));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });

$("input[name=btn-pot23]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot23";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,23));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });

$("input[name=btn-pot24]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot24";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,24));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });

$("input[name=btn-pot25]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot25";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,25));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });

$("input[name=btn-pot26]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot26";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,26));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });

$("input[name=btn-pot27]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot27";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,27));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });

$("input[name=btn-pot28]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot28";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,28));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });

$("input[name=btn-pot29]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot29";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,29));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });

$("input[name=btn-pot30]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot30";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,30));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });

$("input[name=btn-pot31]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot31";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,31));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });
// fim area da potencia
$("input[name=btn-pi]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pi";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.PI);
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });


$("input[name=btn-e]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-e";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.E);
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });

$("input[name=btn-exp]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-exp";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.exp(v1));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });

$("input[name=btn-rp]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-rp";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.sqrt( Math.PI ));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });

$("input[name=btn-sen2]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-sen2";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.sin( (Math.PI)/2 ));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });

$("input[name=btn-tan2]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-tan2";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.tan( (Math.PI)/4 ));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });
$("input[name=btn-abs]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-abs";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.abs(v1));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });

$("input[name=btn-asin]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-asin";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.asin(v1));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });

$("input[name=btn-acos2]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-acos2";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.acos(v1));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });

$("input[name=btn-atan3]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-atan3";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.atan(v1));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });

$("input[name=btn-ceil]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-ceil";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.ceil(v1));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });

$("input[name=btn-copy]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-copy";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.copySign(v1,3));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });


$("input[name=btn-cosh]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-cosh";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.cosh(v1));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });

$("input[name=btn-exp2]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-exp2";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.expm1(v1));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });

$("input[name=btn-floor]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-floor";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.floor(v1));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });

$("input[name=btn-hypot]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-hypot";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.hypot(v1,3));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });


$("input[name=btn-ieee]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-ieee";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.IEEEremainder(v1,5));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });

$("input[name=btn-max]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-max";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.max(v1,2));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });
$("input[name=btn-min]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-min";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.min(v1,2));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });

$("input[name=btn-next1]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-next1";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.nextAfter(v1,2));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });

$("input[name=btn-next2]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-next2";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.nextUp(v1));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });

$("input[name=btn-alea]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-alea";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.random() );
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });

$("input[name=btn-rint]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-rint";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.rint(v1) );
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });

$("input[name=btn-round]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-round";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.round(v1) );
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });

$("input[name=btn-scalb]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-scalb";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.scalb(v1,2) );
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });

$("input[name=btn-signum]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-signum";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.signum(v1) );
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });

$("input[name=btn-sinh]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-sinh";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.sinh(v1) );
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });

$("input[name=btn-tanh]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-tanh";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.tanh(v1) );
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });


$("input[name=btn-to]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-to";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.toDegrees(v1) );
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });

$("input[name=btn-rad]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-rad";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.toRadians(v1) );
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });

$("input[name=btn-ulp]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-ulp";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.ulp(v1) );
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });


$("input[name=btn-ra]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-ra";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.SQRT1_2);
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });

$("input[name=btn-pot32]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot32";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,32));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });

$("input[name=btn-pot33]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot33";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,33));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });

$("input[name=btn-pot34]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot34";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,34));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });

$("input[name=btn-pot35]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot35";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,35));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });

$("input[name=btn-pot36]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot36";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,36));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });

$("input[name=btn-pot37]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot37";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,37));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });

$("input[name=btn-pot38]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot38";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,38));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });

$("input[name=btn-pot39]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot39";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,39));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });

$("input[name=btn-pot40]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot40";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,40));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });

$("input[name=btn-pot41]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot41";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,41));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });

$("input[name=btn-pot42]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot42";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,42));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });

$("input[name=btn-pot43]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot43";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,43));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });

$("input[name=btn-pot44]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot44";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,44));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });

$("input[name=btn-pot45]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot45";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,45));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });

$("input[name=btn-pot46]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot46";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,46));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });

$("input[name=btn-pot47]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot47";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,47));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });

$("input[name=btn-pot48]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot48";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,48));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });

$("input[name=btn-pot49]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot49";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,49));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });

$("input[name=btn-pot50]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot50";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,50));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });

$("input[name=btn-pot51]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot51";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,51));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });

$("input[name=btn-pot52]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot52";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,52));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });

$("input[name=btn-pot53]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot53";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,53));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });

$("input[name=btn-pot54]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot54";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,54));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });

$("input[name=btn-pot55]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot55";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,55));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });

$("input[name=btn-pot56]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot56";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,56));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });

$("input[name=btn-pot57]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot57";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,57));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });

$("input[name=btn-pot58]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot58";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,58));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });

$("input[name=btn-pot59]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot59";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,59));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });

$("input[name=btn-pot60]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot60";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,60));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });

$("input[name=btn-pot61]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot61";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,61));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });

$("input[name=btn-pot62]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot62";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,62));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });


$("input[name=btn-pot63]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot63";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,63));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });

       $("input[name=btn-pot64]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot64";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,64));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });


       $("input[name=btn-pot65]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot65";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,65));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });


       $("input[name=btn-pot66]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot66";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,66));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });


       $("input[name=btn-pot67]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot67";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,67));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });



       $("input[name=btn-pot68]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot68";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,68));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });


       $("input[name=btn-pot69]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot69";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,69));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });


       $("input[name=btn-pot70]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot70";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,70));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });



       $("input[name=btn-pot71]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot71";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,71));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });


       $("input[name=btn-pot72]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot72";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,72));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });


       $("input[name=btn-pot73]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot73";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,73));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });



       $("input[name=btn-pot74]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot74";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,74));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });


       $("input[name=btn-pot75]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot75";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,75));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });


       $("input[name=btn-pot76]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot76";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,76));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });



       $("input[name=btn-pot77]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot77";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,77));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });



       $("input[name=btn-pot78]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot78";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,78));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });



       $("input[name=btn-pot79]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot79";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,79));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });


       $("input[name=btn-pot80]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot80";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,80));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });


       $("input[name=btn-pot81]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot81";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,81));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });



       $("input[name=btn-pot82]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot82";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,82));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });


       $("input[name=btn-pot83]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot83";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,83));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });




       $("input[name=btn-pot84]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot84";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,84));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });


       $("input[name=btn-pot85]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot85";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,85));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });


       $("input[name=btn-pot86]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot86";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,86));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });


       $("input[name=btn-pot87]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot87";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,87));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });


       $("input[name=btn-pot88]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot88";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,88));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });


       $("input[name=btn-pot89]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot89";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,89));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });


       $("input[name=btn-pot90]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot90";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,90));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });

   $("input[name=btn-pot91]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot91";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,91));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });


       $("input[name=btn-pot92]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot92";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,92));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });


       $("input[name=btn-pot93]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot93";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,93));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });


       $("input[name=btn-pot94]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot94";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,94));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });

          $("input[name=btn-pot61]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot95";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,95));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });


       $("input[name=btn-pot96]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot96";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,96));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });


       $("input[name=btn-pot97]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot97";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,97));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });


       $("input[name=btn-pot98]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot98";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,98));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });


          $("input[name=btn-pot99]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot99";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,99));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });


       $("input[name=btn-pot100]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot100";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,100));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });


       $("input[name=btn-pot101]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot101";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,101));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });


       $("input[name=btn-pot102]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot102";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,102));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });

        $("input[name=btn-pot103]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot103";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,103));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });

         $("input[name=btn-pot104]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot104";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,104));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });

 $("input[name=btn-pot105]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot105";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,105));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });

 $("input[name=btn-pot106]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot106";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,106));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });

 $("input[name=btn-pot107]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot107";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,107));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });


 $("input[name=btn-pot108]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot108";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,108));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });

 $("input[name=btn-pot109]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot109";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,109));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });


 $("input[name=btn-pot110]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot110";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,110));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });

 $("input[name=btn-pot111]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot111";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,111));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });


  $("input[name=btn-pot112]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot112";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,112));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });


   $("input[name=btn-pot113]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot113";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,113));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });


    $("input[name=btn-pot114]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot114";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,114));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });


     $("input[name=btn-pot115]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot115";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,115));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });


      $("input[name=btn-pot116]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot116";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,116));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });


       $("input[name=btn-pot117]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot117";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,117));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });


        $("input[name=btn-pot118]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot118";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,118));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });


         $("input[name=btn-pot119]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot119";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,119));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });


          $("input[name=btn-pot120]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot120";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,120));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });


           $("input[name=btn-pot121]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot121";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,121));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });

    $("input[name=btn-pot122]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot122";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,122));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });

        $("input[name=btn-pot123]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot123";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,123));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });


            $("input[name=btn-pot124]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot124";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,124));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });


                $("input[name=btn-pot125]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot125";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,125));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });


                    $("input[name=btn-pot126]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot126";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,126));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });



           $("input[name=btn-pot127]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot127";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,127));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });
       

           $("input[name=btn-pot128]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot128";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,128));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });



             $("input[name=btn-pot129]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot129";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,129));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });


              $("input[name=btn-pot130]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot130";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,130));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });

       $("input[name=btn-pot131]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot131";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,131));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });           


    $("input[name=btn-pot132]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot132";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,132));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });


        $("input[name=btn-pot133]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot133";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,133));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });



            $("input[name=btn-pot134]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot134";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,134));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });



                $("input[name=btn-pot135]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot135";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,135));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });


    $("input[name=btn-pot136]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot136";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,136));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });


        $("input[name=btn-pot137]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot137";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,137));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });



            $("input[name=btn-pot138]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot138";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,138));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });



                $("input[name=btn-pot139]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot139";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,139));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });

           $("input[name=btn-pot140]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot140";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,140));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });
       
        $("input[name=btn-pot141]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot141";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,141));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });
       

         $("input[name=btn-pot142]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot142";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,142));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });
       
    $("input[name=btn-pot143]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot143";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,143));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });


          $("input[name=btn-pot144]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot144";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,144));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });
       

         $("input[name=btn-pot145]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot145";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,145));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });
       

          $("input[name=btn-pot146]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot146";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,146));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });
       

          $("input[name=btn-pot147]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot147";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,147));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });
       

          $("input[name=btn-pot148]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot148";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,148));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });
       

          $("input[name=btn-pot149]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot149";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,149));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });
       

          $("input[name=btn-pot150]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot150";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,150));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });
       
          $("input[name=btn-pot151]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot151";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,151));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });     

          $("input[name=btn-pot152]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot152";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,152));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });                            

   $("input[name=btn-pot153]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot153";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,153));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });   

      $("input[name=btn-pot154]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot154";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,154));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });   

         $("input[name=btn-pot155]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot155";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,155));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });  

          $("input[name=btn-pot156]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot156";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,156));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });    

             $("input[name=btn-pot157]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot157";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,157));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });   

                $("input[name=btn-pot158]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot158";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,158));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });   

          $("input[name=btn-pot159]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot159";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,159));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });   

             $("input[name=btn-pot160]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot160";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,160));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });   

   $("input[name=btn-pot161]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot161";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,161));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


     $("input[name=btn-pot162]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot162";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,162));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

     $("input[name=btn-pot163]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot163";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,163));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


     $("input[name=btn-pot164]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot164";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,164));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

     $("input[name=btn-pot165]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot165";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,165));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

          $("input[name=btn-pot166]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot166";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,166));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

               $("input[name=btn-pot167]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot167";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,167));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


     $("input[name=btn-pot168]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot168";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,168));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

          $("input[name=btn-pot169]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot169";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,169));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

           $("input[name=btn-pot170]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot170";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,170));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

            $("input[name=btn-pot171]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot171";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,171));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

             $("input[name=btn-pot172]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot172";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,172));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

        $("input[name=btn-pot173]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot173";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,173));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 
  
        $("input[name=btn-pot174]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot174";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,174));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


        $("input[name=btn-pot175]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot175";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,175));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


        $("input[name=btn-pot176]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot176";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,176));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

        $("input[name=btn-pot177]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot177";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,177));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


        $("input[name=btn-pot178]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot178";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,178));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


        $("input[name=btn-pot179]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot179";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,179));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


$("input[name=btn-pot180]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot180";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,180));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


$("input[name=btn-pot181]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot181";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,181));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


$("input[name=btn-pot182]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot182";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,182));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


$("input[name=btn-pot183]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot183";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,183));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

$("input[name=btn-pot184]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot184";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,184));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


$("input[name=btn-pot185]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot185";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,185));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


$("input[name=btn-pot186]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot186";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,186));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


$("input[name=btn-pot187]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot187";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,187));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


$("input[name=btn-pot188]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot188";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,188));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

         $("input[name=btn-pot189]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot189";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,189));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

         $("input[name=btn-pot190]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot190";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,190));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

         $("input[name=btn-pot191]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot191";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,191));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

         $("input[name=btn-pot192]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot192";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,192));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 
               

               $("input[name=btn-pot193]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot193";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,193));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

               $("input[name=btn-pot194]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot194";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,194));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

               $("input[name=btn-pot195]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot195";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,195));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

               $("input[name=btn-pot196]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot196";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,196));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


               $("input[name=btn-pot197]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot197";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,197));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


          $("input[name=btn-pot198]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot198";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,198));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

          $("input[name=btn-pot199]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot199";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,199));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


          $("input[name=btn-pot200]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot200";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,200));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

          $("input[name=btn-pot201]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot201";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,201));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


          $("input[name=btn-pot202]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot202";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,202));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

          $("input[name=btn-pot203]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot203";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,203));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

          $("input[name=btn-pot204]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot204";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,204));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

          $("input[name=btn-pot205]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot205";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,205));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

          $("input[name=btn-pot206]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot206";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,206));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

          $("input[name=btn-pot207]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot207";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,207));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

          $("input[name=btn-pot208]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot208";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,208));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


          $("input[name=btn-pot209]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot209";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,209));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 
           $("input[name=btn-pot210]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot210";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,210));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 
              
           $("input[name=btn-pot211]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot211";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,211));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

           $("input[name=btn-pot212]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot212";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,212));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


           $("input[name=btn-pot213]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot213";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,213));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

           $("input[name=btn-pot214]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot214";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,214));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


           $("input[name=btn-pot215]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot215";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,215));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



           $("input[name=btn-pot216]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot216";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,216));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


           $("input[name=btn-pot217]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot217";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,217));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


           $("input[name=btn-pot218]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot218";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,218));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


           $("input[name=btn-pot219]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot219";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,219));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



           $("input[name=btn-pot220]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot220";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,220));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


           $("input[name=btn-pot221]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot221";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,221));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


           $("input[name=btn-pot222]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot222";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,222));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

           $("input[name=btn-pot223]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot223";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,223));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


           $("input[name=btn-pot224]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot224";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,224));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

             
           $("input[name=btn-pot225]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot225";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,225));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


           $("input[name=btn-pot226]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot226";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,226));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


           $("input[name=btn-pot227]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot227";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,227));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

           $("input[name=btn-pot228]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot228";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,228));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 
           $("input[name=btn-pot229]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot229";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,229));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



       $("input[name=btn-pot230]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot230";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,230));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

       $("input[name=btn-pot231]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot231";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,231));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


       $("input[name=btn-pot232]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot232";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,232));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


       $("input[name=btn-pot233]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot233";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,233));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


       $("input[name=btn-pot234]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot234";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,234));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


       $("input[name=btn-pot235]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot235";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,235));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



       $("input[name=btn-pot236]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot236";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,236));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



       $("input[name=btn-pot237]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot237";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,237));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



       $("input[name=btn-pot238]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot238";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,238));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



       $("input[name=btn-pot239]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot239";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,239));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



       $("input[name=btn-pot240]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot240";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,240));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



       $("input[name=btn-pot241]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot241";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,241));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



       $("input[name=btn-pot242]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot242";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,242));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


       $("input[name=btn-pot243]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot243";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,243));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot244]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot244";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,244));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


       $("input[name=btn-pot245]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot245";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,245));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

       $("input[name=btn-pot246]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot246";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,246));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



       $("input[name=btn-pot247]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot247";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,247));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot248]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot248";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,248));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



$("input[name=btn-pot249]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot249";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,249));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot250]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot250";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,250));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




$("input[name=btn-pot251]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot251";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,251));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot252]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot252";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,252));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




$("input[name=btn-pot253]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot253";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,253));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot254]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot254";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,254));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




$("input[name=btn-pot255]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot255";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,255));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot256]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot256";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,256));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 





$("input[name=btn-pot257]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot257";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,257));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot258]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot258";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,258));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




$("input[name=btn-pot259]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot259";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,259));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot260]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot260";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,260));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


$("input[name=btn-pot261]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot261";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,261));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot262]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot262";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,262));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


$("input[name=btn-pot263]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot263";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,263));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot264]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot264";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,264));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



$("input[name=btn-pot265]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot265";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,265));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot266]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot266";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,266));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




$("input[name=btn-pot267]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot267";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,267));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot268]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot268";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,268));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




$("input[name=btn-pot269]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot269";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,269));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot270]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot270";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,270));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




$("input[name=btn-pot271]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot271";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,271));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot272]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot272";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,272));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



$("input[name=btn-pot273]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot273";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,273));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot274]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot274";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,274));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




$("input[name=btn-pot275]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot275";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,275));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot276]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot276";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,276));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot277]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot277";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,277));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot278]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot278";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,278));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



$("input[name=btn-pot279]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot279";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,279));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot280]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot280";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,280));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




     $("input[name=btn-pot281]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot281";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,281));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


     $("input[name=btn-pot282]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot282";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,282));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

     $("input[name=btn-pot283]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot283";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,283));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

     $("input[name=btn-pot284]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot284";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,284));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


$("input[name=btn-pot285]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot285";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,285));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

$("input[name=btn-pot286]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot286";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,286));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

$("input[name=btn-pot287]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot287";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,287));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

$("input[name=btn-pot288]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot288";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,288));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

$("input[name=btn-pot289]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot289";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,289));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

$("input[name=btn-pot290]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot290";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,290));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

$("input[name=btn-pot291]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot291";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,291));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

$("input[name=btn-pot292]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot292";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,292));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


$("input[name=btn-pot293]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot293";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,293));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

$("input[name=btn-pot294]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot294";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,294));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

$("input[name=btn-pot295]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot295";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,295));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

$("input[name=btn-pot296]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot296";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,296));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


$("input[name=btn-pot297]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot297";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,297));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 
$("input[name=btn-pot298]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot298";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,298));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

$("input[name=btn-pot299]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot299";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,299));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


$("input[name=btn-pot300]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot300";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,300));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

 			//aqui 300
 				
 		   $("input[name=btn-pot301]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot301";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,301));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


          $("input[name=btn-pot302]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot302";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,302));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

          $("input[name=btn-pot303]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot303";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,303));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

          $("input[name=btn-pot304]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot304";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,304));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

          $("input[name=btn-pot305]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot305";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,305));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

          $("input[name=btn-pot306]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot306";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,306));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

          $("input[name=btn-pot307]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot307";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,307));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

          $("input[name=btn-pot308]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot308";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,308));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


          $("input[name=btn-pot309]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot309";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,309));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 
           $("input[name=btn-pot310]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot310";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,310));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 
              
           $("input[name=btn-pot311]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot311";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,311));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

           $("input[name=btn-pot312]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot312";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,312));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


           $("input[name=btn-pot313]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot313";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,313));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

           $("input[name=btn-pot314]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot314";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,314));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


           $("input[name=btn-pot315]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot315";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,315));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



           $("input[name=btn-pot316]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot316";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,316));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


           $("input[name=btn-pot317]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot317";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,317));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


           $("input[name=btn-pot318]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot318";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,318));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


           $("input[name=btn-pot319]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot319";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,319));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



           $("input[name=btn-pot320]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot320";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,320));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


           $("input[name=btn-pot321]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot321";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,321));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


           $("input[name=btn-pot322]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot322";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,322));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

           $("input[name=btn-pot323]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot323";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,323));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


           $("input[name=btn-pot324]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot324";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,324));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

             
           $("input[name=btn-pot325]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot325";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,325));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


           $("input[name=btn-pot326]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot326";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,326));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


           $("input[name=btn-pot327]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot327";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,327));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

           $("input[name=btn-pot328]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot328";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,328));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 
           $("input[name=btn-pot329]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot329";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,329));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



       $("input[name=btn-pot330]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot330";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,330));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

       $("input[name=btn-pot331]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot331";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,331));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


       $("input[name=btn-pot332]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot332";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,332));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


       $("input[name=btn-pot333]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot333";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,333));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

    //atual
       $("input[name=btn-pot334]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot334";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,334));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


       $("input[name=btn-pot335]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot335";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,335));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



       $("input[name=btn-pot336]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot336";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,336));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



       $("input[name=btn-pot337]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot337";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,337));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



       $("input[name=btn-pot338]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot338";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,338));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



       $("input[name=btn-pot339]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot339";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,339));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



       $("input[name=btn-pot340]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot340";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,340));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



       $("input[name=btn-pot341]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot341";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,341));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



       $("input[name=btn-pot342]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot342";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,342));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


       $("input[name=btn-pot343]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot343";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,343));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot344]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot344";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,344));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


       $("input[name=btn-pot345]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot345";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,345));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

       $("input[name=btn-pot346]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot346";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,346));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



       $("input[name=btn-pot347]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot347";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,347));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot348]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot348";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,348));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



$("input[name=btn-pot349]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot349";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,349));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot350]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot350";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,350));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




$("input[name=btn-pot351]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot351";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,351));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot352]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot352";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,352));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




$("input[name=btn-pot353]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot353";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,353));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot354]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot354";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,354));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




$("input[name=btn-pot355]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot355";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,355));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot356]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot356";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,356));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 





$("input[name=btn-pot357]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot357";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,357));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot358]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot358";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,358));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




$("input[name=btn-pot359]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot359";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,359));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot360]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot360";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,360));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


$("input[name=btn-pot361]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot361";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,361));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot362]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot362";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,362));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


$("input[name=btn-pot363]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot363";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,363));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot364]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot364";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,364));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



$("input[name=btn-pot365]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot365";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,365));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot366]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot366";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,366));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




$("input[name=btn-pot367]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot367";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,367));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot368]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot368";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,368));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




$("input[name=btn-pot369]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot369";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,369));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot370]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot370";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,370));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




$("input[name=btn-pot371]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot371";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,371));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot372]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot372";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,372));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



$("input[name=btn-pot373]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot373";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,373));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot374]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot374";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,374));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




$("input[name=btn-pot375]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot375";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,375));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot376]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot376";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,376));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot377]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot377";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,377));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot378]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot378";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,378));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



$("input[name=btn-pot379]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot379";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,379));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot380]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot380";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,380));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




     $("input[name=btn-pot381]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot381";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,381));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


     $("input[name=btn-pot382]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot382";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,382));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

     $("input[name=btn-pot383]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot383";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,383));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

     $("input[name=btn-pot384]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot384";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,384));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


$("input[name=btn-pot385]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-po3285";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,385));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

$("input[name=btn-pot386]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot386";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,386));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

$("input[name=btn-pot387]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot387";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,387));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

$("input[name=btn-pot388]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot388";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,388));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

$("input[name=btn-pot389]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot389";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,389));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

$("input[name=btn-pot390]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot390";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,390));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

$("input[name=btn-pot391]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot391";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,391));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

$("input[name=btn-pot392]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot392";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,392));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


$("input[name=btn-pot393]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot393";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,393));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

$("input[name=btn-pot394]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot394";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,394));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

$("input[name=btn-pot395]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot395";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,395));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

$("input[name=btn-pot396]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot396";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,396));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


$("input[name=btn-pot397]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot397";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,397));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 
$("input[name=btn-pot398]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot398";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,398));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

$("input[name=btn-pot399]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot399";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,399));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


$("input[name=btn-pot400]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot400";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,400));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

			//aqui 400

          $("input[name=btn-pot401]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot401";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,401));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


          $("input[name=btn-pot402]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot402";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,402));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

          $("input[name=btn-pot403]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot403";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,403));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

          $("input[name=btn-pot404]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot404";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,404));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

          $("input[name=btn-pot405]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot405";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,405));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

          $("input[name=btn-pot406]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot406";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,406));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

          $("input[name=btn-pot407]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot407";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,407));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

          $("input[name=btn-pot408]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot408";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,408));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

          
          $("input[name=btn-pot409]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot409";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,409));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 
           $("input[name=btn-pot410]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot410";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,410));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 
              
           $("input[name=btn-pot411]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot411";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,411));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

           $("input[name=btn-pot412]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot412";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,412));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


           $("input[name=btn-pot413]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot413";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,413));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

           $("input[name=btn-pot414]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot414";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,414));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


           $("input[name=btn-pot415]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot415";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,415));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



           $("input[name=btn-pot416]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot416";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,416));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


           $("input[name=btn-pot417]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot417";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,417));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


           $("input[name=btn-pot418]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot418";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,418));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


           $("input[name=btn-pot419]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot419";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,419));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



           $("input[name=btn-pot420]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot420";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,420));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


           $("input[name=btn-pot421]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot421";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,421));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


           $("input[name=btn-pot422]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot422";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,422));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

           $("input[name=btn-pot423]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot423";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,423));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


           $("input[name=btn-pot424]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot424";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,424));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

             
           $("input[name=btn-pot425]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot425";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,425));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


           $("input[name=btn-pot426]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot426";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,426));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


           $("input[name=btn-pot427]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot427";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,427));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

           $("input[name=btn-pot428]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot428";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,428));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 
           $("input[name=btn-pot429]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot429";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,429));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



       $("input[name=btn-pot430]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot430";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,430));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

       $("input[name=btn-pot431]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot431";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,431));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


       $("input[name=btn-pot432]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot432";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,432));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


       $("input[name=btn-pot433]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot433";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,433));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


       $("input[name=btn-pot434]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot434";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,434));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


       $("input[name=btn-pot435]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot435";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,435));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



       $("input[name=btn-pot436]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot436";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,436));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



       $("input[name=btn-pot437]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot437";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,437));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



       $("input[name=btn-pot438]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot438";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,438));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



       $("input[name=btn-pot439]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot439";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,439));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



       $("input[name=btn-pot440]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot440";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,440));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



       $("input[name=btn-pot441]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot441";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,441));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



       $("input[name=btn-pot442]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot442";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,442));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


       $("input[name=btn-pot443]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot443";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,443));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot444]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot444";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,444));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


       $("input[name=btn-pot445]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot445";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,445));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

       $("input[name=btn-pot446]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot446";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,446));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



       $("input[name=btn-pot447]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot447";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,447));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot448]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot448";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,448));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



$("input[name=btn-pot449]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot449";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,449));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot450]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot450";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,450));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




$("input[name=btn-pot451]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot451";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,451));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot452]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot452";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,452));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




$("input[name=btn-pot453]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot453";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,453));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot454]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot454";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,454));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




$("input[name=btn-pot455]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot455";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,455));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot456]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot456";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,456));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 





$("input[name=btn-pot457]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot457";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,457));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot458]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot458";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,458));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




$("input[name=btn-pot459]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot459";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,459));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot460]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot460";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,460));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


$("input[name=btn-pot461]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot461";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,461));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot462]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot462";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,462));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


$("input[name=btn-pot463]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot463";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,463));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot464]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot464";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,464));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



$("input[name=btn-po465]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot465";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,465));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot466]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot466";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,466));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




$("input[name=btn-pot467]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot467";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,467));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot468]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot468";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,468));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




$("input[name=btn-pot469]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot469";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,469));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot470]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot470";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,470));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




$("input[name=btn-pot471]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot471";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,471));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot472]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot472";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,472));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



$("input[name=btn-pot473]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot473";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,473));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot474]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot474";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,474));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




$("input[name=btn-pot475]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot475";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,475));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot476]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot476";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,476));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot477]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot477";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,477));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot478]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot478";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,478));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



$("input[name=btn-pot479]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot479";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,479));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot480]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot480";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,480));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




     $("input[name=btn-pot481]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot481";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,481));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


     $("input[name=btn-pot482]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot482";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,482));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

     $("input[name=btn-pot483]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot483";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,483));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

     $("input[name=btn-pot484]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot484";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,484));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


$("input[name=btn-pot485]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot485";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,485));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

$("input[name=btn-pot486]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot486";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,486));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

$("input[name=btn-pot487]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot487";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,487));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

$("input[name=btn-pot488]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot488";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,488));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

$("input[name=btn-pot489]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot489";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,489));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

$("input[name=btn-pot490]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot490";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,490));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

$("input[name=btn-pot491]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot491";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,491));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

$("input[name=btn-pot492]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot492";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,492));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


$("input[name=btn-pot493]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot493";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,493));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

$("input[name=btn-pot494]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot494";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,494));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

$("input[name=btn-pot495]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot495";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,495));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

$("input[name=btn-pot496]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot496";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,496));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


$("input[name=btn-pot497]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot497";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,497));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 
$("input[name=btn-pot498]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot498";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,498));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

$("input[name=btn-pot499]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot499";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,499));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


$("input[name=btn-pot500]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot500";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,500));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

             //aqui 500

             $("input[name=btn-pot501]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot501";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,501));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


          $("input[name=btn-pot502]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot502";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,502));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

          $("input[name=btn-pot503]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot503";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,503));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

          $("input[name=btn-pot504]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot504";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,504));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

          $("input[name=btn-pot505]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot505";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,505));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

          $("input[name=btn-pot506]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot506";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,506));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

          $("input[name=btn-pot507]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot507";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,507));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

          $("input[name=btn-pot508]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot508";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,508));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


          $("input[name=btn-pot509]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot209";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,509));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 
           $("input[name=btn-pot510]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot510";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,510));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 
              
           $("input[name=btn-pot511]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot511";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,511));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

           $("input[name=btn-pot512]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot512";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,512));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


           $("input[name=btn-pot513]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot513";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,513));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

           $("input[name=btn-pot514]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot514";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,514));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


           $("input[name=btn-pot515]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot515";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,515));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



           $("input[name=btn-pot516]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot516";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,516));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


           $("input[name=btn-pot517]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot517";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,517));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


           $("input[name=btn-pot518]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot518";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,518));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


           $("input[name=btn-pot519]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot519";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,519));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



           $("input[name=btn-pot520]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot520";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,520));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


           $("input[name=btn-pot521]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot521";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,521));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


           $("input[name=btn-pot522]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot522";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,522));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

           $("input[name=btn-pot523]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot523";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,523));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


           $("input[name=btn-pot524]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot524";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,524));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

             
           $("input[name=btn-pot525]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot525";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,525));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


           $("input[name=btn-pot526]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot526";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,526));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


           $("input[name=btn-pot527]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot527";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,527));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

           $("input[name=btn-pot528]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot528";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,528));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 
           $("input[name=btn-pot529]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot529";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,529));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



       $("input[name=btn-pot530]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot530";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,530));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

       $("input[name=btn-pot531]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot531";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,531));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


       $("input[name=btn-pot532]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot532";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,532));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


       $("input[name=btn-pot533]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot533";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,533));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


       $("input[name=btn-pot534]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot534";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,534));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


       $("input[name=btn-pot535]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot535";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,535));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



       $("input[name=btn-pot536]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot536";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,536));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



       $("input[name=btn-pot537]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot537";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,537));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



       $("input[name=btn-pot538]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot538";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,538));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



       $("input[name=btn-pot539]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot539";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,539));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



       $("input[name=btn-pot540]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot540";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,540));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



       $("input[name=btn-pot541]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot541";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,541));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



       $("input[name=btn-pot542]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot542";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,542));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


       $("input[name=btn-pot543]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot543";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,543));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot544]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot244";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,244));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


       $("input[name=btn-pot545]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot545";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,545));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

       $("input[name=btn-pot546]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot546";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,546));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



       $("input[name=btn-pot547]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot547";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,547));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot548]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot548";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,548));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



$("input[name=btn-pot549]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot549";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,549));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot550]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot550";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,550));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




$("input[name=btn-pot551]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot551";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,551));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot552]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot552";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,552));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




$("input[name=btn-pot553]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot553";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,553));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot554]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot554";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,554));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




$("input[name=btn-pot555]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot555";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,555));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot556]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot556";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,556));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 





$("input[name=btn-pot557]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot557";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,557));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot558]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot558";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,558));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




$("input[name=btn-pot559]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot559";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,559));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot560]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot560";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,560));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


$("input[name=btn-pot561]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot561";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,561));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot562]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot562";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,562));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


$("input[name=btn-pot563]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot563";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,563));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot564]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot564";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,564));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



$("input[name=btn-pot565]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot565";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,565));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot566]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot566";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,566));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




$("input[name=btn-pot567]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot567";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,567));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot568]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot568";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,568));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




$("input[name=btn-pot569]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot569";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,569));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot570]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot570";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,570));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




$("input[name=btn-pot571]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot571";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,571));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot572]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot572";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,572));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



$("input[name=btn-pot573]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot573";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,573));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot574]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot574";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,574));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




$("input[name=btn-pot575]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot575";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,575));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot576]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot576";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,576));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot577]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot577";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,577));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot578]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot578";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,578));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



$("input[name=btn-pot579]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot579";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,579));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot580]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot580";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,580));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




     $("input[name=btn-pot581]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot581";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,581));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


     $("input[name=btn-pot582]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot582";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,582));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

     $("input[name=btn-pot583]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot583";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,583));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

     $("input[name=btn-pot584]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot584";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,584));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


$("input[name=btn-pot585]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot585";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,585));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

$("input[name=btn-pot586]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot586";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,586));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

$("input[name=btn-pot587]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot587";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,587));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

$("input[name=btn-pot588]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot588";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,588));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

$("input[name=btn-pot589]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot589";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,589));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

$("input[name=btn-pot590]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot590";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,290));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

$("input[name=btn-pot591]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot591";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,591));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

$("input[name=btn-pot592]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot592";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,592));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


$("input[name=btn-pot593]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot593";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,593));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

$("input[name=btn-pot594]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot594";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,594));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

$("input[name=btn-pot595]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot595";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,595));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

$("input[name=btn-pot596]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot596";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,596));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


$("input[name=btn-pot597]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot597";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,597));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 
$("input[name=btn-pot598]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot598";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,598));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

$("input[name=btn-pot599]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot599";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,599));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


$("input[name=btn-pot600]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot600";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,600));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

				//aqui 600



                  $("input[name=btn-pot601]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot601";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,601));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


          $("input[name=btn-pot602]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot602";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,602));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

          $("input[name=btn-pot603]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot603";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,603));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

          $("input[name=btn-pot604]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot604";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,604));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

          $("input[name=btn-pot605]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot605";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,605));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

          $("input[name=btn-pot606]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot606";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,606));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

          $("input[name=btn-pot607]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot607";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,607));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

          $("input[name=btn-pot608]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot608";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,608));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


          $("input[name=btn-pot609]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot609";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,609));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 
           $("input[name=btn-pot610]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot610";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,610));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 
              
           $("input[name=btn-pot611]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot611";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,611));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

           $("input[name=btn-pot612]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot612";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,612));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


           $("input[name=btn-pot613]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot613";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,613));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

           $("input[name=btn-pot614]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot614";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,614));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


           $("input[name=btn-pot615]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot615";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,615));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



           $("input[name=btn-pot616]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot616";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,616));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


           $("input[name=btn-pot617]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot617";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,617));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


           $("input[name=btn-pot618]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot618";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,618));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


           $("input[name=btn-pot619]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot619";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,619));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



           $("input[name=btn-pot620]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot620";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,620));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


           $("input[name=btn-pot621]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot621";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,621));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


           $("input[name=btn-pot622]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot622";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,622));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

           $("input[name=btn-pot623]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot623";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,623));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


           $("input[name=btn-pot624]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot624";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,24));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

             
           $("input[name=btn-pot625]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot625";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,625));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


           $("input[name=btn-pot626]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot626";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,626));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


           $("input[name=btn-pot627]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot627";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,627));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

           $("input[name=btn-pot628]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot628";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,628));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 
           $("input[name=btn-pot629]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot629";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,629));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



       $("input[name=btn-pot630]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot630";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,630));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

       $("input[name=btn-pot631]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot631";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,631));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


       $("input[name=btn-pot632]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot632";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,632));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


       $("input[name=btn-pot633]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot633";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,633));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


       $("input[name=btn-pot634]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot634";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,634));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


       $("input[name=btn-pot635]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot635";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,635));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



       $("input[name=btn-pot636]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot636";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,636));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



       $("input[name=btn-pot637]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot637";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,637));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



       $("input[name=btn-pot638]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot638";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,638));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



       $("input[name=btn-pot639]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot639";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,639));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



       $("input[name=btn-pot640]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot640";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,640));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



       $("input[name=btn-pot641]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot641";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,641));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



       $("input[name=btn-pot642]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot642";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,642));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


       $("input[name=btn-pot643]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot643";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,643));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot644]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot644";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,644));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


       $("input[name=btn-pot645]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot645";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,645));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

       $("input[name=btn-pot646]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot646";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,646));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



       $("input[name=btn-pot647]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot647";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,647));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot648]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot648";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,648));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



$("input[name=btn-pot649]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot649";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,649));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot650]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot650";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,650));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




$("input[name=btn-pot651]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot651";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,651));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot652]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot652";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,652));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




$("input[name=btn-pot653]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot653";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,653));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot654]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot654";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,654));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




$("input[name=btn-pot655]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot655";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,655));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot656]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot656";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,656));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 





$("input[name=btn-pot657]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot657";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,657));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot658]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot658";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,658));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




$("input[name=btn-pot659]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot659";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,659));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot660]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot660";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,660));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


$("input[name=btn-pot661]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot661";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,661));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot662]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot662";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,662));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


$("input[name=btn-pot663]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot663";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,663));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot664]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot664";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,664));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



$("input[name=btn-pot665]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot665";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,665));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot666]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot666";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,666));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




$("input[name=btn-pot667]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot667";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,667));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot668]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot668";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,668));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




$("input[name=btn-pot669]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot669";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,669));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot670]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot670";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,670));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




$("input[name=btn-pot671]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot671";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,671));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot672]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot672";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,672));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



$("input[name=btn-pot673]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot673";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,673));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot674]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot674";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,674));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




$("input[name=btn-pot675]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot675";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,675));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot676]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot676";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,676));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot677]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot677";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,677));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot678]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot678";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,678));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



$("input[name=btn-pot679]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot679";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,679));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot680]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot680";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,680));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




     $("input[name=btn-pot681]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot681";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,681));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


     $("input[name=btn-pot682]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot682";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,682));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

     $("input[name=btn-pot683]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot683";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,683));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

     $("input[name=btn-pot684]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot684";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,684));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


$("input[name=btn-pot685]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot685";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,685));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

$("input[name=btn-pot686]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot686";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,686));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

$("input[name=btn-pot687]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot687";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,687));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

$("input[name=btn-pot688]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot688";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,688));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

$("input[name=btn-pot689]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot689";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,689));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

$("input[name=btn-pot690]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot690";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,690));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

$("input[name=btn-pot691]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot691";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,691));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

$("input[name=btn-pot692]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot692";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,692));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


$("input[name=btn-pot693]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot693";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,693));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

$("input[name=btn-pot694]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot694";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,694));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

$("input[name=btn-pot695]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot695";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,695));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

$("input[name=btn-pot696]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot696";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,696));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


$("input[name=btn-pot697]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot697";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,697));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 
$("input[name=btn-pot698]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot698";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,698));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

$("input[name=btn-pot699]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot699";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,699));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


$("input[name=btn-pot700]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot700";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,700));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 
			//aqui 700

          $("input[name=btn-pot701]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot701";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,701));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


          $("input[name=btn-pot702]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot702";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,702));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

          $("input[name=btn-pot703]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot703";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,703));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

          $("input[name=btn-pot704]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot704";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,704));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

          $("input[name=btn-pot705]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot705";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,705));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

          $("input[name=btn-pot706]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot706";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,706));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

          $("input[name=btn-pot707]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot707";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,707));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

          $("input[name=btn-pot708]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot708";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,708));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


          $("input[name=btn-pot709]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot709";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,709));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 
           $("input[name=btn-pot710]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot710";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,710));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 
              
           $("input[name=btn-pot711]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot711";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,711));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

           $("input[name=btn-pot712]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot712";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,712));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


           $("input[name=btn-pot713]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot713";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,713));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

           $("input[name=btn-pot714]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot714";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,714));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


           $("input[name=btn-pot715]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot715";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,715));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



           $("input[name=btn-pot716]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot716";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,716));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


           $("input[name=btn-pot717]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot717";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,717));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


           $("input[name=btn-pot718]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot718";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,718));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


           $("input[name=btn-pot719]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot719";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,719));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



           $("input[name=btn-pot720]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot720";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,720));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


           $("input[name=btn-pot721]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot721";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,721));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


           $("input[name=btn-pot722]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot722";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,722));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

           $("input[name=btn-pot723]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot723";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,723));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


           $("input[name=btn-pot724]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot724";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,724));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

             
           $("input[name=btn-pot725]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot725";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,725));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


           $("input[name=btn-pot726]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot726";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,726));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


           $("input[name=btn-pot727]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot727";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,727));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

           $("input[name=btn-pot728]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot728";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,728));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 
           $("input[name=btn-pot729]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot729";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,729));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



       $("input[name=btn-pot730]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot730";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,730));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

       $("input[name=btn-pot731]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot731";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,731));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

         
       $("input[name=btn-pot732]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot732";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,732));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


       $("input[name=btn-pot733]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot733";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,733));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


       $("input[name=btn-pot734]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot734";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,734));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


       $("input[name=btn-pot735]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot735";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,735));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



       $("input[name=btn-pot736]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot736";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,736));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



       $("input[name=btn-pot737]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot737";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,737));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



       $("input[name=btn-pot738]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot738";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,738));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



       $("input[name=btn-pot739]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot739";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,739));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



       $("input[name=btn-pot740]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot740";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,740));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



       $("input[name=btn-pot741]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot741";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,741));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



       $("input[name=btn-pot742]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot742";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,742));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


       $("input[name=btn-pot743]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot743";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,743));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot744]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot744";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,744));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


       $("input[name=btn-pot745]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot745";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,745));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

       $("input[name=btn-pot746]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot746";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,746));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



       $("input[name=btn-pot747]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot747";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,747));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot748]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot748";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,748));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



$("input[name=btn-pot749]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot749";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,749));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot750]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot750";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,750));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




$("input[name=btn-pot751]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot751";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,751));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot752]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot752";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,752));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




$("input[name=btn-pot753]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot753";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,753));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot754]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot754";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,754));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




$("input[name=btn-pot755]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot755";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,755));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot756]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot756";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,756));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 





$("input[name=btn-pot757]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot757";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,757));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot758]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot758";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,758));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




$("input[name=btn-pot759]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot759";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,759));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot760]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot760";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,760));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


$("input[name=btn-pot761]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot761";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,761));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot762]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot762";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,762));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


$("input[name=btn-pot763]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot763";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,763));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot764]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot764";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,764));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



$("input[name=btn-pot765]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot765";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,765));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot766]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot766";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,766));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




$("input[name=btn-pot767]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot767";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,767));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot768]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot768";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,768));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




$("input[name=btn-pot769]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot769";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,769));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot770]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot770";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,770));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




$("input[name=btn-pot771]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot771";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,771));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot772]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot772";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,772));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



$("input[name=btn-pot773]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot773";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,773));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot774]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot774";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,774));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




$("input[name=btn-pot775]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot775";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,775));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot776]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot776";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,776));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot777]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot777";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,777));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot778]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot778";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,778));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



$("input[name=btn-pot779]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot779";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,779));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot780]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot780";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,780));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




     $("input[name=btn-pot781]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot781";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,781));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


     $("input[name=btn-pot782]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot782";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,782));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

     $("input[name=btn-pot783]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot783";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,783));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

     $("input[name=btn-pot784]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot784";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,784));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


$("input[name=btn-pot785]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot785";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,785));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

$("input[name=btn-pot786]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot786";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,786));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

$("input[name=btn-pot787]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot787";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,787));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

$("input[name=btn-pot788]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot788";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,788));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

$("input[name=btn-pot789]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot789";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,789));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

$("input[name=btn-pot790]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot790";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,790));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

$("input[name=btn-pot791]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot791";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,791));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

$("input[name=btn-pot792]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot792";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,792));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


$("input[name=btn-pot793]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot793";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,793));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

$("input[name=btn-pot794]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot794";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,794));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

$("input[name=btn-pot795]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot795";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,795));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

$("input[name=btn-pot796]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot796";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,796));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


$("input[name=btn-pot797]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot797";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,797));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 
$("input[name=btn-pot798]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot798";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,798));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

$("input[name=btn-pot799]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot799";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,799));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


$("input[name=btn-pot800]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot800";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,800));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

			//aqui 800
			$("input[name=btn-pot801]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot801";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,801));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


          $("input[name=btn-pot802]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot802";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,802));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

          $("input[name=btn-pot803]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot803";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,803));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

          $("input[name=btn-pot804]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot804";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,804));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

          $("input[name=btn-pot805]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot805";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,805));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

          $("input[name=btn-pot806]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot806";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,806));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

          $("input[name=btn-pot807]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot807";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,807));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

          $("input[name=btn-pot808]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot808";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,808));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


          $("input[name=btn-pot809]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot809";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,809));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 
           $("input[name=btn-pot810]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot810";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,810));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 
              
           $("input[name=btn-pot811]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot811";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,811));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

           $("input[name=btn-pot812]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot812";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,812));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


           $("input[name=btn-pot813]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot813";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,813));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

           $("input[name=btn-pot814]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot814";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,814));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


           $("input[name=btn-pot815]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot815";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,815));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



           $("input[name=btn-pot816]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot816";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,816));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


           $("input[name=btn-pot817]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot817";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,817));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


           $("input[name=btn-pot818]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot818";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,818));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


           $("input[name=btn-pot819]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot819";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,819));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



           $("input[name=btn-pot820]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot820";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,820));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


           $("input[name=btn-pot821]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot821";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,821));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


           $("input[name=btn-pot822]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot822";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,822));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

           $("input[name=btn-pot823]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot823";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,823));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


           $("input[name=btn-pot824]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot824";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,824));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

             
           $("input[name=btn-pot825]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot825";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,825));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


           $("input[name=btn-pot826]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot826";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,826));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


           $("input[name=btn-pot827]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot827";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,827));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

           $("input[name=btn-pot828]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot828";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,828));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 
           $("input[name=btn-pot829]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot829";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,829));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



       $("input[name=btn-pot830]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot830";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,830));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

       $("input[name=btn-pot831]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot831";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,831));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


       $("input[name=btn-pot832]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot832";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,832));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


       $("input[name=btn-pot833]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot833";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,833));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


       $("input[name=btn-pot834]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot834";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,834));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


       $("input[name=btn-pot835]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot835";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,835));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



       $("input[name=btn-pot836]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot836";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,836));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



       $("input[name=btn-pot837]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot837";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,837));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



       $("input[name=btn-pot838]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot838";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,838));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



       $("input[name=btn-pot839]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot839";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,839));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



       $("input[name=btn-pot840]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot840";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,840));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



       $("input[name=btn-pot841]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot841";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,841));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



       $("input[name=btn-pot842]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot842";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,842));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


       $("input[name=btn-pot843]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot843";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,843));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot844]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot844";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,844));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


       $("input[name=btn-pot845]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot845";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,845));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

       $("input[name=btn-pot846]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot846";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,846));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



       $("input[name=btn-pot847]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot847";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,847));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot848]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot848";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,848));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



$("input[name=btn-pot849]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot849";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,849));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot850]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot850";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,850));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




$("input[name=btn-pot851]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot851";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,851));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot852]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot852";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,852));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




$("input[name=btn-pot853]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot853";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,853));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot854]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot854";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,854));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




$("input[name=btn-pot855]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot855";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,855));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot856]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot856";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,856));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 





$("input[name=btn-pot857]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot857";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,857));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot858]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot858";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,858));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




$("input[name=btn-pot859]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot859";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,859));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot860]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot860";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,860));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


$("input[name=btn-pot861]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot861";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,861));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot862]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot862";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,862));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


$("input[name=btn-pot863]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot863";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,863));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot864]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot864";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,864));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



$("input[name=btn-pot865]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot865";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,865));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot866]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot866";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,866));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




$("input[name=btn-pot867]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot867";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,867));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot868]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot868";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,868));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




$("input[name=btn-pot869]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot869";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,869));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot870]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot870";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,870));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




$("input[name=btn-pot871]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot871";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,871));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot872]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot872";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,872));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



$("input[name=btn-pot873]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot873";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,873));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot874]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot874";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,874));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




$("input[name=btn-pot875]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot875";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,875));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot876]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot876";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,876));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot877]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot877";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,877));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot878]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot878";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,878));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



$("input[name=btn-pot879]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot879";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,879));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot880]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot880";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,880));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




     $("input[name=btn-pot881]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot881";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,881));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


     $("input[name=btn-pot882]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot882";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,882));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

     $("input[name=btn-pot883]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot883";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,883));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

     $("input[name=btn-pot884]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot884";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,884));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


$("input[name=btn-pot885]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot885";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,885));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

$("input[name=btn-pot886]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot886";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,886));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

$("input[name=btn-pot887]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot887";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,887));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

$("input[name=btn-pot888]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot888";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,888));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

$("input[name=btn-pot889]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot889";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,889));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

$("input[name=btn-pot890]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot890";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,890));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

$("input[name=btn-pot891]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot891";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,891));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

$("input[name=btn-pot892]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot892";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,892));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


$("input[name=btn-pot893]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot893";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,893));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

$("input[name=btn-pot894]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot894";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,894));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

$("input[name=btn-pot895]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot895";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,895));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

$("input[name=btn-pot896]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot896";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,896));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


$("input[name=btn-pot897]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot897";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,897));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 
$("input[name=btn-pot898]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot898";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,898));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

$("input[name=btn-pot899]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot899";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,299));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


$("input[name=btn-pot900]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot900";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,900));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

             //aqui 900
             $("input[name=btn-pot901]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot901";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,901));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


          $("input[name=btn-pot902]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot902";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,902));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

          $("input[name=btn-pot903]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot903";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,903));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

          $("input[name=btn-pot904]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot904";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,904));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

          $("input[name=btn-pot905]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot905";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,905));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

          $("input[name=btn-pot906]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot906";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,906));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

          $("input[name=btn-pot907]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot907";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,907));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

          $("input[name=btn-pot908]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot908";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,908));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


          $("input[name=btn-pot909]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot909";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,909));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 
           $("input[name=btn-pot910]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot910";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,910));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 
              
           $("input[name=btn-pot911]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot911";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,911));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

           $("input[name=btn-pot912]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot912";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,912));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


           $("input[name=btn-pot913]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot913";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,913));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

           $("input[name=btn-pot914]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot914";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,914));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


           $("input[name=btn-pot915]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot915";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,915));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



           $("input[name=btn-pot916]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot916";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,916));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


           $("input[name=btn-pot917]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot917";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,917));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


           $("input[name=btn-pot918]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot918";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,918));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


           $("input[name=btn-pot919]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot919";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,919));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



           $("input[name=btn-pot920]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot920";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,920));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


           $("input[name=btn-pot921]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot921";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,921));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


           $("input[name=btn-pot922]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot922";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,922));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

           $("input[name=btn-pot923]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot923";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,923));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


           $("input[name=btn-pot924]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot924";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,924));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

             
           $("input[name=btn-pot925]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot925";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,925));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


           $("input[name=btn-pot926]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot926";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,926));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


           $("input[name=btn-pot927]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot927";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,927));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

           $("input[name=btn-pot928]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot928";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,928));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 
           $("input[name=btn-pot929]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot929";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,929));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



       $("input[name=btn-pot930]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot930";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,930));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

       $("input[name=btn-pot931]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot931";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,931));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


       $("input[name=btn-pot932]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot932";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,932));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


       $("input[name=btn-pot933]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot933";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,933));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


       $("input[name=btn-pot934]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot934";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,934));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


       $("input[name=btn-pot935]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot935";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,935));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



       $("input[name=btn-pot936]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot936";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,936));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



       $("input[name=btn-pot937]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot937";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,937));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



       $("input[name=btn-pot938]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot938";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,938));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



       $("input[name=btn-pot939]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot939";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,939));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



       $("input[name=btn-pot940]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot940";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,940));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



       $("input[name=btn-pot941]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot941";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,941));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



       $("input[name=btn-pot942]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot942";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,942));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


       $("input[name=btn-pot943]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot943";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,943));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot944]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot944";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,944));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


       $("input[name=btn-pot945]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot945";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,945));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

       $("input[name=btn-pot946]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot946";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,946));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



       $("input[name=btn-pot947]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot947";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,947));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot948]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot948";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,948));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



$("input[name=btn-pot949]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot949";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,949));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot950]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot950";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,950));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




$("input[name=btn-pot951]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot951";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,951));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot952]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot952";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,952));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




$("input[name=btn-pot953]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot953";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,953));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot954]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot954";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,954));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




$("input[name=btn-pot955]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot955";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,955));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot956]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot956";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,956));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 





$("input[name=btn-pot957]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot957";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,957));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot958]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot958";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,958));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




$("input[name=btn-pot959]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot959";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,959));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot960]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot960";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,960));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


$("input[name=btn-pot961]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot961";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,961));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot962]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot962";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,962));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


$("input[name=btn-pot963]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot963";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,963));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot964]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot964";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,964));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



$("input[name=btn-pot965]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot965";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,965));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot966]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot966";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,966));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




$("input[name=btn-pot967]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot967";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,967));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot968]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot968";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,968));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




$("input[name=btn-pot969]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot969";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,969));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot970]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot970";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,970));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




$("input[name=btn-pot971]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot971";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,971));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot972]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot972";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,972));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



$("input[name=btn-pot973]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot973";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,973));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot974]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot974";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,974));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




$("input[name=btn-pot975]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot975";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,975));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot976]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot976";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,976));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot977]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot977";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,977));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot978]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot278";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,978));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



$("input[name=btn-pot979]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot979";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,979));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




       $("input[name=btn-pot980]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot980";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,980));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 




     $("input[name=btn-pot981]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot981";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,981));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


     $("input[name=btn-pot982]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot982";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,982));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

     $("input[name=btn-pot983]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot983";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,983));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

     $("input[name=btn-pot984]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot984";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,284));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


$("input[name=btn-pot985]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot985";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,985));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

$("input[name=btn-pot986]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot986";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,986));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

$("input[name=btn-pot987]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot987";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,987));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

$("input[name=btn-pot988]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot988";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,988));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

$("input[name=btn-pot989]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot989";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,989));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

$("input[name=btn-pot990]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot990";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,990));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

$("input[name=btn-pot991]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot991";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,991));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

$("input[name=btn-pot992]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot992";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,992));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


$("input[name=btn-pot993]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot993";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,993));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

$("input[name=btn-pot994]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot994";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,994));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

$("input[name=btn-pot995]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot995";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,995));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

$("input[name=btn-pot996]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot996";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,996));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


$("input[name=btn-pot997]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot997";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,997));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 
$("input[name=btn-pot998]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot998";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,998));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

$("input[name=btn-pot999]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot999";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,999));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


$("input[name=btn-pot1000]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot1000";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,1000));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 
           //aqui 1000

       $("input[name=btn-pot1001]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot1001";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,1001));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


          $("input[name=btn-pot1002]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot1002";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,1002));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

          $("input[name=btn-pot1003]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot1003";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,1003));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

          $("input[name=btn-pot1004]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot1004";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,1004));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

          $("input[name=btn-pot1005]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot1005";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,1005));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

          $("input[name=btn-pot1006]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot1006";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,1006));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

          $("input[name=btn-pot1007]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot1007";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,1007));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

          $("input[name=btn-pot1008]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot1008";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,1008));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


          $("input[name=btn-pot1009]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot1009";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,1009));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 
           $("input[name=btn-pot1010]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot1010";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,1010));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 
              
           $("input[name=btn-pot1011]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot1011";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,1011));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

           $("input[name=btn-pot1012]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot1012";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,1012));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


           $("input[name=btn-pot1013]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot1013";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,1013));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

           $("input[name=btn-pot1014]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot1014";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,1014));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


           $("input[name=btn-pot1015]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot1015";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,1015));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



           $("input[name=btn-pot1016]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot1016";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,1016));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


           $("input[name=btn-pot1017]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot1017";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,1017));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


           $("input[name=btn-pot1018]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot1018";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,1018));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


           $("input[name=btn-pot1019]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot1019";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,1019));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



           $("input[name=btn-pot1020]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot1020";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,1020));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


           $("input[name=btn-pot1021]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot1021";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,1021));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


           $("input[name=btn-pot1022]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot1022";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,1022));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

           $("input[name=btn-pot1023]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot1023";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,1023));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


           $("input[name=btn-pot1024]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot1024";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,1024));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 
// esse

$("input[name=btn-ra2]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-ra2";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,2)+(Math.PI*2*v1));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });

   $("input[name=btn-pot1098]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot1098";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,1098));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

    $("input[name=btn-pot3848]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot3848";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,3848));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

 $("input[name=btn-pot6959]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot6959";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,6959));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });

 $("input[name=btn-pot15998]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot15998";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,15998));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

  $("input[name=btn-pot33848]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot33848";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,33848));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 


 $("input[name=btn-pot99959]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot99959";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,99959));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

  $("input[name=btn-pot189998]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot189998";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,189998));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

    $("input[name=btn-pot338498]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot338498";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,338498));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

      $("input[name=btn-pot789959]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot789959";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,789959));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

        $("input[name=btn-pot185999889524]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-pot185999889524";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,185999889524));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 



        $("input[name=btn-potencia]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-potencia";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,2)+ Math.pow(v1,3));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       }); 

           $("input[name=btn-multi]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-multi";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,2) *
                    Math.pow(v1,3) * Math.pow(v1,8));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });

                $("input[name=btn-ra5]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-ra5";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.sqrt(Math.cbrt(v1)));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });

              $("input[name=btn-ex]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-ex";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.sqrt(Math.expm1(v1)));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });


          $("input[name=btn-log3]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-log3";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.log(Math.expm1(v1)));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });

           $("input[name=btn-di]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-di";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.pow(v1,16)/
                    (Math.pow(v1,2)));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });


             $("input[name=btn-ra6]").click(function(){
           if($("#result").val() != ' '){
                 v1=parseFloat($("#result").val());
                  $("#result").val(' ');
                   op="btn-ra6";
                $("#op").text($(this).val() );       
                  $("#result").val(Math.sqrt(Math.SQRT1_2));
                    }else{
            // alert('insira um valor para a operação');
          alert('Digite  1 valor  e calcule aqui mesmo ');
           }
       });
// esse



$("input[name=igual]").click(function(){
      if($("#result").val() != ' '){
                 v2=parseFloat($("#result").val());
                      if(op=="soma"){
                  	$("#result").val(v1+v2);
                  } 

                   if(op=="menos"){
                  	$("#result").val(v1-v2);
                  }   
                    

                    if(op=="vezes"){
                  	$("#result").val(v1*v2);
                  }   


                  if(op=="div"){
                  	$("#result").val(v1/v2);
                  }   
                
               
                  //  if(op=="por"){
                  //   $("#result").val(v1/100*v2);
                  // }   

                    }else{
          	// alert('insira um valor para a operação');
          alert('insira um valor para o cálculo');
           }
});

 $("input[name=c]").click(function(){
    var len = $("#result").val().length;
                var valor  = $("#result").val();

                  
                valor=valor.replace(valor.charAt(len - 1), " ");
                $("#result").val(valor);

 });

 

});