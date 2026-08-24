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
  oddDe: 'odd 13.50',
  oddPara: 'odd 102.7',

  /* ===== CAMPANHA ===== */
  ctaLabel: 'Quero esse bilhete',

  // Contagem regressiva. Desligada — hoje a página não mostra prazo nenhum.
  // Pra ligar, coloque o horário do primeiro jogo em ISO com fuso, ex:
  // '2026-08-26T18:00:00-03:00' — vira "sai do ar em HH:MM:SS" ao lado do selo.
  // Quando o prazo passa, a contagem some e o selo continua "disponível".
  // Deixe '' pra não mostrar contagem nenhuma.
  deadline: '',

  link: 'https://link.arenaaffiliates.com.br/X4FNK9Y',

  // Sem link de suporte nesta campanha: vazio remove o link do rodape.
  linkSuporte: '',

  /* ===== RODAPÉ ===== */
  termos: 'Proteção promocional independente da casa de apostas, exclusiva para contas novas criadas no mesmo dia através desta página e limitada a uma aposta por pessoa neste bilhete. Devolução via Pix em até 48h mediante comprovante de criação da conta no dia e print do bilhete redado. Apostas esportivas envolvem risco e não existe ganho garantido. Aposte apenas o que você pode perder.',

  // Repassa utm_* e fbclid pro link da casa.
  // O link atual é um encurtador limpo (sem query string), então anexar
  // '?utm_source=...' é seguro — não há cupom pra quebrar. Ligar isso faz
  // a origem do clique chegar na plataforma de afiliado.
  // Desligado só porque muda o comportamento do link: ligue quando quiser
  // fechar a atribuição.
  repassarParametros: false
};
