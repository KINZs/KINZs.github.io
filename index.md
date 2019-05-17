---
layout: default
---
## O quê é XP Mod?

XP Mod é um complemento para o HideNSeek.<br>
Os jogadores ganham pontos de XP por quão bem eles jogam.<br><br>

## Primeira vez jogando?

Ao jogar pela primeira vez, você recebe 1000 de XP!<br>
Você ganha XP baseado na sua jogabilidade, e poderá comprar mais upgrades nos menus.<br>
[Veja as regras](#regras)

### Comandos
``` sourcepawn
!xp, !cm, !mm, !store Abre o menu principal do XP Mod
!hide Esconde / Mostra o rastro dos jogadores
```
## Modos de jogo

* ### Com Bloco
Mapas onde são criados "spots" que utilizam blocos com diversas finalidades. Ex: Ganhar arma; recuperar vida; escorregar.<br>

* ### No Block
O `noblock` é basicamente o HideNSeek clássico ou CHASEMOD.<br>
Nesse modo todos os UPGRADES são desativados para não desbalancear o jogo.<br>

Os terroristas receberão:
* 2 Flashbangs com (100% de chance)
* 1 Frost Nade com (100% de chance)

### O quê muda no No Block?

| Habilidades disponíveis | TR's | CT's |
|:----------------|:----------------|:----------------|
| 20% Redução no dano de queda | ✓ | ✓ |
| Regeneração de vida | ✕ | ✓ |
| Imune a facadas por 3 segundos | ✓ | ✕ |

##### Como jogo no noblock?
Você precisa votar em um mapa que termine com sufixo `noblock`, por exemplo: hns_devblocks_v4`_noblock`<br>

* * *

## Como ganho XP?

| Em Mapas | Com Bloco | No Block |
|:----------------|:----------------|:----------------|
| Ações | XP | XP |
| Matar | +65 XP | +45 XP |
| Matar com `HE` | +20 XP | 0 XP |
| Matar de `HS` | +50 XP | 0 XP |
| Suicídio | -25 XP | -35 XP |
| Sobreviver de TR | +10 XP | +60 XP |
| Ganhar o Round | +15 XP | +50 XP |
| Jogar no servidor | +5 XP | +10 XP |

Com esses pontos de XP, você pode comprar upgrades. <br>
Para obter a lista desses upgrades, digite !xp e visualize os outros menus.

* * *

## Menus
[VIP's](#donate)*<br>
[Granadas](#granadas)*<br>
[Vida Extra](#vida-extra)*<br>
[Colete Extra](#colete-extra)*<br>
[Respawn](#respawn)*<br>
[Dano de queda](#dano-de-queda)*<br>

## Granadas

> A habilidade Granadas no XP Mod é apenas para terroristas.<br>
> A habilidade Granadas contém HE Grenade, 2 Flashbangs e Frost Nade.<br>
> Estas são as `Granadas` que você receberá no começo de cada round.

| | HE Grenade | Flashbang #1 | Flashbang #2 | Frost Nade |
|:-------------|:-------------|:------------------|:-------------|:------------------|
| Intervalos de chance | 12.5% | 25% | 25% | 25% |
| Nível máximo | 8 | 4 | 4 | 4 |
| Chance máxima | 100% | 100% | 100% | 100% |

## Vida Extra

> A habilidade `Vida Extra` é a quantidade de `Vida` a mais que você receberá em cada round.

| Para | Terrorista | CT's |
|:-------------|:-------------|:------------------|
| Intervalos de vida | 10 HP | 10 HP |
| Nível máximo | 10 | 5 |
| Vida máxima | 200 HP | 150 HP |

## Colete Extra

> A habilidade `Colete Extra` é a quantidade de `Colete` a mais que você receberá.

| Para | Terrorista | CT's |
|:-------------|:-------------|:------------------|
| Intervalos de colete | 25 AP | 25 AP |
| Nível máximo | 8 | 6 |
| Colete máximo | 200 AP | 150 AP |

### Por que comprar colete?
> Colete é um item importantíssimo para os CT's, pois oferece a capacidade de se proteger de granadas e amenizar o dano de tiros.

## Respawn

> A habilidade `Respawn` é chance de reviver após morrer.

| Para | Terrorista | CT's |
|:-------------|:-------------|:------------------|
| Intervalos de chance | 15% | 25% |
| Nível máximo | 3 | 4 |
| Chance máxima | 45% | 100% |

## Dano de queda

> A habilidade `Dano de queda` reduz a quantidade de dano causado pela queda.
> A Porcentagem do seu nivel é quantos porcento seu dano será reduzido quando você tomar dano causado pela queda.

| Para | Terrorista | CT's |
|:-------------|:-------------|:------------------|
| Intervalos de redução | 10% | 10% |
| Nível máximo | 8 | 8 |
| Redução máxima | 80% | 80% |

* * *

# Regras
Pode fazer tudo nesse servidor, EXCETO:

### Com Bloco
- CT fazer spot onde não há TR (FunJump)
- Falar onde o adversário esta
- Ficar dentro de um teleporte para travar outro jogador de propósito

### No Block
- Falar onde o adversário esta
- Ficar camperando de TR.
- Ficar FJ (FunJump) de CT.

#### Donate
* [Steam Trade Offer](https://steamcommunity.com/tradeoffer/new/?partner=86976147&token=P6xfDcHF)

#### CHANGE LOG:

### UPDATE NO JUMPSTATS v1.0.5
``` sourcepawn 
Consertei alguns bugs.
Adicionei um block para a bind +klook
Adicionei um detector para a null bind ainda está em beta (ainda não tera penalidade).

Adicionei o Failstats no LJ Block

Adicionei a direção do pulo (bw) costas, (sw) lado.

Adicionei nos LONGJUMPS o pulo perfect em azul

```

### 1.7.5
``` sourcepawn 
BUG FIX: consertei um bug que estava mostrando a porcentagem do proximo nível, Exemplo:

Passando de:
HE Grenade: Nível 7/8 (100%) [25600 XP]
Para:
HE Grenade: Nível 7/8 (87%) [25600 XP]

* Nome dos menus 
`Menu VIP` > `VIP's` 
`Menu de Granadas` > `Granadas`
`Menu de Vida Extra` > `Vida extra`
`Menu de Colete Extra` > `Colete extra`
`Menu de Respawn` > `Respawn`
`Menu de Dano de queda` > `Dano de queda`
```

### 1.7.4
``` sourcepawn 
+ Player Skins (models) para os jogadores
+ Rastros (trais) para os jogadores
```

### [Todos Updates](https://kinzs.github.io/updates)<br>

* * * 
#### TO-DO
``` sourcepawn
+ Adicionar
- Remover
* Modificar

Arrumar o bug das granadas!

+ Site para vender VIP por skins de CS:GO.

+ Fazer !rank e um !top10 para recompensar os melhores jogadores com XP EXTRA!
+ Fazer com que players que não possuam vip possam comprar `Skins e Rastros` com XP

+ new g_xptotal[ MAXPLAYERS + 1 ]; (TOP 10)
+ new g_pFirstPlayed[ MAXPLAYERS + 1 ]; (site)
+ new g_pLastSeen[ MAXPLAYERS + 1 ]; (site)
+ new g_pTotalTimePlayed[ MAXPLAYERS + 1 ]; (site)

:TALVEZ:
+ Menu de Habilidade
+ Anti-Flash ( % por flash tacada )
+ Dano Extra

* Como estou salvando o xp
```
