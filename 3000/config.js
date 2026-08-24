// ============================================================
//  LP "De R$ 30 pra R$ 3.000" — tela única, sem rolagem
//  Ângulo: multiplicador. NÃO fala em reembolso.
//  Único arquivo que você mexe por campanha.
// ============================================================
window.LP_CONFIG = {

  /* ===== ARTE (o miolo da página) ===== */
  // A arte carrega os bilhetes. Vertical, ideal 1080x1620 (2:3).
  // Evite 1080x1920: nessa caixa o 9:16 sobra barra preta nas laterais.
  arte: 'assets/arte-placeholder.svg',

  // 'contain' = arte inteira sempre visível (recomendado, os bilhetes não cortam)
  // 'cover'   = arte preenche a caixa toda, mas corta as bordas
  arteAjuste: 'contain',

  /* ===== SELO DO TOPO ===== */
  // Fica sempre aceso. Não vira "expirado" quando o prazo passa.
  selo: 'Bilhete disponível',

  /* ===== A PROMESSA (bate com o criativo) ===== */
  de: 'R$ 30',
  para: 'R$ 3.000',
  linha: 'Mesmo bilhete, mesmos jogos, mesmas linhas. Sua casa paga odd 10. Aqui tá odd 100.',

  /* ===== REFORÇO ABAIXO DO CTA ===== */
  // Sem promessa de reembolso nesta LP.
  rodape: '⚡ Bilhete já montado — é só abrir e apostar',

  /* ===== CAMPANHA ===== */
  ctaLabel: 'Pegar o bilhete',

  // Horário do primeiro jogo. Vira o "sai do ar em HH:MM:SS" ao lado do selo.
  // Quando o prazo passa, a contagem some e o selo continua "disponível".
  // Deixe '' pra não mostrar contagem nenhuma.
  deadline: '2026-08-23T16:00:00-03:00',

  link: 'https://record.betwarrioraffiliates.bet/_xW2WawVor-n-dmz6Y9QluGNd7ZgqdRLk/19/??coupon=combination|4292788997,4292789098,4293977048,4292758440,4292761151,4292755856|0|replace',

  // Suporte genérico. Deixe '' pra esconder o link.
  linkSuporte: 'https://t.me/suportecaumobot?start=6a871fc6f017077da5066e79',

  // Repassa utm_* e fbclid pro link da casa.
  // Desligado: o link tem '??coupon=' e anexar '&utm_...' precisa de um
  // teste rápido pra confirmar que o cupom continua carregando montado.
  repassarParametros: false
};
