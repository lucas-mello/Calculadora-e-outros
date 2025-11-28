//                               Script desenvolvido por Alan Vinícius Silva http://www.facebook.com/Alanvncs

//                     Esse Script calcula os números primos contidos num intervalo de 0 (zero) à um número especificado

//         Não funciona no IE(Ineternet Explorer) em função da RegExp. Tome isso como seu próximo desafio: Fazer-lo funcionar no IE também.


//-------------------------------------------------------------------------------------------------------------------------------------------
//Variaveis externas que servem para todas as funções
var doc = document.getElementsByTagName("textarea");
var txt = document.getElementsByTagName("input");
var bod = document.getElementsByTagName("body");
//-------------------------------------------------------------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------------------------------------------------------------
// apagar(); Esta função verifica, apaga e reescreve o texto inicial do <input type="text"...> caso o usuário dê foco ou tire o foco do mesmo
function apagar() //Esta função está associada aos eventos onfocus e onclick, na primeira (e única) caixa de texto <input type="text"...>
{
	if(txt[1].value == "Digite aqui o número...")
	{
		txt[1].value = "";
	}
	else if(txt[1].value == "")
	{
		txt[1].value = "Digite aqui o número...";
	}
	else
	{
	}
}
//-------------------------------------------------------------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------------------------------------------------------------
// bt(); Esta função identifica se a string colocada no <input type="text"...> é um conjunto de números, calcula os números primos e os apresetam detro de uma <textarea...> criada com o método .innerHTML, sendo que são mudados alguns elementos dentro da página com o próprio innerHTML.
function bt() //Esta função está associada ao evento onclick, no primeiro (e único) botão "Calcular!" (<input type="button"...>)
{
	var f=0;
	var regra = /\d/;
	for(t=0; t<txt[1].value.length; t++)
	{
		if(regra.test(txt[1].value[t]))
		{
			f=1;
		}
		else
		{
			alert("Digite apenas números!");
			f=0;
			break;
		}
	}
	if(f==1)
	{
		var x = "";
		var c = 0;
		for(i=2; i<txt[1].value; i++)
		{
			if(i%2 == 0 || i%3 == 0 || i%4 == 0 || i%5 == 0 || i%6 == 0 || i%7 == 0 || i%8 == 0 || i%9 == 0)
			{
				if(i==2 || i==3 || i==5 || i==7)
				{
					x= x + i + "\n"
					c = c + 1
				}
				else
				{	
				}
			}
			else
			{
				x= x + i + "\n" 
				c = c + 1
			}
		}
		bod[0].innerHTML = "<center>\n<br /><input type=\"button\" value=\"Calcular!\" onclick=\"bt();\" /><br /><br />\n<font color=\"#000000\" style=\"font-style:italic\">De 0 à " + txt[1].value + ", há a ocorrencia de " + c + " números primos</font><br /><center><input type=\"text\" onfocus=\"apagar();\" onblur=\"apagar();\" value=\"" + txt[1].value + "\" /><br /><textarea cols=\"20\" rows=\"" + c + "\" >" + x + "</textarea>\n</center>"
	}
	else
	{
	}
}
//-------------------------------------------------------------------------------------------------------------------------------------------



                        













