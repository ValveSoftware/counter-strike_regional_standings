### Roster Details<br />
Team Name: WW<br />
Roster: ct0m, deko, kelieN, m3wsu, StRoGo<br />
Global Rank: [88](../../standings_global_2026_07_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_07_06.md)<br />
Regional Rank: [62]( ../../standings_europe_2026_07_06.md)<br />
<br />
Final Rank Value:  1019.0<br />
<br />
Final Rank Value (1019.0) = Starting Rank Value (1047.4) + Head To Head Adjustments (-28.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.356[<sup>1</sup>](#table2)
- Bounty Collected: 0.357[<sup>2</sup>](#table1)
- Opponent Network: 0.194[<sup>2</sup>](#table1)
- LAN Wins: 0.467[<sup>2</sup>](#table1)

The average of these factors is 0.344<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1047.4
- 400 + ( ( 0.344 - 0.000 ) / ( 0.849 - 0.000 ) ) * 1600 = 1047.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           68 |      210 | 2026-06-19 | CYBERSHOKE        | L   | 1.000      | -            | -                | -                | -         |   -13.43 | ct0m, kelieN, KENSI, m3wsu, tried    |
|           67 |      666 | 2026-05-30 | Gentle Mates      | L   | 0.954      | -            | -                | -                | -         |    -5.74 | ct0m, deko, kelieN, m3wsu, StRoGo    |
|           66 |      685 | 2026-05-30 | Johnny Speeds     | W   | 0.953      | 0.384        | 0.048 (0.018)    | 0.773 (0.283)    | -         |    17.53 | ct0m, deko, kelieN, m3wsu, StRoGo    |
|           65 |      717 | 2026-05-29 | Nemiga            | W   | 0.946      | 0.384        | 0.111 (0.040)    | 0.774 (0.282)    | -         |    23.08 | ct0m, deko, kelieN, m3wsu, StRoGo    |
|           64 |      749 | 2026-05-28 | ex-RUBY           | W   | 0.941      | 0.384        | 0.037 (0.013)    | 1.000 (0.362)    | -         |    17.80 | ct0m, deko, kelieN, m3wsu, StRoGo    |
|           63 |      863 | 2026-05-25 | PsychoFace        | L   | 0.922      | -            | -                | -                | -         |   -15.57 | ct0m, deko, kelieN, m3wsu, StRoGo    |
|           62 |      864 | 2026-05-25 | K27               | L   | 0.921      | -            | -                | -                | -         |    -5.90 | ct0m, deko, kelieN, m3wsu, StRoGo    |
|           61 |      873 | 2026-05-25 | Tricksters        | W   | 0.921      | -            | -                | -                | 1 (0.921) |     0.97 | ct0m, deko, kelieN, m3wsu, StRoGo    |
|           60 |     2744 | 2026-04-02 | ACROBATS          | L   | 0.566      | -            | -                | -                | -         |   -16.33 | ct0m, deko, kelieN, m3wsu, StRoGo    |
|           59 |     2852 | 2026-04-01 | illwill           | W   | 0.559      | 0.769        | 0.019 (0.008)    | -                | -         |     6.58 | ct0m, deko, kelieN, m3wsu, StRoGo    |
|           58 |     2863 | 2026-04-01 | Bebop             | L   | 0.558      | -            | -                | -                | -         |   -12.94 | ct0m, deko, kelieN, m3wsu, StRoGo    |
|           57 |     2935 | 2026-03-31 | K27               | L   | 0.553      | -            | -                | -                | -         |    -3.55 | ct0m, deko, kelieN, m3wsu, StRoGo    |
|           56 |     3175 | 2026-03-28 | megoshort         | L   | 0.533      | -            | -                | -                | -         |   -13.75 | ct0m, deko, kelieN, m3wsu, StRoGo    |
|           55 |     3288 | 2026-03-25 | Endless Journey   | W   | 0.515      | -            | -                | -                | -         |     2.25 | ct0m, deko, kelieN, m3wsu, StRoGo    |
|           54 |     3298 | 2026-03-25 | SPARTA            | W   | 0.514      | 0.624        | 0.027 (0.009)    | 0.768 (0.247)    | -         |     9.09 | ct0m, deko, kelieN, m3wsu, StRoGo    |
|           53 |     3919 | 2026-03-13 | Nemesis           | L   | 0.434      | -            | -                | -                | -         |    -4.67 | ct0m, deko, kelieN, m3wsu, StRoGo    |
|           52 |     3955 | 2026-03-12 | K27               | L   | 0.428      | -            | -                | -                | -         |    -3.14 | ct0m, deko, kelieN, m3wsu, StRoGo    |
|           51 |     3975 | 2026-03-12 | Nemiga            | W   | 0.427      | 0.371        | 0.111 (0.018)    | 0.774 (0.122)    | 1 (0.427) |     8.97 | ct0m, deko, kelieN, m3wsu, StRoGo    |
|           50 |     4018 | 2026-03-11 | Nuclear TigeRES   | W   | 0.420      | 0.371        | 0.078 (0.012)    | 0.799 (0.124)    | 1 (0.420) |     9.73 | ct0m, deko, kelieN, m3wsu, StRoGo    |
|           49 |     4052 | 2026-03-10 | los kogutos       | W   | 0.414      | 0.384        | -                | 0.945 (0.150)    | -         |     4.75 | ct0m, deko, kelieN, m3wsu, StRoGo    |
|           48 |     4094 | 2026-03-09 | K27               | W   | 0.408      | 0.371        | 0.084 (0.013)    | -                | 1 (0.408) |    10.21 | ct0m, deko, kelieN, m3wsu, StRoGo    |
|           47 |     4110 | 2026-03-09 | Arch              | W   | 0.407      | -            | -                | -                | 1 (0.407) |     1.54 | ct0m, deko, kelieN, m3wsu, StRoGo    |
|           46 |     4203 | 2026-03-08 | Fuzos             | W   | 0.400      | -            | -                | -                | -         |     1.91 | deko, kelieN, m3wsu, StRoGo, tried   |
|           45 |     4263 | 2026-03-06 | ARCRED            | L   | 0.389      | -            | -                | -                | -         |    -4.20 | ct0m, deko, kelieN, m3wsu, StRoGo    |
|           44 |     4265 | 2026-03-06 | Clutchain fe      | W   | 0.388      | -            | -                | -                | -         |     1.85 | ct0m, deko, kelieN, m3wsu, StRoGo    |
|           43 |     4268 | 2026-03-06 | SPARTA            | W   | 0.388      | -            | -                | -                | 1 (0.388) |     7.99 | ct0m, deko, kelieN, m3wsu, StRoGo    |
|           42 |     4281 | 2026-03-06 | ARCRED            | L   | 0.387      | -            | -                | -                | -         |    -4.16 | ct0m, deko, kelieN, m3wsu, StRoGo    |
|           41 |     4297 | 2026-03-06 | Eternal Fire      | L   | 0.385      | -            | -                | -                | -         |    -5.11 | ct0m, deko, kelieN, m3wsu, StRoGo    |
|           40 |     4302 | 2026-03-05 | Virtus.pro        | W   | 0.383      | -            | -                | -                | 1 (0.383) |     9.38 | ct0m, deko, kelieN, m3wsu, StRoGo    |
|           39 |     4328 | 2026-03-05 | TDK               | W   | 0.381      | 0.333        | 0.057 (0.007)    | 0.956 (0.121)    | 1 (0.381) |     8.71 | ct0m, deko, kelieN, m3wsu, StRoGo    |
|           38 |     4371 | 2026-03-04 | HEROIC Academy    | L   | 0.374      | -            | -                | -                | -         |    -8.47 | ct0m, kelieN, m3wsu, StRoGo, tried   |
|           37 |     4413 | 2026-03-03 | premghouls        | W   | 0.369      | -            | -                | -                | 1 (0.369) |     0.76 | ct0m, deko, kelieN, m3wsu, StRoGo    |
|           36 |     4420 | 2026-03-03 | G2 Ares           | L   | 0.368      | -            | -                | -                | -         |    -6.36 | ct0m, degster, kelieN, m3wsu, StRoGo |
|           35 |     4436 | 2026-03-03 | Nemiga            | L   | 0.367      | -            | -                | -                | -         |    -3.50 | ct0m, deko, kelieN, m3wsu, StRoGo    |
|           34 |     4447 | 2026-03-03 | B52               | W   | 0.366      | -            | -                | -                | 1 (0.366) |     0.38 | ct0m, deko, kelieN, m3wsu, StRoGo    |
|           33 |     4449 | 2026-03-03 | ex-Zero Tenacity  | L   | 0.366      | -            | -                | -                | -         |    -8.76 | ct0m, kelieN, m3wsu, StRoGo, tried   |
|           32 |     4455 | 2026-03-03 | Fuzos             | W   | 0.365      | -            | -                | -                | -         |     1.67 | ct0m, deko, kelieN, m3wsu, StRoGo    |
|           31 |     4471 | 2026-03-02 | SPARTA            | W   | 0.361      | -            | -                | -                | -         |     0.71 | ct0m, deko, KENSI, StRoGo, tried     |
|           30 |     4481 | 2026-03-02 | ECSTATIC          | L   | 0.360      | -            | -                | -                | -         |    -6.20 | ct0m, kelieN, m3wsu, StRoGo, tried   |
|           29 |     4495 | 2026-03-02 | Oxuji             | L   | 0.359      | -            | -                | -                | -         |    -3.42 | ct0m, kelieN, m3wsu, StRoGo, tried   |
|           28 |     4534 | 2026-03-01 | ENCE              | L   | 0.352      | -            | -                | -                | -         |    -8.89 | ct0m, kelieN, m3wsu, StRoGo, tried   |
|           27 |     4559 | 2026-02-28 | UNiTY             | L   | 0.347      | -            | -                | -                | -         |    -8.78 | ct0m, kelieN, m3wsu, StRoGo, tried   |
|           26 |     4568 | 2026-02-28 | KOLESIE           | L   | 0.347      | -            | -                | -                | -         |    -8.57 | ct0m, deko, kelieN, m3wsu, StRoGo    |
|           25 |     4595 | 2026-02-27 | Leo               | W   | 0.341      | -            | -                | -                | -         |     1.75 | ct0m, kelieN, m3wsu, StRoGo, tried   |
|           24 |     4612 | 2026-02-27 | Leo               | W   | 0.340      | -            | -                | -                | -         |     1.77 | ct0m, deko, kelieN, m3wsu, StRoGo    |
|           23 |     4656 | 2026-02-26 | SINNERS           | L   | 0.335      | -            | -                | -                | -         |    -2.81 | ct0m, deko, kelieN, m3wsu, tried     |
|           22 |     4720 | 2026-02-25 | Nemesis           | W   | 0.327      | 0.435        | 0.138 (0.020)    | 0.876 (0.125)    | -         |     6.39 | ct0m, deko, kelieN, m3wsu, tried     |
|           21 |     4761 | 2026-02-24 | Lazer Cats        | W   | 0.320      | -            | -                | -                | -         |     1.91 | ct0m, deko, kelieN, m3wsu, StRoGo    |
|           20 |     4778 | 2026-02-24 | Hashiras          | W   | 0.320      | -            | -                | -                | -         |     1.72 | ct0m, deko, kelieN, m3wsu, tried     |
|           19 |     4817 | 2026-02-23 | ex-RUBY           | L   | 0.313      | -            | -                | -                | -         |    -6.33 | ct0m, deko, kelieN, m3wsu, tried     |
|           18 |     4951 | 2026-02-21 | SPARTA            | W   | 0.299      | -            | -                | -                | -         |     0.47 | ct0m, deko, kelieN, m3wsu, tried     |
|           17 |     4970 | 2026-02-20 | ex-RUBY           | W   | 0.295      | 0.435        | -                | 1.000 (0.128)    | -         |     3.52 | ct0m, deko, kelieN, m3wsu, tried     |
|           16 |     5009 | 2026-02-20 | cirahvi           | W   | 0.292      | -            | -                | -                | -         |     1.38 | ct0m, deko, kelieN, m3wsu, tried     |
|           15 |     5031 | 2026-02-19 | home              | W   | 0.288      | -            | -                | -                | -         |     0.48 | ct0m, deko, kelieN, m3wsu, tried     |
|           14 |     5112 | 2026-02-18 | Omega             | W   | 0.278      | -            | -                | -                | -         |     5.29 | ct0m, deko, kelieN, m3wsu, tried     |
|           13 |     5143 | 2026-02-17 | INOX Division     | L   | 0.275      | -            | -                | -                | -         |    -6.04 | ct0m, deko, kelieN, m3wsu, StRoGo    |
|           12 |     5152 | 2026-02-17 | Bushido Wildcats  | W   | 0.274      | -            | -                | -                | -         |     1.50 | ct0m, deko, kelieN, m3wsu, StRoGo    |
|           11 |     5204 | 2026-02-16 | Just Players      | W   | 0.267      | -            | -                | -                | -         |     1.02 | ct0m, deko, kelieN, m3wsu, StRoGo    |
|           10 |     5257 | 2026-02-15 | Hashiras          | W   | 0.260      | -            | -                | -                | -         |     1.42 | ct0m, deko, kelieN, m3wsu, StRoGo    |
|            9 |     5265 | 2026-02-15 | AIRLYA            | W   | 0.260      | -            | -                | -                | -         |     0.23 | ct0m, kelieN, m3wsu, StRoGo, tried   |
|            8 |     5311 | 2026-02-14 | DragonClaw        | L   | 0.254      | -            | -                | -                | -         |    -5.38 | ct0m, deko, kelieN, m3wsu, StRoGo    |
|            7 |     5367 | 2026-02-13 | Lazer Cats        | W   | 0.247      | -            | -                | -                | -         |     1.48 | ct0m, deko, kelieN, m3wsu, StRoGo    |
|            6 |     5620 | 2026-02-06 | Rebels            | L   | 0.199      | -            | -                | -                | -         |    -2.56 | ct0m, kelieN, m3wsu, StRoGo, tried   |
|            5 |     5697 | 2026-02-03 | Clutchain fe      | W   | 0.179      | -            | -                | -                | -         |     0.81 | ct0m, deko, kelieN, m3wsu, StRoGo    |
|            4 |     5733 | 2026-02-02 | Aurora Young Blud | L   | 0.172      | -            | -                | -                | -         |    -5.01 | ct0m, deko, kelieN, m3wsu, StRoGo    |
|            3 |     5770 | 2026-01-31 | RUSTEC            | L   | 0.162      | -            | -                | -                | -         |    -4.11 | ct0m, deko, kelieN, m3wsu, tried     |
|            2 |     5774 | 2026-01-31 | Virtus.pro        | W   | 0.162      | -            | -                | -                | -         |     0.25 | ct0m, deko, kelieN, m3wsu, tried     |
|            1 |     5796 | 2026-01-31 | ARCRED            | L   | 0.159      | -            | -                | -                | -         |    -2.00 | ct0m, deko, kelieN, m3wsu, StRoGo    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($8,743.20)
- Divide that value by the 5th highest value among all rosters ($562,919.24)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-05-30 |      0.954 | $5,000.00      | $4,770.25       |
| 2026-03-12 |      0.428 | $5,000.00      | $2,140.91       |
| 2026-03-06 |      0.389 | $2,500.00      | $972.09         |
| 2026-03-01 |      0.354 | $500.00        | $177.25         |
| 2026-02-27 |      0.341 | $2,000.00      | $682.71         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
