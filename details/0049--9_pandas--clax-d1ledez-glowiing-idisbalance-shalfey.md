### Roster Details<br />
Team Name: 9 Pandas<br />
Roster: clax, d1Ledez, glowiing, iDISBALANCE, shalfey<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [49](../standings_global.md)<br />
Regional Rank: [36]( ../standings_europe.md)<br />
Final Rank Value:  1062.0<br />
<br />
Final Rank Value (1062.0) = Starting Rank Value (1041.3) + Head To Head Adjustments (20.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.506[<sup>1</sup>](#table2)
- Bounty Collected: 0.430[<sup>2</sup>](#table1)
- Opponent Network: 0.256[<sup>2</sup>](#table1)
- LAN Wins: 0.076[<sup>2</sup>](#table1)

The average of these factors is 0.317<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1041.3
- 400 + ( ( 0.317 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 1041.3


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
|           54 |       39 | 2024-07-23 | Betera            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.09 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|           53 |      270 | 2024-07-17 | 3DMAX             | L   | 1.000      | -            | -                | -                | -         |   -11.71 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|           52 |      796 | 2024-06-10 | Aurora            | L   | 0.905      | -            | -                | -                | -         |    -5.86 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|           51 |      798 | 2024-06-10 | SINNERS           | W   | 0.905      | -            | -                | -                | 0 (0.000) |    12.13 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|           50 |      803 | 2024-06-10 | 3DMAX             | L   | 0.905      | -            | -                | -                | -         |   -11.87 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|           49 |      837 | 2024-06-09 | RUSH B            | L   | 0.899      | -            | -                | -                | -         |   -20.78 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|           48 |      846 | 2024-06-09 | PARIVISION        | L   | 0.899      | -            | -                | -                | -         |   -16.33 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|           47 |      852 | 2024-06-09 | SAW               | W   | 0.898      | 0.143        | 0.121 (0.015)    | -                | 0 (0.000) |    16.92 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|           46 |      862 | 2024-06-09 | Monte             | W   | 0.898      | -            | -                | -                | 0 (0.000) |    10.13 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|           45 |     1125 | 2024-06-04 | Sangal            | L   | 0.867      | -            | -                | -                | -         |   -13.46 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|           44 |     1349 | 2024-05-26 | MOUZ NXT          | W   | 0.806      | 0.435        | 0.169 (0.059)    | 1.000 (0.350)    | 0 (0.000) |    11.76 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           43 |     1353 | 2024-05-26 | 1WIN              | W   | 0.805      | 0.435        | -                | 0.542 (0.190)    | 0 (0.000) |    10.64 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           42 |     1367 | 2024-05-25 | Space             | W   | 0.800      | -            | -                | -                | -         |     6.70 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           41 |     1393 | 2024-05-24 | SINNERS           | W   | 0.792      | 0.435        | 0.048 (0.017)    | 0.769 (0.265)    | -         |    10.82 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           40 |     1522 | 2024-05-20 | BLEED             | L   | 0.766      | -            | -                | -                | -         |    -6.33 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           39 |     1575 | 2024-05-18 | Passion UA        | W   | 0.753      | 0.500        | 0.163 (0.061)    | 1.000 (0.376)    | -         |    10.26 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           38 |     1647 | 2024-05-16 | ALTERNATE aTTaX   | W   | 0.740      | 0.500        | -                | 0.638 (0.236)    | -         |     8.99 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           37 |     1808 | 2024-05-12 | BetBoom           | L   | 0.712      | -            | -                | -                | -         |    -2.45 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           36 |     1834 | 2024-05-11 | RUBY              | W   | 0.706      | 0.435        | 0.122 (0.037)    | 0.575 (0.177)    | -         |     8.91 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           35 |     1881 | 2024-05-09 | Zero Tenacity     | W   | 0.692      | 0.435        | 0.173 (0.052)    | 1.000 (0.301)    | -         |    11.14 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           34 |     1921 | 2024-05-07 | Sashi             | L   | 0.679      | -            | -                | -                | -         |    -5.62 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           33 |     1966 | 2024-05-05 | ARCRED            | W   | 0.664      | -            | -                | -                | -         |     6.07 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           32 |     1975 | 2024-05-04 | BetBoom           | L   | 0.659      | -            | -                | -                | -         |    -1.80 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           31 |     1981 | 2024-05-03 | fnatic            | W   | 0.654      | 0.435        | 0.428 (0.122)    | 0.666 (0.189)    | -         |    19.37 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           30 |     2025 | 2024-05-02 | MOUZ NXT          | W   | 0.644      | 0.435        | 0.169 (0.047)    | 1.000 (0.280)    | -         |    11.89 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           29 |     2071 | 2024-04-30 | Passion UA        | L   | 0.631      | -            | -                | -                | -         |   -10.15 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           28 |     2108 | 2024-04-28 | Gaimin Gladiators | W   | 0.618      | 0.500        | 0.053 (0.016)    | -                | -         |    11.64 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           27 |     2148 | 2024-04-26 | Passion UA        | L   | 0.606      | -            | -                | -                | -         |    -9.68 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           26 |     2337 | 2024-04-19 | Alliance          | L   | 0.558      | -            | -                | -                | -         |   -12.23 | clax, d1Ledez, glowiing, iDISBALANCE, Xoma    |
|           25 |     2421 | 2024-04-17 | Sangal            | L   | 0.545      | -            | -                | -                | -         |    -7.04 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           24 |     2571 | 2024-04-10 | SAW               | L   | 0.501      | -            | -                | -                | -         |    -4.37 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           23 |     2624 | 2024-04-09 | SINNERS           | L   | 0.494      | -            | -                | -                | -         |    -7.01 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           22 |     2647 | 2024-04-09 | Aurora            | L   | 0.492      | -            | -                | -                | -         |    -0.70 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           21 |     2661 | 2024-04-08 | 1WIN              | L   | 0.487      | -            | -                | -                | -         |   -10.37 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           20 |     2670 | 2024-04-08 | Metizport         | W   | 0.486      | -            | -                | -                | -         |     6.40 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           19 |     2731 | 2024-04-05 | Secret            | L   | 0.466      | -            | -                | -                | -         |   -13.85 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           18 |     2762 | 2024-04-04 | TSM               | W   | 0.460      | -            | -                | -                | -         |     1.72 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           17 |     2807 | 2024-04-03 | EYEBALLERS        | W   | 0.453      | -            | -                | -                | -         |     4.33 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           16 |     2815 | 2024-04-03 | 9INE              | W   | 0.452      | -            | -                | -                | -         |     0.71 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           15 |     2842 | 2024-04-02 | Sangal            | W   | 0.447      | 0.500        | 0.195 (0.044)    | 0.860 (0.192)    | -         |     7.75 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           14 |     3375 | 2024-03-06 | KOI               | L   | 0.268      | -            | -                | -                | -         |    -3.35 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           13 |     3515 | 2024-03-01 | Aurora            | L   | 0.233      | -            | -                | -                | -         |    -0.32 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           12 |     3521 | 2024-02-29 | FORZE             | L   | 0.227      | -            | -                | -                | -         |    -4.69 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           11 |     3535 | 2024-02-28 | Spirit Academy    | W   | 0.220      | -            | -                | -                | -         |     0.42 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           10 |     3541 | 2024-02-28 | Croatia           | W   | 0.219      | -            | -                | -                | -         |     0.30 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|            9 |     3633 | 2024-02-24 | GamerLegion       | W   | 0.193      | -            | -                | -                | 1 (0.193) |     1.55 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|            8 |     3650 | 2024-02-23 | Astralis          | W   | 0.185      | -            | -                | -                | 1 (0.185) |     5.70 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|            7 |     3797 | 2024-02-17 | AMKAL             | L   | 0.145      | -            | -                | -                | -         |    -1.93 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|            6 |     3819 | 2024-02-16 | 3DMAX             | W   | 0.140      | -            | -                | -                | 1 (0.140) |     3.27 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|            5 |     3855 | 2024-02-15 | KOI               | L   | 0.131      | -            | -                | -                | -         |    -1.65 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|            4 |     3886 | 2024-02-14 | SAW               | W   | 0.126      | -            | -                | -                | 1 (0.126) |     2.76 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|            3 |     3898 | 2024-02-14 | FaZe              | L   | 0.125      | -            | -                | -                | -         |    -0.06 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|            2 |     4151 | 2024-01-30 | Nemiga            | L   | 0.026      | -            | -                | -                | -         |    -0.24 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|            1 |     4170 | 2024-01-28 | Rebels            | W   | 0.013      | -            | -                | -                | -         |     0.20 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($29,108.53)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.11) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.900 | $5,000.00      | $4,501.90       |
| 2024-05-26 |      0.806 | $22,000.00     | $17,740.69      |
| 2024-05-12 |      0.713 | $5,000.00      | $3,567.30       |
| 2024-05-04 |      0.660 | $5,000.00      | $3,298.64       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
