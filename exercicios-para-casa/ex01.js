// Variáveis e Tipos

/* Precisa de ajuda? Veja esses links:

   http://tableless.github.io/iniciantes/manual/js/variaveis.html

   https://www.w3schools.com/js/default.asp (navegue)

   https://developer.mozilla.org/pt-BR/docs/Aprender/Getting_started_with_the_web/JavaScript_basico (navegue)
*/

// Tá com dúvidas sobre como responder ao exercício? Leia o arquivo _Intrucoes.md

// Crie/declare uma variável para guardar o nome do curso que você está fazendo na reprograma (sem valor).
var nomeCurso

// Mostre o valor atual de sua variável no console
undefined

// Atribua um valor à variável que você acabou de criar
var nomeCurso = 'Front-endOn'

// Agora mostre novamente o valor atual de sua variável no console
Font-endOn

// Crie/declare uma variável para guardar uma nota de 1 a 10 (sem valor).
var nota1

// Nesta variável atribua o valor da nota que você daria (hoje) para os seus conhecimentos de lógica (seja realista sem ser cruel com você mesma, lembre que você está começando)
var nota1 = 5

// Crie/declare uma nova variável chamada 'soma' e atribua o resultado da soma de dois valores nesta variável (tente fazer tudo em uma linha)
var soma = num1 + num2

// Incremente (some mais 1) à sua variável 'soma' usando 3 formas diferentes (dica: pesquise operadores unários)
var soma = soma + 1 
var soma = soma += 1
var soma = soma++

// Crie/declare uma variável 'multiplicacao' que multiplica a sua variável 'soma' por um valor qualquer
var multiplicacao = soma * i

// Mostre o valor das variáveis 'soma' e 'multiplicacao' usando três formas diferentes
var multiplicacao = soma * i
var multiplicacao = soma * i + 1
var multiplicacao = soma * i++

// Crie/declare uma variável chamada 'queroSerDesenvolvedora' e atribua um valor booleano à ela (...tô torcendo pra ser true..rsrsrsr)
var queroSerDesenvolvedora = true

// Crie/Declare uma variável chamada 'sanduba' do tipo array e acrescente valores correspondentes àos ingretientes da sua receita preferida. (Nós vimos array correndo então vou dar uma dica aqui: var sanduba = ['pao', 'ovo', 'queijo'] )
var sanduba = ['pão', 'maionese', 'tomate', 'hambúrguer', 'alface']

// Moste a variável 'sanduba' no console
(5) ["pão", "maionese", "tomate", "hambúrguer", "alface"]

// Mostre o primeiro ingrediente de 'sanduba' (desafio pra você pesquisar)
var primeiro = sanduba[0]

// Acrescente um ingrediente ao seu 'sanduba' (desafio pra você pesquisar)
var sandubaNew = sanduba.unshift('ketchup')

// Substitua um ingrediente do seu 'sanduba' (desafio pra você pesquisar...sempre tento trocar a ervilha, quando tem)
var novo = sanduba.indexOf('tomate')

if (novo !== -1) {
    sanduba[novo] = 'ervilha'
}

// Escolha 3 variáveis que você criou e mostre o seus respectivos tipos (lembre que tem um comando pra isso)
typeof sanduba
"object"
typeof soma
"number"
typeof nomeCurso
"string"
