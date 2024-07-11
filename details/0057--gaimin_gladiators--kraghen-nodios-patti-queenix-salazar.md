### Roster Details<br />
Team Name: Gaimin Gladiators<br />
Roster: kraghen, Nodios, Patti, Queenix, salazar<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [57](../standings_global.md)<br />
Regional Rank: [41]( ../standings_europe.md)<br />
Final Rank Value:  1057.7<br />
<br />
Final Rank Value (1057.7) = Starting Rank Value (1135.3) + Head To Head Adjustments (-77.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.462[<sup>1</sup>](#table2)
- Bounty Collected: 0.443[<sup>2</sup>](#table1)
- Opponent Network: 0.197[<sup>2</sup>](#table1)
- LAN Wins: 0.292[<sup>2</sup>](#table1)

The average of these factors is 0.349<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1135.3
- 400 + ( ( 0.349 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 1135.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           66 |      223 | 2024-06-14 | GUN5             | L   | 1.000      | -            | -                | -                | -         |   -16.96 | kraghen, Nodios, Patti, Queenix, salazar |
|           65 |      350 | 2024-06-10 | Enterprise       | L   | 0.992      | -            | -                | -                | -         |   -20.98 | kraghen, Nodios, Patti, Queenix, salazar |
|           64 |      405 | 2024-06-09 | 5W               | L   | 0.985      | -            | -                | -                | -         |   -19.30 | kraghen, Nodios, Patti, Queenix, salazar |
|           63 |      448 | 2024-06-08 | EYEBALLERS       | W   | 0.980      | 0.450        | -                | 0.646 (0.285)    | 0 (0.000) |     9.30 | kraghen, Nodios, Patti, Queenix, salazar |
|           62 |      505 | 2024-06-07 | 3DMAX            | L   | 0.973      | -            | -                | -                | -         |   -11.12 | kraghen, Nodios, Patti, Queenix, salazar |
|           61 |      569 | 2024-06-06 | Astralis Talent  | W   | 0.966      | -            | -                | -                | 0 (0.000) |     1.83 | kraghen, Nodios, Patti, Queenix, salazar |
|           60 |      822 | 2024-05-30 | Lynn Vision      | L   | 0.918      | -            | -                | -                | -         |   -14.35 | kraghen, Nodios, Patti, Queenix, salazar |
|           59 |      866 | 2024-05-28 | The MongolZ      | L   | 0.905      | -            | -                | -                | -         |    -0.38 | kraghen, Nodios, Patti, Queenix, salazar |
|           58 |     1151 | 2024-05-17 | ENCE             | L   | 0.834      | -            | -                | -                | -         |    -4.96 | kraghen, Nodios, Patti, Queenix, salazar |
|           57 |     1157 | 2024-05-17 | GamerLegion      | L   | 0.834      | -            | -                | -                | -         |    -8.41 | kraghen, Nodios, Patti, Queenix, salazar |
|           56 |     1167 | 2024-05-17 | Rebels           | L   | 0.832      | -            | -                | -                | -         |   -15.06 | kraghen, Nodios, Patti, Queenix, salazar |
|           55 |     1250 | 2024-05-15 | BLEED            | W   | 0.819      | 0.384        | 0.348 (0.110)    | 0.908 (0.286)    | 0 (0.000) |    18.40 | kraghen, Nodios, Patti, Queenix, salazar |
|           54 |     1475 | 2024-05-07 | Grannys Knockers | L   | 0.765      | -            | -                | -                | -         |   -20.61 | kraghen, Nodios, Patti, Queenix, salazar |
|           53 |     1485 | 2024-05-06 | Bulgaria         | W   | 0.759      | -            | -                | -                | -         |     0.36 | kraghen, Nodios, Patti, Queenix, salazar |
|           52 |     1497 | 2024-05-05 | Sashi            | W   | 0.754      | 0.143        | 0.202 (0.022)    | 1.000 (0.108)    | -         |    15.30 | kraghen, Nodios, Patti, Queenix, salazar |
|           51 |     1503 | 2024-05-05 | Kronjyllands     | W   | 0.753      | -            | -                | -                | -         |     0.36 | kraghen, Nodios, Patti, Queenix, salazar |
|           50 |     1533 | 2024-05-03 | AMKAL            | L   | 0.740      | -            | -                | -                | -         |   -10.41 | kraghen, Nodios, Patti, Queenix, salazar |
|           49 |     1562 | 2024-05-02 | HAVU             | W   | 0.733      | -            | -                | -                | -         |     2.33 | kraghen, Nodios, Patti, Queenix, salazar |
|           48 |     1569 | 2024-05-02 | SINNERS          | W   | 0.732      | 0.435        | 0.057 (0.018)    | 0.767 (0.244)    | -         |     8.67 | kraghen, Nodios, Patti, Queenix, salazar |
|           47 |     1604 | 2024-04-30 | AMKAL            | L   | 0.720      | -            | -                | -                | -         |   -10.92 | kraghen, Nodios, Patti, Queenix, salazar |
|           46 |     1631 | 2024-04-29 | kONO             | L   | 0.712      | -            | -                | -                | -         |   -18.92 | kraghen, Nodios, Patti, Queenix, salazar |
|           45 |     1656 | 2024-04-28 | 9 Pandas         | L   | 0.705      | -            | -                | -                | -         |   -14.69 | kraghen, Nodios, Patti, Queenix, salazar |
|           44 |     1705 | 2024-04-26 | ALTERNATE aTTaX  | L   | 0.691      | -            | -                | -                | -         |   -16.57 | kraghen, Nodios, Patti, Queenix, salazar |
|           43 |     1766 | 2024-04-23 | Sashi            | L   | 0.673      | -            | -                | -                | -         |   -10.89 | kraghen, Nodios, Patti, Queenix, salazar |
|           42 |     1781 | 2024-04-22 | BLEED            | L   | 0.666      | -            | -                | -                | -         |    -5.94 | kraghen, Nodios, Patti, Queenix, salazar |
|           41 |     1799 | 2024-04-21 | AMKAL            | W   | 0.660      | 0.384        | 0.135 (0.034)    | 0.559 (0.142)    | -         |     8.66 | kraghen, Nodios, Patti, Queenix, salazar |
|           40 |     1836 | 2024-04-20 | Nemiga           | W   | 0.652      | 0.384        | 0.498 (0.125)    | 0.678 (0.170)    | -         |    12.40 | kraghen, Nodios, Patti, Queenix, salazar |
|           39 |     1971 | 2024-04-17 | SINNERS          | W   | 0.631      | 0.384        | -                | 0.767 (0.186)    | -         |     8.82 | kraghen, Nodios, Patti, Queenix, salazar |
|           38 |     1999 | 2024-04-16 | Permitta         | W   | 0.626      | 0.384        | -                | 0.837 (0.201)    | -         |     5.07 | kraghen, Nodios, Patti, Queenix, salazar |
|           37 |     2327 | 2024-04-04 | JANO             | W   | 0.545      | -            | -                | -                | -         |     1.05 | kraghen, Nodios, Patti, Queenix, salazar |
|           36 |     2542 | 2024-03-23 | G2               | L   | 0.467      | -            | -                | -                | -         |    -0.26 | kraghen, Nodios, Patti, Queenix, salazar |
|           35 |     2551 | 2024-03-22 | FURIA            | W   | 0.461      | 1.000        | 0.253 (0.117)    | 0.509 (0.234)    | 1 (0.461) |    13.51 | kraghen, Nodios, Patti, Queenix, salazar |
|           34 |     2572 | 2024-03-21 | Cloud9           | L   | 0.454      | -            | -                | -                | -         |    -5.39 | kraghen, Nodios, Patti, Queenix, salazar |
|           33 |     2587 | 2024-03-21 | MOUZ             | L   | 0.452      | -            | -                | -                | -         |    -0.18 | kraghen, Nodios, Patti, Queenix, salazar |
|           32 |     2618 | 2024-03-19 | Imperial         | W   | 0.441      | 0.143        | 0.390 (0.025)    | -                | 1 (0.441) |    11.94 | kraghen, Nodios, Patti, Queenix, salazar |
|           31 |     2632 | 2024-03-18 | Lynn Vision      | W   | 0.432      | -            | -                | -                | 1 (0.432) |     6.72 | kraghen, Nodios, Patti, Queenix, salazar |
|           30 |     2653 | 2024-03-17 | The MongolZ      | W   | 0.427      | 0.143        | 1.000 (0.061)    | -                | 1 (0.427) |    13.31 | kraghen, Nodios, Patti, Queenix, salazar |
|           29 |     2664 | 2024-03-17 | Cloud9           | L   | 0.425      | -            | -                | -                | -         |    -4.88 | kraghen, Nodios, Patti, Queenix, salazar |
|           28 |     2999 | 2024-03-04 | BetBoom          | L   | 0.338      | -            | -                | -                | -         |    -0.70 | kraghen, Nodios, Patti, Queenix, salazar |
|           27 |     3005 | 2024-03-03 | ex-Preasy        | L   | 0.334      | -            | -                | -                | -         |    -8.53 | kraghen, Nodios, Patti, Queenix, salazar |
|           26 |     3011 | 2024-03-03 | fnatic           | W   | 0.334      | 0.143        | 0.298 (0.014)    | -                | -         |     9.64 | kraghen, Nodios, Patti, Queenix, salazar |
|           25 |     3023 | 2024-03-03 | SINNERS          | W   | 0.333      | -            | -                | -                | -         |     4.67 | kraghen, Nodios, Patti, Queenix, salazar |
|           24 |     3028 | 2024-03-03 | Monte            | W   | 0.332      | 0.500        | 0.188 (0.031)    | 0.668 (0.111)    | -         |     7.18 | kraghen, Nodios, Patti, Queenix, salazar |
|           23 |     3045 | 2024-03-02 | PARIVISION       | W   | 0.326      | -            | -                | -                | -         |     3.08 | kraghen, Nodios, Patti, Queenix, salazar |
|           22 |     3070 | 2024-02-29 | 3DMAX            | L   | 0.314      | -            | -                | -                | -         |    -3.71 | kraghen, Nodios, Patti, Queenix, salazar |
|           21 |     3215 | 2024-02-22 | ex-Guild Eagles  | W   | 0.266      | -            | -                | -                | 1 (0.266) |     1.80 | kraghen, Nodios, Patti, Queenix, salazar |
|           20 |     3242 | 2024-02-21 | Apeks            | L   | 0.259      | -            | -                | -                | -         |    -4.90 | kraghen, Nodios, Patti, Queenix, salazar |
|           19 |     3273 | 2024-02-20 | OG               | W   | 0.252      | -            | -                | -                | 1 (0.252) |     4.08 | kraghen, Nodios, Patti, Queenix, salazar |
|           18 |     3288 | 2024-02-19 | MOUZ             | L   | 0.247      | -            | -                | -                | -         |    -0.08 | kraghen, Nodios, Patti, Queenix, salazar |
|           17 |     3299 | 2024-02-19 | Monte            | W   | 0.245      | -            | -                | -                | 1 (0.245) |     5.52 | kraghen, Nodios, Patti, Queenix, salazar |
|           16 |     3514 | 2024-02-09 | ex-Preasy        | L   | 0.179      | -            | -                | -                | -         |    -4.59 | kraghen, Nodios, Patti, Queenix, salazar |
|           15 |     3534 | 2024-02-07 | TSM              | W   | 0.165      | -            | -                | -                | -         |     0.50 | kraghen, Nodios, Patti, Queenix, salazar |
|           14 |     3556 | 2024-02-05 | ex-Preasy        | W   | 0.152      | -            | -                | -                | -         |     0.86 | kraghen, Nodios, Patti, Queenix, salazar |
|           13 |     3594 | 2024-02-03 | Sashi            | L   | 0.140      | -            | -                | -                | -         |    -2.13 | kraghen, Nodios, Patti, Queenix, salazar |
|           12 |     3638 | 2024-02-02 | Into the Breach  | W   | 0.132      | -            | -                | -                | -         |     0.30 | kraghen, Nodios, Patti, Queenix, salazar |
|           11 |     3721 | 2024-01-28 | Sangal           | W   | 0.099      | -            | -                | -                | -         |     1.73 | kraghen, Nodios, Patti, Queenix, salazar |
|           10 |     3791 | 2024-01-24 | Alliance         | W   | 0.072      | -            | -                | -                | -         |     0.50 | kraghen, Nodios, Patti, Queenix, salazar |
|            9 |     3864 | 2024-01-21 | PERA             | W   | 0.053      | -            | -                | -                | -         |     0.52 | kraghen, Nodios, Patti, Queenix, salazar |
|            8 |     3890 | 2024-01-20 | fnatic           | L   | 0.047      | -            | -                | -                | -         |    -0.09 | kraghen, Nodios, Patti, Queenix, salazar |
|            7 |     3908 | 2024-01-20 | Permitta         | W   | 0.045      | -            | -                | -                | -         |     0.39 | kraghen, Nodios, Patti, Queenix, salazar |
|            6 |     3958 | 2024-01-19 | 9 Pandas         | L   | 0.039      | -            | -                | -                | -         |    -0.67 | kraghen, Nodios, Patti, Queenix, salazar |
|            5 |     3999 | 2024-01-18 | Romania          | W   | 0.034      | -            | -                | -                | -         |     0.19 | kraghen, Nodios, Patti, Queenix, salazar |
|            4 |     4024 | 2024-01-18 | Natus Vincere    | L   | 0.033      | -            | -                | -                | -         |    -0.01 | kraghen, Nodios, Patti, Queenix, salazar |
|            3 |     4206 | 2024-01-13 | OG               | W   | 0.001      | -            | -                | -                | -         |     0.02 | kraghen, Nodios, Patti, Queenix, salazar |
|            2 |     4207 | 2024-01-13 | ex-sYnck         | W   | 0.001      | -            | -                | -                | -         |     0.00 | kraghen, Nodios, Patti, Queenix, salazar |
|            1 |     4208 | 2024-01-13 | 500              | W   | 0.001      | -            | -                | -                | -         |     0.00 | kraghen, Nodios, Patti, Queenix, salazar |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($17,701.91)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.07) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-18 |      0.840 | $1,000.00      | $840.30         |
| 2024-05-04 |      0.747 | $2,000.00      | $1,493.13       |
| 2024-05-02 |      0.733 | $1,000.00      | $733.46         |
| 2024-04-22 |      0.666 | $5,000.00      | $3,327.95       |
| 2024-03-31 |      0.521 | $20,000.00     | $10,412.77      |
| 2024-02-09 |      0.179 | $5,000.00      | $894.30         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
