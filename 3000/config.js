// ============================================================
//  LP "De R$ 30 pra R$ 3.000" — tela única, sem rolagem
//  Único arquivo que você mexe por campanha.
// ============================================================
window.LP_CONFIG = {

  /* ===== ARTE (o miolo da página) ===== */
  // A arte carrega os bilhetes. Vertical, ideal 1080x1920.
  arte: 'assets/arte-placeholder.svg',

  // 'contain' = arte inteira sempre visível (recomendado, os bilhetes não cortam)
  // 'cover'   = arte preenche a caixa toda, mas corta as bordas
  arteAjuste: 'contain',

  /* ===== A PROMESSA (bate com o criativo) ===== */
  de: 'R$ 30',
  para: 'R$ 3.000',
  linha: 'O mesmo bilhete que a sua casa paga odd 10. Aqui tá odd 100.',

  /* ===== PROTEÇÃO ===== */
  prazoReembolso: '48h',
  valorProtegido: 30,     // precisa bater com o "de" acima

  /* ===== CAMPANHA ===== */
  deadline: '2026-08-23T16:00:00-03:00',  // horário do primeiro jogo
  ctaLabel: 'Pegar o bilhete',

  link: 'https://record.betwarrioraffiliates.bet/_xW2WawVor-n-dmz6Y9QluGNd7ZgqdRLk/19/??coupon=combination|4292788997,4292789098,4293977048,4292758440,4292761151,4292755856|0|replace',
  linkSuporte: 'https://t.me/suportecaumobot?start=6a871fc6f017077da5066e79',

  // Repassa utm_* e fbclid pro link da casa.
  // Deixado desligado: o link tem '??coupon=' e anexar '&utm_...' precisa
  // de um teste rápido pra confirmar que o cupom continua carregando.
  repassarParametros: false
};
