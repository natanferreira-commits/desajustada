# LP Desajuste

Landing de campanha (bilhete com odd desajustada + proteção de R$ 10).
Página estática: `index.html` + `config.js` + `assets/`. Sem build.

## Rodar

Abra `index.html` no navegador, ou sirva a pasta:

```
npx serve .
```

## Configurar uma campanha

Mexe só em `config.js`:

| campo | o que é |
| --- | --- |
| `banner` | arte vertical do topo (1080x1920) em `/assets`. `''` esconde o bloco. |
| `bannerFoco` | qual fatia da arte aparece no recorte: `topo` \| `centro` \| `baixo` |
| `bannerAltura` | altura do recorte em % da tela (60 = 60% da primeira dobra) |
| `odd365` / `oddBetwarrior` | odds do mesmo bilhete nas duas casas |
| `valorAposta` | valor protegido (R$) |
| `deadline` | horário do primeiro jogo (ISO com fuso) |
| `link` | bilhete pronto na BetWarrior (link de afiliado) |
| `linkSuporte` | destino do botão de reembolso |

Os textos de ganho, multiplicador e simulação são calculados a partir desses valores.

## Assets

- `assets/banner.jpg` — arte do topo (não versionada ainda; hoje aponta pro placeholder)
- `assets/print-bet365.jpg` / `assets/print-betwarrior.jpg` — prints do comparativo.
  Se um print faltar, o bloco se esconde sozinho.

## Deploy

Vercel, projeto estático, sem framework. Root = raiz do repo.
