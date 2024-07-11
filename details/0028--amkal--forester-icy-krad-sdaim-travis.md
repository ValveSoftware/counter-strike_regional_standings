### Roster Details<br />
Team Name: AMKAL<br />
Roster: Forester, ICY, Krad, Sdaim, TRAVIS<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [28](../standings_global.md)<br />
Regional Rank: [19]( ../standings_europe.md)<br />
Final Rank Value:  1284.8<br />
<br />
Final Rank Value (1284.8) = Starting Rank Value (1139.9) + Head To Head Adjustments (144.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.535[<sup>1</sup>](#table2)
- Bounty Collected: 0.510[<sup>2</sup>](#table1)
- Opponent Network: 0.281[<sup>2</sup>](#table1)
- LAN Wins: 0.078[<sup>2</sup>](#table1)

The average of these factors is 0.351<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1139.9
- 400 + ( ( 0.351 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 1139.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           55 |      368 | 2024-06-09 | Monte             | W   | 0.987      | 0.143        | 0.188 (0.026)    | -                | 0 (0.000) |    12.53 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           54 |      391 | 2024-06-09 | B8                | W   | 0.986      | 0.143        | 0.242 (0.034)    | -                | 0 (0.000) |    12.56 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           53 |      461 | 2024-06-08 | Monte             | W   | 0.979      | 0.143        | 0.188 (0.026)    | -                | 0 (0.000) |    14.38 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           52 |      464 | 2024-06-08 | 1WIN              | W   | 0.979      | -            | -                | -                | 0 (0.000) |     7.62 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           51 |      760 | 2024-06-01 | MOUZ NXT          | L   | 0.932      | -            | -                | -                | -         |   -18.86 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           50 |      778 | 2024-05-31 | Permitta          | W   | 0.927      | 0.435        | -                | 0.837 (0.337)    | 0 (0.000) |     4.39 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           49 |     1025 | 2024-05-21 | GamerLegion       | L   | 0.861      | -            | -                | -                | -         |   -11.86 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           48 |     1096 | 2024-05-19 | paiN              | W   | 0.846      | 0.769        | 0.478 (0.311)    | 0.768 (0.500)    | 0 (0.000) |    21.72 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           47 |     1100 | 2024-05-19 | Liquid            | L   | 0.846      | -            | -                | -                | -         |    -3.01 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           46 |     1120 | 2024-05-18 | paiN              | W   | 0.840      | 0.769        | 0.478 (0.309)    | 0.768 (0.496)    | 0 (0.000) |    22.34 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           45 |     1518 | 2024-05-04 | BetBoom           | W   | 0.747      | 0.435        | 0.406 (0.132)    | 0.745 (0.242)    | -         |    20.50 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           44 |     1528 | 2024-05-04 | Metizport         | W   | 0.745      | 0.435        | -                | 0.489 (0.158)    | -         |     6.91 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           43 |     1533 | 2024-05-03 | Gaimin Gladiators | W   | 0.740      | 0.435        | -                | 0.528 (0.170)    | -         |    10.41 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           42 |     1554 | 2024-05-02 | BLEED             | W   | 0.734      | 0.435        | 0.348 (0.111)    | 0.908 (0.290)    | -         |    16.95 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           41 |     1581 | 2024-05-01 | fnatic            | L   | 0.727      | -            | -                | -                | -         |    -2.66 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           40 |     1604 | 2024-04-30 | Gaimin Gladiators | W   | 0.720      | 0.384        | -                | 0.528 (0.146)    | -         |    10.92 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           39 |     1627 | 2024-04-29 | Permitta          | W   | 0.713      | 0.384        | -                | 0.837 (0.229)    | -         |     6.28 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           38 |     1750 | 2024-04-24 | Romania           | W   | 0.679      | -            | -                | -                | -         |     3.66 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           37 |     1799 | 2024-04-21 | Gaimin Gladiators | L   | 0.660      | -            | -                | -                | -         |    -8.66 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           36 |     1878 | 2024-04-19 | ENCE              | W   | 0.646      | 0.384        | 0.216 (0.054)    | -                | -         |    17.11 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           35 |     1920 | 2024-04-18 | Apeks             | L   | 0.640      | -            | -                | -                | -         |   -12.04 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           34 |     1928 | 2024-04-18 | ex-Guild Eagles   | W   | 0.639      | -            | -                | -                | -         |     4.30 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           33 |     2002 | 2024-04-16 | B8                | W   | 0.625      | 0.384        | 0.242 (0.058)    | 1.000 (0.240)    | -         |     8.65 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           32 |     2054 | 2024-04-12 | Aurora            | L   | 0.601      | -            | -                | -                | -         |    -1.14 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           31 |     2090 | 2024-04-11 | BetBoom           | W   | 0.592      | 0.143        | 0.406 (0.034)    | -                | -         |    17.49 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           30 |     2123 | 2024-04-10 | Apeks             | W   | 0.587      | -            | -                | -                | -         |     8.31 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           29 |     2137 | 2024-04-10 | Enterprise        | L   | 0.585      | -            | -                | -                | -         |   -12.44 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           28 |     2347 | 2024-04-03 | Insilio           | W   | 0.541      | -            | -                | -                | -         |     5.07 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           27 |     2356 | 2024-04-03 | ex-Guild Eagles   | W   | 0.540      | -            | -                | -                | -         |     3.74 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           26 |     2366 | 2024-04-03 | Alliance          | W   | 0.539      | -            | -                | -                | -         |     4.28 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           25 |     2395 | 2024-04-02 | PARIVISION        | W   | 0.533      | -            | -                | -                | -         |     6.11 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           24 |     2400 | 2024-04-02 | ex-Guild Eagles   | L   | 0.532      | -            | -                | -                | -         |   -13.09 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           23 |     2408 | 2024-04-02 | ALTERNATE aTTaX   | W   | 0.531      | -            | -                | -                | -         |     6.21 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           22 |     2630 | 2024-03-18 | The MongolZ       | L   | 0.433      | -            | -                | -                | -         |    -0.12 | Forester, ICY, Krad, NickelBack, TRAVIS |
|           21 |     2651 | 2024-03-17 | Apeks             | L   | 0.427      | -            | -                | -                | -         |    -7.71 | Forester, ICY, Krad, NickelBack, TRAVIS |
|           20 |     2658 | 2024-03-17 | GamerLegion       | L   | 0.426      | -            | -                | -                | -         |    -9.21 | Forester, ICY, Krad, NickelBack, TRAVIS |
|           19 |     2965 | 2024-03-05 | FORZE             | L   | 0.347      | -            | -                | -                | -         |    -7.38 | Forester, ICY, Krad, NickelBack, TRAVIS |
|           18 |     2971 | 2024-03-05 | Zero Tenacity     | W   | 0.347      | -            | -                | -                | -         |     4.94 | Forester, ICY, Krad, NickelBack, TRAVIS |
|           17 |     3066 | 2024-03-01 | BIG               | L   | 0.319      | -            | -                | -                | -         |    -1.85 | Forester, ICY, Krad, NickelBack, TRAVIS |
|           16 |     3084 | 2024-02-28 | Young Ninjas      | L   | 0.307      | -            | -                | -                | -         |    -8.75 | Forester, ICY, Krad, NickelBack, TRAVIS |
|           15 |     3345 | 2024-02-17 | 9 Pandas          | W   | 0.232      | -            | -                | -                | 1 (0.232) |     3.40 | Forester, ICY, Krad, NickelBack, TRAVIS |
|           14 |     3375 | 2024-02-16 | Falcons           | W   | 0.225      | -            | -                | -                | 1 (0.225) |     6.59 | Forester, ICY, Krad, NickelBack, TRAVIS |
|           13 |     3399 | 2024-02-15 | fnatic            | L   | 0.218      | -            | -                | -                | -         |    -0.44 | Forester, ICY, Krad, NickelBack, TRAVIS |
|           12 |     3432 | 2024-02-14 | Ninjas in Pyjamas | W   | 0.213      | -            | -                | -                | 1 (0.213) |     0.53 | Forester, ICY, Krad, NickelBack, TRAVIS |
|           11 |     3437 | 2024-02-14 | Enterprise        | L   | 0.212      | -            | -                | -                | -         |    -4.58 | Forester, ICY, Krad, NickelBack, TRAVIS |
|           10 |     3492 | 2024-02-10 | Sashi             | L   | 0.187      | -            | -                | -                | -         |    -2.88 | Forester, ICY, Krad, NickelBack, TRAVIS |
|            9 |     3505 | 2024-02-09 | Nemiga            | L   | 0.181      | -            | -                | -                | -         |    -1.71 | Forester, ICY, Krad, NickelBack, TRAVIS |
|            8 |     3522 | 2024-02-08 | RUBY              | W   | 0.174      | -            | -                | -                | -         |     1.66 | Forester, ICY, Krad, NickelBack, TRAVIS |
|            7 |     3527 | 2024-02-08 | Insilio           | W   | 0.173      | -            | -                | -                | -         |     1.36 | Forester, ICY, Krad, NickelBack, TRAVIS |
|            6 |     3948 | 2024-01-19 | Astralis          | W   | 0.041      | -            | -                | -                | -         |     1.26 | Forester, ICY, Krad, NickelBack, TRAVIS |
|            5 |     4010 | 2024-01-18 | KOI               | W   | 0.033      | -            | -                | -                | -         |     0.59 | Forester, ICY, Krad, NickelBack, TRAVIS |
|            4 |     4029 | 2024-01-18 | ex-sYnck          | W   | 0.033      | -            | -                | -                | -         |     0.03 | Forester, ICY, Krad, NickelBack, TRAVIS |
|            3 |     4032 | 2024-01-18 | Insilio           | W   | 0.032      | -            | -                | -                | -         |     0.25 | Forester, ICY, Krad, NickelBack, TRAVIS |
|            2 |     4051 | 2024-01-17 | FreeESPI          | W   | 0.028      | -            | -                | -                | -         |     0.01 | Forester, ICY, Krad, NickelBack, TRAVIS |
|            1 |     4060 | 2024-01-17 | RUBY              | W   | 0.028      | -            | -                | -                | -         |     0.26 | Forester, ICY, Krad, NickelBack, TRAVIS |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($34,790.38)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.13) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-02 |      0.940 | $2,000.00      | $1,879.25       |
| 2024-05-23 |      0.873 | $12,500.00     | $10,917.09      |
| 2024-05-04 |      0.747 | $22,000.00     | $16,424.42      |
| 2024-05-02 |      0.733 | $1,500.00      | $1,100.18       |
| 2024-03-20 |      0.447 | $10,000.00     | $4,469.44       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
