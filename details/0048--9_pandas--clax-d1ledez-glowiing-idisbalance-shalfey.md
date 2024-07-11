### Roster Details<br />
Team Name: 9 Pandas<br />
Roster: clax, d1Ledez, glowiing, iDISBALANCE, shalfey<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [48](../standings_global.md)<br />
Regional Rank: [34]( ../standings_europe.md)<br />
Final Rank Value:  1131.7<br />
<br />
Final Rank Value (1131.7) = Starting Rank Value (1110.2) + Head To Head Adjustments (21.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.526[<sup>1</sup>](#table2)
- Bounty Collected: 0.430[<sup>2</sup>](#table1)
- Opponent Network: 0.276[<sup>2</sup>](#table1)
- LAN Wins: 0.115[<sup>2</sup>](#table1)

The average of these factors is 0.337<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1110.2
- 400 + ( ( 0.337 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 1110.2


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
|           57 |      344 | 2024-06-10 | Aurora            | L   | 0.992      | -            | -                | -                | -         |    -6.75 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|           56 |      346 | 2024-06-10 | SINNERS           | W   | 0.992      | -            | -                | -                | 0 (0.000) |    12.55 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|           55 |      351 | 2024-06-10 | 3DMAX             | L   | 0.991      | -            | -                | -                | -         |   -14.29 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|           54 |      385 | 2024-06-09 | RUSH B            | L   | 0.986      | -            | -                | -                | -         |   -23.47 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|           53 |      394 | 2024-06-09 | PARIVISION        | L   | 0.985      | -            | -                | -                | -         |   -19.95 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|           52 |      400 | 2024-06-09 | SAW               | W   | 0.985      | -            | -                | -                | 0 (0.000) |    18.43 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|           51 |      410 | 2024-06-09 | Monte             | W   | 0.985      | 0.143        | 0.188 (0.026)    | -                | 0 (0.000) |    18.27 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|           50 |      673 | 2024-06-04 | Sangal            | L   | 0.953      | -            | -                | -                | -         |   -15.11 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|           49 |      897 | 2024-05-26 | MOUZ NXT          | W   | 0.893      | 0.435        | 0.152 (0.059)    | 1.000 (0.388)    | 0 (0.000) |    12.35 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           48 |      901 | 2024-05-26 | 1WIN              | W   | 0.892      | 0.435        | -                | 0.570 (0.221)    | 0 (0.000) |    12.06 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           47 |      915 | 2024-05-25 | Space             | W   | 0.887      | -            | -                | -                | 0 (0.000) |     6.51 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           46 |      941 | 2024-05-24 | SINNERS           | W   | 0.879      | 0.435        | 0.057 (0.022)    | 0.767 (0.293)    | -         |    11.51 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           45 |     1070 | 2024-05-20 | BLEED             | L   | 0.853      | -            | -                | -                | -         |    -7.44 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           44 |     1123 | 2024-05-18 | Passion UA        | W   | 0.840      | 0.500        | 0.087 (0.037)    | 0.821 (0.345)    | -         |     8.87 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           43 |     1195 | 2024-05-16 | ALTERNATE aTTaX   | W   | 0.827      | 0.500        | -                | 0.577 (0.239)    | -         |     9.16 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           42 |     1356 | 2024-05-12 | BetBoom           | L   | 0.799      | -            | -                | -                | -         |    -2.24 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           41 |     1382 | 2024-05-11 | RUBY              | W   | 0.793      | 0.435        | 0.139 (0.048)    | 0.563 (0.194)    | -         |     9.12 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           40 |     1429 | 2024-05-09 | Zero Tenacity     | W   | 0.779      | 0.435        | 0.153 (0.052)    | 1.000 (0.338)    | -         |    11.16 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           39 |     1469 | 2024-05-07 | Sashi             | L   | 0.766      | -            | -                | -                | -         |    -7.00 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           38 |     1514 | 2024-05-05 | ARCRED            | W   | 0.751      | -            | -                | -                | -         |     6.26 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           37 |     1523 | 2024-05-04 | BetBoom           | L   | 0.746      | -            | -                | -                | -         |    -1.61 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           36 |     1529 | 2024-05-03 | fnatic            | W   | 0.741      | 0.435        | 0.298 (0.096)    | 0.623 (0.201)    | -         |    21.38 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           35 |     1573 | 2024-05-02 | MOUZ NXT          | W   | 0.731      | 0.435        | 0.152 (0.048)    | 1.000 (0.318)    | -         |    13.23 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           34 |     1619 | 2024-04-30 | Passion UA        | L   | 0.718      | -            | -                | -                | -         |   -14.19 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           33 |     1656 | 2024-04-28 | Gaimin Gladiators | W   | 0.705      | 0.500        | 0.069 (0.024)    | -                | -         |    14.69 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           32 |     1696 | 2024-04-26 | Passion UA        | L   | 0.693      | -            | -                | -                | -         |   -13.79 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           31 |     1885 | 2024-04-19 | Alliance          | L   | 0.645      | -            | -                | -                | -         |   -14.36 | clax, d1Ledez, glowiing, iDISBALANCE, Xoma    |
|           30 |     1969 | 2024-04-17 | Sangal            | L   | 0.632      | -            | -                | -                | -         |    -8.65 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           29 |     2119 | 2024-04-10 | SAW               | L   | 0.587      | -            | -                | -                | -         |    -4.81 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           28 |     2172 | 2024-04-09 | SINNERS           | L   | 0.581      | -            | -                | -                | -         |    -8.49 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           27 |     2195 | 2024-04-09 | Aurora            | L   | 0.578      | -            | -                | -                | -         |    -0.86 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           26 |     2209 | 2024-04-08 | 1WIN              | L   | 0.573      | -            | -                | -                | -         |   -12.45 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           25 |     2218 | 2024-04-08 | Metizport         | W   | 0.572      | -            | -                | -                | -         |     7.21 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           24 |     2279 | 2024-04-05 | Secret            | L   | 0.552      | -            | -                | -                | -         |   -16.66 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           23 |     2310 | 2024-04-04 | TSM               | W   | 0.547      | -            | -                | -                | -         |     1.77 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           22 |     2355 | 2024-04-03 | EYEBALLERS        | W   | 0.540      | -            | -                | -                | -         |     4.44 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           21 |     2363 | 2024-04-03 | 9INE              | W   | 0.539      | -            | -                | -                | -         |     0.59 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           20 |     2390 | 2024-04-02 | Sangal            | W   | 0.534      | 0.500        | 0.231 (0.062)    | 0.853 (0.228)    | -         |     8.57 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           19 |     2923 | 2024-03-06 | KOI               | L   | 0.354      | -            | -                | -                | -         |    -4.43 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           18 |     3063 | 2024-03-01 | Aurora            | L   | 0.319      | -            | -                | -                | -         |    -0.47 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           17 |     3069 | 2024-02-29 | FORZE             | L   | 0.314      | -            | -                | -                | -         |    -6.71 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           16 |     3083 | 2024-02-28 | Spirit Academy    | W   | 0.307      | -            | -                | -                | -         |     0.42 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           15 |     3089 | 2024-02-28 | Croatia           | W   | 0.306      | -            | -                | -                | -         |     0.30 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           14 |     3181 | 2024-02-24 | GamerLegion       | W   | 0.280      | -            | -                | -                | 1 (0.280) |     2.85 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           13 |     3198 | 2024-02-23 | Astralis          | W   | 0.272      | -            | -                | -                | 1 (0.272) |     8.46 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           12 |     3345 | 2024-02-17 | AMKAL             | L   | 0.232      | -            | -                | -                | -         |    -3.40 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           11 |     3367 | 2024-02-16 | 3DMAX             | W   | 0.226      | -            | -                | -                | 1 (0.226) |     4.71 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           10 |     3403 | 2024-02-15 | KOI               | L   | 0.218      | -            | -                | -                | -         |    -2.74 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|            9 |     3434 | 2024-02-14 | SAW               | W   | 0.213      | -            | -                | -                | 1 (0.213) |     4.71 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|            8 |     3446 | 2024-02-14 | FaZe              | L   | 0.211      | -            | -                | -                | -         |    -0.07 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|            7 |     3699 | 2024-01-30 | Nemiga            | L   | 0.113      | -            | -                | -                | -         |    -0.97 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|            6 |     3718 | 2024-01-28 | Rebels            | W   | 0.100      | -            | -                | -                | -         |     1.40 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|            5 |     3887 | 2024-01-20 | 3DMAX             | W   | 0.048      | -            | -                | -                | -         |     1.03 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|            4 |     3900 | 2024-01-20 | SAW               | L   | 0.046      | -            | -                | -                | -         |    -0.43 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|            3 |     3958 | 2024-01-19 | Gaimin Gladiators | W   | 0.039      | -            | -                | -                | -         |     0.67 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|            2 |     4008 | 2024-01-18 | Natus Vincere     | L   | 0.034      | -            | -                | -                | -         |    -0.01 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|            1 |     4021 | 2024-01-18 | Romania           | W   | 0.033      | -            | -                | -                | -         |     0.21 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($32,321.44)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.13) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.987 | $5,000.00      | $4,936.08       |
| 2024-05-26 |      0.893 | $22,000.00     | $19,651.07      |
| 2024-05-12 |      0.800 | $5,000.00      | $4,001.48       |
| 2024-05-04 |      0.747 | $5,000.00      | $3,732.82       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
