### Roster Details<br />
Team Name: Phantom<br />
Roster: KEi, Kunai, Kylar, nicoodoz, TMB<br />
Global Rank: [61](../../standings_global_2026_11_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_11_02.md)<br />
Regional Rank: [42]( ../../standings_europe_2026_11_02.md)<br />
<br />
Final Rank Value:  1224.2<br />
<br />
Final Rank Value (1224.2) = Starting Rank Value (1276.4) + Head To Head Adjustments (-52.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.422[<sup>1</sup>](#table2)
- Bounty Collected: 0.393[<sup>2</sup>](#table1)
- Opponent Network: 0.228[<sup>2</sup>](#table1)
- LAN Wins: 0.828[<sup>2</sup>](#table1)

The average of these factors is 0.468<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1276.4
- 400 + ( ( 0.468 - 0.000 ) / ( 0.854 - 0.000 ) ) * 1600 = 1276.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           55 |       17 | 2026-11-01 | Betclic          | L   | 1.000      | -            | -                | -                | -         |   -13.47 | KEi, Kunai, Kylar, nicoodoz, TMB |
|           54 |       57 | 2026-10-31 | Spirit Academy   | W   | 1.000      | 0.384        | 0.016 (0.006)    | 0.673 (0.259)    | -         |     8.61 | KEi, Kunai, Kylar, nicoodoz, TMB |
|           53 |       75 | 2026-10-30 | Lavked           | W   | 1.000      | 0.384        | 0.013 (0.005)    | 0.646 (0.248)    | -         |     5.42 | KEi, Kunai, Kylar, nicoodoz, TMB |
|           52 |      452 | 2026-10-19 | BRUTE            | L   | 1.000      | -            | -                | -                | -         |   -20.73 | KEi, Kunai, Kylar, nicoodoz, TMB |
|           51 |      539 | 2026-10-17 | HAVU             | W   | 1.000      | -            | -                | -                | 1 (1.000) |     7.52 | KEi, Kunai, Kylar, nicoodoz, TMB |
|           50 |      550 | 2026-10-17 | ENCE             | W   | 1.000      | 0.362        | 0.014 (0.005)    | 0.553 (0.200)    | 1 (1.000) |     7.15 | KEi, Kunai, Kylar, nicoodoz, TMB |
|           49 |      590 | 2026-10-16 | HAVU             | W   | 1.000      | -            | -                | -                | 1 (1.000) |     7.51 | KEi, Kunai, Kylar, nicoodoz, TMB |
|           48 |      601 | 2026-10-16 | ROUNDS           | W   | 1.000      | -            | -                | -                | 1 (1.000) |     0.60 | KEi, Kunai, Kylar, nicoodoz, TMB |
|           47 |      616 | 2026-10-16 | Voca             | W   | 1.000      | 0.362        | 0.014 (0.005)    | 0.437 (0.158)    | 1 (1.000) |    13.04 | KEi, Kunai, Kylar, nicoodoz, TMB |
|           46 |      683 | 2026-10-14 | Nuclear TigeRES  | L   | 1.000      | -            | -                | -                | -         |   -12.83 | KEi, Kunai, Kylar, nicoodoz, TMB |
|           45 |      712 | 2026-10-13 | DNK              | W   | 1.000      | -            | -                | -                | -         |     1.83 | KEi, Kunai, Kylar, nicoodoz, TMB |
|           44 |      982 | 2026-10-07 | fnatic           | L   | 1.000      | -            | -                | -                | -         |    -7.19 | cej0t, KEi, Kylar, nicoodoz, TMB |
|           43 |     1606 | 2026-09-24 | Iberian Soul     | L   | 0.941      | -            | -                | -                | -         |   -11.76 | KEi, Kunai, Kylar, nicoodoz, TMB |
|           42 |     1687 | 2026-09-23 | fnatic           | L   | 0.934      | -            | -                | -                | -         |    -7.24 | KEi, Kunai, Kylar, nicoodoz, TMB |
|           41 |     1698 | 2026-09-23 | 100 Thieves      | L   | 0.933      | -            | -                | -                | -         |    -6.53 | KEi, Kunai, Kylar, nicoodoz, TMB |
|           40 |     1723 | 2026-09-23 | fnatic           | W   | 0.932      | 0.450        | 0.105 (0.044)    | 0.732 (0.307)    | 1 (0.932) |    22.40 | KEi, Kunai, Kylar, nicoodoz, TMB |
|           39 |     2042 | 2026-09-15 | G2 Ares          | W   | 0.880      | 0.384        | -                | 0.715 (0.242)    | -         |     5.47 | KEi, Kunai, Kylar, nicoodoz, TMB |
|           38 |     2419 | 2026-09-07 | SINNERS          | L   | 0.826      | -            | -                | -                | -         |    -7.76 | cej0t, KEi, Kylar, nicoodoz, TMB |
|           37 |     2554 | 2026-09-04 | INFINITE         | L   | 0.807      | -            | -                | -                | -         |   -12.33 | cej0t, KEi, Kylar, nicoodoz, TMB |
|           36 |     2626 | 2026-09-03 | OG               | W   | 0.798      | -            | -                | -                | -         |     3.74 | cej0t, KEi, Kylar, nicoodoz, TMB |
|           35 |     2784 | 2026-08-30 | ex-Zero Tenacity | L   | 0.773      | -            | -                | -                | -         |   -18.57 | cej0t, KEi, Kylar, nicoodoz, TMB |
|           34 |     2826 | 2026-08-29 | Nemiga           | W   | 0.767      | 0.384        | 0.476 (0.141)    | 0.990 (0.292)    | -         |    21.17 | cej0t, KEi, Kylar, nicoodoz, TMB |
|           33 |     2881 | 2026-08-28 | Leo              | W   | 0.760      | 0.384        | -                | 0.735 (0.215)    | -         |     4.06 | cej0t, KEi, Kylar, nicoodoz, TMB |
|           32 |     3048 | 2026-08-24 | Acend            | L   | 0.734      | -            | -                | -                | -         |   -14.73 | cej0t, KEi, Kylar, nicoodoz, TMB |
|           31 |     3410 | 2026-08-09 | JiJieHao         | L   | 0.633      | -            | -                | -                | -         |    -5.18 | cej0t, KEi, Kylar, nicoodoz, TMB |
|           30 |     3428 | 2026-08-09 | NRG              | W   | 0.632      | 0.818        | 0.047 (0.024)    | 0.380 (0.196)    | 1 (0.632) |    12.17 | cej0t, KEi, Kylar, nicoodoz, TMB |
|           29 |     3456 | 2026-08-08 | levelONE         | W   | 0.626      | -            | -                | -                | 1 (0.626) |     0.22 | cej0t, KEi, Kylar, nicoodoz, TMB |
|           28 |     3465 | 2026-08-08 | EYEBALLERS       | L   | 0.625      | -            | -                | -                | -         |   -12.16 | cej0t, KEi, Kylar, nicoodoz, TMB |
|           27 |     3497 | 2026-08-07 | levelONE         | W   | 0.620      | -            | -                | -                | 1 (0.620) |     0.19 | cej0t, KEi, Kylar, nicoodoz, TMB |
|           26 |     3602 | 2026-08-04 | Sashi            | L   | 0.599      | -            | -                | -                | -         |   -13.20 | cej0t, KEi, Kylar, nicoodoz, TMB |
|           25 |     3763 | 2026-07-30 | Lavked           | W   | 0.566      | -            | -                | -                | -         |     0.82 | cej0t, KEi, Kylar, nicoodoz, TMB |
|           24 |     3820 | 2026-07-28 | Vexar            | W   | 0.553      | -            | -                | -                | -         |     1.02 | cej0t, KEi, Kylar, nicoodoz, TMB |
|           23 |     3895 | 2026-07-26 | INOX Division    | L   | 0.539      | -            | -                | -                | -         |   -15.96 | cej0t, KEi, Kylar, nicoodoz, TMB |
|           22 |     3968 | 2026-07-24 | G2 Ares          | W   | 0.526      | 0.435        | -                | 0.715 (0.163)    | -         |     4.98 | cej0t, KEi, Kylar, nicoodoz, TMB |
|           21 |     4145 | 2026-07-17 | K27              | L   | 0.479      | -            | -                | -                | -         |    -4.56 | KEi, Kunai, Kylar, nicoodoz, TMB |
|           20 |     4167 | 2026-07-16 | HEROIC           | L   | 0.474      | -            | -                | -                | -         |    -3.87 | KEi, Kunai, Kylar, nicoodoz, TMB |
|           19 |     4188 | 2026-07-15 | paiN             | W   | 0.468      | 0.500        | 0.152 (0.036)    | -                | 1 (0.468) |     9.47 | KEi, Kunai, Kylar, nicoodoz, TMB |
|           18 |     4592 | 2026-06-21 | FOKUS            | W   | 0.306      | 0.435        | 0.090 (0.012)    | -                | -         |     5.69 | Altekz, Kunai, Kylar, mwlky, TMB |
|           17 |     4605 | 2026-06-20 | Walczaki         | W   | 0.301      | -            | -                | -                | -         |     0.90 | Altekz, Kunai, Kylar, mwlky, TMB |
|           16 |     4643 | 2026-06-18 | JiJieHao         | W   | 0.286      | 0.435        | 0.055 (0.007)    | -                | -         |     6.80 | KEi, Kunai, Kylar, mwlky, TMB    |
|           15 |     4880 | 2026-06-07 | Acend            | W   | 0.213      | -            | -                | -                | -         |     2.02 | KEi, Kunai, Kylar, mwlky, TMB    |
|           14 |     4941 | 2026-06-05 | 100 Thieves      | L   | 0.200      | -            | -                | -                | -         |    -1.30 | KEi, Kunai, Kylar, mwlky, TMB    |
|           13 |     4981 | 2026-06-03 | BBL              | W   | 0.187      | -            | -                | -                | -         |     3.94 | KEi, Kunai, Kylar, mwlky, TMB    |
|           12 |     5032 | 2026-06-01 | DragonClaw       | W   | 0.172      | -            | -                | -                | -         |     0.26 | KEi, Kunai, Kylar, mwlky, TMB    |
|           11 |     5103 | 2026-05-30 | Bushido Wildcats | W   | 0.159      | -            | -                | -                | -         |     0.86 | KEi, Kunai, Kylar, mwlky, TMB    |
|           10 |     5118 | 2026-05-29 | Drip Too Hard    | L   | 0.154      | -            | -                | -                | -         |    -4.70 | KEi, Kunai, Kylar, mwlky, TMB    |
|            9 |     5172 | 2026-05-28 | Atreides         | L   | 0.147      | -            | -                | -                | -         |    -4.46 | KEi, Kunai, Kylar, mwlky, TMB    |
|            8 |     5199 | 2026-05-28 | Banda Chuya      | L   | 0.145      | -            | -                | -                | -         |    -4.26 | KEi, Kunai, Kylar, mwlky, TMB    |
|            7 |     5242 | 2026-05-27 | Johnny Speeds    | L   | 0.138      | -            | -                | -                | -         |    -4.21 | KEi, Kunai, Kylar, mwlky, TMB    |
|            6 |     5297 | 2026-05-25 | BRUTE            | W   | 0.126      | -            | -                | -                | -         |     0.09 | KEi, Kunai, Kylar, mwlky, TMB    |
|            5 |     5302 | 2026-05-25 | Lavked           | W   | 0.126      | -            | -                | -                | -         |     0.16 | KEi, Kunai, Kylar, mwlky, TMB    |
|            4 |     5383 | 2026-05-23 | ex-RUBY          | L   | 0.113      | -            | -                | -                | -         |    -3.42 | KEi, Kunai, Kylar, mwlky, TMB    |
|            3 |     5495 | 2026-05-21 | Leo              | W   | 0.098      | -            | -                | -                | -         |     0.03 | KEi, Kunai, Kylar, mwlky, TMB    |
|            2 |     5553 | 2026-05-19 | Banda Chuya      | W   | 0.086      | -            | -                | -                | -         |     0.17 | KEi, Kunai, Kylar, mwlky, TMB    |
|            1 |     5909 | 2026-05-06 | los kogutos      | L   | 0.001      | -            | -                | -                | -         |    -0.03 | Ayteel, KEi, Kunai, Kylar, mwlky |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($23,619.08)
- Divide that value by the 5th highest value among all rosters ($549,790.68)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-11-01 |      1.000 | $2,500.00      | $2,500.00       |
| 2026-10-17 |      1.000 | $8,674.00      | $8,674.00       |
| 2026-09-26 |      0.954 | $1,000.00      | $954.30         |
| 2026-08-30 |      0.774 | $2,500.00      | $1,933.90       |
| 2026-08-09 |      0.634 | $7,750.00      | $4,912.75       |
| 2026-07-18 |      0.487 | $9,000.00      | $4,385.15       |
| 2026-06-06 |      0.207 | $1,250.00      | $258.98         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
