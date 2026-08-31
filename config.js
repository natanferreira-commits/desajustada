// ============================================================
//  LP "R$ 3.000 no seu bolso ou seu dinheiro de volta"
//  Tela única, sem rolagem. Ângulo: multiplicador + proteção.
//  Único arquivo que você mexe por campanha.
// ============================================================
window.LP_CONFIG = {

  /* ===== ARTE (o miolo da página) ===== */
  // Arte vertical 1080x1920. Ela aparece inteira, sem corte lateral.
  // O conteudo dela (fita, rosto, bilhetes) precisa terminar ate ~60%
  // da altura: abaixo disso mora o texto da pagina.
  arte: 'assets/arte-100.webp',

  // 'contain' = arte inteira sempre visível (recomendado, os bilhetes não cortam)
  // 'cover'   = arte preenche a caixa toda, mas corta as bordas
  arteAjuste: 'contain',

  // Enquadramento vertical da arte de fundo. Menor puxa a imagem pra
  // cima, maior puxa pra baixo. Ex: '30%', '42%', '55%'.
  arteFoco: '0%',

  // Quanto puxar a arte pra cima, em % da altura da tela. Sobe os
  // bilhetes pra eles nao ficarem atras da headline. 0 desliga.
  arteSubir: '5.5%',

  /* ===== ABA DO NAVEGADOR =====
     Título que aparece na aba e quando o link é compartilhado.
     Sem valor em dinheiro aqui de propósito: o que fica exposto é
     a aba do celular de quem abriu, não a oferta. */
  tituloAba: 'Bilhete do dia',

  /* ===== SELO DO TOPO ===== */
  // Fica sempre aceso. Não vira "expirado" quando o prazo passa.
  selo: '',

  /* ===== HEADLINE =====
     O trecho entre *asteriscos* sai em laranja.
     Use \n (barra + n) pra quebrar a linha.
     Esta campanha NÃO tem reembolso: nada de "dinheiro de volta" aqui. */
  headline: 'De R$ 10 pra\n*R$ 1.000*',

  /* ===== COMPARAÇÃO DE ODD ===== */
  oddDe: 'odd 10.59',
  oddPara: 'odd 139.8',

  /* ===== CAMPANHA ===== */
  ctaLabel: 'Quero esse bilhete',

  // Contagem regressiva. Desligada — hoje a página não mostra prazo nenhum.
  // Pra ligar, coloque o horário do primeiro jogo em ISO com fuso, ex:
  // '2026-08-26T18:00:00-03:00' — vira "sai do ar em HH:MM:SS" ao lado do selo.
  // Quando o prazo passa, a contagem some e o selo continua "disponível".
  // Deixe '' pra não mostrar contagem nenhuma.
  deadline: '',

  // Link de tracking da BetWarrior com o cupom da combinada montado.
  // O trecho depois de 'coupon=' carrega as 6 seleções do bilhete: mexer
  // nele troca a aposta que abre no app da casa.
  link: 'https://record.betwarrioraffiliates.bet/_xW2WawVor-lrEWHH-KemJWNd7ZgqdRLk/16/??coupon=combination|4305177706,4305177534,4305160228,4305224442,4305227257,4305224360,4305719582,4305719695,4305719588|0|replace',

  // Sem link de suporte nesta campanha: vazio remove o link do rodape.
  linkSuporte: '',

  /* ===== RODAPÉ ===== */
  // Sem menção a reembolso: esta campanha não tem devolução.
  termos: 'Apostas esportivas envolvem risco e não existe ganho garantido. As odds podem mudar ou sair do ar a qualquer momento. Aposte apenas o que você pode perder. Conteúdo destinado a maiores de 18 anos. Este site não faz parte do Facebook Inc. nem é endossado pelo Facebook de nenhuma maneira.',

  // Repassa utm_* e fbclid pro link da casa.
  // ATENÇÃO: o link agora tem query string (o cupom da combinada). Se
  // ligar isso, o código anexa '&utm_source=...' no fim, depois do
  // 'coupon='. Testa o link resultante numa aba antes de deixar ligado:
  // se a casa não gostar do parâmetro extra, o bilhete abre vazio.
  repassarParametros: false
};
