// tipos de funções
// função declarativo
/* deve ser declarada usando a palavra reservada function seguida do nome da função, parêteses"()" e chaves "()"
*/
function nomeDaFuncao() {
    alert('sou uma função declarativa!');
}
// devemos chamar a função para ver o resultado
nomeDaFuncao();

// expressão de função - são funções atibuidas a expressões
// a nomeação é opcional

// com nomeação
var nomeDefuncao = function nomeDafuncao() {
    alert('sou uma expressão de função nomeada! ');
}
// sem nomeação 
var nomeDafuncao2 = function() {
    alert('sou uma expressão de função não nomeada!');
}
// arrow function
/* função de expressão de sintaxe curta, sempre anônima, 
não pode ser  nomeada - deve ser declarada com parênteses "()",
seguido de "=>" e depois "{}" 
*/
var funcao = () => {
    alert('so uma função anônima!');
}

nomeDefuncao();
nomeDefuncao2();
funcao();