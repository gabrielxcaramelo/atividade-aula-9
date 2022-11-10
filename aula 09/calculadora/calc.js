// criando uma calculadora
function calculadora(){
    // definindo as operações e pegando valor de entrada de usuario
    // usaremos o"\n"
    const operacao = Number (prompt('Escolha uma opção:\n 1 - soma (+)\n 2 - subtração(-)\n 3 - multiplicação (*)\n 4 - divisão real (/)\n 5 - divisão inteira (%)\n 6 - potenciação (**)'));
    
    // verificando se a operação é valida 
    if (!operacao || operacao >=7) {
        alert (' erro - operação invalida!');
        calculadora();
    }else{
        // definindo variaveis - todas as entradas devem ser tipo number
        let n1 = Number (prompt('insira o primeiro valor: '));
        let n2 = Number (prompt('insira o segundo  valor: '));
        let resultado
        // verificando se as variaveis são validos
        if(!n1 || !n2){
            alert(' erro - parãmetros inválidos!');
            calculadora();

    }else{
        //definindo as funções
        function soma () {
            resultado = n1 + n2;
            //mostrando o resultado usando  template strings
            alert(`${n1} + ${n2} = ${resultado}`);
            //dando a opção de chamar uma nova operação
            novaOperacao();
            }
            function subtracao () {
                resultado = n1 + n2;
                //mostrando o resultado usando  template strings
                alert(`${n1} + ${n2} = ${resultado}`);
                //dando a opção de chamar uma nova operação
                novaOperacao();
            }
            function multiplicacao() {
                 resultado = n1 + n2;
                //mostrando o resultado usando  template strings
                alert(`${n1} + ${n2} = ${resultado}`);
                //dando a opção de chamar uma nova operação
                novaOperacao();

            }function divisaoReal () {
                resultado = n1 + n2;
                //mostrando o resultado usando  template strings
                alert(`${n1} + ${n2} = ${resultado}`);
                //dando a opção de chamar uma nova operação
                novaOperacao();

            }function divisaoInteira () {
                resultado = n1 + n2;
                //mostrando o resultado usando  template strings
                alert(`${n1} + ${n2} = ${resultado}`);
                //dando a opção de chamar uma nova operação
                novaOperacao();

            }function potenciacao () {
                resultado = n1 + n2;
                //mostrando o resultado usando  template strings
                alert(`${n1} + ${n2} = ${resultado}`);
                //dando a opção de chamar uma nova operação
                novaOperacao();
                }
                //nova operação
                function novaOperacao(){
                    let opcao = prompt('deseja fazer outra operação?\n 1 - sim\n 2 - não');
                    if (opcao == 1) {
                        calculadora();
                    }else if (opcao == 2){
                        alert('até mais!')
                    }else {
                        alert(`digite uma opção valida!`);
                        novaOperacao();
                    }
                }       
            }
        }

// escolhendo uma operação
// usando if && else
if (operando == 1) {
    soma();
}else if (operando == 2) {
    subtracao ();
}else if (operando == 3) {
    multiplicacao();
}else if (operando == 4) {
    disisaoReal ();
}else if (operando == 5) {
    divisaoInteira ();
} else if (operando == 6) {
        potenciacao ();

}
// usando switch case como alternativa (comentar um dois)
/*
switch (operacao){
case1: 
    soma()
    break;

case2:
    subtração();
    break;
case3: 
    multiplicação();
    break;
case4:
    divisaoReal();
    break;
case5:
    divisaoInteira{}
    break;
case6:
    potenciacao();
    break;
} */
}
calculadora();


