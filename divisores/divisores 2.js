var n= parseInt(prompt("Digite um valor para n:"));
      var contador=0;
      var x;
 for (x=1;x<=n;x++) {   
  if (n%x==0) {
       contador++;
  }
 }
 if (contador==2)
  document.write ("Número primo");   
 else 
  document.write ("Não é primo");