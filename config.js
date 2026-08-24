// ============================================================
//  CONFIG DA LP — único arquivo que você mexe por campanha
// ============================================================
window.LP_CONFIG = {

  /* ===== BANNER VERTICAL (topo) ===== */
  // Arte vertical 1080x1920 em /assets. Deixe '' pra esconder o banner.
  banner: 'assets/banner-placeholder.svg', // troque por 'assets/banner.jpg' quando a arte estiver pronta

  // Que parte da arte fica visível no recorte (o banner é cortado, não cabe inteiro).
  // 'topo' | 'centro' | 'baixo' — ou um valor CSS livre, ex: 'center 20%'
  bannerFoco: 'centro',

  // Altura do recorte em % da tela. 60 = ocupa 60% da primeira dobra.
  bannerAltura: 60,

  /* ===== CAMPANHA ===== */
  odd365: 7.43,                 // odd do bilhete na Bet365
  oddBetwarrior: 136.4,         // odd do MESMO bilhete na BetWarrior
  valorAposta: 10,              // valor protegido da aposta (R$)
  deadline: '2026-08-23T16:00:00-03:00', // horário do primeiro jogo

  // bilhete pronto BetWarrior (link de afiliado)
  link: 'https://record.betwarrioraffiliates.bet/_xW2WawVor-n-dmz6Y9QluGNd7ZgqdRLk/19/??coupon=combination|4292788997,4292789098,4293977048,4292758440,4292761151,4292755856|0|replace',

  // suporte p/ pedido de reembolso
  linkSuporte: 'https://t.me/suportecaumobot?start=6a871fc6f017077da5066e79'
};
