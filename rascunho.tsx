  // function robotTime(){
    //     const [playerMark, setPlayerMark] = useState([]);
    //     const [robotMark, setRobotMark] = useState([]);

    //     // Cada célula terá um índice, então, podemos sortear uma célula vazia
    //     const [emptyMark, setEmptyMark] = useState([]);

    //     // Da esquerda pra direita e de cima pra baixo, haverá um identificador
    //     // único e exclusivo pra cada célula do table.
    //     const [squareId, setSquareId] = useState(-1);

    //     // No loop abaixo, iremos percorrer cada linha e contabiliza a quantidade
    //     // de marcações realizadas pelo computador e pelo jogador humano.
    //     // Nos vetores, robotMark e playerMark, os índices
    //     // 0 a 2, corresponde às linhas 0 a 2 do table.
    //     const [index, setIndex] = useState(0)
    //     for (let linha = 0; linha < 3; linha++) {
    //         const [playerMarkAmout, setPlayerMarkAmout] = useState(0)
    //         const [robotMarkAmount, setRobotMarkAmount] = useState(0)

    //         for (let coluna = 0; coluna < 3; coluna++) {
    //             // Podemos obter o identificador de qualquer célula através da fórmula abaixo.
    //             setSquareId(3 * linha + coluna)

    //             if (table[linha][coluna] === 'x') {
    //                 setPlayerMarkAmout(playerMarkAmout + 1)
    //             }
    //             else if (table[linha][coluna] === 'o') {
    //                 setRobotMarkAmount(robotMarkAmount + 1);
    //             }
    //             else if (table[linha][coluna] === '') {
    //                 emptyMark.push([squareId]);
    //             }
    //         }

    //         // Armazena as marcações da linha atual.
    //         setRobotMark[index](robotMarkAmount);
    //         setPlayerMark[index](playerMarkAmout)
    //         setIndex(index + 1);
    //     }

    //     // No loop abaixo, iremos percorrer cada coluna e contabiliza a quantidade
    //     // de marcações realizadas pelo computador e pelo jogador humano.
    //     // Nos vetores, robotMark e playerMark, os índices
    //     // 3, 4 e 5, corresponde às colunas 0, 1 e 2 do table.
    //     for (let coluna = 0; coluna < 3; coluna++) {
    //         const [playerMarkAmout, setPlayerMarkAmout] = useState(0)
    //         const [robotMarkAmount, setRobotMarkAmount] = useState(0)

    //         for (let linha = 0; linha < 3; linha++) {

    //             if (table[linha][coluna] === 'x') {
    //                 setPlayerMarkAmout(playerMarkAmout + 1)
    //             } else if (table[linha][coluna] === 'o') {
    //                 setRobotMarkAmount(+robotMarkAmount)
    //             } else if (table[linha][coluna] === '') {
    //                 // Observe que ao analisar linha e coluna, uma linha
    //                 // é composta de colunas e uma coluna é composta de linhas
    //                 // então pode acontecer do id da célula se repetir, devemos
    //                 // evitar incluir o mesmo id duas vezes.
    //                 setSquareId(3 * linha + coluna)
    //                 if (emptyMark.includes([squareId]) === false) {
    //                     emptyMark.push([squareId]);
    //                 }
    //             }
    //         }

    //         setRobotMark[index](robotMarkAmount);
    //         setPlayerMark[index](playerMarkAmout)
    //         setIndex(+index)
    //     }

    //     // Verifica a diagonal superior esquerda a direita inferior direita.
    //     const [playerMarkAmout, setPlayerMarkAmout] = useState(0)
    //     const [robotMarkAmount, setRobotMarkAmount] = useState(0)
    //     setRobotMark[index](0)
    //     setPlayerMark[index](0)

    //     setSquareId(0);
    //     for (let linha_coluna = 0; linha_coluna < 3; linha_coluna++) {

    //         if (table[linha_coluna][linha_coluna] === 'x') {
    //             setPlayerMarkAmout(+playerMarkAmout);
    //         } else if (table[linha_coluna][linha_coluna] === 'o') {
    //             setRobotMarkAmount(+robotMarkAmount);
    //         } else if (table[linha_coluna][linha_coluna] === '') {
    //             // Observe que ao analisar linha e coluna, uma linha
    //             // é composta de colunas e uma coluna é composta de linhas
    //             // então pode acontecer do id da célula se repetir, devemos
    //             // evitar isto.
    //             setSquareId(3 * linha_coluna + linha_coluna)
    //             if (emptyMark.includes([squareId]) === false) {
    //                 emptyMark.push([squareId]);
    //             }
    //         }
    //     }

    //     setRobotMark[index](robotMarkAmount);
    //     setPlayerMark[index](playerMarkAmout)

    //     setIndex(+index)
    //     setRobotMark[index](0)
    //     setPlayerMark[index](0)

    //     setRobotMarkAmount(0)
    //     setPlayerMarkAmout(0)

    //     // Verifica diagonal superior direita a inferior esquerda.
    //     let coluna = 2;
    //     for (let linha = 0; linha < 3; linha++) {
    //         if (table[linha][coluna] === 'x') {
    //             setPlayerMarkAmout(+playerMarkAmout)
    //         } else if (table[linha][coluna] === 'o') {
    //             setRobotMarkAmount(+robotMarkAmount)
    //         } else if (table[linha][coluna] === '') {
    //             // Observe que ao analisar linha e coluna, uma linha
    //             // é composta de colunas e uma coluna é composta de linhas
    //             // então pode acontecer do id da célula se repetir, devemos
    //             // evitar isto.
    //             setSquareId(3 * linha + coluna)
    //             if (emptyMark.includes([squareId]) === false) {
    //                 emptyMark.push([squareId]);
    //             }
    //         }

    //         // Iremos do canto superior direito pra o canto inferior esquerdo.
    //         // Então, iremos começar da maior coluna e ir diminuindo até chegar
    //         // a zero.
    //         coluna--;
    //     }

    //     robotMark[index] = robotMarkAmount;
    //     playerMark[index] = playerMarkAmout;

    //     const [toBeMarked, setToBeMarked] = useState(-1)
    //     for (let index = 0; index < 8; index++) {
    //         if (robotMark[index] === 2 && playerMark[index] === 0) {
    //             setToBeMarked(index)
    //             break;
    //         }

    //     }

    //     // Só iremos analisar as jogadas do jogador, se o computador não pode
    //     // ganhar na vez dele, então, tentar impedir a vitória do jogador humano.
    //     if (toBeMarked === -1) {
    //         for (let index = 0; index < 8; index++) {
    //             if (playerMark[index] === 2 && robotMark[index] === 0) {
    //                 setToBeMarked(index)
    //                 break;
    //             }
    //         }
    //     }

    //     // toBeMarked corresponde a posição dentro do vetor, precisamos
    //     // identificar a qual linha, coluna ou diagonal, o índice corresponde,
    //     // então, no switch abaixo, é feita esta conversão.
    //     if (toBeMarked !== -1) {
    //         switch (toBeMarked) {
    //             // Linha.
    //             case 0: case 1: case 2: {
    //                 let linha = toBeMarked;
    //                 for (let coluna = 0; coluna < 3; coluna++) {
    //                     if (table[linha][coluna] === '') {
    //                         table[linha][coluna] = 'o';
    //                         break;
    //                     }
    //                 }
    //             }
    //                 break;
    //             // Coluna:
    //             case 3: case 4: case 5: {
    //                 coluna = toBeMarked % 3;
    //                 for (let linha = 0; linha < 3; linha++) {
    //                     if (table[linha][coluna] === '') {
    //                         table[linha][coluna] = 'o';
    //                         break;
    //                     }
    //                 }
    //             }
    //                 break;
    //             // Diagonal superior esquerda a diagonal inferior direita.
    //             case 6: {
    //                 for (let linha_coluna = 0; linha_coluna < 3; linha_coluna++) {
    //                     if (table[linha_coluna][linha_coluna] === '') {
    //                         table[linha_coluna][linha_coluna] = 'o';
    //                         break;
    //                     }
    //                 }
    //             }
    //                 break;
    //             // Diagonal superior direita a diagonal inferior esquerda.
    //             case 7: {
    //                 let coluna = 2;
    //                 for (let linha = 0; linha < 3; linha++) {
    //                     if (table[linha][coluna] === '') {
    //                         table[linha][coluna] = 'o';
    //                         break;
    //                     }
    //                     coluna--;
    //                 }
    //             }
    //                 break;
    //         }
    //     }
    //     else {
    //         // Só iremos atribuir a table se houver emptyMark.
    //         if (emptyMark.length > 0) {
    //             // Então, devemos escolher uma célula vazia aleatoriamente.
    //             let indice_aleatorio = Math.random() * emptyMark.length;
    //             indice_aleatorio = Math.trunc(indice_aleatorio);

    //             setSquareId(emptyMark[indice_aleatorio])
    //             setEmptyMark(emptyMark.splice(squareId, 1))

    //             // Obter linha e coluna.
    //             const indice_linha = Math.trunc(squareId / 3);
    //             const indice_coluna = squareId % 3;

    //             table[indice_linha][indice_coluna] = 'o';
    //         }
    //     }

    //     // Atualiza pra aparecer na tela.
    // }
    

    
  //   function checkMark(mark){
  //     // Contabiliza a quantidade de células não-vazias.
  //     let qt_celulas_nao_vazias = 0;

  //     // Verificar linhas.
  //     for (let linha = 0; linha < 3; linha++) {
  //         // No loop abaixo, percorre todas as colunas da linha atual.
  //         let qt_marcacoes = 0;
  //         for (let coluna = 0; coluna < 3; coluna++) {
  //             let celula_atual = table[linha][coluna];

  //             if (celula_atual === mark) {
  //                 qt_marcacoes++;
  //             }

  //             if (celula_atual !== '') {
  //                 qt_celulas_nao_vazias++;
  //             }

  //         }

  //         // Se há três células marcadas do mesmo jogador, então, define-o
  //         // vencedor.
  //         if (qt_marcacoes === 3) {
  //             setWinner(mark)

  //             return;
  //         }
  //     }

  //     // Verificar as colunas.
  //     //qt_celulas_nao_vazias = 0;
  //     for (let coluna = 0; coluna < 3; coluna++) {
  //         // No loop abaixo, percorre todas as colunas da linha atual.
  //         let qt_marcacoes = 0;
  //         for (let linha = 0; linha < 3; linha++) {
  //             let celula_atual = table[linha][coluna];

  //             if (celula_atual === mark) {
  //                 qt_marcacoes++;
  //             }

  //         }

  //         // Se há três células marcadas do mesmo jogador, então, define-o
  //         // vencedor.
  //         if (qt_marcacoes === 3) {
  //             setWinner(mark)

  //             return;
  //         }
  //     }

  //     // Verificar Diagonal Superior Esquerda a Diagonal Inferior Direita.
  //     let qt_marcacoes = 0;
  //     for (let linha_coluna = 0; linha_coluna < 3; linha_coluna++) {
  //         let celula_atual = table[linha_coluna][linha_coluna];
  //         if (celula_atual === mark) {
  //             qt_marcacoes++;
  //         }
  //     }

  //     // Se há três células marcadas do mesmo jogador, então, define-o
  //     // vencedor.
  //     if (qt_marcacoes === 3) {
  //         setWinner(mark)
  //         return;
  //     }

  //     // Verificar Diagonal superior direita até diagonal inferior esquerda.
  //     qt_marcacoes = 0;
  //     let coluna = 2;
  //     for (let linha = 0; linha < 3; linha++) {
  //         let celula_atual = table[linha][coluna];

  //         if (celula_atual === mark) {
  //             qt_marcacoes++;
  //         }

  //         coluna--;
  //     }

  //     // Se há três células marcadas do mesmo jogador, então, define-o
  //     // vencedor.
  //     if (qt_marcacoes === 3) {
  //         setWinner(mark)
  //         return;
  //     }

  //     // Se chegarmos aqui, iremos verificar se todas as células foram preenchidas.
  //     if (qt_celulas_nao_vazias === 9) {
  //         setWinner("")
  //         setEmpate("sim")
  //     }
  // }



  
