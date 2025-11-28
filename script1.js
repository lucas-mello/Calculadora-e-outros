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
          alert('Digite  1 valor  e calcule aqui mesmo');
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