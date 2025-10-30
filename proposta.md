# Desafio: Pedra, Papel e Tesoura
## Visão Geral

O objetivo deste desafio é avaliar sua capacidade de construir uma aplicação interativa do zero, demonstrando proficiência em lógica JavaScript, manipulação de estado e design responsivo.

### O Jogo: Pedra, Papel e Tesoura (Rock, Paper, Scissors)
Desenvolva uma aplicação web que permita ao usuário jogar o clássico Pedra, Papel e Tesoura contra o computador.
#### Requisitos Funcionais Obrigatórios
1. **Interface de Escolha:** O usuário deve ter botões ou áreas clicáveis que representam as três opções: Pedra, Papel e Tesoura.
2. **Lógica do Computador:** A cada rodada, o computador deve gerar uma escolha aleatória.
3. **Determinação do Vencedor:** A aplicação deve implementar a lógica correta para determinar o vencedor de cada rodada:
    - Pedra ganha de Tesoura.
    - Tesoura ganha de Papel.
    - Papel ganha de Pedra.
    - Opções iguais resultam em empate.
4. **Feedback Visual:** A cada jogada, a aplicação deve exibir:
    - A escolha do Jogador.
    - A escolha do Computador.
    - O resultado da rodada (Vitória, Derrota ou Empate).
5. **Placar:** Manter e exibir um placar atualizado que registre o número de vitórias do Jogador e do Computador, e o total de Empates.
6. **Botão de Reiniciar**: Um botão/funcionalidade para zerar o placar e reiniciar o jogo.

### Requisitos Técnicos
1. **Tecnologia**: Utilize **React** para a lógica e o gerenciamento de estado.
2. **Estrutura**: O projeto deve ser bem organizado, com separação clara de responsabilidades (e.g., lógica de jogo separada da renderização da UI, se aplicável).
3. **Estilização e Responsividade:** A interface deve ser intuitiva e responsiva, funcionando bem em telas de desktop e mobile.

### Guia Visual (Wireframe Sugerido - NÃO OBRIGATÓRIO)
Fornecemos um **Guia Visual** para auxiliar na estruturação e disposição das informações do jogo (placar, escolhas, botões).
**Atenção:**
1. **O uso deste wireframe é estritamente opcional**. Ele serve apenas como um ponto de partida sugerido para a organização dos elementos na tela.
2. Sinta-se à vontade para criar seu **próprio layout**, cores e estilo, desde que o resultado final seja **claro, intuitivo e responsivo**.
3. A avaliação do CSS e da interface focará na **semântica do HTML**, na **organização do CSS** e na **responsividade**, independentemente do estilo escolhido.

**Entrega**
- Crie um repositório Git público (GitHub, GitLab, etc.).
- Inclua um arquivo *README.md* simples com instruções claras sobre como configurar e executar o projeto localmente (`npm install`, `npm start`, etc.).


### Tasks
[🔰] - Estrutura inicial
- Components: Header, main, footer
- Área do jogo: Jogador vs computer, botão de interação
- Placar do jogo: placar/resultado
    - Vitória
    - Derrota
    - Empate
      - Mensagem de retorno da vitória
- Botão de reiniciar a partida

[...]- Lógica e estado do jogo
- Definição de regras do jogo
  - Aplicar lógica de Vitória, Derrata e Empate
    - Pedra ganha de Tesoura.
    - Tesoura ganha de Papel.
    - Papel ganha de Pedra.
    - Opções iguais resultam em empate.
- Definição de escolha do jogador e do computador
  - Implementar a escolha do jogador
  - A escolha do computador tem que ser aleatória
