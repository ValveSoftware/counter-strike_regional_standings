### Roster Details<br />
Team Name: 9 Pandas<br />
Roster: clax, d1Ledez, glowiing, iDISBALANCE, shalfey<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [48](../standings_global.md)<br />
Regional Rank: [35]( ../standings_europe.md)<br />
Final Rank Value:  1118.3<br />
<br />
Final Rank Value (1118.3) = Starting Rank Value (1105.5) + Head To Head Adjustments (12.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.526[<sup>1</sup>](#table2)
- Bounty Collected: 0.425[<sup>2</sup>](#table1)
- Opponent Network: 0.266[<sup>2</sup>](#table1)
- LAN Wins: 0.097[<sup>2</sup>](#table1)

The average of these factors is 0.328<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1105.5
- 400 + ( ( 0.328 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 1105.5


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
|           54 |      508 | 2024-06-10 | Aurora            | L   | 0.952      | -            | -                | -                | -         |    -6.14 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|           53 |      510 | 2024-06-10 | SINNERS           | W   | 0.952      | -            | -                | -                | 0 (0.000) |    12.54 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|           52 |      515 | 2024-06-10 | 3DMAX             | L   | 0.952      | -            | -                | -                | -         |   -13.60 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|           51 |      549 | 2024-06-09 | RUSH B            | L   | 0.946      | -            | -                | -                | -         |   -22.42 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|           50 |      558 | 2024-06-09 | PARIVISION        | L   | 0.946      | -            | -                | -                | -         |   -19.47 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|           49 |      564 | 2024-06-09 | SAW               | W   | 0.945      | 0.143        | 0.147 (0.020)    | -                | 0 (0.000) |    18.06 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|           48 |      574 | 2024-06-09 | Monte             | W   | 0.945      | -            | -                | -                | 0 (0.000) |    10.22 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|           47 |      837 | 2024-06-04 | Sangal            | L   | 0.914      | -            | -                | -                | -         |   -14.60 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|           46 |     1061 | 2024-05-26 | MOUZ NXT          | W   | 0.854      | 0.435        | 0.150 (0.056)    | 1.000 (0.371)    | 0 (0.000) |    11.94 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           45 |     1065 | 2024-05-26 | 1WIN              | W   | 0.853      | 0.435        | -                | 0.545 (0.202)    | 0 (0.000) |    11.21 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           44 |     1079 | 2024-05-25 | Space             | W   | 0.847      | -            | -                | -                | 0 (0.000) |     6.71 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           43 |     1105 | 2024-05-24 | SINNERS           | W   | 0.839      | 0.435        | 0.058 (0.021)    | 0.744 (0.271)    | -         |    11.21 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           42 |     1234 | 2024-05-20 | BLEED             | L   | 0.814      | -            | -                | -                | -         |    -8.57 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           41 |     1287 | 2024-05-18 | Passion UA        | W   | 0.800      | 0.500        | 0.087 (0.035)    | 0.847 (0.339)    | -         |     8.69 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           40 |     1359 | 2024-05-16 | ALTERNATE aTTaX   | W   | 0.787      | 0.500        | -                | 0.644 (0.253)    | -         |     8.98 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           39 |     1520 | 2024-05-12 | BetBoom           | L   | 0.760      | -            | -                | -                | -         |    -2.15 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           38 |     1546 | 2024-05-11 | RUBY              | W   | 0.754      | 0.435        | 0.144 (0.047)    | 0.580 (0.190)    | -         |     9.20 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           37 |     1593 | 2024-05-09 | Zero Tenacity     | W   | 0.739      | 0.435        | 0.154 (0.049)    | 1.000 (0.321)    | -         |    10.74 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           36 |     1633 | 2024-05-07 | Sashi             | L   | 0.727      | -            | -                | -                | -         |    -6.88 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           35 |     1678 | 2024-05-05 | ARCRED            | W   | 0.711      | -            | -                | -                | -         |     6.23 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           34 |     1687 | 2024-05-04 | BetBoom           | L   | 0.706      | -            | -                | -                | -         |    -1.55 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           33 |     1693 | 2024-05-03 | fnatic            | W   | 0.701      | 0.435        | 0.300 (0.091)    | 0.632 (0.193)    | -         |    20.32 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           32 |     1737 | 2024-05-02 | MOUZ NXT          | W   | 0.691      | 0.435        | 0.150 (0.045)    | 1.000 (0.300)    | -         |    12.38 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           31 |     1783 | 2024-04-30 | Passion UA        | L   | 0.679      | -            | -                | -                | -         |   -13.20 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           30 |     1820 | 2024-04-28 | Gaimin Gladiators | W   | 0.665      | 0.500        | 0.067 (0.022)    | -                | -         |    12.97 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           29 |     1860 | 2024-04-26 | Passion UA        | L   | 0.653      | -            | -                | -                | -         |   -12.80 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           28 |     2049 | 2024-04-19 | Alliance          | L   | 0.605      | -            | -                | -                | -         |   -13.49 | clax, d1Ledez, glowiing, iDISBALANCE, Xoma    |
|           27 |     2133 | 2024-04-17 | Sangal            | L   | 0.592      | -            | -                | -                | -         |    -7.95 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           26 |     2283 | 2024-04-10 | SAW               | L   | 0.548      | -            | -                | -                | -         |    -4.58 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           25 |     2336 | 2024-04-09 | SINNERS           | L   | 0.541      | -            | -                | -                | -         |    -7.69 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           24 |     2359 | 2024-04-09 | Aurora            | L   | 0.539      | -            | -                | -                | -         |    -0.76 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           23 |     2373 | 2024-04-08 | 1WIN              | L   | 0.534      | -            | -                | -                | -         |   -11.68 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           22 |     2382 | 2024-04-08 | Metizport         | W   | 0.533      | -            | -                | -                | -         |     6.67 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           21 |     2443 | 2024-04-05 | Secret            | L   | 0.513      | -            | -                | -                | -         |   -15.45 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           20 |     2474 | 2024-04-04 | TSM               | W   | 0.508      | -            | -                | -                | -         |     1.67 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           19 |     2519 | 2024-04-03 | EYEBALLERS        | W   | 0.501      | -            | -                | -                | -         |     4.28 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           18 |     2527 | 2024-04-03 | 9INE              | W   | 0.500      | -            | -                | -                | -         |     0.58 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           17 |     2554 | 2024-04-02 | Sangal            | W   | 0.494      | 0.500        | 0.232 (0.057)    | 0.893 (0.221)    | -         |     8.22 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           16 |     3087 | 2024-03-06 | KOI               | L   | 0.315      | -            | -                | -                | -         |    -3.74 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           15 |     3227 | 2024-03-01 | Aurora            | L   | 0.280      | -            | -                | -                | -         |    -0.39 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           14 |     3233 | 2024-02-29 | FORZE             | L   | 0.275      | -            | -                | -                | -         |    -5.83 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           13 |     3247 | 2024-02-28 | Spirit Academy    | W   | 0.268      | -            | -                | -                | -         |     0.38 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           12 |     3253 | 2024-02-28 | Croatia           | W   | 0.266      | -            | -                | -                | -         |     0.27 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           11 |     3345 | 2024-02-24 | GamerLegion       | W   | 0.240      | -            | -                | -                | 1 (0.240) |     2.13 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           10 |     3362 | 2024-02-23 | Astralis          | W   | 0.232      | -            | -                | -                | 1 (0.232) |     7.22 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|            9 |     3509 | 2024-02-17 | AMKAL             | L   | 0.193      | -            | -                | -                | -         |    -2.93 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|            8 |     3531 | 2024-02-16 | 3DMAX             | W   | 0.187      | -            | -                | -                | 1 (0.187) |     3.95 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|            7 |     3567 | 2024-02-15 | KOI               | L   | 0.179      | -            | -                | -                | -         |    -2.13 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|            6 |     3598 | 2024-02-14 | SAW               | W   | 0.173      | -            | -                | -                | 1 (0.173) |     3.84 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|            5 |     3610 | 2024-02-14 | FaZe              | L   | 0.172      | -            | -                | -                | -         |    -0.06 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|            4 |     3863 | 2024-01-30 | Nemiga            | L   | 0.074      | -            | -                | -                | -         |    -0.64 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|            3 |     3882 | 2024-01-28 | Rebels            | W   | 0.060      | -            | -                | -                | -         |     0.81 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|            2 |     4051 | 2024-01-20 | 3DMAX             | W   | 0.008      | -            | -                | -                | -         |     0.17 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|            1 |     4064 | 2024-01-20 | SAW               | L   | 0.007      | -            | -                | -                | -         |    -0.06 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($30,855.86)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.13) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.948 | $5,000.00      | $4,738.03       |
| 2024-05-26 |      0.854 | $22,000.00     | $18,779.64      |
| 2024-05-12 |      0.761 | $5,000.00      | $3,803.43       |
| 2024-05-04 |      0.707 | $5,000.00      | $3,534.77       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
