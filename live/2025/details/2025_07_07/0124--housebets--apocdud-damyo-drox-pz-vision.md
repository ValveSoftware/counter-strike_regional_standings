### Roster Details<br />
Team Name: Housebets<br />
Roster: apocdud, damyo, Drox, pz, vision<br />
Global Rank: [124](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_07_07.md)<br />
Regional Rank: [15]( ../../standings_asia_2025_07_07.md)<br />
<br />
Final Rank Value:  717.4<br />
<br />
Final Rank Value (717.4) = Starting Rank Value (714.2) + Head To Head Adjustments (3.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.308[<sup>1</sup>](#table2)
- Bounty Collected: 0.234[<sup>2</sup>](#table1)
- Opponent Network: 0.026[<sup>2</sup>](#table1)
- LAN Wins: 0.105[<sup>2</sup>](#table1)

The average of these factors is 0.168<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 714.2
- 400 + ( ( 0.168 - 0.000 ) / ( 0.858 - 0.000 ) ) * 1600 = 714.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           32 |     1042 | 2025-05-03 | Mindfreak            | L   | 0.765      | -            | -                | -                | -         |   -12.62 | apocdud, damyo, Drox, pz, vision       |
|           31 |     1060 | 2025-05-02 | Rooster              | L   | 0.758      | -            | -                | -                | -         |   -11.81 | apocdud, damyo, Drox, pz, vision       |
|           30 |     1083 | 2025-05-01 | Mindfreak            | W   | 0.751      | 0.333        | 0.005 (0.001)    | 0.163 (0.041)    | 0 (0.000) |    10.63 | apocdud, damyo, Drox, pz, vision       |
|           29 |     1544 | 2025-04-09 | MANTRA               | W   | 0.604      | 0.333        | 0.001 (0.000)    | 0.152 (0.031)    | 0 (0.000) |     7.33 | apocdud, damyo, Drox, pz, vision       |
|           28 |     1550 | 2025-04-09 | MANTRA               | L   | 0.604      | -            | -                | -                | -         |   -12.02 | apocdud, damyo, Drox, pz, yourwombat   |
|           27 |     1777 | 2025-04-02 | Only One Word        | W   | 0.558      | 0.333        | 0.002 (0.000)    | 0.168 (0.031)    | 0 (0.000) |     7.93 | apocdud, damyo, Drox, pz, yourwombat   |
|           26 |     1782 | 2025-04-02 | Only One Word        | W   | 0.558      | 0.333        | 0.002 (0.000)    | 0.168 (0.031)    | 0 (0.000) |     8.33 | apocdud, damyo, Drox, pz, yourwombat   |
|           25 |     1940 | 2025-03-28 | ex-TALON             | L   | 0.530      | -            | -                | -                | -         |    -7.44 | alecc, apocdud, damyo, gump, pz        |
|           24 |     1997 | 2025-03-28 | Rooster              | L   | 0.525      | -            | -                | -                | -         |    -8.07 | alecc, apocdud, damyo, gump, pz        |
|           23 |     2077 | 2025-03-27 | MANTRA               | W   | 0.517      | -            | -                | -                | 0 (0.000) |     5.86 | alecc, apocdud, damyo, pz, yourwombat  |
|           22 |     2125 | 2025-03-26 | KZG                  | W   | 0.512      | 0.333        | 0.001 (0.000)    | 0.080 (0.014)    | 0 (0.000) |     5.21 | apocdud, damyo, pz, vision, yourwombat |
|           21 |     2127 | 2025-03-26 | KZG                  | W   | 0.511      | 0.333        | 0.001 (0.000)    | 0.080 (0.014)    | 0 (0.000) |     5.43 | apocdud, damyo, pz, vision, yourwombat |
|           20 |     2206 | 2025-03-22 | SemperFi             | L   | 0.489      | -            | -                | -                | -         |    -6.12 | apocdud, BRACE, damyo, pz, yourwombat  |
|           19 |     2236 | 2025-03-21 | Rooster              | L   | 0.483      | -            | -                | -                | -         |    -7.35 | apocdud, BRACE, damyo, pz, yourwombat  |
|           18 |     2252 | 2025-03-21 | ex-TALON             | W   | 0.477      | 0.345        | 0.003 (0.001)    | 0.163 (0.027)    | 1 (0.477) |     8.08 | apocdud, BRACE, damyo, pz, yourwombat  |
|           17 |     2253 | 2025-03-20 | Mindfreak            | W   | 0.476      | 0.345        | 0.005 (0.001)    | 0.163 (0.027)    | 1 (0.476) |     6.49 | apocdud, BRACE, damyo, pz, yourwombat  |
|           16 |     2387 | 2025-03-17 | Rooster              | W   | 0.451      | 0.333        | 0.007 (0.001)    | 0.213 (0.032)    | 0 (0.000) |     7.69 | apocdud, BRACE, damyo, pz, yourwombat  |
|           15 |     2388 | 2025-03-17 | Rooster              | L   | 0.451      | -            | -                | -                | -         |    -6.66 | apocdud, BRACE, damyo, pz, yourwombat  |
|           14 |     2873 | 2025-03-03 | Lynn Vision          | L   | 0.358      | -            | -                | -                | -         |    -0.25 | apocdud, BRACE, damyo, pz, yourwombat  |
|           13 |     2888 | 2025-03-02 | HEROIC               | L   | 0.352      | -            | -                | -                | -         |    -0.09 | apocdud, BRACE, damyo, pz, yourwombat  |
|           12 |     2911 | 2025-03-01 | paiN                 | L   | 0.347      | -            | -                | -                | -         |    -0.11 | apocdud, BRACE, damyo, pz, yourwombat  |
|           11 |     3216 | 2025-02-19 | Justice For Tomorrow | W   | 0.278      | -            | -                | -                | -         |     3.00 | apocdud, BRACE, damyo, pz, yourwombat  |
|           10 |     3219 | 2025-02-19 | Justice For Tomorrow | W   | 0.278      | -            | -                | -                | -         |     3.06 | apocdud, BRACE, damyo, pz, yourwombat  |
|            9 |     3250 | 2025-02-18 | Mindfreak            | W   | 0.271      | 0.333        | 0.005 (0.000)    | 0.163 (0.015)    | -         |     4.00 | apocdud, BRACE, damyo, pz, yourwombat  |
|            8 |     3251 | 2025-02-18 | Mindfreak            | L   | 0.271      | -            | -                | -                | -         |    -4.63 | apocdud, BRACE, damyo, pz, yourwombat  |
|            7 |     3297 | 2025-02-15 | KZG                  | W   | 0.256      | -            | -                | -                | -         |     2.89 | apocdud, BRACE, damyo, pz, yourwombat  |
|            6 |     3332 | 2025-02-14 | Vantage              | L   | 0.250      | -            | -                | -                | -         |    -6.08 | apocdud, BRACE, damyo, pz, yourwombat  |
|            5 |     3337 | 2025-02-14 | BBBMBCBS             | W   | 0.249      | -            | -                | -                | -         |     1.15 | apocdud, BRACE, damyo, pz, yourwombat  |
|            4 |     3500 | 2025-02-08 | Wings Up             | L   | 0.210      | -            | -                | -                | -         |    -2.81 | apocdud, BRACE, damyo, pz, SkulL       |
|            3 |     3565 | 2025-02-07 | JiJieHao             | L   | 0.203      | -            | -                | -                | -         |    -0.80 | apocdud, BRACE, damyo, pz, yourwombat  |
|            2 |     3763 | 2025-01-28 | Underground          | W   | 0.132      | -            | -                | -                | -         |     1.47 | apocdud, damyo, Falcon, pz, yourwombat |
|            1 |     3767 | 2025-01-28 | Underground          | W   | 0.131      | -            | -                | -                | -         |     1.49 | apocdud, damyo, Falcon, pz, yourwombat |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,819.51)
- Divide that value by the 5th highest value among all rosters ($499,535.85)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-05-04 |      0.771 | $1,400.00      | $1,080.05       |
| 2025-03-23 |      0.491 | $1,254.00      | $616.03         |
| 2025-03-05 |      0.374 | $3,000.00      | $1,123.43       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
