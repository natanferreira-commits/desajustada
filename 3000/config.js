// ============================================================
//  LP "R$ 3.000 no seu bolso ou seu dinheiro de volta"
//  Tela única, sem rolagem. Ângulo: multiplicador + proteção.
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

  /* ===== HEADLINE =====
     Vira "<valor> no seu bolso ou seu dinheiro de volta".
     O valor sai em laranja e "dinheiro de volta" em verde. */
  valor: 'R$ 3.000',

  /* ===== COMPARAÇÃO DE ODD ===== */
  oddDe: 'odd 9',
  oddPara: 'odd 100',

  /* ===== CAMPANHA ===== */
  ctaLabel: 'Quero esse bilhete',

  // Horário do primeiro jogo. Vira o "sai do ar em HH:MM:SS" ao lado do selo.
  // Quando o prazo passa, a contagem some e o selo continua "disponível".
  // Deixe '' pra não mostrar contagem nenhuma.
  deadline: '2026-08-26T18:00:00-03:00',

  link: 'https://record.betwarrioraffiliates.bet/_xW2WawVor-n-dmz6Y9QluGNd7ZgqdRLk/19/??coupon=combination|4292788997,4292789098,4293977048,4292758440,4292761151,4292755856|0|replace',

  // Suporte / pedido de reembolso. Deixe '' pra esconder o link.
  linkSuporte: 'https://t.me/suportecaumobot?start=6a871fc6f017077da5066e79',

  /* ===== RODAPÉ ===== */
  termos: 'Proteção promocional independente da casa de apostas, exclusiva para contas novas criadas no mesmo dia através desta página e limitada a uma aposta por pessoa neste bilhete. Devolução via Pix em até 48h mediante comprovante de criação da conta no dia e print do bilhete redado. Apostas esportivas envolvem risco e não existe ganho garantido. Aposte apenas o que você pode perder.',

  // Repassa utm_* e fbclid pro link da casa.
  // Desligado: o link tem '??coupon=' e anexar '&utm_...' precisa de um
  // teste rápido pra confirmar que o cupom continua carregando montado.
  repassarParametros: false
};
