## Module Exports:

É uma funcionalidade do node para podermos importar/exportar trechos de códigos em javascript e até mesmo as própias dependências.

module.exports = [algo-que-queremos-importar]

Ex:

Arquivo soma.js:
``` javascript
function somaDoisNumeros(num1, num2) {
	return num1 + num2;	
}
module.exports = somaDoisNumeros;
```

Arquivo index.js
``` javascript
let somaDoisNumeros = require('./soma');
console.log(somaDoisNumeros(10, 20));
```

Para exportar mais de duas funçoes:

Arquivo: funcoesDeAjuda.js
``` javascript
function imc(peso, altura){
	let imc = peso / (altura * altura);
	return imc;
}
function quadrado(numero){
	return numero * numero;
}
module.exports.imc = imc;
module.exports.quadrado = quadrado;
```
Arquivo main.js:
```javascript
let funcoesDeAjuda = require('./funcoesDeAjuda');
console.log(funcoesDeAjuda);
console.log(funcoesDeAjuda.imc(80, 1.80));
console.log(funcoesDeAjuda.quadrado(5));
```

Nesse ponto a variavel funcoesDeAjuda se torna um objeto que tem como método as funçoes imc e quadrado.