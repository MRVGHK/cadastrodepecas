let peso = 100;

if(peso >= 100) { 
    console.log ("A peca possui peso adequado, pode ser cadastrada!") 
} else {
    console.log ("A peca nao pode ser cadastrada, nao possui o peso minimo")
}

let listapecas = ["embreagem", "caixa de marcha"] ;

let numeropecas = listapecas.length ;

if (numeropecas < 10) {
    console.log ("A lista ainda possui espaço para mais peças")
} else {
    console.log ("Não há espaço disponível, a capacidade máxima foi atingida")
}

// let nomepeca = listapeca[0];  >> para pegar o primeiro item da lista

let nomepeca = "freio"

if (nomepeca.length > 3) {
    console.log("nome da peça é valiido, pode seguir com o cadastro") 
} else {
    console.log("nome de peça inválido, o nome deve ter mais de 3 letras")   
}
