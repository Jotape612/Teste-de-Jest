Implementação de uma calculadora em JS, usando o Jest para testes de sistema.

Introdução
A linguagem de programação escolhida foi o Javascript, por ser uma linguagem que mais tive contato nos últimos tempos. Além de ser um bom treino para futuras adaptações em códigos mais distantes. 
Consequentemente, os testes foram feitos utilizando o Jest. Sendo o principal objetivo garantir que as operações matemáticas funcionem corretamente e identifique os erros.

Implementação da Calculadora
Inicialmente fiz um código misturando HTML, CSS e Javascript. Não foi bem sucedido. O Jest, pelo menos até onde testei, não se adaptou bem ao complemento da linguagem feita para a web. Mesmo uma derivada dela, o JSDOM, que simula um ambiente de navegador no Node, não me permitiu ser bem sucedido nos testes.

Com isso em mente, eu apenas resetei e fiz algo mais simples, fazendo o código em cima de uma única class Calculadora e usando o module.exports para exportar as funções com mais facilidade.

Testes Automatizados com Jest e Conclusão
A partir do código, os testes. Primeiramente, fiz um teste simples para saber se ele corrigiria certo. 1 + 1 = 2? Ele me apresentou corretamente. Então, a partir disso, comecei a brincar com os testes usando as 5 bases do código: soma, subtração, multiplicação, divisão e nulo (dividir qualquer coisa pelo zero para mostrar erro). 

Com os 5 testes bem sucedidos fiz a etapa contrária com 3 erros. E bem, mesmo o erro foi bem sucedido também! 

No fim, demonstrei um uso simples do jest para que pudesse compreender a pequena base do framework de testes para JavaScript.
