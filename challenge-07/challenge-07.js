/*
Crie um array com 5 items (tipos variados).
*/
var array1 = [  function executeFunc( inputString){ 
                    var prop1 = 'returned string: ' + inputString
                    return (prop1)
                } , 
                'ola', 
                { 
                    prop1: 'do', 
                    prop2: 're'
                },
                135.75,
                1047896 
            ]

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
var addItem = function addItem( inputArray , itemToAdd ){
    inputArray.push(itemToAdd);
    return(inputArray);
};

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
var arrayToAdd = [ 1 , 'ola', 355];
console.log( addItem( array1 ,  arrayToAdd) )
console.log(array1[0]( ' teste '))
/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
console.log( 'O segundo elemento do segundo array é ' + arrayToAdd[ arrayToAdd.length - 1 ])

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log( 'O primeiro array tem ' + array1.length + ' itens.')

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log( 'O primeiro array tem ' + arrayToAdd.length + ' itens.')

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
console.log( 'Números pares entre 10 e 20:' );
var num = 10;
while( num <= 20 ){
    console.log( num%2 === 0 ? num : '' )
    num++
}

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
console.log( 'Números ímpares entre 10 e 20:' );
num = 10;
while( num <= 20 ){
    console.log( num%2 !== 0 ? num : '' )
    num++
}

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
console.log( 'Números pares entre 100 e 120:' );
num = 100
for( num ; num <= 120 ; num++){
    console.log( num%2 === 0 ? num : '' )
}

console.log( 'Números ímpares entre 111 e 125:' );
num = 100
for( num ; num <= 125 ; num++){
    console.log( num%2 !== 0 ? num : '' )
}
