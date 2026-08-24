# LP Desajuste — "R$ 3.000 no seu bolso ou seu dinheiro de volta"

Landing de campanha em **tela única, sem rolagem**. Página estática:
`index.html` + `config.js` + `assets/`. Sem build, sem dependência.

A arte vertical é o miolo da página e carrega os bilhetes. Todo o resto
(selo, headline, comparação de odd, botão, rodapé) tem altura fixa, e a
arte absorve a sobra — por isso o botão nunca sai do campo de visão.

## Rodar

Abra `index.html` no navegador, ou sirva a pasta:

```
npx serve .
```

## Configurar uma campanha

Mexe só em `config.js`:

| campo | o que é |
| --- | --- |
| `arte` | arte vertical em `/assets`. **1080x1620 (2:3)** — evite 9:16, sobra barra nas laterais |
| `arteAjuste` | `contain` (arte inteira, recomendado) ou `cover` (preenche e corta as bordas) |
| `selo` | texto do selo verde do topo |
| `valor` | valor da headline. Vira "`valor` no seu bolso ou seu dinheiro de volta" |
| `oddDe` / `oddPara` | a comparação de odd |
| `ctaLabel` | texto do botão |
| `deadline` | horário do primeiro jogo, ISO com fuso. Vira o "sai do ar em HH:MM:SS" |
| `link` | bilhete pronto na casa (link de afiliado) |
| `linkSuporte` | destino do link de suporte no rodapé. `''` esconde |
| `termos` | texto de compliance do rodapé |
| `repassarParametros` | repassa `utm_*` e `fbclid` pro link da casa |

### Sobre o `deadline`

Quando o prazo passa, **a contagem some e o selo continua "disponível"**.
A página nunca diz que a pessoa chegou tarde — avisar isso a quem acabou
de clicar no anúncio é o jeito mais rápido de perder o clique.

O outro lado disso: depois que o prazo vira, a página segue convidando
pro clique. Não deixe no ar depois que o bilhete morrer.

### Sobre o `repassarParametros`

Está desligado por padrão. O link de afiliado tem `??coupon=` e anexar
`&utm_...` no fim precisa de um teste rápido pra confirmar que o cupom
continua carregando montado. Testado, é só ligar.

## Sem rolagem

Confirmado zero overflow em 320x568, 360x640 e 414x896.
Abaixo de 520px de altura (paisagem, teclado aberto) a página passa a
rolar de propósito — melhor rolar do que cortar o botão.

## Deploy

Vercel, projeto estático, sem framework. Root = raiz do repo.
