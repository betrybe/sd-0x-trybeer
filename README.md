# Boas vindas ao repositório do projeto TryBeer!

Você já usa o GitHub diariamente para desenvolver os exercícios, certo? Agora, para desenvolver os projetos, você deverá seguir as instruções a seguir. Fique atento a cada passo, e se tiver qualquer dúvida, nos envie por _Slack_! #vqv 🚀

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu projeto a partir desse repositório, utilizando uma branch específica e um _Pull Request_ para colocar seus códigos.

## O que deverá ser desenvolvido

Esse será o projeto mais desafiador até agora! Você será responsável por criar uma aplicação de ponta a ponta!

Isso significa que a API, o banco de dados e o front-end serão escritos por você. 😁

O projeto em si é super divertido! Você vai criar uma plataforma de delivery de cerveja. 🍻

Para facilitar o entendimento, dá para dividirmos a aplicação em três partes:

- Front-end do **cliente**, onde nossos clientes vão comprar cerveja;

- Front-end do **admin**, onde o estabelecimento controlará os pedidos feitos;

- API, que será compartilhada entre cliente e admin.

O banco de dados utilizado será o `MySQL`!

Você pode acessar um protótipo do front-end [aqui](https://www.figma.com/file/tzP4txu6Uy0qCxVZWdWMBO/TryBeer?node-id=0%3A1).

Para servir arquivos estáticos como imagens no back-end, utilize o seguinte path:
`/back-end/public/`

##### ⚠️ Lembre-se de escrever testes unitários e sinta-se livre para alterar a UI. Contudo, respeite os atributos `data-testid`, pois eles serão usados na correção do projeto.

Você pode ler mais sobre os atributos que serão utilizados para testes [neste link](https://www.eduardopedroso.com.br/?p=494).

##### ⚠️ Para ver os comentários sobre cada componente, basta clicar no ícone de comentários no Figma (lado esquerdo superior).

![image](https://res.cloudinary.com/drdpedroso/image/upload/c_scale,w_400/v1575815877/Screenshot_2019-12-08_at_11.37.25_kzt7rl.png)

---

## Desenvolvimento

Esse repositório contém duas pastas, `back-end` e `front-end`, onde você deve desenvolver o front-end e o back-end da aplicação. Ambas as pastas contêm um projeto iniciado com as configurações básicas necessárias. Após clonar o projeto e instalar as dependências, sinta-se livre para escolher usar Redux ou ContextAPI + React Hooks. Saiba avaliar as vantagens/desvantagens de cada um na hora da escolha.

Para o banco de dados, você deverá utilizar o `MySQL`. Modele-o e disponibilize um script, na raiz do seu app, para que o seu projeto seja corrigido utilizando o banco de dados arquitetado por você! O nome do script deve ser `script.sql`.

##### Você também deve **escrever testes unitários que devem cobrir pelo menos 90% do projeto**. Na [documentação do Jest CLI](https://jestjs.io/docs/en/cli) é possível ver como essa cobertura é coletada.

Para que seu projeto seja corretamente avaliado, siga as orientações a seguir:

- Sua aplicação deve ter um admin padrão com o nome de usuário `tryber` e senha `123456`.

- Sua aplicação deve ter, no mínimo, os produtos abaixo cadastrados. O arquivo `images.tar.gz`, na raiz do projeto, contém imagens para estes produtos.

  - Skol Lata 250ml, R$ 2.20;
  - Heineken 600ml, R$ 7.50;
  - Antarctica Pilsen 300ml, R$ 2.49;
  - Brahma 600ml, R$ 7.50;
  - Skol 269ml, R$ 2.19;
  - Skol Beats Senses 313ml, R$ 4.49;
  - Becks 330ml, R$ 4.99;
  - Brahma Duplo Malte 350ml, R$ 2.79;
  - Becks 600ml, R$ 8.89;
  - Skol Beats Senses 269ml, R$ 3.57;
  - Stella Artois 275ml, R$ 3.49.

- O front-end deve ser iniciado com `npm start` na pasta `front-end` e escutar a porta `3000`. A API deve ser iniciada com `npm start` dentro da pasta `back-end` e escutar a porta `3001`.

- O uso de `localStorage` é necessário para que as informações não se percam caso o usuário atualize a página.

- No `localStorage` do navegador:

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

## Requisitos do projeto

⚠️ Lembre-se de que o seu projeto só será avaliado se estiver passando pelos _checks_ do **CodeClimate** e se estiver, também, seguindo corretamente os padrões REST para rotas e MVC para o back-end. Além disso, você deve também disponibilizar um script contendo a criação do seu banco de dados, das tabelas e inserção de dados iniciais.

⚠️ A criação dos endpoints da API, a modelagem do banco e a estrutura geral do projeto é livre, desde que os requisitos especificados na seção `Requisitos Gerais` sejam cumpridos.

O intuito desse app é que uma pessoa possa pedir uma cerveja no aplicativo e outra pessoa possa aceitar esse pedido no **admin**.

##### O projeto sera composto por duas entregas, cada uma especificada abaixo com seus respectivos requisitos e o prazo decidido com a facilitação.

## Requisitos Entrega 1

##### Requisitos Gerais

1. Os `endpoints` da API devem ser criados utilizando o padrão REST;

2. O back-end deve utilizar o banco de dados `MySQL`;

3. O back-end deve ser construído seguindo o padrão arquitetural `MSC`;

4. Disponibilize um script SQL na raiz do projeto com comandos para a criação do banco de dados, das tabelas, inserção dos dados iniciais e criação do admin padrão. O script deve ser nomeado `script.sql`.

##### Página de Login

Esta tela possui o nome `Login` no protótipo.

5. Todos os elementos da tela devem respeitar os atributos descritos no protótipo;

6. A rota da tela deve ser `/login`;

7. A pessoa deve conseguir escrever seu email no input de email;

8. A pessoa deve conseguir escrever sua senha no input de senha;

9. O formulário só fica válido após um email válido e uma senha de, no mínimo, 6 números serem preenchidos. Um email válido possui a forma `<nome>@<domínio>`. Caso o formulário esteja inválido, o botão de submeter deve estar desativado. Caso contrário, deve estar ativado;

10. Após a submissão bem sucedida do formulário, o token que identifica o usuário recebido na resposta deve ser salvo no `localStorage`. Esse token deve ser utilizado para futuras requisições à API;

11. Após a submissão bem sucedida do formulário, se o usuário for do tipo `administrador`, a pessoa deve ser redirecionada para a página **Admin - Home**;

12. Após a submissão bem sucedida do formulário, se o usuário for do tipo `cliente`, a pessoa deve ser redirecionada para a página **Cliente - Produtos**;

13. Deve existir um botão para o usuário se registrar com o texto `"Ainda não tenho conta"`. Ao ser clicado, a pessoa deve ser redirecionada para a página **Registro**.

##### Página de Registro

Esta tela possui o nome `Registro` no protótipo.

14. Todos os elementos devem respeitar os atributos descritos no protótipo;

15. A rota da tela deve ser `/register`;

16. A tela deve mostrar um formulário com os seguintes campos:

    - **nome** - deve conter, no mínimo, 12 letras, sem números ou caracteres especiais;

    - **email** - deve conter um email válido. Um email válido possui o formato `<nome>@<domínio>`;

    - **senha** - composta por, no mínimo, 6 números;

    - **quero vender** - um checkbox opcional, desmarcado por padrão.

17. Caso a opção `Quero vender` esteja marcada, o usuário deve ser cadastrado com um papel de **admin**. Caso contrário, será um **client**;

18. Caso os dados inseridos no formulário sejam inválidos, o botão de submeter deve estar desativado. Caso contrário, deve estar ativado;

19. Caso a opção `Quero vender` esteja marcada, ao clicar no botão `"Cadastrar"`, a pessoa deve ser redirecionada para a página **Admin - Home**. Caso contrario, deve ser redirecionada para a página de **Cliente - Produtos**.

## Cliente

##### Menu superior

20. Todos os elementos devem respeitar os atributos descritos no protótipo para o menu superior;

21. O menu superior deve sempre ser exibido em todas as telas;

22. O título correspondente à tela em que o usuário se encontra deve ser mostrado, confome protótipos;

23. Deve haver um ícone do tipo "hambúrguer" no canto superior esquerdo do menu superior. Quando clicado, caso o menu lateral esteja oculto, deve ser mostrado. Caso contrário, o menu lateral deve ser escondido.

##### Menu lateral

24. Todos os elementos devem respeitar os atributos descritos no protótipo para o menu lateral;

25. Deve conter quatro itens: `"Produtos"`, `"Meus pedidos"`, `"Meu Perfil"` e `"Sair"`;

26. Ao clicar no item `"Produtos"`, a pessoa deve ser redirecionada para a tela **Cliente - Produtos**;

27. Ao clicar no item `"Meus pedidos"`, a pessoa deve ser redirecionada para a tela **Cliente - Meus Pedidos**;

28. Ao clicar no item `"Meu Perfil"`, a pessoa deve ser redirecionada para tela **Cliente - Meu Perfil**;

29. Ao clicar no item `"Sair"`, a pessoa deve ser redirecionada para a tela **Login** e ser deslogada.

##### Tela de perfil

Esta tela possui o nome `Cliente - Meu Pefil` no protótipo.

30. Todos os elementos devem respeitar os atributos descritos no protótipo;

31. A rota da tela deve ser `/profile`;

32. Deve ter dois campos de texto: um para o `email` e o outro para o `nome`. Apenas o `nome` pode ser alterado. Dessa forma, o campo `email` deve ser `read-only`;

33. Deve ter um botão `"Salvar"`". Caso o usuário tenha editado o nome, o botão deve ser habilitado. Caso contrário, o botão deve estar desabilitado;

34. Ao clicar no botão `"Salvar"`, uma requisição deve ser feita à API e o nome da pessoa deve ser atualizado no banco de dados;

35. Ao entrar na tela, se o usuário não estiver logado, deve ser redirecionado para a tela **Login**.

##### Tela de produtos

Esta tela possui o nome `Cliente - Produtos` no protótipo.

36. Todos os elementos devem respeitar os atributos descritos no protótipo para a tela de produtos;

37. A rota da tela deve ser `/products`;

38. Nessa tela, os produtos devem ser organizados em "cards", e deve haver um card para cada produto;

39. Os cards devem conter os seguintes dados do produto:

    - Foto;

    - Nome do produto;

    - Preço unitário;

    - Quantidade atual inserida no carrinho;

    - Botão de adicionar (`+`) e de remover (`-`) uma unidade do produto no carrinho.

40. Ao clicar no botão `+`, a quantidade do produto deve aumentar em 1;

41. Ao clicar no botão `-`, a quantidade do produto deve diminuir em 1, limitado a 0;

43. Caso a pessoa atualize o browser, o carrinho deve ser mantido;

43. O preço unitário deve seguir o padrão `R$ 00,00`;

44. Quando a quantidade mostrada no card do produto chegar a 0, o produto deve ser removido do carrinho;

45. Deve ter um botão `"Ver carrinho"`. Esse botão também deve exibir o **valor total** dos produtos no carrinho;

46. O **valor total** mostrado no botão `"Ver carrinho"` deve ser alterado dinamicamente, ou seja, ao adicionar ou remover um produto no carrinho, o valor total deve ser atualizado;

47. Ao clicar no botão `"Ver carrinho"`, a pessoa deve ser redirecionada para a página **Cliente - Checkout**.

48. Ao entrar na tela, se o usuário não estiver logado, deve ser redirecionado para a tela **Login**.

---

## Requisitos Entrega 2

##### Requisitos Gerais

49. A cobertura de testes unitários deve ser de, no mínimo, 90%;

##### Tela de Checkout

Esta tela possui o nome `Cliente - Checkout` no protótipo.

50. Todos os elementos devem respeitar os atributos descritos no protótipo para a tela;

51. A rota da tela deve ser `/checkout`;

52. Caso a pessoa atualize o browser, o carrinho deve ser mantido;

53. Mostre o `número do pedido` e sua `data de realização`. Para a data de realização do pedido, mostre apenas o dia e o mês;

54. Deve ter uma lista dos produtos selecionados com a seguinte estrutura: `quantidade do produto -- nome do produto -- valor total do produto`, sendo o valor total calculado por **quantidade * preço unitário**;

55. Ao lado de cada produto deve haver um botão que, quando clicado, exclui este produto do carrinho;

56. Abaixo da lista, mostre o **valor total do pedido**, no seguinte formato: `Total: R$ 0,00`. O valor total do pedido é calculado a partir da **soma de todos os valores totais dos produtos**;

57. Deve existir um formulário para a pessoa digitar o endereço de entrega dos produtos. O formulário deve conter dois campos de texto: um para a **rua** e o outro para o **número da casa**;

58. Deve ter um botão `"Finalizar Pedido"`. O botão deve estar habilitado **apenas** se o valor total do pedido for **maior que zero** e o endereço de entrega estiver preenchido;

59. Ao clicar em "`Finalizar pedido`", caso a operação dê certo, uma mensagem de sucesso deve ser exibida e a pessoa deve ser redirecionada para a página **Cliente - Produtos**. Caso contrário, deve ser exibido uma mensagem de erro;

60. Quando um pedido for finalizado, o carrinho deve ser esvaziado;

61. Ao entrar na tela, se o usuário não estiver logado, deve ser redirecionado para a tela **Login**.

##### Tela de Meus Pedidos

Esta tela possui o nome `Cliente - Meus Pedidos` no protótipo.

62. Todos os elementos devem respeitar os atributos descritos no protótipo para a tela de meus pedidos;

63. A rota da tela deve ser `/orders`;

64. Deve conter uma lista de cards, onde cada card é um pedido. Cada card deve conter as seguintes informações: `número do pedido`, `data de realização` e `valor total do pedido`. Para a data de realização do pedido, mostre apenas o dia e o mês;

65. A listagem deve mostrar os pedidos mais recentes primeiro;

66. Ao clicar no card, a pessoa deve ser redirecionada para a página **Cliente - Detalhes do Pedido**.

67. Ao entrar na tela, se o usuário não estiver logado, deve ser redirecionado para a tela **Login**.

##### Tela de detalhes de pedido

Esta tela possui o nome `Cliente - Detalhes de Pedido` no protótipo.

68. Todos os elementos devem respeitar os atributos descritos no protótipo para a tela de detalhes do pedido;

69. A rota da página deve ser `/orders/:numero-do-pedido`;

70. Mostre o `número do pedido` e a `data de realização`. Para a data de realização do pedido, mostre apenas o dia e o mês;

71. Deve ter uma lista dos produtos selecionados com a seguinte estrutura: `quantidade do produto -- nome do produto -- valor total do produto`. Sendo o valor total calculado por **quantidade * preço unitário**;

72. Abaixo da lista, mostre o `valor total do pedido`. O valor total do pedido é calculado a partir da **soma de todos os valores totais dos produtos**.

73. Ao entrar na tela, se o usuário não estiver logado, deve ser redirecionado para a tela **Login**.

## Admin

##### Menu lateral

74. Todos os elementos devem respeitar os atributos descritos no protótipo para o menu lateral;

75. Deve conter três itens: `"Pedidos"`", `"Perfil"`" e "`Sair`";

76. Ao clicar no item `"Pedidos"`, a pessoa deve ser redirecionada para a tela **Admin - Home**;

77. Ao clicar no item `"Perfil"`, a pessoa deve ser redirecionada para tela **Admin - Perfil**;

78. Ao clicar no item `"Sair"`, a pessoa deve ser redirecionada para a tela **Login** e ser deslogada.

##### Tela de perfil

Esta tela possui o nome `Admin - Perfil` no protótipo.

79. Todos os elementos devem respeitar os atributos descritos no protótipo para a tela de perfil;

80. A rota da página deve ser `/admin/profile`;

81. Mostrar o `email` e o `nome` do usuário. Não permita que o usuário edite os dados;

82. Ao entrar na tela, se o usuário não estiver logado, deve ser redirecionado para a tela **Login**.

### Tela de Pedidos

Esta tela possui o nome `Admin - Pedidos` no protótipo.

83. Todos os elementos devem respeitar os atributos descritos no protótipo para a tela de pedidos;

84. A rota da página deve ser `/admin/orders`;

85. Essa tela deve mostrar todos os pedidos feitos;

86. Os pedidos pendentes devem ter o label `Pendentes`, ao passo que os pedidos entregues devem ter o label `Entregue`;

87. Pedidos pendentes devem ser listados antes dos pedidos entregues

88. Os "cards" dos pedidos devem conter as informações:

    - Número do pedido;

    - Endereço para entrega;

    - Valor total do pedido.

89. Ao clicar em qualquer parte do card do pedido, a pessoa deve ser redirecionada para a tela `Admin - Detalhe de Pedido`.

### Tela de Detalhes de Pedido

Essa página corresponde às páginas `Admin - Detalhes de Pedido - Pendente` e `Admin - Detalhes de Pedido - Entregue` no protótipo.

90. Todos os elementos devem respeitar os atributos descritos no protótipo para a tela de detalhes do pedido;

91. A rota da página deve ser `/admin/orders/:id`;

92. No cabeçalho, mostre o `número do pedido` e o `status` atual - Pendente ou Entregue;

93. Deve ter uma listagem com os produtos do pedido, onde cada linha deve conter:

    - Quantidade;

    - Nome do produto;

    - Valor total do produto.

94. O `preço total` do produto é calculado usando **quantidade * preço unitário**;

95. Mostre também o `valor total do pedido`. O valor total do pedido é calculado a partir da **soma de todos os valores totais dos produtos**;

96. Caso o status do pedido seja **pendente**, um botão para marcar o pedido como entregue deve ser exibido. Caso contrário, não exiba o botão;

97. Ao clicar no botão `"Marcar pedido como entregue"`, o status desse pedido deve mudar para `Entregue` e o botão deve desaparecer.

### Bônus

98. Escreva testes unitários com cobertura de, no mínimo, 90%, considerando front-end e back-end;

---

## Instruções para entregar seu projeto:

### ANTES DE COMEÇAR A DESENVOLVER:

1. Clone o repositório

- `git clone git@github.com:tryber/trybeer-project.git`.
- Entre na pasta do repositório que você acabou de clonar:
  - `cd trybeer-project`

2. Instale as dependências do front-end e do back-end

- Instale as dependências do front-end e inicie o servidor
  - `cd front-end`
  - `npm install`
  - `npm start` (uma nova página deve abrir no seu navegador com um texto simples)
- Instale as dependências do back-end
  - `cd back-end`
  - `npm install`

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
    - `git commit -m 'iniciando o projeto'` (fazendo o primeiro commit)
    - `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

6. Adicione a sua branch com o novo `commit` ao repositório remoto

- Usando o exemplo anterior: `git push -u origin joaozinho-trybeer`

7. Crie um novo `Pull Request` _(PR)_

- Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/tryber/trybeer-project/pulls)
- Clique no botão verde _"New pull request"_
- Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
- Clique no botão verde _"Create pull request"_
- Adicione uma descrição para o _Pull Request_ e clique no botão verde _"Create pull request"_
- **Não se preocupe em preencher mais nada por enquanto!**
- Volte até a [página de _Pull Requests_ do repositório](https://github.com/tryber/trybeer-project/pulls) e confira que o seu _Pull Request_ está criado

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
