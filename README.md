# Como rodar o projeto

1- Instale o git na sua máquina (https://git-scm.com/downloads)

2- Instale o Node na sua máquina (https://nodejs.org/en/download/)

3- Abra o terminal, navegue até alguma pasta de sua escolha e execute os seguintes comandos:

- git clone https://github.com/PedroHBessa/SongFinder.git
- cd SongFinder
- npm install
- npm start

4- Abra o navegador e acesse http://localhost:3000

Obs: o número da porta pode ser diferente caso já esteja sendo usada.

# Como foi resolver o teste?

Primeiramente pensei em qual seria o objetivo principal da aplicação. Com isso
comecei a organizar as telas mentalmente para que o objetivo fosse cumprido da
forma mais direta e com o menor número de cliques possível.

Como a aplicação não é muito grande, criei apenas 4 componentes:

- Componente da barra de busca (SearchBar)
- Componente de exibição da lista de videos (Videos)
- Componente de execução de video e exibição de estatísticas (player)
- Componente helper para ajudar em algumas funcionalidades de estilo (GhostLayer)

Apesar do projeto ser baseado na api do Youtube, tentei fazer um layout um pouco diferente,
ao invés de deixar todos os componentes estáticos na tela, me baseei numa aplicação de
página única (SPA).

Utilizei o Axios para as requisições HTTP,
usei dois pacotes da api do Youtube: Search e Statistics.

# Link para ver o projeto live através do Heroku

https://song-finder-test.herokuapp.com/
