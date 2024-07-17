### Roster Details<br />
Team Name: Gaimin Gladiators<br />
Roster: kraghen, Nodios, Patti, Queenix, salazar<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [64](../standings_global.md)<br />
Regional Rank: [46]( ../standings_europe.md)<br />
Final Rank Value:  1036.3<br />
<br />
Final Rank Value (1036.3) = Starting Rank Value (1102.6) + Head To Head Adjustments (-66.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.459[<sup>1</sup>](#table2)
- Bounty Collected: 0.428[<sup>2</sup>](#table1)
- Opponent Network: 0.161[<sup>2</sup>](#table1)
- LAN Wins: 0.261[<sup>2</sup>](#table1)

The average of these factors is 0.327<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1102.6
- 400 + ( ( 0.327 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 1102.6


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
|           60 |      387 | 2024-06-14 | GUN5             | L   | 0.981      | -            | -                | -                | -         |   -15.71 | kraghen, Nodios, Patti, Queenix, salazar |
|           59 |      514 | 2024-06-10 | Enterprise       | L   | 0.952      | -            | -                | -                | -         |   -19.26 | kraghen, Nodios, Patti, Queenix, salazar |
|           58 |      569 | 2024-06-09 | 5W               | L   | 0.945      | -            | -                | -                | -         |   -17.24 | kraghen, Nodios, Patti, Queenix, salazar |
|           57 |      612 | 2024-06-08 | EYEBALLERS       | W   | 0.940      | 0.450        | -                | 0.619 (0.262)    | 0 (0.000) |     9.78 | kraghen, Nodios, Patti, Queenix, salazar |
|           56 |      669 | 2024-06-07 | 3DMAX            | L   | 0.933      | -            | -                | -                | -         |    -9.87 | kraghen, Nodios, Patti, Queenix, salazar |
|           55 |      733 | 2024-06-06 | Astralis Talent  | W   | 0.927      | -            | -                | -                | 0 (0.000) |     2.06 | kraghen, Nodios, Patti, Queenix, salazar |
|           54 |      986 | 2024-05-30 | Lynn Vision      | L   | 0.878      | -            | -                | -                | -         |   -13.40 | kraghen, Nodios, Patti, Queenix, salazar |
|           53 |     1030 | 2024-05-28 | The MongolZ      | L   | 0.865      | -            | -                | -                | -         |    -0.30 | kraghen, Nodios, Patti, Queenix, salazar |
|           52 |     1315 | 2024-05-17 | ENCE             | L   | 0.795      | -            | -                | -                | -         |    -4.70 | kraghen, Nodios, Patti, Queenix, salazar |
|           51 |     1321 | 2024-05-17 | GamerLegion      | L   | 0.794      | -            | -                | -                | -         |    -7.37 | kraghen, Nodios, Patti, Queenix, salazar |
|           50 |     1331 | 2024-05-17 | Rebels           | L   | 0.792      | -            | -                | -                | -         |   -14.02 | kraghen, Nodios, Patti, Queenix, salazar |
|           49 |     1414 | 2024-05-15 | BLEED            | W   | 0.780      | 0.384        | 0.192 (0.058)    | 0.379 (0.114)    | 0 (0.000) |    16.94 | kraghen, Nodios, Patti, Queenix, salazar |
|           48 |     1639 | 2024-05-07 | Grannys Knockers | L   | 0.725      | -            | -                | -                | -         |   -18.98 | kraghen, Nodios, Patti, Queenix, salazar |
|           47 |     1649 | 2024-05-06 | 500              | W   | 0.720      | -            | -                | -                | -         |     0.40 | kraghen, Nodios, Patti, Queenix, salazar |
|           46 |     1661 | 2024-05-05 | Sashi            | W   | 0.714      | 0.143        | 0.215 (0.022)    | 1.000 (0.102)    | -         |    15.01 | kraghen, Nodios, Patti, Queenix, salazar |
|           45 |     1667 | 2024-05-05 | Kronjyllands     | W   | 0.713      | -            | -                | -                | -         |     0.40 | kraghen, Nodios, Patti, Queenix, salazar |
|           44 |     1697 | 2024-05-03 | AMKAL            | L   | 0.700      | -            | -                | -                | -         |    -9.61 | kraghen, Nodios, Patti, Queenix, salazar |
|           43 |     1726 | 2024-05-02 | HAVU             | W   | 0.693      | -            | -                | -                | -         |     2.59 | kraghen, Nodios, Patti, Queenix, salazar |
|           42 |     1733 | 2024-05-02 | SINNERS          | W   | 0.692      | 0.435        | 0.058 (0.017)    | 0.744 (0.224)    | -         |     9.17 | kraghen, Nodios, Patti, Queenix, salazar |
|           41 |     1768 | 2024-04-30 | AMKAL            | L   | 0.681      | -            | -                | -                | -         |    -9.85 | kraghen, Nodios, Patti, Queenix, salazar |
|           40 |     1795 | 2024-04-29 | kONO             | L   | 0.673      | -            | -                | -                | -         |   -17.18 | kraghen, Nodios, Patti, Queenix, salazar |
|           39 |     1820 | 2024-04-28 | 9 Pandas         | L   | 0.665      | -            | -                | -                | -         |   -12.97 | kraghen, Nodios, Patti, Queenix, salazar |
|           38 |     1869 | 2024-04-26 | ALTERNATE aTTaX  | L   | 0.652      | -            | -                | -                | -         |   -14.66 | kraghen, Nodios, Patti, Queenix, salazar |
|           37 |     1930 | 2024-04-23 | Sashi            | L   | 0.633      | -            | -                | -                | -         |    -9.44 | kraghen, Nodios, Patti, Queenix, salazar |
|           36 |     1945 | 2024-04-22 | BLEED            | L   | 0.626      | -            | -                | -                | -         |   -10.60 | kraghen, Nodios, Patti, Queenix, salazar |
|           35 |     1963 | 2024-04-21 | AMKAL            | W   | 0.620      | 0.384        | 0.134 (0.032)    | 0.523 (0.125)    | -         |     8.65 | kraghen, Nodios, Patti, Queenix, salazar |
|           34 |     2000 | 2024-04-20 | Nemiga           | W   | 0.612      | 0.384        | 0.498 (0.117)    | 0.725 (0.171)    | -         |    12.40 | kraghen, Nodios, Patti, Queenix, salazar |
|           33 |     2135 | 2024-04-17 | SINNERS          | W   | 0.592      | 0.384        | 0.058 (0.013)    | 0.744 (0.169)    | -         |     9.11 | kraghen, Nodios, Patti, Queenix, salazar |
|           32 |     2163 | 2024-04-16 | Permitta         | W   | 0.586      | 0.384        | -                | 0.794 (0.179)    | -         |     5.55 | kraghen, Nodios, Patti, Queenix, salazar |
|           31 |     2491 | 2024-04-04 | JANO             | W   | 0.505      | -            | -                | -                | -         |     1.21 | kraghen, Nodios, Patti, Queenix, salazar |
|           30 |     2706 | 2024-03-23 | G2               | L   | 0.427      | -            | -                | -                | -         |    -0.14 | kraghen, Nodios, Patti, Queenix, salazar |
|           29 |     2715 | 2024-03-22 | FURIA            | W   | 0.421      | 1.000        | 0.253 (0.107)    | 0.483 (0.203)    | 1 (0.421) |    12.48 | kraghen, Nodios, Patti, Queenix, salazar |
|           28 |     2736 | 2024-03-21 | Cloud9           | L   | 0.414      | -            | -                | -                | -         |    -4.97 | kraghen, Nodios, Patti, Queenix, salazar |
|           27 |     2751 | 2024-03-21 | MOUZ             | L   | 0.412      | -            | -                | -                | -         |    -0.10 | kraghen, Nodios, Patti, Queenix, salazar |
|           26 |     2782 | 2024-03-19 | Imperial         | W   | 0.401      | 0.143        | 0.386 (0.022)    | -                | 1 (0.401) |    11.05 | kraghen, Nodios, Patti, Queenix, salazar |
|           25 |     2796 | 2024-03-18 | Lynn Vision      | W   | 0.392      | -            | -                | -                | 1 (0.392) |     6.32 | kraghen, Nodios, Patti, Queenix, salazar |
|           24 |     2817 | 2024-03-17 | The MongolZ      | W   | 0.387      | 0.143        | 1.000 (0.055)    | -                | 1 (0.387) |    12.09 | kraghen, Nodios, Patti, Queenix, salazar |
|           23 |     2828 | 2024-03-17 | Cloud9           | L   | 0.386      | -            | -                | -                | -         |    -4.49 | kraghen, Nodios, Patti, Queenix, salazar |
|           22 |     3163 | 2024-03-04 | BetBoom          | L   | 0.299      | -            | -                | -                | -         |    -0.54 | kraghen, Nodios, Patti, Queenix, salazar |
|           21 |     3169 | 2024-03-03 | ex-Preasy        | L   | 0.295      | -            | -                | -                | -         |    -7.32 | kraghen, Nodios, Patti, Queenix, salazar |
|           20 |     3175 | 2024-03-03 | fnatic           | W   | 0.294      | -            | -                | -                | -         |     8.64 | kraghen, Nodios, Patti, Queenix, salazar |
|           19 |     3187 | 2024-03-03 | SINNERS          | W   | 0.294      | -            | -                | -                | -         |     4.64 | kraghen, Nodios, Patti, Queenix, salazar |
|           18 |     3192 | 2024-03-03 | Monte            | W   | 0.292      | 0.500        | 0.103 (0.015)    | -                | -         |     4.92 | kraghen, Nodios, Patti, Queenix, salazar |
|           17 |     3209 | 2024-03-02 | PARIVISION       | W   | 0.286      | 0.500        | -                | 0.424 (0.061)    | -         |     2.95 | kraghen, Nodios, Patti, Queenix, salazar |
|           16 |     3234 | 2024-02-29 | 3DMAX            | L   | 0.275      | -            | -                | -                | -         |    -2.85 | kraghen, Nodios, Patti, Queenix, salazar |
|           15 |     3379 | 2024-02-22 | ex-Guild Eagles  | W   | 0.226      | -            | -                | -                | 1 (0.226) |     1.72 | kraghen, Nodios, Patti, Queenix, salazar |
|           14 |     3406 | 2024-02-21 | Apeks            | L   | 0.219      | -            | -                | -                | -         |    -4.03 | kraghen, Nodios, Patti, Queenix, salazar |
|           13 |     3437 | 2024-02-20 | OG               | W   | 0.212      | -            | -                | -                | 1 (0.212) |     3.60 | kraghen, Nodios, Patti, Queenix, salazar |
|           12 |     3452 | 2024-02-19 | MOUZ             | L   | 0.207      | -            | -                | -                | -         |    -0.04 | kraghen, Nodios, Patti, Queenix, salazar |
|           11 |     3463 | 2024-02-19 | Monte            | W   | 0.206      | -            | -                | -                | 1 (0.206) |     3.58 | kraghen, Nodios, Patti, Queenix, salazar |
|           10 |     3678 | 2024-02-09 | ex-Preasy        | L   | 0.139      | -            | -                | -                | -         |    -3.48 | kraghen, Nodios, Patti, Queenix, salazar |
|            9 |     3698 | 2024-02-07 | TSM              | W   | 0.126      | -            | -                | -                | -         |     0.44 | kraghen, Nodios, Patti, Queenix, salazar |
|            8 |     3720 | 2024-02-05 | ex-Preasy        | W   | 0.112      | -            | -                | -                | -         |     0.71 | kraghen, Nodios, Patti, Queenix, salazar |
|            7 |     3758 | 2024-02-03 | Sashi            | L   | 0.100      | -            | -                | -                | -         |    -1.37 | kraghen, Nodios, Patti, Queenix, salazar |
|            6 |     3802 | 2024-02-02 | Into the Breach  | W   | 0.092      | -            | -                | -                | -         |     0.23 | kraghen, Nodios, Patti, Queenix, salazar |
|            5 |     3885 | 2024-01-28 | Sangal           | W   | 0.059      | -            | -                | -                | -         |     1.11 | kraghen, Nodios, Patti, Queenix, salazar |
|            4 |     3955 | 2024-01-24 | Alliance         | W   | 0.032      | -            | -                | -                | -         |     0.26 | kraghen, Nodios, Patti, Queenix, salazar |
|            3 |     4028 | 2024-01-21 | PERA             | W   | 0.013      | -            | -                | -                | -         |     0.15 | kraghen, Nodios, Patti, Queenix, salazar |
|            2 |     4054 | 2024-01-20 | fnatic           | L   | 0.008      | -            | -                | -                | -         |    -0.01 | kraghen, Nodios, Patti, Queenix, salazar |
|            1 |     4072 | 2024-01-20 | Permitta         | W   | 0.006      | -            | -                | -                | -         |     0.06 | kraghen, Nodios, Patti, Queenix, salazar |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($16,355.16)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.07) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-18 |      0.801 | $1,000.00      | $800.69         |
| 2024-05-04 |      0.707 | $2,000.00      | $1,413.91       |
| 2024-05-02 |      0.694 | $1,000.00      | $693.85         |
| 2024-04-22 |      0.626 | $5,000.00      | $3,129.89       |
| 2024-03-31 |      0.481 | $20,000.00     | $9,620.56       |
| 2024-02-09 |      0.139 | $5,000.00      | $696.25         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
