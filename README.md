# angular2025
Aplicação do curso angular pela udemy
https://vidafullstack.com.br/instrucoes-para-o-curso/
https://github.com/troquatte/curso-angular-latest

# Componentes
Cria um componente ng g component (nome do componenete)
vai criar uma pasta com o html, css, typescript e suas especs
pode ser criado dentro de uma pasta, colocando a pasta/nome componente

# Estilos CSS
Hierarquia para estilos do componente
- Primeiro do html dentro do componente
- Segundo do css do componente
- Terceiro do global

# Loop for para itens
utilizar o track em um loop fará com que, quando houver uma atualização em determinado item
o angular detecte qual item mudou para só atualizar aquele e não precisar apagar todos e subir novamente, casos assim quando o item é um objeto que tem um identificador por exemplo:

@for(item of loadingData$ | async; track item.id){}
o track item.id está identificando