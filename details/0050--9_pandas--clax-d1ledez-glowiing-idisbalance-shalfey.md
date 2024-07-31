### Roster Details<br />
Team Name: 9 Pandas<br />
Roster: clax, d1Ledez, glowiing, iDISBALANCE, shalfey<br />
Global Rank: [50](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [38]( ../standings_europe.md)<br />
<br />
Final Rank Value:  1058.9<br />
<br />
Final Rank Value (1058.9) = Starting Rank Value (1009.9) + Head To Head Adjustments (49.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.481[<sup>1</sup>](#table2)
- Bounty Collected: 0.415[<sup>2</sup>](#table1)
- Opponent Network: 0.233[<sup>2</sup>](#table1)
- LAN Wins: 0.052[<sup>2</sup>](#table1)

The average of these factors is 0.295<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1009.9
- 400 + ( ( 0.295 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 1009.9


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
|           55 |       47 | 2024-07-30 | TSM               | L   | 1.000      | -            | -                | -                | -         |   -19.80 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|           54 |       57 | 2024-07-30 | Insilio           | W   | 1.000      | -            | -                | -                | 0 (0.000) |    11.03 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|           53 |      115 | 2024-07-28 | QUAZAR            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     0.73 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|           52 |      281 | 2024-07-23 | Betera            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.03 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|           51 |      512 | 2024-07-17 | 3DMAX             | L   | 1.000      | -            | -                | -                | -         |    -5.33 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|           50 |     1038 | 2024-06-10 | Aurora            | L   | 0.858      | -            | -                | -                | -         |    -3.70 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|           49 |     1040 | 2024-06-10 | SINNERS           | W   | 0.858      | -            | -                | -                | 0 (0.000) |    11.75 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|           48 |     1045 | 2024-06-10 | 3DMAX             | L   | 0.857      | -            | -                | -                | -         |    -3.38 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|           47 |     1079 | 2024-06-09 | RUSH B            | L   | 0.852      | -            | -                | -                | -         |   -19.14 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|           46 |     1088 | 2024-06-09 | PARIVISION        | L   | 0.851      | -            | -                | -                | -         |   -13.61 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|           45 |     1094 | 2024-06-09 | SAW               | W   | 0.851      | 0.143        | 0.108 (0.013)    | -                | 0 (0.000) |    16.82 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|           44 |     1104 | 2024-06-09 | Monte             | W   | 0.851      | -            | -                | -                | 0 (0.000) |    11.51 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|           43 |     1367 | 2024-06-04 | Sangal            | L   | 0.819      | -            | -                | -                | -         |   -11.34 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|           42 |     1591 | 2024-05-26 | MOUZ NXT          | W   | 0.759      | 0.435        | 0.141 (0.047)    | 1.000 (0.330)    | -         |    11.86 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           41 |     1595 | 2024-05-26 | 1WIN              | W   | 0.758      | 0.435        | -                | 0.630 (0.207)    | -         |    10.11 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           40 |     1609 | 2024-05-25 | Space             | W   | 0.753      | -            | -                | -                | -         |     6.46 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           39 |     1635 | 2024-05-24 | SINNERS           | W   | 0.745      | 0.435        | 0.038 (0.012)    | 0.721 (0.233)    | -         |    10.64 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           38 |     1764 | 2024-05-20 | BLEED             | L   | 0.719      | -            | -                | -                | -         |    -2.83 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           37 |     1817 | 2024-05-18 | Passion UA        | W   | 0.706      | 0.500        | 0.172 (0.061)    | 1.000 (0.353)    | -         |    10.48 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           36 |     1889 | 2024-05-16 | ALTERNATE aTTaX   | W   | 0.692      | 0.500        | -                | 0.564 (0.195)    | -         |     8.85 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           35 |     2050 | 2024-05-12 | BetBoom           | L   | 0.665      | -            | -                | -                | -         |    -2.28 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           34 |     2076 | 2024-05-11 | RUBY              | W   | 0.659      | 0.435        | 0.097 (0.028)    | 0.506 (0.145)    | -         |     8.48 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           33 |     2123 | 2024-05-09 | Zero Tenacity     | W   | 0.645      | 0.435        | 0.139 (0.039)    | 1.000 (0.280)    | -         |    11.22 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           32 |     2163 | 2024-05-07 | Sashi             | L   | 0.632      | -            | -                | -                | -         |    -4.82 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           31 |     2208 | 2024-05-05 | ARCRED            | W   | 0.617      | -            | -                | -                | -         |     6.19 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           30 |     2217 | 2024-05-04 | BetBoom           | L   | 0.612      | -            | -                | -                | -         |    -1.67 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           29 |     2223 | 2024-05-03 | fnatic            | W   | 0.607      | 0.435        | 0.374 (0.099)    | 0.633 (0.167)    | -         |    18.14 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           28 |     2267 | 2024-05-02 | MOUZ NXT          | W   | 0.597      | 0.435        | 0.141 (0.037)    | 1.000 (0.259)    | -         |    11.35 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           27 |     2313 | 2024-04-30 | Passion UA        | L   | 0.584      | -            | -                | -                | -         |    -8.60 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           26 |     2350 | 2024-04-28 | Gaimin Gladiators | W   | 0.571      | 0.500        | 0.040 (0.011)    | -                | -         |    10.30 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           25 |     2390 | 2024-04-26 | Passion UA        | L   | 0.559      | -            | -                | -                | -         |    -8.14 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           24 |     2579 | 2024-04-19 | Alliance          | L   | 0.511      | -            | -                | -                | -         |   -11.01 | clax, d1Ledez, glowiing, iDISBALANCE, Xoma    |
|           23 |     2663 | 2024-04-17 | Sangal            | L   | 0.497      | -            | -                | -                | -         |    -5.11 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           22 |     2813 | 2024-04-10 | SAW               | L   | 0.453      | -            | -                | -                | -         |    -3.63 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           21 |     2866 | 2024-04-09 | SINNERS           | L   | 0.447      | -            | -                | -                | -         |    -6.04 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           20 |     2889 | 2024-04-09 | Aurora            | L   | 0.444      | -            | -                | -                | -         |    -0.34 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           19 |     2903 | 2024-04-08 | 1WIN              | L   | 0.439      | -            | -                | -                | -         |    -9.05 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           18 |     2912 | 2024-04-08 | Metizport         | W   | 0.438      | -            | -                | -                | -         |     5.89 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           17 |     2973 | 2024-04-05 | Secret            | L   | 0.418      | -            | -                | -                | -         |   -12.35 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           16 |     3004 | 2024-04-04 | TSM               | W   | 0.413      | -            | -                | -                | -         |     1.67 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           15 |     3049 | 2024-04-03 | EYEBALLERS        | W   | 0.406      | -            | -                | -                | -         |     4.44 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           14 |     3057 | 2024-04-03 | 9INE              | W   | 0.405      | -            | -                | -                | -         |     0.74 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           13 |     3084 | 2024-04-02 | Sangal            | W   | 0.400      | 0.500        | 0.221 (0.044)    | 0.824 (0.165)    | -         |     8.22 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           12 |     3617 | 2024-03-06 | KOI               | L   | 0.220      | -            | -                | -                | -         |    -2.58 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           11 |     3757 | 2024-03-01 | Aurora            | L   | 0.185      | -            | -                | -                | -         |    -0.13 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           10 |     3763 | 2024-02-29 | FORZE             | L   | 0.180      | -            | -                | -                | -         |    -3.65 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|            9 |     3777 | 2024-02-28 | Spirit Academy    | W   | 0.173      | -            | -                | -                | -         |     0.38 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|            8 |     3783 | 2024-02-28 | Croatia           | W   | 0.172      | -            | -                | -                | -         |     0.28 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|            7 |     3875 | 2024-02-24 | GamerLegion       | W   | 0.146      | -            | -                | -                | 1 (0.146) |     1.09 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|            6 |     3892 | 2024-02-23 | Astralis          | W   | 0.138      | -            | -                | -                | 1 (0.138) |     4.24 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|            5 |     4039 | 2024-02-17 | AMKAL             | L   | 0.098      | -            | -                | -                | -         |    -0.95 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|            4 |     4061 | 2024-02-16 | 3DMAX             | W   | 0.092      | -            | -                | -                | 1 (0.092) |     2.84 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|            3 |     4097 | 2024-02-15 | KOI               | L   | 0.084      | -            | -                | -                | -         |    -0.98 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|            2 |     4128 | 2024-02-14 | SAW               | W   | 0.079      | -            | -                | -                | 1 (0.079) |     1.80 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|            1 |     4140 | 2024-02-14 | FaZe              | L   | 0.077      | -            | -                | -                | -         |    -0.04 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($27,358.89)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.08) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.853 | $5,000.00      | $4,265.46       |
| 2024-05-26 |      0.759 | $22,000.00     | $16,700.36      |
| 2024-05-12 |      0.666 | $5,000.00      | $3,330.86       |
| 2024-05-04 |      0.612 | $5,000.00      | $3,062.21       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
