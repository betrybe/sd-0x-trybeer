# Boas vindas ao repositório do projeto TryBeer!

Você já usa o GitHub diariamente para desenvolver os exercícios, certo? Agora, para desenvolver os projetos, você deverá seguir as instruções a seguir. Fique atento a cada passo, e se tiver qualquer dúvida, nos envie por _Slack_! #vqv 🚀

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu projeto a partir desse repositório, utilizando uma branch específica e um _Pull Request_ para colocar seus códigos.

## O que deverá ser desenvolvido

Esse será o projeto mais desafiador até agora! Você será responsável por criar uma aplicação de ponta-a-ponta!

Isso significa que a API, o banco de dados e o front-end serão escritos por você 😁

O projeto em si é super divertido! Você criar uma plataforma de delivery de cerveja 🍻

Para facilitar o entendimento, dá para dividirmos a aplicação em três partes:

- API (você fará apenas uma);

- Front-end **cliente** (onde nosso cliente vai comprar a cerveja);

- Front-end **admin** (onde o estabelecimento controla os pedido feitos).

Utilize o `MySQL` para o banco de dados!

Você pode acessar um protótipo do front-end no link abaixo:

https://www.figma.com/file/tzP4txu6Uy0qCxVZWdWMBO/TryBeer?node-id=0%3A1

Lembre-se de escrever testes unitários e sinta-se livre para alterar a UI. Contudo, respeite os atributos `data-testid`, eles serão usados na correção do projeto.

Você pode ler mais sobre atributos que serão utilizados para testes [nesse link](https://www.eduardopedroso.com.br/?p=494)

#### ⚠️ Lembre-se de escrever testes unitários e sinta-se livre para alterar a UI. Contudo, respeite os atributos `data-testid`, eles serão usados na correção do projeto.

#### ⚠️ Para ver os comentários sobre cada componente, basta clicar no ícone de comentários no Figma (lado esquerdo superior).

![image](https://res.cloudinary.com/drdpedroso/image/upload/c_scale,w_400/v1575815877/Screenshot_2019-12-08_at_11.37.25_kzt7rl.png)

---

## Desenvolvimento e testes

Este repositório já contem um _template_ com um App React criado e com os testes automatizados que fazem parte da correção. Após clonar o projeto e instalar as dependências, sinta-se livre para escolher usar Redux ou ContextAPI + React Hooks, saiba avaliar as vantagens/desvantagens.

Para o banco de dados, você irá utilizar o `MySQL`. Modele-o e disponibilize um script, na raíz do seu app, para que o seu projeto seja corrigido utilizando o banco de dados arquitetado por você!

Para o projeto ser validado, todos os [testes E2E](https://www.guru99.com/end-to-end-testing.html) devem passar. É possível testar isso local rodando `npm run cy`. Esse comando roda a suíte de testes do [Cypress](https://www.cypress.io/how-it-works/) que valida se o fluxo geral e os requisitos funcionais estão agindo da maneira que deveriam.

Esses testes não consideram o layout de maneira geral, mas sim os atributos e as informações corretas. Então, preste atenção nos atributos definidos no protótipo.

Os testes te darão uma mensagem de erro caso não estejam passando (seja qual for o motivo). 😉

#### Além dos testes automatizados, você também deve **escrever testes unitários que devem cobrir pelo menos 90% do projeto**. Na [documentação do Jest CLI](https://jestjs.io/docs/en/cli) é possível ver como essa cobertura é coletada.

## Implementações técnicas

Algumas coisas devem seguir um padrão pré-estabelecido para que os teste de correção funcionem corretamente.

- O front-end deve estar em `localhost:3000` e a API em `localhost:3001`.

- O uso de `localStorage` é necessário para que as informações não se percam caso o usuário atualize a página.

No `localStorage` do navegador:

- A chave `user` deve conter a seguinte estrutura:

  ```json
  {
    "name": "Taylor Swift",
    "email": "taylorswift@email.com",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4(...)",
    "role": "client"
  }
  ```

- Ao deslogar, remova completamente a chave `user` do `localStorage`.

- Os endpoints devem autorizar o acesso utilizando um token de teste: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c`

- Crie um `produto de teste`, que deve ficar na primeira posição dos cards, com o `test-id` começando com o **indice 0**. Para isso, o corpo da sua requisição deve ser:

  ```json
  {
    "name": "Cerveja Skol Lata 250ml",
    "price": 2.2,
    "image": "https://res.cloudinary.com/drdpedroso/image/upload/c_scale,w_600/v1587242866/132_Cerveja_Skol_Pilsen_Lata_350ml_zu1xth.jpg"
  }
  ```

- Crie um login de teste para um usuário do tipo `ADMIN`. Para isso, o corpo da sua requisição deve ser:

  ```json
  {
    "name": "Admin Trybe",
    "email": "admin@trybe.com",
    "password": "123456"
  }
  ```

- Crie um login de teste para um usuário do tipo `CLIENT`. Para isso, o corpo da sua requisição deve ser:

  ```json
  {
    "name": "Client Trybe",
    "email": "client@trybe.com",
    "password": "123456"
  }
  ```

### Endpoints

- Para o registro de um usuário, faça uma requisição do tipo `POST` para o endpoint `/register`.

- Para o login de um usuário, faça uma requisição do tipo `POST` para o endpoint `/login`.

**Client**

- Para listar os produtos, faça uma requisição do tipo `GET` para o endpoint `/products`.

- No momento de finalizar um pedido, faça uma requisição do tipo `POST` para o endpoint `/finish-order`.

- Para carregar "Meus pedidos", faça uma requisição do tipo `GET` para o endpoint `/my-orders`.

**Admin**

- Para listar os pedido pendentes, faça uma requisição do tipo `GET` para o endpoint `/pending-orders`.

- Para listar o detalhes do pedido, faça uma requisição do tipo `GET` para o endpoint `/order/:id`.

- Para marcar um pedido como entregue, faça uma requisição do tipo `POST` para o endpoint `/order`. **Dica**: Mande, para o endpoint, o pedido todo, atualizando apenas o status.

⚠️ A próxima sessão lista, com maiores detalhes, os requisitos. **Lembre-se** de, sempre que for começar um novo requisito, retornar nessa sessão para estar alinhado com o que foi pedido.

## Requisitos do projeto

⚠️ Lembre-se que o seu projeto só será avaliado se estiver passando pelos _checks_ do **CodeClimate**, e se estiver, também, seguindo corretamente os padrões REST para rotas e MVC para o back-end. Além disso, você deve também disponibilizar um scrip contendo a criação do seu banco de dados, das tabelas e inserção de dados iniciais.

⚠️ Os endpoints, a arquitetura do banco e a estrutura geral do projeto estão nas mãos da pessoa que está desenvolvendo o projeto. O importante é que todos os requisitos sejam atendidos.

O intuito desse app é que uma pessoa possa pedir uma cerveja no aplicativo e outra pessoa possa aceitar esse pedido no **admin**.

#### O projeto sera composto por duas entregas, cada uma especificada abaixo com seus respectivos requisitos e o prazo decidido com o especialista.

## Requisitos Entrega 1

1. A cobertura de testes unitários deve ser de no mínimo 90%;

2. Como especificado na sessão `Implementações técnicas`, em `endpoints`, você deve criar as suas rotas utilizando o padrão REST;

3. Para arquitetar seu back-end siga o padrão arquitetural `MVC`;

4. Disponibilize um script, na raíz de sua aplicação, com a criação do banco de dados, tabelas e inserção de dados iniciais.

### Tela de login

5. Todos os elementos devem respeitar os atributos descritos no protótipo para a tela de login;

6. A pessoa deve conseguir escrever seu email no input de email;

7. A pessoa deve conseguir escrever sua senha no input de senha;

8. O formulário só fica válido após um email válido e uma senha de, no mínimo, 6 números serem preenchidos. Caso o formulário esteja inválido, o botão de submeter deve estar desativado. Caso contrário, deve estar ativado;

9. Após a submissão, um token que identifica o usuário deve ser salvo no `localStorage`. Esse token vai ser utilizado para futuras requisições à API;

10. Após a submissão, se o usuário for do tipo `administrador`, a próxima rota deve ser a de **Pedidos**;

11. Após a submissão, se o usuário for do tipo `cliente`, a próxima rota deve ser a de **Produtos**;

12. Deve existir um botão para o usuário se registrar: "`Ainda não tenho conta`". Ao ser clicado, leve-o para a rota `/register`.

### Tela de registro

13. Todos os elementos devem respeitar os atributos descritos no protótipo para a tela de registro;

14. A tela deve mostrar um formulário com os seguintes campos:

    - **nome** - deve conter, no mínimo, 12 letras, sem números ou caracteres especiais;

    - **email** - deve conter um email válido;

    - **senha** - composta por, no mínimo, 6 números;

    - **quero vender** - sendo um checkbox opcional.

15. Caso a opção `quero vender` esteja "checada", o usuário deve ter um papel de **ADMIN**. Caso contrário, será um **CLIENT**;

16. Caso o formulário esteja inválido, o botão de submeter deve estar desativado. Caso contrário, deve estar ativado;

17. Caso a opção `quero vender` esteja "checada", ao clicar no botão "`Cadastrar`", redirecione para `/admin/orders`. Caso contrario, redirecione a rota para `/products`.

## Cliente

### Menu superior

18. Todos os elementos devem respeitar os atributos descritos no protótipo para o menu superior;

19. Mostre o título correspondente à tela em que o usuário se encontra (vide protótipo);

20. Deve ter um ícone, do tipo "hamburguer", no canto superior esquerdo do Menu superior. Quando clicado, caso o menu lateral esteja oculto, deve mostrá-lo. Caso contrário, deve esconder o menu lateral.

### Menu lateral

21. Todos os elementos devem respeitar os atributos descritos no protótipo para o menu lateral;

22. Deve conter quatro itens: "`Produtos`", "`Meus pedidos`", "`Meu Perfil`" e "`Sair`";

23. Ao clicar no item "`Produtos`", a rota deve mudar para `/products` e mostrar a tela de produtos;

24. Ao clicar no item "`Meus pedidos`", a rota deve mudar para `/my-orders` e mostrar a tela de meus pedidos;

25. Ao clicar no item "`Meu perfil`", a rota deve mudar para `/profile` e mostrar a tela de meu perfil;

26. Ao clicar no item "`Sair`", a rota deve mudar para `/login` e a pessoa deve ser deslogada.

### Tela de perfil

27. Todos os elementos devem respeitar os atributos descritos no protótipo para a tela de perfil;

28. A rota deve ser `/profile`;

29. Deve ter dois campos de texto, um para o `email` e o outro para o `nome`. Apenas o `nome` pode ser alterado. Dessa forma, o campo `email` é `read-only`;

30. Deve ter um botão "`Salvar`". Caso o usuário tenha editado o nome, o botão deve ser habilitado. Caso contrário, o botão deve estar desabilitado.

### Tela de produtos

31. Todos os elementos devem respeitar os atributos descritos no protótipo para a tela de produtos;

32. A rota deve ser `/products`;

33. Caso a pessoa atualize o browser, o carrinho deve ser mantido;

34. O carrinho deve ser mantido por 12h. Ou seja, caso um usuário insira produtos no carrinho e não finalize a compra, ele deve ser mantido por 12h. Para isso, conte as horas a partir da última alteração nos itens do checkout;

35. Nessa tela, os produtos devem ser organizados em "cards";

36. Os cards devem conter os seguintes dados do produto:

    - Foto;

    - Nome do produto;

    - Preço unitário;

    - Quantidade atual inserida no carrinho;

    - Botão de adicionar e de remover do carrinho.

37. O preço unitário deve seguir o padrão da moeda: `R$ 00,00`;

38. Ao clicar no botão `+`, a quantidade do produto deve aumentar em 1;

39. Ao clicar no botão `-`, a quantidade do produto deve diminuir em 1, limitado a 0;

40. Quando a quantidade, mostrada no card do produto, chegar a 0, o produto deve ser removido do carrinho;

41. Deve ter um botão "`Ver carrinho`". Esse botão deve ter o `valor total` como conteúdo;

42. O `valor total`, mostrado no botão, deve ser alterado dinâmicamente, ou seja, ao adicionar um novo produto no carrinho, o valor total deve ser atualizado;

43. Ao clicar no botão "`Ver carrinho`", mudar a rota para `/checkout`.

---

## Requisitos Entrega 2

44. A cobertura de testes unitários deve ser de no mínimo 90%;

### Tela de checkout

45. Todos os elementos devem respeitar os atributos descritos no protótipo para a tela de checkout;

46. A rota deve ser `/checkout`;

47. Caso a pessoa atualize o browser, o carrinho deve ser mantido;

48. Os produtos, mostrados nessa página, devem ser mantidos por 12h. Ou seja, caso um usuário insira produtos e não finalize a compra, eles devem ser mantidos por 12h. Para isso, conte as horas a partir da última alteração nos itens;

49. Mostre o `número do pedido` e a `data de realização`. Para a data de realiazação do pedido, mostre apenas o dia e o mês;

50. Deve ter uma lista dos produtos selecionados com a seguinte estrutura: `quantidade do produto -- nome do produto -- valor total do produto`. Sendo o valor total calculado por **quantidade * preço unitário**;

51. Deve ser possível editar o campo `quantidade`. Caso a quantidade se altere, recalcule o `valor total do pedido`;

52. Abaixo da lista, mostre o `valor total do pedido`. O valor total do pedido é calculado a partir da **soma de todos os valores totais dos produtos**;

53. Deve existir um formulário para a pessoa digitar o endereço de entrega dos produtos. O formulário deve conter dois campos de texto, um para a **rua** e o outro para o **número da casa**;

54. Deve ter um botão para "`Finalizar pedido`". O botão deve estar habilitado **apenas** se o valor total do pedido for `maior que zero` e o endereço de entrega preenchido;

55. Ao clicar em "`Finalizar pedido`", caso a operação dê certo, uma mensagem de sucesso deve ser exibida e a rota deve mudar para `/products`. Caso contrário, deve ser exibido uma mensagem de erro.

### Tela de meus pedidos

56. Todos os elementos devem respeitar os atributos descritos no protótipo para a tela de meus pedidos;

57. A rota deve ser `/my-orders`;

58. Deve conter uma lista de cards contendo as seguintes informações: `número do pedido`, `data de realização` e `valor total do pedido`. Para a data de realiazação do pedido, mostre apenas o dia e o mês;

59. A listagem deve sempre mostrar o pedido mais recente primeiro;

60. Ao clicar no card, a rota deve mudar para os detalhes do respectivo pedido, utilizando a seguinte rota: `/my-orders/:numero-do-pedido`.

### Tela de detalhes do pedido

61. Todos os elementos devem respeitar os atributos descritos no protótipo para a tela de detalhes do pedido;

62. A rota deve ser `/my-orders/:numero-do-pedido`;

63. Mostre o `número do pedido` e a `data de realização`. Para a data de realiazação do pedido, mostre apenas o dia e o mês;

64. Deve ter uma lista dos produtos selecionados com a seguinte estrutura: `quantidade do produto -- nome do produto -- valor total do produto`. Sendo o valor total calculado por **quantidade * preço unitário**;

65. Abaixo da lista, mostre o `valor total do pedido`. O valor total do pedido é calculado a partir da **soma de todos os valores totais dos produtos**.

## Admin

### Menu lateral

66. Todos os elementos devem respeitar os atributos descritos no protótipo para o menu lateral;

67. Deve conter três itens: "`Pedidos`", "`Perfil`" e "`Sair`";

68. Ao clicar no item "`Pedidos`", a rota deve mudar para `/admin/pending-orders` e mostrar a tela de pedidos;

69. Ao clicar no item "`Perfil`", a rota deve mudar para `/admin/profile` e mostrar a tela de perfil;

70. Ao clicar no item "`Sair`", a rota deve mudar para `/login` e a pessoa deve ser deslogada.

### Tela de perfil

71. Todos os elementos devem respeitar os atributos descritos no protótipo para a tela de perfil;

72. A rota deve ser `/admin/profile`;

73. Mostrar o `email` e o `nome` do usuário. Não permita que o usuário edite os dados.

### Tela de pedidos

74. Todos os elementos devem respeitar os atributos descritos no protótipo para a tela de pedidos;

75. A rota deve ser `/admin/pending-orders`;

76. Essa tela deve mostrar todos os pedidos com status **Pendente**;

77. Os "cards" dos pedidos devem conter as informações:

    - Número do pedido;

    - Endereço para entrega;

    - Valor total do pedido.

78. Ao clicar em qualquer parte do card do pedido, levar para a rota `/admin/order/:id`, onde o **:id** é o id do pedido referente ao card.

### Tela de detalhes de pedido

79. Todos os elementos devem respeitar os atributos descritos no protótipo para a tela de detalhes do pedido;

80. A rota deve ser `/admin/order/:id`;

81. No cabeçalho, mostre o `número do pedido` e o `status` atual;

82. Deve ter uma listagem com os produtos do pedido, onde cada linha deve conter:

    - Quantidade;

    - Nome do produto;

    - Valor total do produto.

83. A listagem deve mostrar, sempre, o pedido mais antigo com **status pendente primeiro**;

84. O `preço total` do produto é calculado usando **quantidade * preço unitário**;

85. Mostre também o `valor total do pedido`. O valor total do pedido é calculado a partir da **soma de todos os valores totais dos produtos**;

86. Caso o status do pedido seja **pendente**, um botão para marcar o pedido como entregue deve ser exibido. Caso contrário, não exiba o botão;

87. Ao clicar no botão "`Marcar pedido como entregue`", o status desse pedido deve mudar para `Entregue`. Consequentemente, a lista da tela "Pedidos pendentes" deve ser atualizada.

---

## Instruções para entregar seu projeto:

### ANTES DE COMEÇAR A DESENVOLVER:

1. Clone o repositório

- `git clone git@github.com:betrybe/trybeer-project.git`.
- Entre na pasta do repositório que você acabou de clonar:
  - `cd trybeer-project`

2. Instale as dependências, inicialize o projeto e rode os testes

- Instale as dependências:
  - `npm install`
- Inicialize o projeto:
  - `npm start` (uma nova página deve abrir no seu navegador com um texto simples)
- Verifique que os testes E2E estão executando:
  - `npm run cy` (os testes devem rodar e falhar)
  - `npm run cy:open` (os testes devem rodar e falhar, legal caso queira ver o Cypress funcionando)

3. Crie uma branch a partir da branch `master`

- Verifique que você está na branch `master`
  - Exemplo: `git branch`
- Se não estiver, mude para a branch `master`
  - Exemplo: `git checkout master`
- Agora, crie uma branch onde você vai guardar os `commits` do seu projeto
  - Você deve criar uma branch no seguinte formato: `nome-de-usuário-nome-do-projeto`
  - Exemplo: `git checkout -b joaozinho-trybeer`

5. Adicione as mudanças ao _stage_ do Git e faça um `commit`

- Verifique que as mudanças ainda não estão no _stage_
  - Exemplo: `git status` (deve aparecer listada a pasta _components_ em vermelho)
- Adicione o novo arquivo ao _stage_ do Git
  - Exemplo:
    - `git add .` (adicionando todas as mudanças - _que estavam em vermelho_ - ao stage do Git)
    - `git status` (deve aparecer listado o arquivo _components/Header.jsx_ em verde)
- Faça o `commit` inicial
  - Exemplo:
    - `git commit -m 'iniciando o projeto. VAMOS COM TUDO :rocket:'` (fazendo o primeiro commit)
    - `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

6. Adicione a sua branch com o novo `commit` ao repositório remoto

- Usando o exemplo anterior: `git push -u origin joaozinho-trybeer`

7. Crie um novo `Pull Request` _(PR)_

- Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/betrybe/trybeer-project/pulls)
- Clique no botão verde _"New pull request"_
- Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
- Clique no botão verde _"Create pull request"_
- Adicione uma descrição para o _Pull Request_ e clique no botão verde _"Create pull request"_
- **Não se preocupe em preencher mais nada por enquanto!**
- Volte até a [página de _Pull Requests_ do repositório](https://github.com/betrybe/trybeer-project/pulls) e confira que o seu _Pull Request_ está criado

---

### DURANTE O DESENVOLVIMENTO

- ⚠ **LEMBRE-SE DE CRIAR TODOS OS ARQUIVOS DENTRO DA PASTA COM O SEU NOME** ⚠

* Faça `commits` das alterações que você fizer no código regularmente

* Lembre-se de sempre após um (ou alguns) `commits` atualizar o repositório remoto

* Os comandos que você utilizará com mais frequência são:
  1. `git status` _(para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)_
  2. `git add` _(para adicionar arquivos ao stage do Git)_
  3. `git commit` _(para criar um commit com os arquivos que estão no stage do Git)_
  4. `git push -u nome-da-branch` _(para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)_
  5. `git push` _(para enviar o commit para o repositório remoto após o passo anterior)_

---

### DEPOIS DE TERMINAR O DESENVOLVIMENTO

Para **"entregar"** seu projeto, siga os passos a seguir:

- Vá até a página **DO SEU** _Pull Request_, adicione a label de _"code-review"_ e marque seus colegas
  - No menu à direita, clique no _link_ **"Labels"** e escolha a _label_ **code-review**
  - No menu à direita, clique no _link_ **"Assignees"** e escolha **o seu usuário**
  - No menu à direita, clique no _link_ **"Reviewers"** e digite `students`, selecione o time `tryber/students-sd-01`

Se ainda houver alguma dúvida sobre como entregar seu projeto, [aqui tem um video explicativo](https://vimeo.com/362189205).

---

### REVISANDO UM PULL REQUEST

⚠⚠⚠

À medida que você e os outros alunos forem entregando os projetos, vocês serão alertados **via Slack** para também fazer a revisão dos _Pull Requests_ dos seus colegas. Fiquem atentos às mensagens do _"Pull Reminders"_ no _Slack_!

Os monitores também farão a revisão de todos os projetos, e irão avaliar tanto o seu _Pull Request_, quanto as revisões que você fizer nos _Pull Requests_ dos seus colegas!!!

Use o material que você já viu sobre [Code Review](https://course.betrybe.com/real-life-engineer/code-review/) para te ajudar a revisar os projetos que chegaram para você.
