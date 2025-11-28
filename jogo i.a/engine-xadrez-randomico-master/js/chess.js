//abrir jquery e  inserir imagem


$(function(){
	
// 1 das formas de abrir jquery
	var colunas = {};
//array ou vetor
	colunas[0] = 'a';
//array ou vetor
	colunas[1] = 'b';
//array ou vetor
	colunas[2] = 'c';
//array ou vetor
	colunas[3] = 'd';
//array ou vetor
	colunas[4] = 'e';
//array ou vetor
	colunas[5] = 'f';
//array ou vetor
	colunas[6] = 'g';
//array ou vetor
	colunas[7] = 'h';
//array ou vetor

// --------------------------------------------------

	var mate = false;
//variaveis da linguagem fracamente tipada
	var movesKings = {'black':{}, 'white': {}};
//variaveis da linguagem fracamente tipada
	var casaChecking = '';
//variaveis da linguagem fracamente tipada
	var checking = false;
//variaveis da linguagem fracamente tipada
	var checkLonge = false;
//variaveis da linguagem fracamente tipada


	var jogador = 'white';
//variaveis da linguagem fracamente tipada
	var vezdo = 'white';

//variaveis da linguagem fracamente tipada

	var clicou = 0;
//variaveis da linguagem fracamente tipada
	var pecaEscolhida = '';
//variaveis da linguagem fracamente tipada
	var ultimaCasaEscolhida = '';
//variaveis da linguagem fracamente tipada


// --------------------------------------------------


	$('#aplicarFen').on('click', function(){
//aplicacao da notacao de fen
		var fenString = $('#fenStr').val();
//aplicacao da notacao de fen
		if(fenString == ''){
//verificaraplicacao da notacao de fen
			alert('informe uma strin fen');
//aplicacao da notacao de fen
		}else{
//aplicacao da notacao de fen
			parseFen(fenString);
//aplicacao da notacao de fen
		}
//aplicacao da notacao de fen
	});
//aplicacao da notacao de fen


// --------------------------------------------------

 //verificar quando clicar na peca em .piece
	$('body').on('click', '.piece', function(){
//verificar quando clicar na peca em .piece
		var classe = $(this).attr('class');
//verificar quando clicar na peca em .piece
		var casa = $(this).parent();
//verificar quando clicar na peca em .piece
		var casaId = casa.attr('id');
//verificar quando clicar na peca em .piece


		if(vezdo == jogador){
         //verificar qual jogador é a vez e converte em string
			if(classe.indexOf(jogador) >= 0){
//verificar qual jogador é a vez e converte em string
				clicou = 1;
//verificar qual jogador é a vez e converte em string//verificar qual jogador é a vez e converte em string
				ultimaCasaEscolhida = casaId;
//verificar qual jogador é a vez e converte em string
				pecaEscolhida = $(this);
//verificar qual jogador é a vez e converte em string
				$('.square-board').removeClass('possible');
//verificar qual jogador é a vez e converte em string
			}
//verificar qual jogador é a vez e converte em string
		}
//verificar qual jogador é a vez e converte em string
	});
//verificar qual jogador é a vez e converte em string


// --------------------------------------------------


//variavel de posicionamento da peca
	var vai_para = '';
//variavel de posicionamento da peca
	$('body').on('click', '.square-board', function(){
//variavel de posicionamento da peca
		var temPeca = $(this).find('.piece').size();
//variavel de posicionamento da peca
		var idCasa = $(this).attr('id');

//variavel de posicionamento da peca

		var movimentosPossiveis = verifyPiece(pecaEscolhida, ultimaCasaEscolhida);
//variavel de posicionamento da peca
		$.each(movimentosPossiveis, function(i, sqr){
//variavel de posicionamento da peca
			$('#'+sqr).addClass('possible');
//variavel de posicionamento da peca
		});
//variavel de posicionamento da peca


// --------------------------------------------------



//variavel de posicionamento da peca
		if(idCasa != ultimaCasaEscolhida){
//variavel de posicionamento da peca
			vai_para = idCasa;

//variavel de posicionamento da peca

			if(objSearch(movimentosPossiveis, idCasa) != null){
//variavel de posicionamento da peca
				if(mate == false){
//variavel de posicionamento da peca
					jogar($(this));
//variavel de posicionamento da peca
					bloqueiosRei();
					//metodo que bloqueia movimentos do rei

				}else{
//metodo que bloqueia movimentos do rei
					alert('Check mate');
//metodo que bloqueia movimentos do rei
				}
				//metodo que bloqueia movimentos do rei
// --------------------------------------------------


//movimentos automaticos aula 12
engine(vezdo, checking); 
//movimentos automaticos aula 12
				engine();
//movimentos automaticos aula 12
			}else{
//movimentos automaticos aula 12
				alert('Jogada é invalida');
//movimentos automaticos aula 12



			}
           //movimentos automaticos aula 12
		}
//movimentos automaticos aula 12
	});
//movimentos automaticos aula 12

// --------------------------------------------------
	function engine(){
//movimentos automaticos aula 12
		var engine = 'black';
//movimentos automaticos aula 12
		var pecasEngine = {};
//movimentos automaticos aula 12
		var jogou = false;
//movimentos automaticos aula 12
		var checked = false;

//movimentos automaticos aula 12

		if(vezdo == engine){
//movimentos automaticos aula 12
			
//percorrer todos os passos ate encontrar seus movimentos possiveis


//movimentos automaticos aula 12
			$('.piece').each(function(){
//movimentos automaticos aula 12
				var casa = $(this).parent().attr('id');
//movimentos automaticos aula 12
				var peca = $(this).attr('class');
//movimentos automaticos aula 12
				if(peca.indexOf(engine) >= 0){
//movimentos automaticos aula 12
					pecasEngine[casa] = verifyPiece($(this), casa);
//movimentos automaticos aula 12
					var qtdJogadas = 0;
//movimentos automaticos aula 12
					$.each(pecasEngine[casa], function(i, jogada){
//movimentos automaticos aula 12
						if(checking == true){
//movimentos automaticos aula 12
							checked = true;

//movimentos automaticos aula 12

							if(jogada == casaChecking){
//movimentos automaticos aula 12
								$('#'+casa+' .piece').click();
//movimentos automaticos aula 12
								$('#'+casaChecking).click();
//movimentos automaticos aula 12
								jogou = true;
//movimentos automaticos aula 12
								checking = false;
//movimentos automaticos aula 12
							}
//movimentos automaticos aula 12
						}else{
//movimentos automaticos aula 12
							qtdJogadas++;
//movimentos automaticos aula 12
						}
//movimentos automaticos aula 12
					});
//movimentos automaticos aula 12
					if(qtdJogadas == 0){
//movimentos automaticos aula 12
						delete pecasEngine[casa];
//movimentos automaticos aula 12 e deletar 
//quando captura peca adversária
					}
					//movimentos automaticos aula 12

				}
				//movimentos automaticos aula 12

			});

// --------------------------------------------------

//movimentos automaticos aula 12


			if(checked == true && jogou == true){
//movimentos automaticos aula 12
				return false;
//movimentos automaticos aula 12
			}else if(checked == true && jogou == false){
//movimentos automaticos aula 12
				alert('check muito longe');
//movimentos automaticos aula 12
				return false;
//movimentos automaticos aula 12
			}
//movimentos automaticos aula 12
			//escolher uma das peças, antes verificar quantas peças disponiveis

			var pecasDisponiveis = 0;
//movimentos automaticos aula 12
			$.each(pecasEngine, function(peca, jogadas){
//movimentos automaticos aula 12
				pecasDisponiveis++;
//movimentos automaticos aula 12
			});
//movimentos automaticos aula 12
var pecaRandomizada = Math.floor((Math.random()*pecasDisponiveis)+1);
//movimentos automaticos aula 12
			var pecaEscolhida = 0;
//movimentos automaticos aula 12


			//escolher peca

			$.each(pecasEngine, function(square, jogadas){
//movimentos automaticos aula 12
				pecaEscolhida++;
//movimentos automaticos aula 12
				if(pecaEscolhida == pecaRandomizada){
//movimentos automaticos aula 12
					$('#'+square+' .piece').click();
//movimentos automaticos aula 12
					var qtdJogadasDisponiveis = 0;
//movimentos automaticos aula 12
					$.each(pecasEngine[square], function(i, jogada){
//movimentos automaticos aula 12
						qtdJogadasDisponiveis++;
//movimentos automaticos aula 12
					});
//movimentos automaticos aula 12


					//randomiza uma jogada

					var jogadaRandomizada = Math.floor((Math.random()*qtdJogadasDisponiveis)+1);
//movimentos automaticos aula 12
					var jogadaEscolhida = 0;
//movimentos automaticos aula 12
					$.each(pecasEngine[square], function(i, jogada){
//movimentos automaticos aula 12
						jogadaEscolhida++;
//movimentos automaticos aula 12
						if(jogadaEscolhida == jogadaRandomizada){
//movimentos automaticos aula 12
							$('#'+jogada).click();
//movimentos automaticos aula 12
						}
//movimentos automaticos aula 12
					});
//movimentos automaticos aula 12
				}
//movimentos automaticos aula 12
			});
//movimentos automaticos aula 12


		}
//movimentos automaticos aula 12
	}
//movimentos automaticos aula 12

// --------------------------------------------------


	function findMovesOponent(){
//movimentacao do oponente
		var movesOponent = {};
//movimentacao do oponente
		var n = 0;
//movimentacao do oponente
		if(vezdo == 'white'){
//movimentacao do oponente
			var oponent = 'black';
//movimentacao do oponente
		}else{
//movimentacao do oponente
			var oponent = 'white';
//movimentacao do oponente
		}
//movimentacao do oponente


		$('.piece').each(function(){
//movimentacao do oponente
			var peca = $(this).attr('class');
//movimentacao do oponente
			var casa = $(this).parent().attr('id');

//movimentacao do oponente

			if(peca.indexOf(oponent) >= 0){
//movimentacao do oponente
				if(peca.indexOf('pawn') >= 0){
//movimentacao do oponente
					var col = Number(objSearch(colunas, casa[0]));
//movimentacao do oponente
					var proxima = col+1;
//movimentacao do oponente
					var anterior = col-1;
//movimentacao do oponente


					if(peca.indexOf('white') >= 0){
//movimentacao do oponente
						var linhaDiagonal = Number(casa[1])+1;
//movimentacao do oponente
					}else{
//movimentacao do oponente
						var linhaDiagonal = Number(casa[1])-1;
//movimentacao do oponente
					}
//movimentacao do oponente


					var atac1;
//movimentacao do oponente
					var atac2;
//movimentacao do oponente
					if(objSearchIndex(colunas, proxima) != null){
//movimentacao do oponente
						atac1 = colunas[proxima]+linhaDiagonal;
//movimentacao do oponente
					}
//movimentacao do oponente


					if(objSearchIndex(colunas, anterior) != null){
//movimentacao do oponente
						atac2 = colunas[anterior]+linhaDiagonal;
//movimentacao do oponente
					}
//movimentacao do oponente
					n++;
//movimentacao do oponente
					movesOponent[n] = {0:atac1, 1:atac2};
//movimentacao do oponente
				}else{
//movimentacao do oponente
					movesOponent[n] = verifyPiece($(this), casa);
//movimentacao do oponente
					n++;
//movimentacao do oponente
				}
//movimentacao do oponente
			}
//movimentacao do oponente
		});
//movimentacao do oponente


		return movesOponent;
//movimentacao do oponente
	}
//movimentacao do oponente
	//leva em consideração jogador da vez

// --------------------------------------------------

	function squareAttacked(sq){
//movimentacao de ataque
		var retorno = 0;
//movimentacao de ataque
		var movimentosOponente = findMovesOponent();
//movimentacao de ataque
		$.each(movimentosOponente, function(i, movimentos){
//movimentacao de ataque
			$.each(movimentos, function(i, casa){
//movimentacao de ataque
				if(casa == sq){
//movimentacao de ataque
					retorno = 1;
//movimentacao de ataque
				}
//movimentacao de ataque
			});
//movimentacao de ataque
		});

//movimentacao de ataque

		return retorno;
//movimentacao de ataque
	}
//movimentacao de ataque

// --------------------------------------------------

	function bloqueiosRei(){
//movimentacao de bloqueio do rei
		var movesOponent = findMovesOponent();
//movimentacao de bloqueio do rei
		if(vezdo == 'white'){
//movimentacao de bloqueio do rei
			$.each(movesOponent, function(peca, moves){
//movimentacao de bloqueio do rei
				$.each(moves, function(n, move){
//movimentacao de bloqueio do rei
					if(objSearch(movesKings.white, move) != null){
//movimentacao de bloqueio do rei
						var indice = objSearch(movesKings.white, move);
//movimentacao de bloqueio do rei
						delete movesKings.white[indice];
//movimentacao de bloqueio do rei
					}
//movimentacao de bloqueio do rei
				});
//movimentacao de bloqueio do rei
			});
//movimentacao de bloqueio do rei
		}else{
//movimentacao de bloqueio do rei
			$.each(movesOponent, function(peca, moves){
//movimentacao de bloqueio do rei
				$.each(moves, function(n, move){
//movimentacao de bloqueio do rei
					if(objSearch(movesKings.black, move) != null){
//movimentacao de bloqueio do rei
						var indice = objSearch(movesKings.black, move);
//movimentacao de bloqueio do rei
						delete movesKings.black[indice];
//movimentacao de bloqueio do rei
					}
//movimentacao de bloqueio do rei
				});
//movimentacao de bloqueio do rei
			});
//movimentacao de bloqueio do rei
		}
//movimentacao de bloqueio do rei
	}
//movimentacao de bloqueio do rei

// --------------------------------------------------

	var jogadas = 0;
//movimentacao de bloqueio do rei
	function jogar(square){
//movimentacao de bloqueio do rei
		pecaEscolhida.remove();
//movimentacao de bloqueio do rei
		var tipoPeca = pecaEscolhida.attr('class');
//movimentacao de bloqueio do rei
		if(tipoPeca.indexOf('pawn') >= 0){
//movimentacao de bloqueio do rei
			if(Number(ultimaCasaEscolhida[1]) == 7 && Number(vai_para[1]) == 8){
//movimentacao de bloqueio do rei
				pecaEscolhida.attr('class', 'piece queen-white');
//movimentacao de bloqueio do rei
			}
//movimentacao de bloqueio do rei


if(Number(ultimaCasaEscolhida[1]) == 2 && Number(vai_para[1]) == 1){
//movimentacao de bloqueio do rei
				pecaEscolhida.attr('class', 'piece queen-black');
//movimentacao de bloqueio do rei
			}
//movimentacao de bloqueio do rei
		}
//movimentacao de bloqueio do rei
		//notations

		if(vezdo == 'white'){
//movimentacao de bloqueio do rei
			jogadas++;
//movimentacao de bloqueio do rei
			if($('#'+vai_para).find('.piece').size() == 1){
//movimentacao de bloqueio do rei
				$('tbody#jogadas').append('<tr><td>'+jogadas+'</td><td>'+ultimaCasaEscolhida+'x'+vai_para+'</td><td id="'+jogadas+'"></td></tr>');
//movimentacao de bloqueio do rei
			}else{
//movimentacao de bloqueio do rei
				$('tbody#jogadas').append('<tr><td>'+jogadas+'</td><td>'+ultimaCasaEscolhida+'-'+vai_para+'</td><td id="'+jogadas+'"></td></tr>');
//movimentacao de bloqueio do rei
			}
//movimentacao de bloqueio do rei
		}else{
//movimentacao de bloqueio do rei
			if($('#'+vai_para).find('.piece').size() == 1){
//movimentacao de bloqueio do rei
				$('td#'+jogadas).html(ultimaCasaEscolhida+'x'+vai_para);
//movimentacao de bloqueio do rei
			}else{
//movimentacao de bloqueio do rei
				$('td#'+jogadas).html(ultimaCasaEscolhida+'-'+vai_para);
//movimentacao de bloqueio do rei
			}
//movimentacao de bloqueio do rei
		}
//movimentacao de bloqueio do rei
		square.html(pecaEscolhida);
//movimentacao de bloqueio do rei


		//movimentos do rei oponent

		if(vezdo == 'white'){
//movimentacao de bloqueio do rei
var reiOponent = $('.piece.king-black').parent().attr('id');
//movimentacao de bloqueio do rei
			movesKings.black = findMovesKing(reiOponent, 'black');
//movimentacao de bloqueio do rei
		}else{
//movimentacao de bloqueio do rei
			var reiOponent = $('.piece.king-white').parent().attr('id');
//movimentacao de bloqueio do rei
			movesKings.white = findMovesKing(reiOponent, 'white');
//movimentacao de bloqueio do rei
		}

//movimentacao de bloqueio do rei



		//muda jogador da vez

		if(vezdo == 'white'){
//movimentacao de bloqueio do rei
			vezdo = 'black';
//movimentacao de bloqueio do rei
			jogador = 'black';
//movimentacao de bloqueio do rei
		}else{
//movimentacao de bloqueio do rei
			vezdo = 'white';
//movimentacao de bloqueio do rei
			jogador = 'white';			
//movimentacao de bloqueio do rei
		}
//movimentacao de bloqueio do rei
		if(squareAttacked(reiOponent) == 1){
//movimentacao de bloqueio do rei 
			checking = true;
//movimentacao de bloqueio do rei
			casaChecking = vai_para;
//movimentacao de bloqueio do rei
		}
//movimentacao de bloqueio do rei
		$('.square-board').removeClass('possible');
//movimentacao de bloqueio do rei
	}
//movimentacao de bloqueio do rei

// --------------------------------------------------


	var fenStr = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w';
//movimentacao Notação Forsyth-Edwardsou FEN é um método de
 //notação utilizado para descrever uma determinada posição 
 //de peças em um tabuleiro de xadrez, sendo uma adaptação do
 // sistema de notação Forsyth, criada por Steven J. Edwards,
 // para o uso em computadores. 

 //https://www.bing.com/search?q=notacao+fen&form=EDGEAR&qs=PF&cv
 //id=50b02ce4cd2542e49ad00fe1ff17779b&cc=BR&setlang=pt-BR&PC=ACTS
	function parseFen(fen){
       //funcao para executar o fen
		$('.square-board').html('');
//funcao para executar o fen
		var linha = 8;
//funcao para executar o fen
		var empty = '';
//funcao para executar o fen
		var piece = '';
//funcao para executar o fen
		var col = 0;
//funcao para executar o fen
		var space = 0;

//funcao para executar o fen

		for(var i = 0; i<fen.length; ++i){

//funcao para executar o fen

			if(space == 0){
//funcao para executar o fen
				switch(fen[i]){
//funcao para executar o fen
					case 'r': piece = 'piece rook-black'; break;
//funcao para executar o fen
					case 'R': piece = 'piece rook-white'; break;
//funcao para executar o fen
					case 'b': piece = 'piece bishop-black'; break;
//funcao para executar o fen
					case 'B': piece = 'piece bishop-white'; break;
//funcao para executar o fen
					case 'n': piece = 'piece knight-black'; break;
//funcao para executar o fen
					case 'N': piece = 'piece knight-white'; break;
//funcao para executar o fen
					case 'q': piece = 'piece queen-black'; break;
//funcao para executar o fen
					case 'Q': piece = 'piece queen-white'; break;
//funcao para executar o fen
					case 'k': piece = 'piece king-black'; break;
//funcao para executar o fen
					case 'K': piece = 'piece king-white'; break;
//funcao para executar o fen
					case 'p': piece = 'piece pawn-black'; break;
//funcao para executar o fen
					case 'P': piece = 'piece pawn-white'; break;

//funcao para executar o fen

					case '1':
//funcao para executar o fen
					case '2':
//funcao para executar o fen
					case '3':
//funcao para executar o fen
					case '4':
//funcao para executar o fen
					case '5':
//funcao para executar o fen
					case '6':
//funcao para executar o fen
					case '7':
//funcao para executar o fen
					case '8':
//funcao para executar o fen
						empty = fen[i];
//funcao para executar o fen
						break;
//funcao para executar o fen


					case '/':
//funcao para executar o fen
						linha--;
//funcao para executar o fen
					break;
//funcao para executar o fen
				}
//funcao para executar o fen
			}
//funcao para executar o fen


			if(fen[i] == ' '){
//funcao para executar o fen
				space = 1;
//funcao para executar o fen
			}
//funcao para executar o fen
			if(empty != ''){
//funcao para executar o fen
				for(var n = 0; n<Number(empty); n++){
//funcao para executar o fen
					col++;
//funcao para executar o fen
				}
//funcao para executar o fen
				empty = '';
//funcao para executar o fen
			}
//funcao para executar o fen


			if(piece != ''){
//funcao para executar o fen
	
$('#'+colunas[col]+linha).html('<div class="'+piece+'"></div>');
//funcao para executar o fen
				col++;
//funcao para executar o fen
				piece = '';
//funcao para executar o fen
			}
//funcao para executar o fen


			if(col > 7){
//funcao para executar o fen
				col =0;
//funcao para executar o fen
			}

//funcao para executar o fen

			if(i == (fen.length-1) && fen[i] == 'w'){
//funcao para executar o fen
				vezdo = 'white';
//funcao para executar o fen
				jogador = 'white';
//funcao para executar o fen
			}else if(i == (fen.length-1) && fen[i] == 'b'){
//funcao para executar o fen
				vezdo = 'black';
//funcao para executar o fen
				jogador = 'black';
//funcao para executar o fen
			}
//funcao para executar o fen
		}
//funcao para executar o fen
	}

//funcao para executar o fen

// --------------------------------------------------

	function verifyPiece(piece, square){
//funcao para verificar peca existente
		var tipo = piece.attr('class');
//funcao para verificar peca existente
		var possibleMoves = {};
//funcao para verificar peca existente


		if(tipo == 'piece pawn-black'){
//funcao para verificar peca existente
			possibleMoves = findMovesPawn(square, 'black');
//funcao para verificar peca existente
		}else if(tipo == 'piece pawn-white'){
//funcao para verificar peca existente
			possibleMoves = findMovesPawn(square, 'white');
//funcao para verificar peca existente
		}
		//funcao para verificar peca existente





		if(tipo.indexOf('bishop') >= 0){
//funcao para verificar peca existente
			possibleMoves = findMovesBishop(square, tipo);
//funcao para verificar peca existente
		}else if(tipo.indexOf('knight') >= 0){
//funcao para verificar peca existente
			possibleMoves = findMovesKnight(square, tipo);
//funcao para verificar peca existente
		}else if(tipo.indexOf('rook') >= 0){
//funcao para verificar peca existente
			possibleMoves = findMovesRook(square, tipo);
//funcao para verificar peca existente
		}else if(tipo.indexOf('queen') >= 0){
//funcao para verificar peca existente
			possibleMoves = findMovesQueen(square, tipo);
//funcao para verificar peca existente
		}else if(tipo.indexOf('king-black') >= 0){
//funcao para verificar peca existente
			possibleMoves = movesKings.black;
//funcao para verificar peca existente
		}else if(tipo.indexOf('king-white') >= 0){
//funcao para verificar peca existente
			possibleMoves = movesKings.white;
//funcao para verificar peca existente
		}
//funcao para verificar peca existente
		return possibleMoves;
//funcao para verificar peca existente
	}
//funcao para verificar peca existente


// --------------------------------------------------

	function findMovesKing(square, tipo){
//funcao para encontrar movimetacao do rei
		if(tipo.indexOf('black') >= 0){
//funcao para encontrar movimetacao do rei
			var typeAttack = 'white';
//funcao para encontrar movimetacao do rei
		}else{
//funcao para encontrar movimetacao do rei
			var typeAttack = 'black';
//funcao para encontrar movimetacao do rei
		}

//funcao para encontrar movimetacao do rei

		var line = Number(square[1]);
//funcao para encontrar movimetacao do rei
		var coluna = square[0];
//funcao para encontrar movimetacao do rei
		var nColuna = Number(objSearch(colunas, coluna));
//funcao para encontrar movimetacao do rei
		var x = 0;
//funcao para encontrar movimetacao do rei
		var moves = {};

//funcao para encontrar movimetacao do rei



		var colunaLeft = nColuna-1;
//funcao para encontrar movimetacao do rei
		var colunaRight = nColuna+1;

//funcao para encontrar movimetacao do rei

		var lineTop = line+1;
//funcao para encontrar movimetacao do rei
		if(objSearchIndex(colunas, colunaLeft) != null){
//funcao para encontrar movimetacao do rei
			var casa = colunas[colunaLeft]+line;
//funcao para encontrar movimetacao do rei
			if($('#'+casa).size() == 1){
//funcao para encontrar movimetacao do rei
				if($('#'+casa).find('.piece').size() == 1){
//funcao para encontrar movimetacao do rei
					var peca = $('#'+casa).find('.piece').attr('class');
//funcao para encontrar movimetacao do rei
					if(peca.indexOf(typeAttack) >= 0){
//funcao para encontrar movimetacao do rei
						x++;
//funcao para encontrar movimetacao do rei
						moves[x] = casa;
//funcao para encontrar movimetacao do rei
					}
//funcao para encontrar movimetacao do rei
				}else{
//funcao para encontrar movimetacao do rei
					x++;
//funcao para encontrar movimetacao do rei
					moves[x] = casa;
//funcao para encontrar movimetacao do rei
				}
//funcao para encontrar movimetacao do rei
			}
//funcao para encontrar movimetacao do rei
		}
//funcao para encontrar movimetacao do rei

// --------------------------------------------------

		if(objSearchIndex(colunas, colunaRight) != null){
//funcao para encontrar movimetacao do rei
			var casa = colunas[colunaRight]+line;
//funcao para encontrar movimetacao do rei
			if($('#'+casa).size() == 1){
//funcao para encontrar movimetacao do rei
				if($('#'+casa).find('.piece').size() == 1){
//funcao para encontrar movimetacao do rei
					var peca = $('#'+casa).find('.piece').attr('class');
//funcao para encontrar movimetacao do rei
					if(peca.indexOf(typeAttack) >= 0){
//funcao para encontrar movimetacao do rei
						x++;
//funcao para encontrar movimetacao do rei
						moves[x] = casa;
//funcao para encontrar movimetacao do rei
					}
//funcao para encontrar movimetacao do rei
				}else{
//funcao para encontrar movimetacao do rei
					x++;
//funcao para encontrar movimetacao do rei
					moves[x] = casa;
//funcao para encontrar movimetacao do rei
				}
//funcao para encontrar movimetacao do rei
			}
	//funcao para encontrar movimetacao do rei

		}
		//funcao para encontrar movimetacao do rei

// --------------------------------------------------

		for(var i =0; i <3; i++){
//funcao para encontrar movimetacao do rei
			if(objSearchIndex(colunas, colunaLeft) != null){
//funcao para encontrar movimetacao do rei
				var casa = colunas[colunaLeft]+lineTop;
//funcao para encontrar movimetacao do rei
				if($('#'+casa).size() == 1){
//funcao para encontrar movimetacao do rei
					if($('#'+casa).find('.piece').size() == 1){
//funcao para encontrar movimetacao do rei
						var peca = $('#'+casa).find('.piece').attr('class');
//funcao para encontrar movimetacao do rei
						if(peca.indexOf(typeAttack) >= 0){
//funcao para encontrar movimetacao do rei
							x++;
//funcao para encontrar movimetacao do rei
							moves[x] = casa;
//funcao para encontrar movimetacao do rei
						}
//funcao para encontrar movimetacao do rei
					}else{
//funcao para encontrar movimetacao do rei
						x++;
//funcao para encontrar movimetacao do rei
						moves[x] = casa;
//funcao para encontrar movimetacao do rei
					}
//funcao para encontrar movimetacao do rei
				}
//funcao para encontrar movimetacao do rei
			}
//funcao para encontrar movimetacao do rei


			colunaLeft++;
//funcao para encontrar movimetacao do rei
		}

//funcao para encontrar movimetacao do rei

// --------------------------------------------------
		colunaLeft = nColuna-1;
//funcao para encontrar movimetacao do rei
		var lineBottom = line-1;

//funcao para encontrar movimetacao do rei

		for(var i =0; i <3; i++){
//funcao para encontrar movimetacao do rei
			if(objSearchIndex(colunas, colunaLeft) != null){
//funcao para encontrar movimetacao do rei
				var casa = colunas[colunaLeft]+lineBottom;
//funcao para encontrar movimetacao do rei
				if($('#'+casa).size() == 1){
//funcao para encontrar movimetacao do rei
					if($('#'+casa).find('.piece').size() == 1){
//funcao para encontrar movimetacao do rei
				var peca = $('#'+casa).find('.piece').attr('class');
//funcao para encontrar movimetacao do rei
						if(peca.indexOf(typeAttack) >= 0){
//funcao para encontrar movimetacao do rei
							x++;
//funcao para encontrar movimetacao do rei
							moves[x] = casa;
//funcao para encontrar movimetacao do rei
						}
//funcao para encontrar movimetacao do rei
					}else{
//funcao para encontrar movimetacao do rei
						x++;
//funcao para encontrar movimetacao do rei
						moves[x] = casa;
//funcao para encontrar movimetacao do rei
					}
//funcao para encontrar movimetacao do rei//funcao para encontrar movimetacao do rei
				}
				//funcao para encontrar movimetacao do rei

			}

//funcao para encontrar movimetacao do rei

			colunaLeft++;
//funcao para encontrar movimetacao do rei
		}
//funcao para encontrar movimetacao do rei
		return moves;
//funcao para encontrar movimetacao do rei
	}
//funcao para encontrar movimetacao do rei

// --------------------------------------------------

	function findMovesQueen(square, tipo){
//funcao para encontrar movimetacao da rainha
		var x = 0;
//funcao para encontrar movimetacao da rainha
		var moves = {};
//funcao para encontrar movimetacao da rainha
		var movesRook = findMovesRook(square, tipo);

//funcao para encontrar movimetacao da rainha

		$.each(movesRook, function(i, val){
//funcao para encontrar movimetacao da rainha
			x = i;
//funcao para encontrar movimetacao da rainha
			moves[i] = val;
//funcao para encontrar movimetacao da rainha
		});

	//funcao para encontrar movimetacao da rainha	

		var movesBishop = findMovesBishop(square, tipo);
//funcao para encontrar movimetacao da rainha
		$.each(movesBishop, function(i, val){
//funcao para encontrar movimetacao da rainha
			x++;
//funcao para encontrar movimetacao da rainha
			moves[x] = val;
//funcao para encontrar movimetacao da rainha
		});
//funcao para encontrar movimetacao da rainha
		return moves;
//funcao para encontrar movimetacao da rainha
	}
//funcao para encontrar movimetacao da rainha


	function findMovesRook(square, tipo){
//funcao para encontrar movimetacao da torre
		if(tipo.indexOf('black') >= 0){
//funcao para encontrar movimetacao da torre
			var typeAttack = 'white';
//funcao para encontrar movimetacao da torre
		}else{
//funcao para encontrar movimetacao da torre
			var typeAttack = 'black';
//funcao para encontrar movimetacao da torre
		}
//funcao para encontrar movimetacao da torre


		var line = Number(square[1]);
		//funcao para encontrar movimetacao da torre

		var linha = line+1;
//funcao para encontrar movimetacao da torre
		var coluna = square[0];
//funcao para encontrar movimetacao da torre
		var nColuna = Number(objSearch(colunas, coluna));
//funcao para encontrar movimetacao da torre
		var x = 0;
//funcao para encontrar movimetacao da torre
		var moves = {};
//funcao para encontrar movimetacao da torre

// --------------------------------------------------

		//para cima



		for(var i = 0; i < 7; i++){
//funcao para encontrar movimetacao da torre
			var casa = coluna+(linha++);
//funcao para encontrar movimetacao da torre
			if($('#'+casa).size() == 1){
//funcao para encontrar movimetacao da torre
				if($('#'+casa).find('.piece').size() == 1){
//funcao para encontrar movimetacao da torre
					var peca = $('#'+casa).find('.piece').attr('class');
//funcao para encontrar movimetacao da torre
					if(peca.indexOf(typeAttack) >= 0){
//funcao para encontrar movimetacao da torre
						x++;
//funcao para encontrar movimetacao da torre
						moves[x] = casa;
//funcao para encontrar movimetacao da torre
						break;
//funcao para encontrar movimetacao da torre
					}else{
//funcao para encontrar movimetacao da torre
						break;
//funcao para encontrar movimetacao da torre
					}
//funcao para encontrar movimetacao da torre
				}else{
//funcao para encontrar movimetacao da torre
					x++;
//funcao para encontrar movimetacao da torre
					moves[x] = casa;
//funcao para encontrar movimetacao da torre
				}
//funcao para encontrar movimetacao da torre
			}
//funcao para encontrar movimetacao da torre
		}
//funcao para encontrar movimetacao da torre

		//para baixo

		linha = line-1;
//funcao para encontrar movimetacao da torre
		for(var i = 6; i >= 0; --i){
//funcao para encontrar movimetacao da torre
			var casa = coluna+(linha--);
//funcao para encontrar movimetacao da torre


			if($('#'+casa).size() == 1){
//funcao para encontrar movimetacao da torre
				if($('#'+casa).find('.piece').size() == 1){
//funcao para encontrar movimetacao da torre
					var peca = $('#'+casa).find('.piece').attr('class');
//funcao para encontrar movimetacao da torre
					if(peca.indexOf(typeAttack) >= 0){
//funcao para encontrar movimetacao da torre
						x++;
//funcao para encontrar movimetacao da torre
						moves[x] = casa;
//funcao para encontrar movimetacao da torre
						break;
//funcao para encontrar movimetacao da torre
					}else{
//funcao para encontrar movimetacao da torre
						break;
//funcao para encontrar movimetacao da torre
					}
//funcao para encontrar movimetacao da torre
				}else{
//funcao para encontrar movimetacao da torre
					x++;
//funcao para encontrar movimetacao da torre
					moves[x] = casa;
//funcao para encontrar movimetacao da torre
				}
//funcao para encontrar movimetacao da torre
			}
//funcao para encontrar movimetacao da torre
		}
//funcao para encontrar movimetacao da torre

// --------------------------------------------------

		//para a direita

		var colAtual = nColuna+1;
//funcao para encontrar movimetacao da torre
		for(var i = 0; i < 7; i++){
//funcao para encontrar movimetacao da torre
			var proxima = colAtual++;
//funcao para encontrar movimetacao da torre
			if(objSearchIndex(colunas, proxima) != null){
//funcao para encontrar movimetacao da torre
				var casa = colunas[proxima]+line;
//funcao para encontrar movimetacao da torre
				if($('#'+casa).find('.piece').size() == 1){
//funcao para encontrar movimetacao da torre
					var peca = $('#'+casa).find('.piece').attr('class');
//funcao para encontrar movimetacao da torre
					if(peca.indexOf(typeAttack) >= 0){
//funcao para encontrar movimetacao da torre
						x++;
//funcao para encontrar movimetacao da torre
						moves[x] = casa;
//funcao para encontrar movimetacao da torre
						break;
//funcao para encontrar movimetacao da torre
					}else{
//funcao para encontrar movimetacao da torre
						break;
//funcao para encontrar movimetacao da torre
					}
//funcao para encontrar movimetacao da torre
				}else{
//funcao para encontrar movimetacao da torre
					x++;
//funcao para encontrar movimetacao da torre
					moves[x] = casa;
//funcao para encontrar movimetacao da torre
				}			
//funcao para encontrar movimetacao da torre
			}
//funcao para encontrar movimetacao da torre
		}

//funcao para encontrar movimetacao da torre

// --------------------------------------------------

		//para a esquerda

		var colAtual = nColuna-1;
//funcao para encontrar movimetacao da torre
		for(var i = 0; i < 7; i++){
//funcao para encontrar movimetacao da torre
			var anterior = colAtual--;
//funcao para encontrar movimetacao da torre
			if(objSearchIndex(colunas, anterior) != null){
//funcao para encontrar movimetacao da torre
				var casa = colunas[anterior]+line;
//funcao para encontrar movimetacao da torre
				if($('#'+casa).find('.piece').size() == 1){
//funcao para encontrar movimetacao da torre
					var peca = $('#'+casa).find('.piece').attr('class');
//funcao para encontrar movimetacao da torre
					if(peca.indexOf(typeAttack) >= 0){
//funcao para encontrar movimetacao da torre
						x++;
//funcao para encontrar movimetacao da torre
						moves[x] = casa;
//funcao para encontrar movimetacao da torre
						break;
//funcao para encontrar movimetacao da torre
					}else{
//funcao para encontrar movimetacao da torre
						break;
//funcao para encontrar movimetacao da torre
					}
//funcao para encontrar movimetacao da torre
				}else{
//funcao para encontrar movimetacao da torre
					x++;
//funcao para encontrar movimetacao da torre
					moves[x] = casa;
//funcao para encontrar movimetacao da torre
				}			
//funcao para encontrar movimetacao da torre
			}
//funcao para encontrar movimetacao da torre
		}

//funcao para encontrar movimetacao da torre

		return moves;
//funcao para encontrar movimetacao da torre
	}

//funcao para encontrar movimetacao da torre

// --------------------------------------------------

	function findMovesKnight(square, tipo){
//funcao para encontrar movimetacao do cavalo
		if(tipo.indexOf('black') >= 0){
//funcao para encontrar movimetacao do cavalo
			var typeAttack = 'white';
//funcao para encontrar movimetacao do cavalo
		}else{
//funcao para encontrar movimetacao do cavalo
			var typeAttack = 'black';
//funcao para encontrar movimetacao do cavalo
		}
//funcao para encontrar movimetacao do cavalo


		var line = Number(square[1]);
//funcao para encontrar movimetacao do cavalo
		var coluna = square[0];
//funcao para encontrar movimetacao do cavalo
		var x = 0;
//funcao para encontrar movimetacao do cavalo
		var moves = {};
//funcao para encontrar movimetacao do cavalo

// --------------------------------------------------

		//para cima

		//+2 linhas +1 coluna

		//+2 linhas -1 coluna



		//para baixo

		//-2 linhas +1 coluna

		//-2 linhas -1 coluna



		//para direita cima e baixo

		//+2 colunas +1 linha

		//+2 colunas -1 linha



		// para esquerda

		//-2 colunas +1 linha

		//-2 colunas -1 linha

// --------------------------------------------------


		var colAtual = Number(objSearch(colunas, coluna));
		//funcao para encontrar movimetacao do cavalo
		var lineTop = line+2;
//funcao para encontrar movimetacao do cavalo//funcao para encontrar movimetacao do cavalo
		var lineBottom = line-2;
//funcao para encontrar movimetacao do cavalo


		var colEsquerda = colAtual-1;
//funcao para encontrar movimetacao do cavalo
		var colDireita = colAtual+1;


//funcao para encontrar movimetacao do cavalo
		var lineTopo = line+1;
//funcao para encontrar movimetacao do cavalo
		var lineBaixo = line-1;
//funcao para encontrar movimetacao do cavalo


		var colRight = colAtual+2;
//funcao para encontrar movimetacao do cavalo
		var colLeft = colAtual-2;

//funcao para encontrar movimetacao do cavalo

		var squareTopRight = colunas[colDireita]+lineTop;
//funcao para encontrar movimetacao do cavalo
		var squareTopLeft = colunas[colEsquerda]+lineTop;
//funcao para encontrar movimetacao do cavalo


		if($('#'+squareTopRight).size()== 1){
//funcao para encontrar movimetacao do cavalo
			if($('#'+squareTopRight).find('.piece').size() == 1){
//funcao para encontrar movimetacao do cavalo
				var encontrada = $('#'+squareTopRight).find('.piece').attr('class');
//funcao para encontrar movimetacao do cavalo
				if(encontrada.indexOf(typeAttack) >= 0){
//funcao para encontrar movimetacao do cavalo
					x++;
//funcao para encontrar movimetacao do cavalo
					moves[x] = squareTopRight;
//funcao para encontrar movimetacao do cavalo
				}
//funcao para encontrar movimetacao do cavalo
			}else{
//funcao para encontrar movimetacao do cavalo
				x++;
//funcao para encontrar movimetacao do cavalo
				moves[x] = squareTopRight
//funcao para encontrar movimetacao do cavalo
			}
//funcao para encontrar movimetacao do cavalo
		}
//funcao para encontrar movimetacao do cavalo


		if($('#'+squareTopLeft).size()== 1){
//funcao para encontrar movimetacao do cavalo
			if($('#'+squareTopLeft).find('.piece').size() == 1){
//funcao para encontrar movimetacao do cavalo
				var encontrada = $('#'+squareTopLeft).find('.piece').attr('class');
//funcao para encontrar movimetacao do cavalo
				if(encontrada.indexOf(typeAttack) >= 0){
//funcao para encontrar movimetacao do cavalo
					x++;
//funcao para encontrar movimetacao do cavalo
					moves[x] = squareTopLeft;
//funcao para encontrar movimetacao do cavalo
				}
//funcao para encontrar movimetacao do cavalo
			}else{
//funcao para encontrar movimetacao do cavalo
				x++;
//funcao para encontrar movimetacao do cavalo
				moves[x] = squareTopLeft;
//funcao para encontrar movimetacao do cavalo
			}
//funcao para encontrar movimetacao do cavalo
		}
//funcao para encontrar movimetacao do cavalo

// --------------------------------------------------

		var squareBottomRight = colunas[colDireita]+lineBottom;
//funcao para encontrar movimetacao do cavalo
		if($('#'+squareBottomRight).size()== 1){
//funcao para encontrar movimetacao do cavalo
			if($('#'+squareBottomRight).find('.piece').size() == 1){
//funcao para encontrar movimetacao do cavalo
				var encontrada = $('#'+squareBottomRight).find('.piece').attr('class');
//funcao para encontrar movimetacao do cavalo
				if(encontrada.indexOf(typeAttack) >= 0){
//funcao para encontrar movimetacao do cavalo
					x++;
//funcao para encontrar movimetacao do cavalo
					moves[x] = squareBottomRight;
//funcao para encontrar movimetacao do cavalo
				}
//funcao para encontrar movimetacao do cavalo
			}else{
//funcao para encontrar movimetacao do cavalo
				x++;
//funcao para encontrar movimetacao do cavalo
				moves[x] = squareBottomRight;
//funcao para encontrar movimetacao do cavalo
			}
//funcao para encontrar movimetacao do cavalo
		}

// --------------------------------------------------

//funcao para encontrar movimetacao do cavalo
		var squareBottomLeft = colunas[colEsquerda]+lineBottom;
//funcao para encontrar movimetacao do cavalo
		if($('#'+squareBottomLeft).size()== 1){
//funcao para encontrar movimetacao do cavalo
			if($('#'+squareBottomLeft).find('.piece').size() == 1){
//funcao para encontrar movimetacao do cavalo
				var encontrada = $('#'+squareBottomLeft).find('.piece').attr('class');
//funcao para encontrar movimetacao do cavalo
				if(encontrada.indexOf(typeAttack) >= 0){
//funcao para encontrar movimetacao do cavalo
					x++;
//funcao para encontrar movimetacao do cavalo
					moves[x] = squareBottomLeft;
//funcao para encontrar movimetacao do cavalo
				}
//funcao para encontrar movimetacao do cavalo
			}else{
//funcao para encontrar movimetacao do cavalo
				x++;
//funcao para encontrar movimetacao do cavalo
				moves[x] = squareBottomLeft;
//funcao para encontrar movimetacao do cavalo
			}
//funcao para encontrar movimetacao do cavalo
		}
//funcao para encontrar movimetacao do cavalo

// --------------------------------------------------

		var squareRightTop = colunas[colRight]+lineTopo;
//funcao para encontrar movimetacao do cavalo
		if($('#'+squareRightTop).size()== 1){
//funcao para encontrar movimetacao do cavalo
			if($('#'+squareRightTop).find('.piece').size() == 1){
//funcao para encontrar movimetacao do cavalo
				var encontrada = $('#'+squareRightTop).find('.piece').attr('class');
//funcao para encontrar movimetacao do cavalo
				if(encontrada.indexOf(typeAttack) >= 0){
//funcao para encontrar movimetacao do cavalo
					x++;
//funcao para encontrar movimetacao do cavalo
					moves[x] = squareRightTop;
//funcao para encontrar movimetacao do cavalo
				}
//funcao para encontrar movimetacao do cavalo
			}else{
//funcao para encontrar movimetacao do cavalo
				x++;
//funcao para encontrar movimetacao do cavalo
				moves[x] = squareRightTop;
//funcao para encontrar movimetacao do cavalo
			}
//funcao para encontrar movimetacao do cavalo
		}
		//funcao para encontrar movimetacao do cavalo

// --------------------------------------------------

		var squareRightBottom = colunas[colRight]+lineBaixo;	
//funcao para encontrar movimetacao do cavalo
		if($('#'+squareRightBottom).size()== 1){
//funcao para encontrar movimetacao do cavalo
			if($('#'+squareRightBottom).find('.piece').size() == 1){
//funcao para encontrar movimetacao do cavalo
				var encontrada = $('#'+squareRightBottom).find('.piece').attr('class');
//funcao para encontrar movimetacao do cavalo
				if(encontrada.indexOf(typeAttack) >= 0){
//funcao para encontrar movimetacao do cavalo
					x++;
//funcao para encontrar movimetacao do cavalo
					moves[x] = squareRightBottom;
//funcao para encontrar movimetacao do cavalo
				}
//funcao para encontrar movimetacao do cavalo
			}else{
//funcao para encontrar movimetacao do cavalo
				x++;
//funcao para encontrar movimetacao do cavalo
				moves[x] = squareRightBottom;
//funcao para encontrar movimetacao do cavalo
			}
//funcao para encontrar movimetacao do cavalo
		}
//funcao para encontrar movimetacao do cavalo
		var squareLeftTop = colunas[colLeft]+lineTopo;
//funcao para encontrar movimetacao do cavalo
		if($('#'+squareLeftTop).size()== 1){
//funcao para encontrar movimetacao do cavalo
			if($('#'+squareLeftTop).find('.piece').size() == 1){
//funcao para encontrar movimetacao do cavalo
				var encontrada = $('#'+squareLeftTop).find('.piece').attr('class');
//funcao para encontrar movimetacao do cavalo
				if(encontrada.indexOf(typeAttack) >= 0){
//funcao para encontrar movimetacao do cavalo
					x++;
//funcao para encontrar movimetacao do cavalo
					moves[x] = squareLeftTop;
//funcao para encontrar movimetacao do cavalo
				}
//funcao para encontrar movimetacao do cavalo
			}else{
//funcao para encontrar movimetacao do cavalo
				x++;
//funcao para encontrar movimetacao do cavalo
				moves[x] = squareLeftTop;
//funcao para encontrar movimetacao do cavalo
			}
//funcao para encontrar movimetacao do cavalo
		}
//funcao para encontrar movimetacao do cavalo

// --------------------------------------------------

		var squareLeftBottom = colunas[colLeft]+lineBaixo;
//funcao para encontrar movimetacao do cavalo
		if($('#'+squareLeftBottom).size()== 1){
//funcao para encontrar movimetacao do cavalo
			if($('#'+squareLeftBottom).find('.piece').size() == 1){
//funcao para encontrar movimetacao do cavalo
				var encontrada = $('#'+squareLeftBottom).find('.piece').attr('class');
//funcao para encontrar movimetacao do cavalo
				if(encontrada.indexOf(typeAttack) >= 0){
//funcao para encontrar movimetacao do cavalo
					x++;
//funcao para encontrar movimetacao do cavalo
					moves[x] = squareLeftBottom;
//funcao para encontrar movimetacao do cavalo
				}
//funcao para encontrar movimetacao do cavalo
			}else{
//funcao para encontrar movimetacao do cavalo
				x++;
//funcao para encontrar movimetacao do cavalo
				moves[x] = squareLeftBottom;
//funcao para encontrar movimetacao do cavalo
			}
//funcao para encontrar movimetacao do cavalo
		}
//funcao para encontrar movimetacao do cavalo
		return moves;
//funcao para encontrar movimetacao do cavalo
	}
//funcao para encontrar movimetacao do cavalo


// --------------------------------------------------

	function findMovesBishop(square, tipo){
//funcao para encontrar movimetacao do bispo
		if(tipo.indexOf('black') >= 0){
//funcao para encontrar movimetacao do bispo
			var typeAttack = 'white';
//funcao para encontrar movimetacao do bispo
		}else{
//funcao para encontrar movimetacao do bispo
			var typeAttack = 'black';
//funcao para encontrar movimetacao do bispo
		}

//funcao para encontrar movimetacao do bispo

		var line = Number(square[1]);
//funcao para encontrar movimetacao do bispo
		var linha = line+1;
//funcao para encontrar movimetacao do bispo
		var coluna = square[0];
//funcao para encontrar movimetacao do bispo
		var x = 0;
//funcao para encontrar movimetacao do bispo
		var moves = {};
//funcao para encontrar movimetacao do bispo


		var nColunaAtual = '';
//funcao para encontrar movimetacao do bispo
		var colTopRight = '';

//funcao para encontrar movimetacao do bispo

// --------------------------------------------------

		//+1 coluna +1 linha pra cima e direita (top right)

		//-1 coluna -1 linha pra baixo esquerda (bottom left)

		//+1 coluna -1 linha pra baixo direita (bottom right)

		//-1 coluna +1 linha pra cima esquerda (top left)


// --------------------------------------------------
		//subir direita (top right)



		for(var i = 0; i <= 6; i++){
//funcao para encontrar movimetacao do bispo
			if(nColunaAtual == ''){
//funcao para encontrar movimetacao do bispo
				nColunaAtual = objSearch(colunas, coluna);
//funcao para encontrar movimetacao do bispo
				colTopRight = nColunaAtual++;
//funcao para encontrar movimetacao do bispo
			}

//funcao para encontrar movimetacao do bispo

			if(objSearchIndex(colunas, colTopRight) != null){
//funcao para encontrar movimetacao do bispo
				if(colunas[colTopRight] != coluna){
//funcao para encontrar movimetacao do bispo
					var lineTopRight = linha++;
//funcao para encontrar movimetacao do bispo
					var casa = colunas[colTopRight]+lineTopRight;
//funcao para encontrar movimetacao do bispo


					if($('#'+casa).size() == 1){
//funcao para encontrar movimetacao do bispo
						if($('#'+casa).find('.piece').size() == 1){
//funcao para encontrar movimetacao do bispo
							var encontrada = $('#'+casa).find('.piece').attr('class');
//funcao para encontrar movimetacao do bispo
							if(encontrada.indexOf(typeAttack) >= 0){
//funcao para encontrar movimetacao do bispo
								x++;
//funcao para encontrar movimetacao do bispo
								moves[x] = casa;
//funcao para encontrar movimetacao do bispo
								break;
//funcao para encontrar movimetacao do bispo
							}else{
//funcao para encontrar movimetacao do bispo
								break;
//funcao para encontrar movimetacao do bispo
							}
//funcao para encontrar movimetacao do bispo
						}else{
//funcao para encontrar movimetacao do bispo
							x++;
//funcao para encontrar movimetacao do bispo
							moves[x] = casa;
//funcao para encontrar movimetacao do bispo
						}
//funcao para encontrar movimetacao do bispo
					}else{
//funcao para encontrar movimetacao do bispo
						break;
//funcao para encontrar movimetacao do bispo
					}
//funcao para encontrar movimetacao do bispo
				}
//funcao para encontrar movimetacao do bispo
				colTopRight++;
//funcao para encontrar movimetacao do bispo
			}			
//funcao para encontrar movimetacao do bispo
		}

//funcao para encontrar movimetacao do bispo

// --------------------------------------------------

		//top left

		nColunaAtual = '';
//funcao para encontrar movimetacao do bispo
		var colTopLeft = '';
//funcao para encontrar movimetacao do bispo
		linha = line+1;
//funcao para encontrar movimetacao do bispo
		for(var i = 0; i <= 6; i++){
//funcao para encontrar movimetacao do bispo
			if(nColunaAtual == ''){
//funcao para encontrar movimetacao do bispo
				nColunaAtual = objSearch(colunas, coluna);
//funcao para encontrar movimetacao do bispo
				colTopLeft = nColunaAtual-1;
//funcao para encontrar movimetacao do bispo
			}
//funcao para encontrar movimetacao do bispo
			if(objSearchIndex(colunas, colTopLeft) != null){
//funcao para encontrar movimetacao do bispo
				if(colunas[colTopLeft] != coluna){
//funcao para encontrar movimetacao do bispo
					var lineTopLeft = linha++;
//funcao para encontrar movimetacao do bispo
					var casa = colunas[colTopLeft]+lineTopLeft;
//funcao para encontrar movimetacao do bispo


					if($('#'+casa).size() == 1){
//funcao para encontrar movimetacao do bispo
						if($('#'+casa).find('.piece').size() == 1){
//funcao para encontrar movimetacao do bispo
							var encontrada = $('#'+casa).find('.piece').attr('class');
//funcao para encontrar movimetacao do bispo
							if(encontrada.indexOf(typeAttack) >= 0){
//funcao para encontrar movimetacao do bispo
								x++;
//funcao para encontrar movimetacao do bispo
								moves[x] = casa;
//funcao para encontrar movimetacao do bispo
								break;
//funcao para encontrar movimetacao do bispo
							}else{
//funcao para encontrar movimetacao do bispo
								break;
//funcao para encontrar movimetacao do bispo
							}
//funcao para encontrar movimetacao do bispo
						}else{
//funcao para encontrar movimetacao do bispo
							x++;
//funcao para encontrar movimetacao do bispo
							moves[x] = casa;
//funcao para encontrar movimetacao do bispo
						}
//funcao para encontrar movimetacao do bispo
					}else{
//funcao para encontrar movimetacao do bispo
						break;
//funcao para encontrar movimetacao do bispo
					}
//funcao para encontrar movimetacao do bispo
				}
//funcao para encontrar movimetacao do bispo
				colTopLeft--;
//funcao para encontrar movimetacao do bispo
			}			
//funcao para encontrar movimetacao do bispo
		}
//funcao para encontrar movimetacao do bispo



// --------------------------------------------------


		//bottom right

		nColunaAtual = '';
//funcao para encontrar movimetacao do bispo
		linha = line+1;
//funcao para encontrar movimetacao do bispo
		var lineDescer = line-1;
//funcao para encontrar movimetacao do bispo
		var colBottomRight = '';
//funcao para encontrar movimetacao do bispo
		for(var i = 0; i <= 6; i++){
//funcao para encontrar movimetacao do bispo
			if(nColunaAtual == ''){
//funcao para encontrar movimetacao do bispo
				nColunaAtual = objSearch(colunas, coluna);
//funcao para encontrar movimetacao do bispo
				colBottomRight = nColunaAtual++;
//funcao para encontrar movimetacao do bispo
			}
//funcao para encontrar movimetacao do bispo
			if(objSearchIndex(colunas, colBottomRight) != null){
//funcao para encontrar movimetacao do bispo
				if(colunas[colBottomRight] != coluna){
//funcao para encontrar movimetacao do bispo
					var lineBottomRight = lineDescer--;
//funcao para encontrar movimetacao do bispo
					var casa = colunas[colBottomRight]+lineBottomRight;
//funcao para encontrar movimetacao do bispo


					if($('#'+casa).size() == 1){
//funcao para encontrar movimetacao do bispo
						if($('#'+casa).find('.piece').size() == 1){
//funcao para encontrar movimetacao do bispo
							var encontrada = $('#'+casa).find('.piece').attr('class');
//funcao para encontrar movimetacao do bispo
							if(encontrada.indexOf(typeAttack) >= 0){
//funcao para encontrar movimetacao do bispo
								x++;
//funcao para encontrar movimetacao do bispo
								moves[x] = casa;
//funcao para encontrar movimetacao do bispo
								break;
//funcao para encontrar movimetacao do bispo
							}else{
//funcao para encontrar movimetacao do bispo
								break;
//funcao para encontrar movimetacao do bispo
							}
//funcao para encontrar movimetacao do bispo
						}else{
//funcao para encontrar movimetacao do bispo
							x++;
//funcao para encontrar movimetacao do bispo
							moves[x] = casa;
//funcao para encontrar movimetacao do bispo
						}
//funcao para encontrar movimetacao do bispo
					}else{
//funcao para encontrar movimetacao do bispo
						break;
//funcao para encontrar movimetacao do bispo
					}
//funcao para encontrar movimetacao do bispo
				}
//funcao para encontrar movimetacao do bispo
				colBottomRight++;
//funcao para encontrar movimetacao do bispo
			}			
//funcao para encontrar movimetacao do bispo
		}
//funcao para encontrar movimetacao do bispo

// --------------------------------------------------


		//bottom left

		nColunaAtual = '';
//funcao para encontrar movimetacao do bispo
		linha = line+1;
//funcao para encontrar movimetacao do bispo
		lineDescer = line-1;
//funcao para encontrar movimetacao do bispo
		var colBottomLeft = '';
//funcao para encontrar movimetacao do bispo
		for(var i = 0; i <= 6; i++){
//funcao para encontrar movimetacao do bispo
			if(nColunaAtual == ''){
//funcao para encontrar movimetacao do bispo
				nColunaAtual = Number(objSearch(colunas, coluna));
//funcao para encontrar movimetacao do bispo
				colBottomLeft = nColunaAtual-1;

			}
			//funcao para encontrar movimetacao do bispo

			if(objSearchIndex(colunas, colBottomLeft) != null){
//funcao para encontrar movimetacao do bispo
				if(colunas[colBottomLeft] != coluna){
//funcao para encontrar movimetacao do bispo
					var lineBottomLeft = lineDescer--;
//funcao para encontrar movimetacao do bispo
					var casa = colunas[colBottomLeft]+lineBottomLeft;

//funcao para encontrar movimetacao do bispo

					if($('#'+casa).size() == 1){
//funcao para encontrar movimetacao do bispo
						if($('#'+casa).find('.piece').size() == 1){
//funcao para encontrar movimentacao do bispo
							var encontrada = $('#'+casa).find('.piece').attr('class');
//funcao para encontrar movimentacao do bispo
							if(encontrada.indexOf(typeAttack) >= 0){
//funcao para encontrar movimentacao do bispo
								x++;
//funcao para encontrar movimentacao do bispo
								moves[x] = casa;
//funcao para encontrar movimentacao do bispo
								break;
//funcao para encontrar movimentacao do bispo
							}else{
//funcao para encontrar movimentacao do bispo
								break;
//funcao para encontrar movimentacao do bispo
							}
//funcao para encontrar movimentacao do bispo
						}else{
//funcao para encontrar movimentacao do bispo
							x++;
//funcao para encontrar movimentacao do bispo
							moves[x] = casa;
//funcao para encontrar movimentacao do bispo
						}
//funcao para encontrar movimentacao do bispo
					}else{
//funcao para encontrar movimentacao do bispo
						break;
//funcao para encontrar movimentacao do bispo
					}
//funcao para encontrar movimentacao do bispo
				}
//funcao para encontrar movimentacao do bispo
				colBottomLeft--;
//funcao para encontrar movimentacao do bispo
			}			
//funcao para encontrar movimentacao do bispo
		}
//funcao para encontrar movimentacao do bispo
		return moves;
//funcao para encontrar movimentacao do bispo
	}

//funcao para encontrar movimetacao do bispo

// --------------------------------------------------

	function findMovesPawn(square, type){

//funcao para encontrar movimetacao do peao

		var line = Number(square[1]);
//funcao para encontrar movimetacao do peao
		var column = square[0];
//funcao para encontrar movimetacao do peao
		var linha = line+1;
//funcao para encontrar movimetacao do peao
		var moves = {};
//funcao para encontrar movimetacao do peao
		var x = 0;
//funcao para encontrar movimetacao do peao


		var indiceColum = objSearch(colunas, column);
//funcao para encontrar movimetacao do peao
		var proxima = Number(indiceColum)+1;
//funcao para encontrar movimetacao do peao
		var anterior = Number(indiceColum)-1;

//funcao para encontrar movimetacao do peao

		if(type == 'white'){
//funcao para encontrar movimetacao do peao
			if(line == 2){
//funcao para encontrar movimetacao do peao
				//indo pra frente

				for(var i = 0; i <2; i++){
//funcao para encontrar movimetacao do peao
					var casa = $ ('#'+column+(linha++));
//funcao para encontrar movimetacao do peao
					if(casa.find('.piece').size() == 0){
//funcao para encontrar movimetacao do peao
						x++;
//funcao para encontrar movimetacao do peao
						moves[x] = casa.attr('id');
//funcao para encontrar movimetacao do peao
					}else{
//funcao para encontrar movimetacao do peao
						break;
//funcao para encontrar movimetacao do peao
					}
//funcao para encontrar movimetacao do peao
				}
//funcao para encontrar movimetacao do peao
			}else{
//funcao para encontrar movimetacao do peao
				//indo pra frente

				for(var i = 0; i<1; i++){
//funcao para encontrar movimetacao do peao
					var casa = $('#'+column+(linha++));
//funcao para encontrar movimetacao do peao
					if(casa.find('.piece').size() == 0){
//funcao para encontrar movimetacao do peao
						x++;
//funcao para encontrar movimetacao do peao
						moves[x] = casa.attr('id');
//funcao para encontrar movimetacao do peao
					}else{
//funcao para encontrar movimetacao do peao
						break;

					}

				}

			}

//funcao para encontrar movimetacao do peao

// --------------------------------------------------


			//verifica duas diagonais

			var linhaDiagonal = line+1;
//funcao para encontrar movimetacao do peao
			var typeAttack = 'black';
//funcao para encontrar movimetacao do peao
		}else{
//funcao para encontrar movimetacao do peao
			//movimentos peões pretos

			if(line == 7){
//funcao para encontrar movimetacao do peao
				//indo pra frente

				for(var i = 7; i>=5; --i){

//funcao para encontrar movimetacao do peao

					if(i != 7){
//funcao para encontrar movimetacao do peao
						var casa = $ ('#'+column+i);
//funcao para encontrar movimetacao do peao
						if(casa.find('.piece').size() == 0){
//funcao para encontrar movimetacao do peao
							x++;
//funcao para encontrar movimetacao do peao
							moves[x] = casa.attr('id');
//funcao para encontrar movimetacao do peao
						}else{
//funcao para encontrar movimetacao do peao
							break;
//funcao para encontrar movimetacao do peao
						}
//funcao para encontrar movimetacao do peao
					}
//funcao para encontrar movimetacao do peao
				}
//funcao para encontrar movimetacao do peao
			}else{
//funcao para encontrar movimetacao do peao
				//indo pra frente

				for(var i = line; i >= line-1; --i){
//funcao para encontrar movimetacao do peao
					if(i != line){
//funcao para encontrar movimetacao do peao
						var casa = $('#'+column+i);
//funcao para encontrar movimetacao do peao
						if(casa.find('.piece').size() == 0){
//funcao para encontrar movimetacao do peao
							x++;
//funcao para encontrar movimetacao do peao
							moves[x] = casa.attr('id');
//funcao para encontrar movimetacao do peao
						}else{
//funcao para encontrar movimetacao do peao
							break;
//funcao para encontrar movimetacao do peao
						}
//funcao para encontrar movimetacao do peao
					}
//funcao para encontrar movimetacao do peao
				}
//funcao para encontrar movimetacao do peao
			}

//funcao para encontrar movimetacao do peao

// --------------------------------------------------

			//verifica duas diagonais

			var linhaDiagonal = line-1;
//funcao para encontrar movimetacao do peao
			var typeAttack = 'white';
//funcao para encontrar movimetacao do peao
			//termina movimentos peões pretos

		}

//funcao para encontrar movimetacao do peao

		if(objSearchIndex(colunas, proxima) != null){
//funcao para encontrar movimetacao do peao
			var coluna = colunas[proxima]+linhaDiagonal;
//funcao para encontrar movimetacao do peao
			//alert('encontrou '+coluna);

			if($('#'+coluna).find('.piece').size() == 1){
//funcao para encontrar movimetacao do peao
				var pecaEncontrada = $('#'+coluna).find('.piece').attr('class');
//funcao para encontrar movimetacao do peao
				if(pecaEncontrada.indexOf(typeAttack) >= 0){
//funcao para encontrar movimetacao do peao
					x++;
//funcao para encontrar movimetacao do peao
					moves[x] = coluna;
//funcao para encontrar movimetacao do peao
				}
//funcao para encontrar movimetacao do peao
			}
//funcao para encontrar movimetacao do peao
		}

//funcao para encontrar movimetacao do peao

		if(objSearchIndex(colunas, anterior) != null){
//funcao para encontrar movimetacao do peao
			var coluna = colunas[anterior]+linhaDiagonal;
//funcao para encontrar movimetacao do peao
			if($('#'+coluna).find('.piece').size() == 1){
//funcao para encontrar movimetacao do peao
				var pecaEncontrada = $('#'+coluna).find('.piece').attr('class');
//funcao para encontrar movimetacao do peao
				if(pecaEncontrada.indexOf(typeAttack) >= 0){
//funcao para encontrar movimetacao do peao
					x++;
//funcao para encontrar movimetacao do peao
					moves[x] = coluna;
//funcao para encontrar movimetacao do peao
				}
//funcao para encontrar movimetacao do peao
			}
//funcao para encontrar movimetacao do peao
		}
//funcao para encontrar movimetacao do peao


		return moves;
//funcao para encontrar movimetacao do peao
	}
//funcao para encontrar movimetacao do peao

// --------------------------------------------------

	function newGame(fenString){
//funcao para encontrar movimetacao zerar o jogo
		parseFen(fenString);
//funcao para encontrar movimetacao zerar o jogo
	}
//funcao para encontrar movimetacao zerar o jogo

// --------------------------------------------------

	function printBoard(){
//funcao para encontrar movimetacao abrir pecas
		var light = 1;
//funcao para encontrar movimetacao abrir pecas
		var columns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
//funcao para encontrar movimetacao abrir pecas
		for(var l = 8; l>=1; --l){
//funcao para encontrar movimetacao abrir pecas
			for(var c = 0; c < columns.length; ++c){
//funcao para encontrar movimetacao abrir pecas
				var sq = columns[c]+l;
//funcao para encontrar movimetacao abrir pecas
				var lightdark = (light == 1) ? 'light' : 'dark';
//funcao para encontrar movimetacao abrir pecas
				$('.board').append('<div class="square-board '+lightdark+'" id="'+sq+'"></div>');
//funcao para encontrar movimetacao abrir pecas
				light ^= 1;
//funcao para encontrar movimetacao abrir pecas
			}
//funcao para encontrar movimetacao abrir pecas
			light ^= 1;
//funcao para encontrar movimetacao abrir pecas
		}
//funcao para encontrar movimetacao abrir pecas
	}

//funcao para encontrar movimetacao abrir pecas

	printBoard();
//funcao para encontrar movimetacao abrir pecas
	newGame(fenStr);
//funcao para encontrar movimetacao abrir pecas

// --------------------------------------------------

	function objSearch(obj, valor){
//funcao para encontrar movimetacao abrir pecas
		var retorno = null;
//funcao para encontrar movimetacao abrir pecas
		$.each(obj, function(i, val){
//funcao para encontrar movimetacao abrir pecas
			if(val == valor){
//funcao para encontrar movimetacao abrir pecas
				retorno = i;
//funcao para encontrar movimetacao abrir pecas
			}
//funcao para encontrar movimetacao abrir pecas
		});

//funcao para encontrar movimetacao abrir pecas

		return retorno;
//funcao para encontrar movimetacao abrir pecas
	}
//funcao para encontrar movimetacao abrir pecas

// --------------------------------------------------
	function objSearchIndex(obj, index){
//funcao para encontrar o objeto especifico
		var retorno = null;
//funcao para encontrar o objeto especifico
		$.each(obj, function(i, val){
//funcao para encontrar o objeto especifico
			if(i == index){
//funcao para encontrar o objeto especifico
				retorno = i;
//funcao para encontrar o objeto especifico
			}
//funcao para encontrar o objeto especifico
		});
//funcao para encontrar o objeto especifico


		return retorno;
//funcao para encontrar o objeto especifico
	}
//funcao para encontrar o objeto especifico
});
//funcao para encontrar o objeto especifico

// --------------------------------------------------

//fechar jquery