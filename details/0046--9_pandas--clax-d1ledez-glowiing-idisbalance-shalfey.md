### Roster Details<br />
Team Name: 9 Pandas<br />
Roster: clax, d1Ledez, glowiing, iDISBALANCE, shalfey<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [46](../standings_global.md)<br />
Regional Rank: [33]( ../standings_europe.md)<br />
Final Rank Value:  1147.6<br />
<br />
Final Rank Value (1147.6) = Starting Rank Value (1142.5) + Head To Head Adjustments (5.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.515[<sup>1</sup>](#table2)
- Bounty Collected: 0.445[<sup>2</sup>](#table1)
- Opponent Network: 0.334[<sup>2</sup>](#table1)
- LAN Wins: 0.168[<sup>2</sup>](#table1)

The average of these factors is 0.365<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1142.5
- 400 + ( ( 0.365 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 1142.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           57 |      208 | 2024-06-10 | Aurora            | L   | 1.000      | -            | -                | -                | -         |    -8.23 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|           56 |      210 | 2024-06-10 | SINNERS           | W   | 1.000      | -            | -                | -                | 0 (0.000) |    11.63 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|           55 |      215 | 2024-06-10 | 3DMAX             | L   | 1.000      | -            | -                | -                | -         |   -15.53 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|           54 |      249 | 2024-06-09 | RUSH B            | L   | 1.000      | -            | -                | -                | -         |   -24.79 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|           53 |      258 | 2024-06-09 | PARIVISION        | L   | 1.000      | -            | -                | -                | -         |   -20.73 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|           52 |      264 | 2024-06-09 | SAW               | W   | 1.000      | -            | -                | -                | 0 (0.000) |    19.28 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|           51 |      274 | 2024-06-09 | Monte             | W   | 1.000      | 0.143        | 0.189 (0.027)    | -                | 0 (0.000) |    18.36 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|           50 |      537 | 2024-06-04 | Sangal            | L   | 1.000      | -            | -                | -                | -         |   -16.96 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|           49 |      763 | 2024-05-26 | MOUZ NXT          | W   | 1.000      | 0.435        | 0.158 (0.069)    | 1.000 (0.435)    | 0 (0.000) |    12.89 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           48 |      767 | 2024-05-26 | 1WIN              | W   | 1.000      | 0.435        | -                | 0.592 (0.257)    | 0 (0.000) |    13.69 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           47 |      781 | 2024-05-25 | Space             | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.75 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           46 |      807 | 2024-05-24 | SINNERS           | W   | 1.000      | 0.435        | -                | 0.782 (0.340)    | -         |    11.75 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           45 |      936 | 2024-05-20 | BLEED             | L   | 1.000      | -            | -                | -                | -         |    -9.86 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           44 |      989 | 2024-05-18 | Passion UA        | W   | 0.995      | 0.500        | 0.086 (0.043)    | 0.803 (0.400)    | -         |     9.69 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           43 |     1061 | 2024-05-16 | ALTERNATE aTTaX   | W   | 0.982      | 0.500        | -                | 0.573 (0.281)    | -         |     9.50 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           42 |     1222 | 2024-05-12 | BetBoom           | L   | 0.955      | -            | -                | -                | -         |    -3.41 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           41 |     1248 | 2024-05-11 | RUBY              | W   | 0.949      | 0.435        | 0.121 (0.050)    | -                | -         |     9.83 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           40 |     1295 | 2024-05-09 | Zero Tenacity     | W   | 0.934      | 0.435        | 0.153 (0.062)    | 1.000 (0.406)    | -         |    12.22 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           39 |     1335 | 2024-05-07 | Sashi             | L   | 0.922      | -            | -                | -                | -         |    -8.32 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           38 |     1380 | 2024-05-05 | ARCRED            | W   | 0.907      | -            | -                | -                | -         |     6.25 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           37 |     1389 | 2024-05-04 | BetBoom           | L   | 0.901      | -            | -                | -                | -         |    -2.49 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           36 |     1395 | 2024-05-03 | fnatic            | W   | 0.896      | 0.435        | 0.290 (0.113)    | 0.666 (0.259)    | -         |    24.62 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           35 |     1439 | 2024-05-02 | MOUZ NXT          | W   | 0.887      | 0.435        | 0.158 (0.061)    | 1.000 (0.385)    | -         |    15.29 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           34 |     1485 | 2024-04-30 | Passion UA        | L   | 0.874      | -            | -                | -                | -         |   -18.03 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           33 |     1522 | 2024-04-28 | Gaimin Gladiators | W   | 0.861      | 0.500        | 0.076 (0.033)    | 0.632 (0.272)    | -         |    18.55 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           32 |     1562 | 2024-04-26 | Passion UA        | L   | 0.849      | -            | -                | -                | -         |   -17.67 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           31 |     1751 | 2024-04-19 | Alliance          | L   | 0.801      | -            | -                | -                | -         |   -18.74 | clax, d1Ledez, glowiing, iDISBALANCE, Xoma    |
|           30 |     1835 | 2024-04-17 | Sangal            | L   | 0.787      | -            | -                | -                | -         |   -12.41 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           29 |     1985 | 2024-04-10 | SAW               | L   | 0.743      | -            | -                | -                | -         |    -5.44 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           28 |     2038 | 2024-04-09 | SINNERS           | L   | 0.737      | -            | -                | -                | -         |   -11.94 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           27 |     2061 | 2024-04-09 | Aurora            | L   | 0.734      | -            | -                | -                | -         |    -1.57 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           26 |     2075 | 2024-04-08 | 1WIN              | L   | 0.729      | -            | -                | -                | -         |   -16.37 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           25 |     2084 | 2024-04-08 | Metizport         | W   | 0.728      | -            | -                | -                | -         |     9.05 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           24 |     2145 | 2024-04-05 | Secret            | L   | 0.708      | -            | -                | -                | -         |   -21.48 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           23 |     2176 | 2024-04-04 | TSM               | W   | 0.703      | -            | -                | -                | -         |     1.93 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           22 |     2221 | 2024-04-03 | EYEBALLERS        | W   | 0.696      | -            | -                | -                | -         |     4.65 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           21 |     2229 | 2024-04-03 | 9INE              | W   | 0.695      | -            | -                | -                | -         |     0.59 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           20 |     2256 | 2024-04-02 | Sangal            | W   | 0.689      | 0.500        | 0.216 (0.075)    | 0.884 (0.305)    | -         |     8.95 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           19 |     2790 | 2024-03-06 | KOI               | L   | 0.510      | -            | -                | -                | -         |    -7.18 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           18 |     2930 | 2024-03-01 | Aurora            | L   | 0.475      | -            | -                | -                | -         |    -1.04 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           17 |     2936 | 2024-02-29 | FORZE             | L   | 0.470      | -            | -                | -                | -         |   -10.41 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           16 |     2950 | 2024-02-28 | Spirit Academy    | W   | 0.463      | -            | -                | -                | -         |     0.95 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           15 |     2956 | 2024-02-28 | Lotus             | W   | 0.462      | -            | -                | -                | -         |     0.37 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           14 |     3048 | 2024-02-24 | GamerLegion       | W   | 0.435      | -            | -                | -                | 1 (0.435) |     5.79 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           13 |     3065 | 2024-02-23 | Astralis          | W   | 0.428      | 0.143        | 0.533 (0.033)    | -                | 1 (0.428) |    13.24 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           12 |     3212 | 2024-02-17 | AMKAL             | L   | 0.388      | -            | -                | -                | -         |    -5.52 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           11 |     3234 | 2024-02-16 | 3DMAX             | W   | 0.382      | -            | -                | -                | 1 (0.382) |     7.07 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           10 |     3270 | 2024-02-15 | KOI               | L   | 0.374      | -            | -                | -                | -         |    -5.33 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|            9 |     3301 | 2024-02-14 | SAW               | W   | 0.369      | -            | -                | -                | 1 (0.369) |     8.33 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|            8 |     3313 | 2024-02-14 | FaZe              | L   | 0.367      | -            | -                | -                | -         |    -0.12 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|            7 |     3566 | 2024-01-30 | Nemiga            | L   | 0.269      | -            | -                | -                | -         |    -2.75 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|            6 |     3585 | 2024-01-28 | Rebels            | W   | 0.256      | -            | -                | -                | -         |     3.29 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|            5 |     3754 | 2024-01-20 | 3DMAX             | W   | 0.203      | -            | -                | -                | -         |     4.10 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|            4 |     3767 | 2024-01-20 | SAW               | L   | 0.202      | -            | -                | -                | -         |    -1.73 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|            3 |     3825 | 2024-01-19 | Gaimin Gladiators | W   | 0.195      | -            | -                | -                | -         |     3.54 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|            2 |     3875 | 2024-01-18 | Natus Vincere     | L   | 0.189      | -            | -                | -                | -         |    -0.07 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|            1 |     3888 | 2024-01-18 | Nexus             | W   | 0.189      | -            | -                | -                | -         |     1.12 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($34,291.03)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.11) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      1.000 | $3,000.00      | $3,000.00       |
| 2024-05-26 |      1.000 | $22,000.00     | $22,000.00      |
| 2024-05-12 |      0.956 | $5,000.00      | $4,779.84       |
| 2024-05-04 |      0.902 | $5,000.00      | $4,511.19       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
